<template>
  <UAvatar :src="user.avatar" :alt="user.name" class="w-18 h-18 bg-slate-200" />
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { UserI } from "@/types/User";

defineProps({
  user: {
    type: Object as PropType<UserI>,
    required: true,
  },
});
</script>

<style>
</style>