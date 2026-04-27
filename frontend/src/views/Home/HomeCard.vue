<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    buttonText: string;
    icon: string;
    accentColor: "blue" | "green" | "yellow";
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  },
);
const colorClasses = {
  text: {
    blue: "text-primary",
    green: "text-success",
    yellow: "text-warning",
  },
  button: {
    blue: "primary",
    green: "success",
    yellow: "warning",
  },
  hover: {
    border: {
      blue: "hover:border-primary",
      green: "hover:border-success",
      yellow: "hover:border-warning",
    },
  },
} as const;
</script>

<template>
  <div
    class="rounded-2xl max-w-55 min-h-50 bg-muted/50 p-3 flex flex-col justify-between gap-1 border border-muted"
    :class="[
      !props.disabled && colorClasses.hover.border[props.accentColor],
      { 'cursor-not-allowed': props.disabled },
    ]"
  >
    <UIcon :name="props.icon" size="22" :class="colorClasses.text[props.accentColor]" />
    <div class="flex flex-1 flex-col">
      <p class="font-bold text-sm" :class="colorClasses.text[props.accentColor]">
        {{ props.title }}
      </p>
      <p class="text-[10px] sm:text-[11px] text-white/80 font-medium mt-2">
        {{ props.description }}
      </p>
    </div>
    <UButton
      :disabled="props.disabled"
      :label="props.disabled ? 'Coming soon..' : buttonText"
      class="rounded-2xl justify-center h-6 md:h-7 text-[10px] sm:text-[11px] md:text-[12px]"
      :color="colorClasses.button[props.accentColor]"
    />
  </div>
</template>
