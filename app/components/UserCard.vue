<template>
  <UCard :title="user.name" class="max-w-xs mx-auto" variant="subtle">
    <div class="flex items-center justify-around gap-4">
      <UserAvatar :user="user" />
      <div class="flex flex-col gap-2 text-left">
        <h3>{{ user.name }}</h3>
        <p class="text-sm font-light">{{ user.info }}</p>
      </div>
    </div>
    <template #footer>
      <p class="text-xs flex items-center justify-center">{{ user.id }}</p>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { UserI } from "@/types/User";

defineProps({
  user: { type: Object as PropType<UserI>, required: true },
});
</script>

<style>
</style>