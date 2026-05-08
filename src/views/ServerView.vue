<template>
  <div class="h-screen w-full flex bg-gray-900 text-gray-100">

    <!-- LEFT -->
    <ChannelList
      :active="activeChat"
      @select="openChat"
      class="w-64 flex-shrink-0 bg-gray-800"
    />

    <div class="flex-1 bg-gray-900">
      <ChatWindow
        v-if="activeChat"
        :chat="activeChat"
        class="h-full"
      />
      <div v-else class="h-full flex items-center justify-center text-gray-500">
        Select a channel to start chatting
      </div>
    </div>
    

    <!-- RIGHT -->
    <div class="w-56 flex-shrink-0 bg-gray-800">
      <UserList />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

import ChannelList from '../components/ChannelList.vue'
import ChatWindow from '../components/ChatWindow.vue'
import UserList from '../components/UserList.vue'

const activeChat = ref(null)

const openChat = (name) => {
  activeChat.value = name
}
</script>