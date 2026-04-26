<script setup lang="ts"></script>

<template>
  <div class="flex h-screen items-center justify-center">
    <UApp>
      <UCard variant="subtle" class="max-w-[20rem]">
        <div class="flex flex-col items-start gap-6">
          <div>
            <h1>You did it!</h1>
            <p class="text-muted mt-1 text-[12px]">
              Visit
              <a
                href="https://vuejs.org/"
                target="_blank"
                rel="noopener"
                class="text-primary underline"
                >vuejs.org</a
              >
              to read the documentation. This is supposed to be some big text!
            </p>
          </div>
          <UButton>Click me</UButton>
        </div>
      </UCard>
    </UApp>
  </div>
</template>
