/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'


import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';


export default function Home() {

	const router = useRouter()
	const [modalIsOpen, setModalIsOpen] = useState(false);
	

	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('confirmado');
	}

	function handleModalClose() {
		setModalIsOpen(false);
	}

	function renderModalContent() {
		return (
			<div data-modal-content className={styles['modal-form']}>
				Confirmado a criação do usuário: {router.query.username}
			</div>
		);
	}

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			{/* Renderizar modal de confirmação */}
			<Modal
				isOpen={modalIsOpen}
				title="Confirmado"
				onClose={handleModalClose}
				onConfirm={handleModalConfirm}
				footer={{ confirmText: 'Confirmado', cancelText: 'Fechar' }}
			>
				{renderModalContent()}
			</Modal>
		</>
	);
}
