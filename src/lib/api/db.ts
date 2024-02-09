import * as dotenv from 'dotenv';
dotenv.config();
import PocketBase from 'pocketbase';
const client = new PocketBase(process.env.POCKETBASE_URL);
const adminLogin = async () => {
	return await client.admins.authWithPassword(
		process.env.POCKETBASE_ADMIN_USERNAME ?? 'check your .env file',
		process.env.POCKETBASE_ADMIN_PASSWORD ?? 'check your .env file'
	);
}; // TODO refactor db auth

export const getCamps = async () => {
	await adminLogin();
	return await client.collection('camps').getFullList(8 /* batch size */, {
		filter: 'from > @now'
	});
};

export const createAnmeldung = async (data) => {
	await adminLogin();
	return await client.collection('woelfes').create(data);
};

export const getAnmeldungById = async (id) => {
	await adminLogin();
	return await client.collection('woelfes').getOne(id);
};

export const listAuthMethods = async () => {
	return await client.collection('users').listAuthMethods();
};
