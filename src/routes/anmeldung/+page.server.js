import { createAnmeldung, getCamps } from '$lib/api/db';
import { sendTelegramMessage } from '$lib/api/telegram';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
	const preselected = url.searchParams.get('preselected');
	const camps = await getCamps();
	return {
		preselected,
		camps
	};
};

export const actions = {
	submit: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		console.log('Data:', data);

		const final = {
			...data,
			insuranceApproved: data.insuranceApproved === 'on',
			terms: data.terms === 'on'
		};
		let id;
		try {
			const response = await createAnmeldung(final);
			await sendTelegramMessage(
				`Mashallah! Neue Anmeldung für ${response.selectedCamps.length} Camp(s) :: ${response.id}`
			);
			id = response.id;
		} catch (err) {
			console.log('Error:', err);
			throw error(400, err.message);
		}
		throw redirect(303, `/anmeldung/success?id=${id}`);
	}
};
