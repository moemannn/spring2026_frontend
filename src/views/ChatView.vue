<template>
  <div class="h-screen w-full flex bg-gray-900 text-gray-100">
    <ChannelList />
    <ChatWindow />
    <UserList />
  </div>
</template>

<script setup>
import ChannelList from '../components/ChannelList.vue'
import ChatWindow from '../components/ChatWindow.vue'
import UserList from '../components/UserList.vue'
</script>
