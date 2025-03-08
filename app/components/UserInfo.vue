<template>
  <div>
    <div class="flex items-center justify-around max-w-xl">
      <UserAvatar :user="user" />
      <div>
        <h1 class="text-2xl font-bold">{{ user.name }}</h1>
        <p class="text-gray-500">{{ user.info }}</p>
      </div>
    </div>
  </div>
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