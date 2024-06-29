/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser, IUserCreate } from '@/types/user.d';


import { prisma } from '@/lib/prisma';

async function create(user: IUserCreate){
	try{
		
		return await prisma.user.create({data: user});
	}catch(err){
		return [];
	}
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	

	if (req.method == 'POST') {


		const newUser : Array<IUser> | IUser = await create(req.body);


		//const r = newUser.then(async (data)=>await data.json()).catch()

		console.log("r",newUser)

		return res.status(200).json({message: "valid METHOD.", newUser});
		
	  } else {
		return res.status(404).json({message: "Invalid METHOD."});
	  }


};
