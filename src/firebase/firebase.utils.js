import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyCHLsF4zuCvlwMbXt2YGW3i65BvFn5hzxI',
	authDomain: 'med-express-e8788.firebaseapp.com',
	databaseURL: 'https://med-express-e8788.firebaseio.com',
	projectId: 'med-express-e8788',
	storageBucket: 'med-express-e8788.appspot.com',
	messagingSenderId: '948492746016',
	appId: '1:948492746016:web:18ccb231cdee1a4b7d2b45'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
