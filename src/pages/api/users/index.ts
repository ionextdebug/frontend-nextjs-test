/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser } from '@/types/user.d';

import { prisma } from '@/lib/prisma';

async function findMany(filter?:{}){
	try{
		return await prisma.user.findMany(filter);
	}catch(err){
		return [];
	}
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const users: Array<IUser> = await findMany();

	return res.status(200).json(users);
};
