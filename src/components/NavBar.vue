<template>
  <div class="h-screen flex flex-col w-40 bg-gray-900 py-4">

    <!-- TOP/MIDDLE -->
    <div class="flex flex-col items-center gap-3 flex-1">

      <router-link to="/">
        <div class="w-30 h-12 rounded-xl bg-blue-600 cursor-pointer flex items-center justify-center text-white font-bold">
          DM
        </div>
      </router-link>

      <router-link to="/server">
        <div class="w-30 h-12 rounded-xl bg-blue-600 cursor-pointer flex items-center justify-center text-white">
          Server
        </div>
      </router-link>

      <router-link to="/server">
        <div class="w-30 h-12 rounded-xl bg-blue-600 cursor-pointer flex items-center justify-center text-white">
          Server
        </div>
      </router-link>

      <router-link to="/server">
        <div class="w-30 h-12 rounded-xl bg-blue-600 cursor-pointer flex items-center justify-center text-white">
          Server
        </div>
      </router-link>

      <div class="w-30 h-12 rounded-xl bg-green-600 cursor-pointer flex items-center justify-center text-white font-bold text-xl">
        +
      </div>

    </div>

    <!-- BOTTOM  -->
    <div class="px-2">
      <AdminPanel />
    </div>
    <div class="px-2">
      <ProfielPanel />
    </div>

  </div>
</template>

<script setup>
import AdminPanel from './dropdown/AdminPanel.vue'
import ProfielPanel from './dropdown/ProfielPanel.vue'
</script>