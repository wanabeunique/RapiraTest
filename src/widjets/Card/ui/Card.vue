<script setup lang="ts">
import {useModal} from "vue-final-modal";
import {ICard} from "@/widjets/Card/model/ICard.ts";
import CardModal from "@/widjets/Card/ui/CardModal.vue";
import CardInfo from "@/components/Card/ui/CardInfo.vue";

const props = defineProps<ICard>();

const handleClick = () => {
  const { open } = useModal({
    component: CardModal,
    attrs: {
      ...props
    },
  })
  open();
};

</script>

<template>
  <div class="flex flex-col gap-[10px] text-foreground cursor-pointer" @click="handleClick">
    <img :src="props.image" alt="Card image" class="w-full rounded aspect-[8/5] h-auto object-cover">
    <div class="flex flex-col gap-[10px]">
      <CardInfo :date="props.date" :reading-time="props.readingTime" :comments-length="props.comments.length"/>
      <h3 class="text-2xl font-semibold">{{ props.title }}</h3>
      <p class="description-overflow text-secondary font-medium">{{ props.description }}</p>
      <ul class="flex gap-[10px]">
        <li v-for="tag in props.tags" :key="tag"
            class="text-primary-active bg-primary-light text-sm py-[6px] px-[14px] rounded-l font-medium">{{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .description-overflow{
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
</style>