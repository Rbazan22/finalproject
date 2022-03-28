<script setup></script>

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
      Below you are give the option to choose from our 3 amazing memberships:
    </p>

    <ul class="py-8 bg-blue-300">
      <li class="flex">
        <button
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
    </ul>
  </div>
</template>
