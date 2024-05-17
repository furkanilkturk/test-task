import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyCxRnDke6qkTY7VbNzwM3PuYkJHCXOeCZM',
	authDomain: 'test-task-auth-45afe.firebaseapp.com',
	projectId: 'test-task-auth-45afe',
	storageBucket: 'test-task-auth-45afe.appspot.com',
	messagingSenderId: '427846659124',
	appId: '1:427846659124:web:50b3dadb30e50abd692e61',
	measurementId: 'G-C5EPESBMCS'
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
