<script setup lang="ts">
import Header from "@/components/Header/ui/Header.vue";
import {ModalsContainer} from "vue-final-modal";
</script>

<template>
  <Header />
  <main class="mb-[20px]">
    <RouterView />
  </main>
  <ModalsContainer />
</template>