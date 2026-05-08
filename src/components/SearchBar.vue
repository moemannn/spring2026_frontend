<template>
  <div class="w-full p-2 relative">

    <!-- INPUT -->
    <div class="relative">
      <input
        v-model="query"
        @input="onInput"
        type="text"
        placeholder="Search..."
        class="w-full bg-gray-800 text-gray-100 rounded-md pl-10 pr-3 py-2
               outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </div>
    </div>

    <!-- dropdown -->
    <div
      v-if="query"
      class="absolute left-2 right-2 mt-2 bg-gray-800 rounded-md shadow-lg
             border border-gray-700 max-h-64 overflow-y-auto z-50"
    >

      <!-- recent -->
      <div class="px-3 py-2 text-gray-400 text-xs uppercase">
        Recent
      </div>

      <div
        v-for="item in filteredFriends"
        :key="'f-' + item"
        class="px-3 py-2 hover:bg-gray-700 cursor-pointer capitalize"
      >
        {{ item }}
      </div>

      <div class="border-t border-gray-700 my-1"></div>

      <!-- servers -->
      <div class="px-3 py-2 text-gray-400 text-xs uppercase">
        Servers
      </div>

      <div
        v-for="item in filteredServers"
        :key="'s-' + item"
        class="px-3 py-2 hover:bg-gray-700 cursor-pointer capitalize"
      >
        # {{ item }}
      </div>

      <div class="border-t border-gray-700 my-1"></div>

      <!-- users -->
      <div class="px-3 py-2 text-gray-400 text-xs uppercase">
        Users
      </div>

      <div
        v-for="user in filteredUsers"
        :key="'u-' + user.id"
        class="px-3 py-2 hover:bg-gray-700 cursor-pointer"
      >
        {{ user.name }}
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['update:modelValue', 'search'])

const query = ref('')

const friends = ['ricardo', 'alex', 'sam']
const servers = ['development', 'marketing', 'support']

const usersFromDatabase = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Sarah Johnson' },
  { id: 3, name: 'Michael Smith' },
]

const filteredFriends = computed(() =>
  friends.filter(i =>
    i.toLowerCase().includes(query.value.toLowerCase())
  )
)

const filteredServers = computed(() =>
  servers.filter(i =>
    i.toLowerCase().includes(query.value.toLowerCase())
  )
)

const filteredUsers = computed(() =>
  usersFromDatabase.filter(u =>
    u.name.toLowerCase().includes(query.value.toLowerCase())
  )
)

const onInput = () => {
  emit('update:modelValue', query.value)
  emit('search', query.value)
}
</script>