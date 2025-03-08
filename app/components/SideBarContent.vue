<template>
  <nav
    class="flex flex-col items-center p-4 w-32 origin-left border-r-2 border-gray-200"
  >
    <div class="sidebar-content transition-opacity duration-500">
      <UButton icon="ic-baseline-person-add" to="/connect" />
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { isOpen } = useSideBar();
</script>

<style>
</style>