/* import { error } from '@sveltejs/kit';
import { getAnmeldungById } from '$lib/api/db'; // Assuming you have a function to fetch a record by ID

export async function load({ url, locals }) {
	const recordId = url.searchParams.get('id');
	if (!recordId) {
		throw error(400, 'Record ID is required');
	}

	const record = await getAnmeldungById(recordId); // Fetch the record using the provided ID
	delete record.id;
    delete record.collectionId;
    delete record.collectionName;
    delete record.created;
	if (!record) {
		throw error(404, 'Record not found');
	}

	return {
		record
	};
}
 */
