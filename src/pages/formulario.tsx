/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import { useForm, SubmitHandler } from "react-hook-form"

import styles from '@/styles/formulario.module.css';


type Inputs = {
	nome: string
	email: string
  }


export default function Form() {

	const {
			register,
			handleSubmit,
			watch,
			formState: { errors },
		} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	console.log(watch("nome"));

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* register your input into the hook by invoking the "register" function */}
					<input placeholder="Nome" {...register("nome", { required: true })} />
					{errors.nome && <span>Este campo é obrigatório.</span>}

					{/* include validation with required or other standard HTML validation rules */}
					<input placeholder="E-mail" {...register("email", { required: true })} />
					{/* errors will return when field validation fails  */}
					{errors.email && <span>Este campo é obrigatório.</span>}


					<button type="submit" data-type="confirm">
						Enviar
					</button>
					
				</form>
			</div>
		</div>
	);
}
