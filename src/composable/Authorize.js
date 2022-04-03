import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { firebaseAuth } from "./useFirebase";

const hasAuthenticated = ref(false);

const user = ref("");

const Authorize = () => {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(firebaseAuth, provider);
    if (credentials.user) {
      hasAuthenticated.value = true;
      user.value = credentials.user.displayName;
    }
  };

  const login = async (username, password) => {
    const credentials = await signInWithEmailAndPassword(
      firebaseAuth,
      username,
      password
    );

    if (credentials.user) {
      hasAuthenticated.value = true;
      user.value = credentials.user.email;
    }
  };

  const signup = async (username, password) => {
    const credentials = await createUserWithEmailAndPassword(
      firebaseAuth,
      username,
      password
    );

    if (credentials.user) {
      hasAuthenticated.value = true;
      user.value = credentials.user.email;
    }
  };

  const logout = async () => {
    await signOut(firebaseAuth);
    hasAuthenticated.value = false;
    user.value = "";
  };

  return { hasAuthenticated, login, signup, logout, user, googleLogin };
};

export default Authorize;
