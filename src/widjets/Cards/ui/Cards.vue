<script setup lang="ts">
import Card from "@/widjets/Card/ui/Card.vue";
import {cardData} from "@/widjets/Cards/models/Cards.data.ts";
import {computed} from "vue";
import FilesFolders from "@/components/SVG/ui/files-folders.vue";

const props = defineProps<{
  searchString: string,
  tags: string[],
}>();

const filteredCards = computed(() => {
  return cardData.filter(card => {
    const isSearchString = card.title.toLowerCase().includes(props.searchString.toLowerCase());
    const isTags = props.tags.length === 0 || props.tags.every(tag => card.tags.includes(tag));
    return isSearchString && isTags;
  });
});

</script>

<template>
  <div class="container">
    <section class="bg-background rounded mt-[15px] sm:mt-[30px] p-[15px] sm:p-[30px] flex justify-center w-full">
      <div v-if="filteredCards.length > 0">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-x-[20px] sm:gap-y-[40px] w-full ">
          <Card v-for="card in filteredCards" :key="card.id" :image="card.image" :date="card.date"
                :comments="card.comments"
                :title="card.title" :description="card.description" :tags="card.tags" :readingTime="card.readingTime"/>
        </div>
      </div>
      <div v-else class="justify-self-center flex flex-col place-items-center justify-center max-w-[290px] my-[85px]">
        <FilesFolders/>
        <p class="mt-[8px] text-gray-600 text-sm text-center">Поиск не дал результатов</p>
        <p class="mt-[4px] text-gray-500 text-xs text-center">Повторите поиск или используйте фильтр для структуризации
          контента</p>
      </div>
    </section>
  </div>

</template>