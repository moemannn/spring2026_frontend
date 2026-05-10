<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div class="border-l-2 border-gray-700 pl-4 space-y-2">
    <!-- CONTENT -->
    <div v-show="open" class="space-y-2 pt-1 transition-all duration-200">

      <router-link
        to="/admin/users"
        class="block text-blue-400 hover:text-blue-300"
      >
        users
      </router-link>

      <router-link
        to="/admin/server"
        class="block text-blue-400 hover:text-blue-300"
      >
        servers
      </router-link>

    </div>

        <!-- HEADER -->
    <h1
      class="text-sm font-bold text-gray-300 relative cursor-pointer select-none"
      @click="open = !open"
    >
      <span class="absolute -left-5 top-1 w-2 h-2 bg-gray-500 rounded-full"></span>
      Profiel panel
    </h1>

  </div>
</template>