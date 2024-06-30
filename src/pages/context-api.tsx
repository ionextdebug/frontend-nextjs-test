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
const ToastContext = createContext<any>([]);

//ContextProvider
function ToastContextProvider({children}:{children:React.ReactNode}){

	const [messages, setMessages] = useState([
		{
			id: '1',
			message: 'Mensagem de sucesso',
			type: 'success',
		},
		{
			id: '2',
			message: 'Mensagem de erro',
			type: 'error',
		},
	]);

	return (
		<ToastContext.Provider value={{messages, setMessages}}>
			{children}
		</ToastContext.Provider>
	);

}

function ToastContainer(){
	const {messages, setMessages} = useContext(ToastContext);
	return (
		<div className={styles['toast-container']}>
				{messages.map((message:any) => (
					<ToastMessage key={message.id} content={message} />
				))}
			</div>
	);
}

export default function ContextApi() {
	

	function handleSuccessButtonClick() {
		alert('Method: handleSuccessButtonClick not implemented');
	}

	function handleErrorButtonClick() {
		alert('Method: handleErrorButtonClick not implemented');
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
		<ToastContextProvider>
			<ToastContainer />
		</ToastContextProvider>
		</>
	);
}
