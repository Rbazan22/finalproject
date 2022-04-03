<script setup>
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

import Authorize from "../composable/Authorize";
import utilizeError from "../composable/utilizeError";
import { useTimeout, promiseTimeout } from "@vueuse/core";

const schema = yup.object({
  username: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});

useForm({
  validationSchema: schema,
});

const { value: username, errorMessage: emailError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");

const { hasAuthenticated, login, signup, googleLogin } = Authorize();

const router = useRouter();

const loggingIn = async () => {
  await login(username.value, password.value);
  goToHome();
};
const signingUp = async () => {
  await signup(username.value, password.value);
  goToHome();
};

const google = async () => {
  await googleLogin();
  goToHome();
};

//needed to push back to home page or display error if sign in is incorrect.
const goToHome = () => {
  if (hasAuthenticated.value) {
    router.push("/");
  } else {
    setError("Invalid username or password");
    start();
  }
};

const { error, setError } = utilizeError();
const { ready, start } = useTimeout(3000, { controls: true });
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen-nonav">
    <div
      class="flex items-center justify-center bg-gray-200 px-2 overflow-hidden rounded-lg shadow-2xl"
    >
      <img class="h-64 py-2" src="../assets/login.png" alt="Login Picture" />
      <form @submit.prevent="loggingIn" class="flex flex-col p-4 space-y-4">
        <input
          name="username"
          type="text"
          class="p-2 border-2 rounded-lg"
          placeholder="Enter Email"
          v-model="username"
        />
        <span class="text-xs text-center text-red-500">{{ emailError }}</span>
        <input
          name="password"
          type="password"
          class="p-2 border-2 rounded-lg"
          placeholder="Enter Password"
          v-model="password"
        />
        <span class="text-xs text-center text-red-500">{{
          passwordError
        }}</span>

        <div class="flex space-x-2">
          <button
            type="submit"
            @submit.prevent="loggingIn"
            class="w-1/2 py-2 text-green-200 bg-green-600 rounded-lg hover:bg-green-700"
          >
            Sign In
          </button>

          <button
            @click="signingUp"
            class="w-1/2 py-2 text-purple-200 bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            Sign Up
          </button>
        </div>
        <button
          @click="google"
          class="flex justify-center py-2 bg-white rounded-lg hover:bg-gray-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
          />
        </button>
      </form>
    </div>
    <div
      v-if="!ready && error"
      class="absolute w=1/3 p-4 bg-red-300 text-center rounded-lg text-red-800 bottom-2 right-2"
    >
      {{ error }}
    </div>
  </div>
</template>
