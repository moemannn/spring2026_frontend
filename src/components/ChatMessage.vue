<template>
  <div class="flex" :class="isMine ? 'justify-end' : 'justify-start'">

    <div
      class="max-w-xs px-3 py-2 rounded-lg text-white"
      :class="isMine ? 'bg-blue-600' : 'bg-gray-700'"
    >

      <!-- header -->
      <div class="flex justify-between items-center mb-1 gap-4">

        <!-- username -->
        <div
          class="text-xs cursor-pointer hover:underline opacity-80"
          @click="$emit('open-profile', user)"
        >
          {{ user }}
        </div>

        <!-- time -->
        <div class="text-[10px] opacity-50 whitespace-nowrap">
          {{ time }}
        </div>

      </div>

      <!-- message -->
      <div class="text-sm">
        {{ text }}
      </div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  user: String,
  text: String,
  isMine: Boolean,
  time: String
})

defineEmits(['open-profile'])
</script>