export interface IUser {
	id: string | number;
	name: string;
	email: string;
}

export type IUserCreate = {
	name: string;
	email: string;
};
