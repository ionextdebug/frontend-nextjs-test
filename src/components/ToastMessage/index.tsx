import { useContext, useState } from 'react';

import { IToastMessage } from '@/types/toast-message.d';

import styles from './style.module.css';
import { ToastContext } from '@/pages/context-api';

type ToastMessageProps = {
	content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ content: data }) => {
	const {messages, setMessages, dispatchDeleteMessage} = useContext(ToastContext);

	const handleClickX = (id:string | undefined)=>{
		if(id){
			dispatchDeleteMessage(id)
		}
	}

	return (
		<div className={styles.container} data-toast-type={data.type} data-toast-id={data.id}>
			<span data-content>{data.message}</span>

			<span data-close onClick={()=>handleClickX(data.id)}>╳</span>
		</div>
	);
};
