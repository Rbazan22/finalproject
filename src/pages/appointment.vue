<script setup>
import useTime from "../composable/setTime";
import useMessage from "../composable/useMessage";
import router from "../router";

const { time, setTime } = useTime();
const { message, setMessage } = useMessage();

const goToHome = () => {
  router.push("/");
};

if (useTime) {
  setTime(time.value);
  if (time) {
    setMessage("That time is available!");
  }
}

const submitClick = async () => {
  goToHome();
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen-nonav">
    <img
      src="../assets/appointment.png"
      alt="Appointment BG"
      class="w-72 m-4"
    />
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
    <h1 class="text-center text-lg">Appoint Time and Check Availability:</h1>
    <ul class="p-2">
      <li class="text-center p-2">
        <input
          type="time"
          v-model="time"
          class="bg-gray-200 px-8 hover:bg-gray-400 text-center rounded-md"
        />
      </li>
      <li class="text-center">
        <div
          v-if="time"
          class="w=1/3 p-4 bg-green-300 text-center rounded-lg text-green-800 bottom-2 right-2"
        >
          {{ message }}
        </div>
        <div
          v-else
          class="w=1/3 p-4 bg-red-300 text-center rounded-lg text-red-800 bottom-2 right-2"
        >
          Hmm, that time doesn't seem right... Try adding a time.
        </div>
        <form @submit.prevent="submitClick">
          <button
            v-if="time"
            type="submit"
            @submit.prevent="submitClick"
            class="hover:bg-green-500 text-center w=1/3 p-4 bg-green-300 rounded-lg text-green-800 bottom-2 right-2 m-2"
          >
            Submit
          </button>
        </form>
      </li>
    </ul>
  </div>
</template>
