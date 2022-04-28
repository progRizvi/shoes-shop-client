import axios from "axios";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import FirebaseInitialize from "../Firebase/Firebase.init";
FirebaseInitialize();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [successMessage, setSuccessMessage] = useState("");
	const [error, setError] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const history = useHistory();

	const auth = getAuth();
	const registerWithEmail = (email, password, name) => {
		createUserWithEmailAndPassword(auth, email, password, name)
			.then((userCredential) => {
				updateProfile(auth.currentUser, {
					displayName: name
				})
					.then(() => {
						handleUser(email, name);
					})
					.catch((error) => {});
				setSuccessMessage("Register Successfully");
				logOut();
				history.replace("/login");
			})
			.catch((error) => {
				if (error.code === "auth/email-already-in-use") {
					setError("Email Already have an account, Please signin");
					setTimeout(() => {
						history.replace("/login");
					}, 2000);
				}
				setSuccessMessage("");
			})
			.finally(() => setIsLoading(false));
	};
	const LoginWithEmail = (email, password, redirectUrl) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setError("");
				setSuccessMessage("Login Successfully");
				setTimeout(() => {
					history.replace(redirectUrl);
				}, 1500);
			})
			.catch((error) => {
				setError(error.code);
				if (error.code === "auth/wrong-password") {
					setError("Your Password is Worng.");
				}
				if (error.code === "auth/user-not-found") {
					setError("Your Email is wrong.");
				}
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return unsubscribe;
	}, [auth]);
	useEffect(() => {
		axios
			.get(`https://shoesshop-server.herokuapp.com/user/?email=${user.email}`)
			.then((result) => {
				setIsAdmin(result.data.isAdmin);
				setUserInfo(result.data.result);
			})
			.finally(() => setIsLoading(false));
	}, [user.email]);

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
				setError("");
				setSuccessMessage("");
			})
			.catch((error) => {})
			.finally(() => setIsLoading(false));
	};

	const handleUser = (userEmail, userName) => {
		const url = "https://shoesshop-server.herokuapp.com/users";
		const role = "user";
		const userInfo = { userEmail, userName, role };
		axios.post(url, userInfo).then((result) => {});
	};
	return {
		registerWithEmail,
		logOut,
		user,
		isLoading,
		successMessage,
		error,
		LoginWithEmail,
		isAdmin,
		userInfo
	};
};
export default useFirebase;
