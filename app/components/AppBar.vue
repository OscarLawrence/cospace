<template>
  <nav
    class="flex justify-between w-full h-24 items-center p-4 border-b-2 border-slate-200"
  >
    <div class="flex items-center gap-4">
      <UButton
        v-if="isMobile"
        color="white"
        class="text-gray-500"
        @click="isOpen = !isOpen"
        icon="ic-round-menu"
      ></UButton>
      <NuxtLink to="/profile">
        <UserAvatar :user="user" />
      </NuxtLink>
    </div>
    <div>
      {{ $route.name }}
    </div>
    <div>
      <LanguageSelect />
      <ThemeSelect />
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { isOpen } = useSideBar();
const { isMobile } = useDevice();
const { user } = useUser();
</script>

<style>
</style>