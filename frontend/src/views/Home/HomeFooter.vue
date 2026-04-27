<script setup lang="ts">
import ExternalLink from "@/components/ExternalLink.vue";
</script>

<template>
  <UFooter class="text-sm text-[8.5px]" :ui="{ container: 'py-4 lg:py-2.5' }">
    <div class="flex items-center justify-center gap-1.5">
      <div>
        <span
          >Built by
          <ExternalLink text="lucasshiva" url="https://github.com/lucasshiva" />
        </span>
      </div>

      <div class="text-[12px]">•</div>

      <div class="flex items-center justify-center gap-0.5">
        <UIcon name="i-lucide-github" />
        <ExternalLink text="View source" url="https://github.com/lucasshiva/wordlink" />
      </div>
    </div>
  </UFooter>
</template>
