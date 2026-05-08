<template>
  <div class="h-screen w-full flex bg-gray-900 text-gray-100">

    <PersonalFriendList
      :active="activeChat"
      @select="openChat"
    />

    <ChatWindow v-if="activeChat" :chat="activeChat" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import PersonalFriendList from '../components/PersonalFriendList.vue'
import ChatWindow from '../components/ChatWindow.vue'

const activeChat = ref(null)

const openChat = (name) => {
  activeChat.value = name
}
</script>