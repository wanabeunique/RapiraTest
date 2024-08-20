<script setup lang="ts">
import Search from "@/components/SVG/ui/search.vue";
import {ref, watch,} from "vue";

const emit = defineEmits(['value'])

const inputVal = ref("");

watch(inputVal, (newValue) =>{
  emit('value', newValue);
})
</script>

<template>
  <label
      class="flex gap-[10px] place-items-center max-w-[400px] w-full h-[40px] bg-gray-100 py-[13px] px-[10px] rounded-[6px]">
    <Search/>
    <input v-model="inputVal" type="text" class="bg-gray-100 w-full h-full outline-0 placeholder-gray-400 font-medium"  placeholder="Поиск"/>
  </label>
</template>