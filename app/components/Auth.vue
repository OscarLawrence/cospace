<template>
  <UModal :dismissible="valid" v-model:open="modalOpen" preventClose>
    <template #content>
      <UCard>
        <template #header>
          <h1 class="text-lg font-semibold">Login</h1>
        </template>
        <UserForm />
        <UButton :disabled="!valid" @click.prevent="submit" color="primary"
          >Done</UButton
        >
      </UCard>
    </template>
  </UModal>
</template>

<script lang="ts" setup>
const { user, valid } = useUser();

const modalOpen = ref(!valid.value);

const submit = () => {
  const { public: config } = useRuntimeConfig();
  const avatar = createAvatar(config.DEFAULT_AVATAR_COLLECTION, {
    seed: user.name,
  });
  console.log(avatar);
  user.avatar = avatar.toDataUri();
  modalOpen.value = false;
};
</script>

<style>
</style>