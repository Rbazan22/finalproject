<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
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

          <router-link :to="{ path: '/appointment', name: 'Appointment' }">
            <li class="mr-1">
              <a
                class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                >Set Appointment</a
              >
            </li>
          </router-link>

          <router-link :to="{ path: '/member', name: 'Member' }">
            <li class="mr-1">
              <a
                class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                href="#"
                >Memberships</a
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

          <router-link :to="{ name: 'Sign In' }">
            <li class="mr-1">
              <a
                class="bg-purple-200 inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                href="#"
                >Sign In</a
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
        </ul>
      </nav>
    </div>
  </div>
</template>
