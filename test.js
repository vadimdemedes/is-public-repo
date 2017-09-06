import test from 'ava';
import isPublicRepo from '.';

test('public', async t => {
	const isPublic = await isPublicRepo('vadimdemedes/ink');

	t.true(isPublic);
});

test('private', async t => {
	const isPublic = await isPublicRepo('vadimdemedes/ava-next');

	t.false(isPublic);
});
