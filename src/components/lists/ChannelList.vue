<template>
  <div class="w-64 bg-gray-800 p-3">
    <div class="font-bold mb-4">Server Name</div>

    <div class="space-y-2 text-sm">

      <div
        @click="$emit('select', 'general')"
        :class="getClass('general')"
        class="cursor-pointer capitalize"
      >
        # general
      </div>

      <div
        @click="$emit('select', 'gaming')"
        :class="getClass('gaming')"
        class="pl-2 cursor-pointer capitalize"
      >
        - gaming
      </div>

      <div
        @click="$emit('select', 'support')"
        :class="getClass('support')"
        class="pl-2 cursor-pointer capitalize"
      >
        - support
      </div>

    </div>
  </div>
</template>

<script setup>
defineEmits(['select'])

const props = defineProps({
  active: String
})

const getClass = (name) => {
  return props.active === name
    ? 'font-semibold text-white'
    : 'text-gray-400 hover:text-white'
}
</script>