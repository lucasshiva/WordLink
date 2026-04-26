<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  buttonText: string;
  icon: string;
  color: "blue" | "green" | "yellow";
}>();

function getTextClass(color: string) {
  switch (color) {
    case "blue":
      return "text-primary";
    case "green":
      return "text-success";
    default:
      return "text-warning";
  }
}

function getButtonColor(color: string) {
  switch (color) {
    case "blue":
      return "primary";
    case "green":
      return "success";
    default:
      return "warning";
  }
}
</script>

<template>
  <div class="rounded-2xl max-w-55 min-h-50 bg-muted/50 p-3 flex flex-col justify-between gap-1">
    <UIcon :name="props.icon" size="22" :class="`${getTextClass(props.color)}`" />
    <div class="flex flex-1 flex-col">
      <p class="font-bold text-sm" :class="`${getTextClass(props.color)}`">
        {{ props.title }}
      </p>
      <p class="text-[10px] sm:text-[11px] text-white/80 font-medium mt-2">
        {{ props.description }}
      </p>
    </div>
    <UButton
      :label="props.buttonText"
      class="rounded-2xl justify-center h-6 md:h-7 text-[10px] sm:text-[11px] md:text-[12px]"
      :color="getButtonColor(props.color)"
    />
  </div>
</template>
