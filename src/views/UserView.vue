<template>
  <div class="h-screen w-full flex bg-gray-900 text-gray-100">

    <PersonalFriendList
      :active="activeChat"
      @select="openChat"
    />

    <div class="flex-1 bg-gray-900">
      <ChatWindow
        v-if="activeChat"
        :chat="activeChat"
        class="h-full"
      />
      <div v-else class="h-full flex items-center justify-center text-gray-500">
        Select a user to start chatting
      </div>
    </div>



  </div>
</template>

<script setup>
import { ref } from 'vue'
import PersonalFriendList from '../components/lists/PersonalFriendList.vue'
import ChatWindow from '../components/chat/ChatWindow.vue'

const activeChat = ref(null)

const openChat = (name) => {
  activeChat.value = name
}
</script>
