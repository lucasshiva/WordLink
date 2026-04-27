<script setup lang="ts">
import { h } from "vue";

import ExternalLink from "@/components/ExternalLink.vue";

import HomeCard from "./HomeCard.vue";

const WordleLink = () =>
  h(ExternalLink, { text: "Wordle", url: "https://www.nytimes.com/games/wordle/index.html" });

const TermoLink = () => h(ExternalLink, { text: "Termo", url: "https://term.ooo/" });
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center gap-12">
    <!-- Text -->
    <div class="flex flex-col items-center justify-center gap-1">
      <p class="mb-1 text-2xl sm:text-3xl md:text-4xl font-bold">
        <span class="text-success">W</span>ord<span class="text-warning">L</span>ink
      </p>
      <div class="text-center text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm">
        <p>A real-time, competitive word-guessing game with multiplayer features.</p>
        <p>Inspired by <WordleLink /> and <TermoLink />.</p>
      </div>
    </div>

    <!-- Cards -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
      <HomeCard
        title="Play Alone"
        description="Classic Wordle experience. Play unlimited random words at your own pace."
        button-text="Play"
        icon="i-lucide-user"
        color="blue"
      />
      <HomeCard
        title="Join Room"
        description="Play with friends in real time. Compete to see who can guess the secret word first."
        button-text="Join"
        icon="i-lucide-users"
        color="green"
      />
      <HomeCard
        title="Create Room"
        description="Create a room and invite friends. Start a multiplayer match and see who solves it first."
        button-text="Create"
        icon="i-lucide-door-open"
        color="yellow"
      />
    </div>
  </div>
</template>
