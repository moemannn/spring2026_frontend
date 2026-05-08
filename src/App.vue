<template>
  <div class="flex">
    <ServerList />
    <router-view class="flex-1" />
  </div>
</template>

<script setup>
import ServerList from './components/ServerList.vue'
</script>