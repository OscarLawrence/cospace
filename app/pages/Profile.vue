<template>
  <UCard class="max-w-md w-full">
    <template #header>
      <UserCard :user="user" />
    </template>
    <UserForm />
  </UCard>
</template>

<script lang="ts" setup>
const { user, valid } = useUser();
</script>

<style>
</style>