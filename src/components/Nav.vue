<script setup>
import { useRouter } from "vue-router";
import Authorize from "../composable/Authorize";

const { hasAuthenticated, logout } = Authorize();

const router = useRouter();

const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="bg-purple-800 text-purple-200">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="px-2 py-2 tracking-tight text-3xl font-thin">
        💎 Bonanza
        <span class="font-normal">CarWash 💎</span>
      </h1>
      <nav>
        <ul class="flex border-b">
          <router-link to="/">
            <li class="-mb-px mr-1">
              <a
                class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                >Home</a
              >
            </li>
          </router-link>

          <router-link :to="{ name: 'Options' }">
            <li class="mr-1">
              <a
                class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                href="#"
                >Wash Options</a
              >
            </li>
          </router-link>

          <router-link
            v-if="hasAuthenticated"
            :to="{ path: '/appointment', name: 'Appointment' }"
          >
            <li class="mr-1">
              <a
                class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                >Set Appointment</a
              >
            </li>
          </router-link>

          <router-link :to="{ name: 'About' }">
            <li class="mr-1">
              <a
                class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                href="#"
                >About Us</a
              >
            </li>
          </router-link>

          <router-link v-if="!hasAuthenticated" :to="{ name: 'Sign In' }">
            <li class="mr-1">
              <a
                class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                >Sign In</a
              >
            </li>
          </router-link>

          <router-link v-else :to="{ name: 'Member' }">
            <li class="mr-1">
              <a
                class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                >Memberships</a
              >
            </li>
          </router-link>

          <button v-if="hasAuthenticated" @click="loggingOut">
            <li
              class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            >
              Logout
            </li>
          </button>
        </ul>
      </nav>
    </div>
  </div>
</template>
