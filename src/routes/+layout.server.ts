import { serializeNonPOJOs } from '$lib/utils/utils';

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'nodejs18.x',
	region: ['arn1']
};

export const load = ({ locals }) => {
	if (locals.user) {
		return {
			user: serializeNonPOJOs(locals.user)
		};
	}
};
