import { getCamps } from '$lib/api/db';
import { serializeNonPOJOs } from '$lib/utils/utils';

export const load = async ({ locals }) => {
	const camps = await getCamps();
	return {
		camps
	};
};
