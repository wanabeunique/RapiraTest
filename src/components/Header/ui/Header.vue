<script setup lang="ts">
import {ref} from 'vue';
import {useRoute} from 'vue-router';
import Close from '@/components/SVG/ui/close.vue';
import Burger from "@/components/SVG/ui/burger.vue";

interface IRoute {
  path: string;
  name: string;
}

const routes: IRoute[] = [
  {path: '/somePage', name: 'Главная'},
  {path: '/', name: 'Блог'},
];

const isMenuOpen = ref(false);
const currentRoute = useRoute();

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-foreground w-full">
    <div class="container gap-[15px] sm:gap-[80px] flex w-full place-items-center p-4">
      <button @click="toggleMenu" class="lg:hidden text-white p-0 bg-foreground">
        <burger/>
      </button>
      <img src="@/assets/logo.svg" alt="Logoipsum" class="flex-shrink-0">
      <nav
          :class="{'hidden': !isMenuOpen, 'lg:flex': true, 'fixed inset-0 flex flex-col items-center justify-center bg-foreground': isMenuOpen}">
        <button v-if="isMenuOpen" @click="toggleMenu" class="absolute top-4 right-4 text-white">
          <Close/>
        </button>
        <ul class="flex lg:flex-row flex-col place-items-center gap-[20px]">
          <li v-for="route in routes" :key="route.path" class="h-8 flex place-items-center justify-center">
            <router-link :to="route.path"
                         class="py-[8px] px-[14px] rounded-[6px]"
                         :class="{'text-primary': currentRoute.path === route.path, 'text-white': currentRoute.path !== route.path, 'bg-background': currentRoute.path == route.path, 'bg-opacity-10': currentRoute.path == route.path}"
                         @click="closeMenu">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>