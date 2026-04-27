<script setup lang="ts">
const props = defineProps<{
  text: string;
  url: string;
}>();
</script>

<template>
  <a
    :href="props.url"
    target="_blank"
    rel="noopener noreferrer"
    class="text-primary underline hover:text-primary-200 cursor-pointer"
  >
    {{ props.text }}
  </a>
</template>
