<script setup lang="ts">
import {VueFinalModal} from 'vue-final-modal'
import {ref, computed} from 'vue';
import {ICard} from "@/widjets/Card/model/ICard.ts";
import Close from "@/components/SVG/ui/close.vue";
import CardInfo from "@/components/Card/ui/CardInfo.vue";

const props = defineProps<ICard>();
const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>();

const comment = ref('');
const maxChars = 250;

const charCount = computed(() => comment.value.length);

const isValid = computed(() => charCount.value > 0 && charCount.value <= maxChars);

const isPristine = computed(() => charCount.value === 0);

const placeholder = ref('Введите комментарий');

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  comment.value = target.value;
  if (comment.value.length > 0) {
    placeholder.value = '';
  } else {
    placeholder.value = 'Введите комментарий';
  }
};

const submitComment = () => {
  if (isValid.value) {
    // Логика отправки комментария
    alert('Комментарий отправлен: ' + comment.value);
  }
};

const cancelComment = () => {
  comment.value = '';
  placeholder.value = 'Введите комментарий';
};
</script>

<template>
  <VueFinalModal
      class="flex justify-center items-center"
      content-class="flex flex-col bg-background rounded-lg p-[15px] max-w-[630px] w-full"
      @update:model-value="val => emit('update:modelValue', val)"
  >
    <div class="flex items-center h-10">
      <h3 class="text-2xl font-semibold text-foreground">{{ props.title }}</h3>
      <button class="ml-auto bg-background p-0" @click="emit('update:modelValue', false)">
        <Close/>
      </button>
    </div>

    <div class="flex flex-col gap-[10px] text-foreground">
      <CardInfo :date="props.date" :reading-time="props.readingTime" :comments-length="props.comments.length"/>
      <img :src="props.image" alt="Card image" class="w-full rounded aspect-[8/5] h-auto object-cover">
      <p class="text-secondary font-medium">{{ props.description }}</p>
      <ul class="flex gap-[10px]">
        <li v-for="tag in props.tags" :key="tag"
            class="text-primary-active bg-primary-light text-sm py-[6px] px-[14px] rounded-l font-medium">{{ tag }}
        </li>
      </ul>
      <div>
        <p class="text-gray-900">Комментариев <span class="text-gray-600">{{ props.comments.length || 0 }} </span></p>
        <textarea
            class="mt-[10px] h-[52px] p-[15px] placeholder-gray-400 text-sm text-foreground bg-background resize-none w-full border rounded-[6px] outline-none"
            :class="isPristine ? 'border-gray-300' : (isValid ? 'border-primary' : 'border-[#F1416C]')"
            :placeholder="placeholder"
            @input="handleInput"
            v-model="comment"
        ></textarea>
        <div class="text-sm text-gray-500" v-if="charCount > 0">
          <span :class="!isValid && !isPristine ? 'text-[#F1416C]' : '' ">{{ charCount }}</span>
          / {{ maxChars }}
        </div>
        <div v-if="charCount > 0" class="flex justify-end gap-[10px] mt-[10px]">
          <button
              @click="cancelComment"
              class="text-sm px-4 py-2 bg-blue-500 text-white rounded text-primary bg-primary-light"
          >
            Отмена
          </button>
          <button
              :disabled="!isValid "
              @click="submitComment"
              :class="isValid ? 'bg-primary text-background' : 'bg-background text-gray-400'"
              class="text-sm px-4 py-2 bg-blue-500 text-white rounded"
          >
            Отправить
          </button>
        </div>
      </div>
      <div v-if="props.comments.length > 0">
        <ul class="mt-[10px]">
          <li v-for="comment in props.comments" :key="comment.date" class="flex gap-4 mb-4">
            <img :src="comment.avatar" alt="Avatar" class="w-10 h-10 rounded-full">
            <div>
              <span class="font-semibold text-gray-900 leading-5">{{ comment.name }}</span>
              <p class="text-gray-800 text-sm leading-4">{{ comment.comment }}</p>
              <span class="text-gray-500 text-xs leading-3">{{ comment.date }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <slot/>
  </VueFinalModal>
</template>