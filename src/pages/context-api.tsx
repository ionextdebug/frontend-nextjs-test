/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { IToastMessage } from '@/types/toast-message';
import { ToastMessage } from '@/components/ToastMessage';
import React, { createContext, useContext, useState } from 'react';



//Context
export const ToastContext = createContext<any>([]);

//ContextProvider
function ToastContextProvider({children}:{children:React.ReactNode}){

	const [messages, setMessages] = useState<Array<IToastMessage>>([
		
	]);

	const dispatchNewMessage = (data:IToastMessage)=>{
		const newMessage = {id: (messages.length+1).toString(), ...data}
		setMessages([...messages, newMessage]);
	}

	const dispatchDeleteMessage = (id: string)=>{
		const newMessages = messages.filter((message:any)=>{
			return message.id != id;
		})
		setMessages(newMessages);
	}

	return (
		<ToastContext.Provider value={{messages, setMessages, dispatchNewMessage, dispatchDeleteMessage}}>
			{children}
		</ToastContext.Provider>
	);

}

function ToastContainer(){
	const {messages, setMessages, dispatchNewMessage} = useContext(ToastContext);

	function handleSuccessButtonClick() {
		dispatchNewMessage({message: "Mensagem de sucesso.", type: 'success'});
	}

	function handleErrorButtonClick() {
		dispatchNewMessage({message: "Mensagem de erro.", type: 'error' });
	}
	return (
		<>
		<div className={styles.container}>
				<button type="button" onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>
			<div className={styles['toast-container']}>
				{messages.map((message:any) => (
					<ToastMessage key={message.id} content={message} />
				))}
			</div>
			</>
		
	);
}

export default function ContextApi() {
		

	return (
		<>
			
		<ToastContextProvider>
		
			<ToastContainer />
		</ToastContextProvider>
		</>
	);
}
