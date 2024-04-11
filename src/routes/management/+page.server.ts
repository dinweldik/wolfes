/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const attendes = await locals.pb.collection('woelfes').getFullList({
		sort: '-created',
		expand: 'selectedCamps'
	});

	return {
		attendes
	};
}
