import data from '../data/data.json';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from './firebase';

export const auth = getAuth(firebase);

export async function registerUser(email: string, password: string) {
	const existingEmails = data.map((item) => item.email);

	if (!existingEmails.includes(email)) {
		throw new Error('You cannot register with this email.');
	}

	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		return userCredential.user;
	} catch (error) {
		if (error instanceof Error) {
			if ((error as any).code === 'auth/email-already-in-use') {
				throw new Error('Email already in use.');
			}
			throw new Error('Registration went wrong ' + error.message);
		} else {
			throw new Error('Registration went wrog : Unknown error');
		}
	}
}
