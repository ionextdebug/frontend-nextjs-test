/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { useEffect, useState } from 'react';

import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';


export async function getStaticProps() {
	const response = await fetch(process.env.URL + '/api/cities/2');
	const cities = await response.json();

	if (!response.ok) throw new Error('Erro ao obter os dados');
   
	return {
	  props: {
		cities,
	  },
	  // Next.js will attempt to re-generate the page:
	  // - When a request comes in
	  // - At most once every 10 seconds
	  revalidate: 60, // In seconds
	}
  }


  export default function Lista({cities}:{cities:any}) {
	

	

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de cidades</h2>

				<div data-list-container>
					{cities.map((city:any) => (
						<div data-list-item key={city.id}>
							{city.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}



