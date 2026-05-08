<template>
  <div class="flex-1 flex flex-col bg-gray-900">

    <!-- messages -->
    <div class="flex-1 p-4 space-y-3 overflow-y-auto">

      <template v-for="(msg, index) in messages" :key="index">

        <!-- date  -->
        <div
          v-if="index === 0 || messages[index - 1].date !== msg.date"
          class="relative flex items-center justify-center my-6"
        >

          <div class="flex-1 border-b border-gray-700"></div>

          <div class="px-3 text-xs text-gray-400 bg-gray-900">
            {{ msg.date }}
          </div>

          <div class="flex-1 border-b border-gray-700"></div>

        </div>

        <!-- message -->
        <ChatMessage
          :user="msg.user"
          :text="msg.text"
          :isMine="msg.isMine"
          :time="msg.time"
          @open-profile="openProfile"
        />

      </template>

    </div>

    <!-- input -->
    <div class="p-3 bg-gray-800">
      <input
        class="w-full p-2 rounded bg-gray-900 text-white outline-none b"
        placeholder="Type a message..."
      />
    </div>

  </div>
</template>

<script setup>
import ChatMessage from './ChatMessage.vue'

const messages = [
  { user: 'Ricardo', text: 'Lorem ipsum dolor sit amet.', isMine: true, time: '10:01', date: '2026-05-08' },
  { user: 'Alex', text: 'Sed do eiusmod tempor.', isMine: false, time: '10:02', date: '2026-05-08' },
  { user: 'Sam', text: 'Ut enim ad minim veniam.', isMine: false, time: '10:03', date: '2026-05-08' },

  { user: 'Ricardo', text: 'Duis aute irure dolor.', isMine: true, time: '14:20', date: '2026-05-07' },
  { user: 'Alex', text: 'Excepteur sint occaecat.', isMine: false, time: '14:22', date: '2026-05-07' },
  { user: 'Sam', text: 'Curabitur pretium tincidunt.', isMine: false, time: '14:25', date: '2026-05-07' },

  { user: 'Alex', text: 'Quisque a lectus.', isMine: false, time: '09:10', date: '2026-05-05' },
  { user: 'Sam', text: 'Nam nulla quam.', isMine: false, time: '09:12', date: '2026-05-05' },
  { user: 'Ricardo', text: 'Pellentesque fermentum.', isMine: true, time: '09:14', date: '2026-05-05' }
]

const openProfile = (user) => {
  console.log('Open profile:', user)
}
</script>