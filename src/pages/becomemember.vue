<script setup>
import useTime from "../composable/setTime";
import useMessage from "../composable/useMessage";
import router from "../router";

import { onUnmounted, ref } from "vue";
import welcomeMessage from "../composable/Message";
import useAuth from "../composable/Authorize";

import { useTimeout, promiseTimeout } from "@vueuse/core";

const { time, setTime } = useTime();
const { message, setMessage } = useMessage();

const goToHome = () => {
  promiseTimeout(5000).then(() => {
    router.push("/");
  });
};

const { ready, start } = useTimeout(5000, { controls: true });

const memberClick = async () => {
  if (useTime) {
    setTime(time.value);

    if (time) {
      setMessage("Excellent Choice! Redirecting back to Homepage in 5 seconds");
      start();
    }
  }
};

const { messages, unsubscribe, sendMessage } = welcomeMessage();
const { user } = useAuth();

const newMessage = ref("Welcome to the wash family!");

const send = () => {
  sendMessage(newMessage.value);

  if (send) {
    goToHome();
  }
};

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen-nonav">
    <h2 class="text-6xl py-4 tracking-tighter font-extralight">
      Membership Benefits
    </h2>
    <img
      src="../assets/benefits.jpg"
      alt="Membership BG"
      class="max-w-screen-sm"
    />
    <p class="m-4">
      Below you are given the option to choose from our 3 amazing memberships:
    </p>

    <div class="py-8">
      <div>
        <p
          v-if="!ready && memberClick"
          class="w=1/3 p-4 bg-green-300 text-center rounded-lg text-green-800 bottom-2 right-2"
        >
          {{ message }}
        </p>
        <p
          v-else
          class="w=1/3 p-4 bg-blue-400 text-center rounded-lg text-blue-800 bottom-2 right-2"
        >
          Select an option
        </p>
      </div>
    </div>

    <ul class="py-8 bg-blue-300">
      <form @submit.prevent="memberClick">
        <li class="flex">
          <button
            type="submit"
            @submit.prevent="memberClick"
            @click="send"
            class="px-14 py-14 mx-4 bg-blue-500 hover:bg-blue-700 rounded-lg overflow-hidden"
          >
            <ul>
              <li>
                <h1>$10/month</h1>
              </li>
              <li>Membership 1:</li>
              <li>~Free Wash/5 visits~</li>
              <li>~Members Only Fast Lane~</li>
            </ul>
          </button>

          <button
            type="submit"
            @submit.prevent="memberClick"
            @click="send"
            class="px-14 py-14 mx-4 bg-blue-500 hover:bg-blue-700 rounded-lg overflow-hidden"
          >
            <ul>
              <li>
                <h1>$15/month</h1>
              </li>
              <li>Membership 2:</li>
              <li>~Free Wash/3 visits~</li>
              <li>~Members Only Fast Lane~</li>
              <li>~50% off Vacuuming Service~</li>
              <li>~15% Discount on Detailing Service~</li>
            </ul>
          </button>

          <button
            type="submit"
            @submit.prevent="memberClick"
            @click="send"
            class="px-14 py-14 mx-4 bg-blue-500 hover:bg-blue-700 rounded-lg overflow-hidden"
          >
            <ul>
              <li>
                <h1>$25/month</h1>
              </li>
              <li>Membership 3:</li>
              <li>~Free Wash and Detailing every other visit~</li>
              <li>~VIP Lane~</li>
              <li>~Free Vacuuming Service~</li>
              <li>~50% off Detailing Service~</li>
            </ul>
          </button>
        </li>
      </form>
    </ul>
  </div>

  <div
    class="min-h w-full mt-8 rounded-lg shadow-2xl flex flex-col justify-between bg-gray-100"
  >
    <ul class="p-4 space-y-4">
      <li v-for="message in messages" :key="message.id">
        <div
          class="flex justify-between px-4 py-2 rounded-lg"
          :class="user === message.author ? 'bg-blue-300' : 'bg-gray-300'"
        >
          <span>{{ message.text }}</span
          ><span>Registered: {{ message.author }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
