<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <div class="flex h-screen flex-col">
    <UApp>
      <!-- Header -->
      <!-- <div></div> -->

      <main class="flex-1 overflow-hidden">
        <RouterView />
      </main>

      <!-- Footer -->
      <Footer v-if="route.path === '/'" />
    </UApp>
  </div>
</template>
