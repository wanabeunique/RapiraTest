<script setup lang="ts">
import FilterTag from "@/components/Filter/Tag/ui/FilterTag.vue";

const props = defineProps<{
  selectedTags: string[]
  tags: string[]
}>()

const emit = defineEmits(['selectedTags'])

function toggleTag(tag: string) {
  if (props.selectedTags.includes(tag)) {
    emit('selectedTags', props.selectedTags.filter((item) => item !== tag))
  } else {
    emit('selectedTags', [...props.selectedTags, tag])
  }
}

function tagSelected(tag: string) {
  return props.selectedTags.includes(tag)
}
</script>

<template>
  <div class="flex flex-wrap place-items-center gap-[8px]">
    <FilterTag v-for="tag in props.tags" :name="tag" @click="toggleTag(tag)" :checked="tagSelected(tag)"/>
  </div>

</template>