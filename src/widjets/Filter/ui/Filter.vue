<script setup lang="ts">
import {defineEmits, ref, watch} from 'vue';
import Input from "@/components/Input/ui/Input.vue";
import FilterButtons from "@/components/Filter/Buttons/ui/FilterButtons.vue";
import FilterTags from "@/widjets/Filter/Tags/ui/FilterTags.vue";

const props = defineProps<{
  allTags: string[]
}>()

const emit = defineEmits(['searchString', 'tags', 'selectedTags', 'changeSelectedTags']);

const showFilterTags = ref<boolean>(false);
const inputVal = ref<string>("");
const selectedTags = ref<string[]>([]);

watch(inputVal, (newValue) => {
  emit('searchString', newValue);
})

watch(selectedTags, (newValue) => {
  emit('selectedTags', newValue);
})

const changeInputVal = (val: string) => {
  inputVal.value = val;
}

const toggleFilterTags = () => {
  showFilterTags.value = !showFilterTags.value;
}

const changeSelectedTags = (val: []) => {
  selectedTags.value = val;
}

</script>

<template>
  <div class="bg-background ">
    <div class="sm:flex sm:justify-center sm:gap-[40px] sm:p-[20px] py-[12px] px-[10px] gap-[10px] grid grid-cols-3 container w-full text-foreground ">
      <h1 class="text-[#181C32] sm:text-[32px] text-[24px] font-bold">Блог</h1>
      <Input @value="changeInputVal" class="col-span-3"/>
      <FilterButtons class="row-end-1 col-start-2 col-end-4" @toggleFilterTags="toggleFilterTags" @selectedTags="changeSelectedTags"
                     :isFilterOpen="showFilterTags"/>
    </div>
    <div v-if="showFilterTags" class="container sm:p-[20px] py-[12px] px-[10px]">
      <FilterTags :tags="props.allTags" @selectedTags="changeSelectedTags"
                  :selected-tags="selectedTags"/>
    </div>
  </div>
</template>