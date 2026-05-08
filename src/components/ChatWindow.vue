<template>
  <div class="flex-1 flex flex-col bg-gray-900">
    <!-- messages -->
    <div class="flex-1 p-4 space-y-3 overflow-y-auto">
      <div>
        <span class="text-blue-400">Ricardo:</span> Hey everyone
      </div>

      <div>
        <span class="text-green-400">Alex:</span> Yo!
      </div>
    </div>

    <!-- input -->
    <div class="p-3 bg-gray-800">
      <input
        class="w-full p-2 rounded bg-gray-900 text-white outline-none"
        placeholder="Type a message..."
      />
    </div>
  </div>
</template>