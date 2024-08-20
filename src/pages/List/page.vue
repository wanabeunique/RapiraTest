<script setup lang="ts">
import Cards from "@/widjets/Cards/ui/Cards.vue";
import Filter from "@/widjets/Filter/ui/Filter.vue";
import {ref} from "vue";
import {getAllTags} from "@/utils/getAllTags.ts";

const searchString = ref("");
const tags = getAllTags();
const selectedTags = ref([]);
const changeSearchString = (val: string) => {
  searchString.value = val;
}
const changeSelectedTags = (val: []) => {
  selectedTags.value = val;
}

</script>

<template>
  <Filter @searchString="changeSearchString" @selectedTags="changeSelectedTags" :allTags="tags"/>
  <Cards :searchString="searchString" :tags="selectedTags"/>
</template>