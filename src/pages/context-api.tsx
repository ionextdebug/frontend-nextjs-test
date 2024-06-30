/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */


import React from 'react';
import { ToastContextProvider } from '@/contexts/ToastContext';
import { ToastContainer } from '@/components/ToastMessage/ToastContainer';



export default function ContextApi() {
	return (
		<>
			<ToastContextProvider>
				<ToastContainer />
			</ToastContextProvider>
		</>
	);
}
