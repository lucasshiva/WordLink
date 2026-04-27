<script setup lang="ts">
import { useRoute } from "vue-router";

import HomeFooter from "./views/Home/HomeFooter.vue";
const route = useRoute();
</script>

<template>
  <div class="flex h-screen flex-col">
    <UApp>
      <!-- Header -->
      <!-- <div></div> -->

      <main class="flex-1">
        <RouterView />
      </main>

      <!-- Footer -->
      <HomeFooter v-if="route.path === '/'" />
    </UApp>
  </div>
</template>
