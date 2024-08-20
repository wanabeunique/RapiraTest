<script setup lang="ts">
import Plus from "@/components/SVG/ui/plus.vue";
import Check from "@/components/SVG/ui/check.vue";

const props = defineProps<{
  name: string;
  checked?: boolean
}>()
</script>

<template>
  <div :class="props.checked ? 'bg-primary text-background' : 'bg-primary-light text-primary'"
       class="flex gap-[6px] items-center rounded-[20px] py-[8px] px-[14px] cursor-pointer">
    {{ props.name }}
    <div v-if="props.checked">
      <Check/>
    </div>
    <div v-else>
      <Plus/>
    </div>
  </div>
</template>