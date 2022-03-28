<script setup></script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen-nonav">
    <img src="../assets/appointment.png" alt="Appointment BG" class="w-72" />
    <h2 class="text-6xl py-4 tracking-tighter font-extralight">
      Appointment Page
    </h2>
    <p class="py-4">
      To set an Appointment with our exquisite car wash service, simply fill out
      the field boxes below:
    </p>
    <ul>
      <li class="py-2">
        <h1 class="text-center text-lg">Required:</h1>
        <input
          type="text"
          class="bg-gray-200 px-8 text-center rounded-lg"
          placeholder=" First Name"
        />
        <input
          type="text"
          class="bg-gray-200 px-8 text-center rounded-lg"
          placeholder=" Last Name"
        />
      </li>
      <li class="py-2">
        <input
          type="number"
          class="bg-gray-200 px-8 text-center rounded-md"
          placeholder=" Phone #"
        />
      </li>
      <li class="py-2">
        <input
          type="email"
          class="bg-gray-200 px-8 text-center rounded-md"
          placeholder=" Email"
        />
      </li>
      <li class="py-2">
        <input
          class="bg-gray-200 px-8 text-center rounded-md"
          placeholder=" Username"
        />
      </li>
    </ul>
    <ul class="py-2">
      <li class="py-2">
        <h1 class="text-center text-lg">Optional:</h1>
        <input
          class="bg-gray-200 px-8 text-center rounded-lg"
          placeholder=" Address"
        />
      </li>
      <li class="py-2">
        <input
          class="bg-gray-200 px-8 text-center rounded-lg"
          placeholder=" Country/Region"
        />
      </li>
      <li class="py-2">
        <input
          class="bg-gray-200 px-8 text-center rounded-md"
          placeholder=" Secondary Phone #"
        />
      </li>
      <li class="py-2">
        <input
          class="bg-gray-200 px-8 text-center rounded-md"
          placeholder=" Secondary Email"
        />
      </li>
      <li class="py-2">
        <input
          class="bg-gray-200 px-8 text-center rounded-md"
          placeholder=" User"
        />
      </li>
    </ul>
    <h1 class="text-center text-lg">Available Times of Appointment:</h1>
    <ul class="flex px-4 p-2">
      <li class="p-2">
        <button
          class="bg-gray-200 px-8 hover:bg-gray-400 text-center rounded-md"
        >
          2:00 PM
        </button>
      </li>
      <li class="p-2">
        <button
          class="bg-gray-200 px-8 hover:bg-gray-400 text-center rounded-md"
        >
          4:00 PM
        </button>
      </li>
      <li class="p-2">
        <button
          class="bg-gray-200 px-8 hover:bg-gray-400 text-center rounded-md"
        >
          6:00 PM
        </button>
      </li>
    </ul>
    <button class="bg-green-400 p-2 px-6 hover:bg-green-600 rounded-lg">
      Submit
    </button>
  </div>
</template>
