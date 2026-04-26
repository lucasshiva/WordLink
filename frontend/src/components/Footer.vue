<template>
  <UFooter class="text-sm text-[8.5px]" :ui="{ container: 'py-4 lg:py-2.5' }">
    <div class="flex items-center justify-center gap-1.5">
      <div>
        <span
          >Built by
          <a
            href="http://github.com/lucasshiva"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary underline"
            >lucasshiva</a
          >
        </span>
      </div>

      <div class="text-[12px]">•</div>

      <div class="flex items-center justify-center gap-0.5">
        <UIcon name="i-lucide-github" />
        <a
          href="http://github.com/lucasshiva/wordlink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary underline"
          >View source</a
        >
      </div>
    </div>
  </UFooter>
</template>
