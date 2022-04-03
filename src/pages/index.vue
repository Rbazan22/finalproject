<script setup>
import Authorize from "../composable/Authorize";
const { hasAuthenticated, user } = Authorize();
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen-nonav">
    <img src="../assets/welcome.jpg" alt="Welcoming Photo" />

    <h2 class="text-6xl tracking-tighter font-extralight">
      Premium Wash and Detailing since 2005!
    </h2>

    <p v-if="user" class="text-4xl tracking-tighter font-extralight py-4">
      Welcome
      <span class="text-blue-500">{{ user }}</span
      >! Enjoy your stay
    </p>

    <p class="py-4">
      You'll be delighted to have chosen us,
      <span class="text-blue-500">we guarantee it!</span>
    </p>
    <p>
      Below are the main from the vast array of wash and detail options we
      provide:
    </p>
    <ul class="py-4">
      <h1 class="text-center text-lg">Wash Options:</h1>
      <li>$10 - Splendid Wash</li>
      <li>$20 - Extraordinary Wash + Foam</li>
      <li>$30 - Top of the Line Wash + Foam</li>
    </ul>

    <ul class="py-4">
      <h1 class="text-center text-lg">Detail Options:</h1>
      <li>$5 - Nice Detailing</li>
      <li>$10 - Incredible Detailing + Tire Shine</li>
      <li>$15 - Top of the Line Detailing + Polish + Tire Shine</li>
    </ul>

    <div v-if="user">
      <ul class="py-4">
        <h1 class="text-center text-lg">Members-Only Options:</h1>
        <li>$25 - Fantastic Wash + Foam + Tire Shine</li>
        <li>$30 - Incredible Wash + Foam + Tire Shine + Vacuum + Hand Dry</li>
        <li>
          $35 (truck) / $25 (car) - Top of the Line Package (Everything
          included)
        </li>
      </ul>
    </div>

    <h2 class="text-6xl tracking-tighter font-extralight py-4">
      Where to locate us
    </h2>
    <p>You can find us here: 521 Magical Rd.</p>

    <h2
      class="py-4 text-6xl tracking-tighter font-extralight text-center text-blue-800"
    >
      Contact Us
    </h2>
    <ul class="px-4 py-2">
      <ul class="flex">
        <li>Customer Support:</li>
        <li
          class="px-2 text-blue-800 text-decoration-line: underline hover:text-blue-500"
        >
          +1 592-444-4444
        </li>
      </ul>
      <ul class="flex">
        <li>Corp. Email:</li>
        <li
          class="px-2 text-blue-800 text-decoration-line: underline hover:text-blue-500"
        >
          bonanzacarwash@corporate-gmail.com
        </li>
      </ul>
      <ul class="flex">
        <li>HQ Phone:</li>
        <li
          class="px-2 text-blue-800 text-decoration-line: underline hover:text-blue-500"
        >
          592-888-8888
        </li>
      </ul>
    </ul>
  </div>
</template>
