<script setup></script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen-nonav">
    <div
      class="flex items-center justify-center bg-gray-200 px-2 overflow-hidden rounded-lg shadow-2xl"
    >
      <img class="h-64 py-2" src="../assets/login.png" alt="Login Picture" />
      <form class="flex flex-col p-4 space-y-4">
        <input
          name="username"
          type="text"
          class="p-2 border-2 rounded-lg"
          placeholder="Enter Email"
          v-model="username"
        />

        <input
          name="password"
          type="password"
          class="p-2 border-2 rounded-lg"
          placeholder="Enter Password"
          v-model="password"
        />

        <div class="flex space-x-2">
          <button
            type="submit"
            class="w-1/2 py-2 text-green-200 bg-green-600 rounded-lg hover:bg-green-700"
          >
            Sign In
          </button>

          <button
            class="w-1/2 py-2 text-purple-200 bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            Sign Up
          </button>
        </div>
        <button
          class="flex justify-center py-2 bg-white rounded-lg hover:bg-gray-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
          />
        </button>
      </form>
    </div>
  </div>
</template>
