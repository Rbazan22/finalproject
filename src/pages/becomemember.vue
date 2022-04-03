<script setup>
import useTime from "../composable/setTime";
import useMessage from "../composable/useMessage";
import router from "../router";

import { useTimeout, promiseTimeout } from "@vueuse/core";

const { time, setTime } = useTime();
const { message, setMessage } = useMessage();

const goToHome = () => {
  router.push("/");
};

const { ready, start } = useTimeout(2000, { controls: true });

const memberClick = async () => {
  if (useTime) {
    setTime(time.value);

    if (time) {
      setMessage("Excellent Choice!");
      start();
    }
  }
};
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
      <div
        class="w=1/3 p-4 bg-green-300 text-center rounded-lg text-green-800 bottom-2 right-2"
      >
        <router-link :to="{ name: 'Index' }">
          <p v-if="!ready && memberClick">{{ message }}</p>

          <button
            v-else
            class="w=1/3 p-4 bg-blue-300 text-center rounded-lg text-blue-800 bottom-2 right-2 hover:bg-blue-500"
          >
            Redirect back to Homepage
          </button>
        </router-link>
      </div>
    </div>

    <ul class="py-8 bg-blue-300">
      <form @submit.prevent="memberClick">
        <li class="flex">
          <button
            type="submit"
            @submit.prevent="memberClick"
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
</template>
