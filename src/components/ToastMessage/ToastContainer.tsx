import { ToastContext } from "@/contexts/ToastContext";
import { useContext } from "react";
import { ToastMessage } from ".";
import styles from '@/styles/context-api.module.css';

export function ToastContainer() {
	const { messages, setMessages, dispatchNewMessage } = useContext(ToastContext);

	function handleSuccessButtonClick() {
		dispatchNewMessage({ message: "Mensagem de sucesso.", type: 'success' });
	}

	function handleErrorButtonClick() {
		dispatchNewMessage({ message: "Mensagem de erro.", type: 'error' });
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
				{messages.map((message: any) => (
					<ToastMessage key={message.id} content={message} />
				))}
			</div>
		</>

	);
}