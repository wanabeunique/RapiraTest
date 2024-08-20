<script setup lang="ts">
import {formatDate} from "@/utils/dateFormatter.ts";
import {getCommentLabel} from "@/utils/getCommentLabel.ts";
import Comments from "@/components/SVG/ui/comments.vue";
import Clock from "@/components/SVG/ui/clock.vue";

const props = defineProps<{
  date: string,
  commentsLength: number,
  readingTime: string
}>();
</script>

<template>
  <div class="flex place-items-center gap-[10px] text-[#7E8299]">
    <span class="font-medium text-sm">{{ formatDate(props.date) }}</span>
    <span class="w-[3px] h-[3px] rounded-full bg-[#7E8299]"></span>
    <div class="flex place-items-center gap-[4px]">
      <clock/>
      <span class="font-medium text-sm">{{ props.readingTime }}</span>
    </div>
    <span class="w-[3px] h-[3px] rounded-full bg-[#7E8299]"></span>
    <div class="flex place-items-center gap-[4px]">
      <comments/>
      <span class="font-medium text-sm">{{ getCommentLabel(props.commentsLength) }}</span>
    </div>
  </div>

</template>
