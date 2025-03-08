<template>
  <div class="flex flex-col h-screen max-h-screen">
    <AppBar />
    <div class="flex flex-1 overflow-hidden transition-all duration-500">
      <SideBar />
      <UContainer class="w-full flex justify-center p-4">
        <slot />
      </UContainer>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>