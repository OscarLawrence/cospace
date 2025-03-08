<template>
  <UForm :state="user" class="space-y-4">
    <UFormField :label="$t('userForm.name.label')">
      <UInput
        v-model="user.name"
        :placeholder="$t('userForm.name.placeholder')"
        required
        class="w-full"
      />
      <p class="text-blue" v-show="!valid">
        {{ $t("userForm.name.minLengthError") }}
      </p>
    </UFormField>
    <UFormField :label="$t('userForm.info.label')">
      <UTextarea
        v-model="user.info"
        :placeholder="$t('userForm.info.placeholder')"
        required
        class="w-full"
      />
      <p class="text-blue" v-show="user.info && user.info.length > 10000">
        {{ $t("userForm.info.maxLengthError") }}
      </p>
    </UFormField>
  </UForm>
</template>

<script lang="ts" setup>
const { user, valid } = useUser();
</script>

<style>
</style>