<template>
  <UCard>
    <template #header>
      <UserCard :user="user" />
    </template>
    <div class="flex flex-col items-center space-y-4">
      <UCollapsible :unmount-on-hide="false" class="flex flex-col w-48">
        <UButton
          :label="$t('connect.showQr')"
          leading-icon="ic-baseline-qr-code"
        />

        <template #content>
          <img class="w-48" :src="qrCodeImage" alt="QR Code" />
        </template>
      </UCollapsible>
      <UButton
        v-if="isSupported"
        icon="ic-share"
        @click.prevent="shareContent(user.name, user.info, inviteLink)"
      >
        {{ $t("connect.share") }}
      </UButton>
      <UTooltip :text="inviteLink">
        <UButton @click="copyToClipboard(inviteLink)" icon="ic-round-link">{{
          $t("connect.copyLink")
        }}</UButton>
      </UTooltip>
      <UCollapsible :unmount-on-hide="false" class="flex flex-col w-48">
        <UButton
          :label="$t('connect.scanQrCode')"
          color="neutral"
          leading-icon="ic-baseline-qr-code"
          block
        />

        <template #content>
          <div>
            <!-- <qrcode-stream v-if="qrScanOpen" @detect="onDetect"></qrcode-stream> -->
          </div>
        </template>
      </UCollapsible>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
const { user, inviteLink } = useUser();

const { qrCodeImage, generateQRCode } = useQRCode(inviteLink);
const { isSupported, shareContent } = useSocialShare();

const { copyToClipboard } = useClipboard();
</script>

<style>
</style>