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

async function create(data: IUserCreate){
	try{
		
		return await prisma.user.create({data});
	}catch(err){
		return false;
	}
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	

	if (req.method == 'POST') {

		
		const newUser : IUser | false = await create(JSON.parse(req.body));
		console.log(newUser)

		if(newUser){
			return res.status(201).json({success: 1, data: {...newUser}});
		}else{
			return res.status(200).json({success: 0});
		}
		
	  } else {
		return res.status(404).json({success: 0, error: "Invalid METHOD."});
	  }


};
