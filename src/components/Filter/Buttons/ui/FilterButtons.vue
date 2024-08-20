<script setup lang="ts">
import {ref, watch} from 'vue';
import {defineEmits, defineProps} from 'vue';
import Arrow from "@/components/SVG/ui/arrow.vue";

const emit = defineEmits(['toggleFilterTags', 'selectedTags']);
const props = defineProps<{ isFilterOpen: boolean }>();

const isRotated = ref(props.isFilterOpen);
const isFilterVisible = ref(props.isFilterOpen);

watch(() => props.isFilterOpen, (newVal) => {
  isRotated.value = newVal;
  isFilterVisible.value = newVal;
});

const handleButtonClick = () => {
  isRotated.value = !isRotated.value;
  isFilterVisible.value = !isFilterVisible.value;
  emit('toggleFilterTags');
}

function clearFilterTags() {
  emit('selectedTags', [])
}
</script>

<template>
  <div class="flex justify-center items-center gap-2 ml-auto text-sm font-medium">
    <button @click="clearFilterTags" class="bg-background p-0 outline-0 text-primary-active">Очистить</button>
    <button @click="handleButtonClick" class="flex items-center gap-1 bg-background p-0 outline-0 text-gray-500 w-max">
      {{ isFilterVisible ? 'Скрыть фильтр' : 'Фильтр' }}
      <arrow :class="{ 'rotate-180': isRotated }" class="transition-transform duration-300"/>
    </button>
  </div>
</template>