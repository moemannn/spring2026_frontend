<template>
  <div class="w-56 bg-gray-800 p-3">
    <div class="font-bold mb-3">Friends:</div>

    <div class="space-y-2 text-sm">

      <div
        @click="$emit('select', 'ricardo')"
        :class="getClass('ricardo')"
        class="cursor-pointer capitalize"
      >
        ricardo
      </div>

      <div
        @click="$emit('select', 'alex')"
        :class="getClass('alex')"
        class="cursor-pointer capitalize"
      >
        alex
      </div>

      <div
        @click="$emit('select', 'sam')"
        :class="getClass('sam')"
        class="cursor-pointer capitalize"
      >
        sam
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