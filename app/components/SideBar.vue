<template>
  <USlideover
    v-if="isMobile"
    v-model:open="isOpen"
    side="left"
    close
    class="w-64"
    closeIcon="ic-round-close"
    :title="$t('sidebar.title')"
    :description="$t('sidebar.description')"
    name="sidebar"
  >
    <template #body>
      <SideBarContent class="w-full" />
    </template>
  </USlideover>
  <SideBarContent v-else v-show="isOpen" />
</template>

<script lang="ts" setup>
const { isOpen } = useSideBar();
const { isMobile } = useDevice();
</script>

<style>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: width 0.5s ease, opacity 0.5s ease, transform 0.5s ease;
}
.sidebar-enter, .sidebar-leave-to /* .sidebar-leave-active in <2.1.8 */ {
  width: 0px;
  opacity: 0;
  transform: scaleX(0);
}
.sidebar-content {
  opacity: 1;
}
.sidebar-leave-active .sidebar-content {
  opacity: 0;
}
</style>