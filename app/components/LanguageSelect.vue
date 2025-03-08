<template>
  <USelectMenu
    v-model="language"
    :items="availableLocales"
    class="w-24"
    searchable
    :icon="language?.avatar.icon"
    leading
    trailing-icon="false"
  >
  </USelectMenu>
</template>

<script lang="ts" setup>
import type { LocaleObject, Locale } from "@nuxtjs/i18n";

const { locale, locales, setLocale } = useI18n();

console.log(locales.value);

interface LanguageI {
  label: string;
  id: Locale;
  iso: string;
  avatar: {
    icon: string;
    alt: string;
  };
}

const availableLocales: LanguageI[] = locales.value.map((locale: Locale) => ({
  label: locale.name,
  id: locale.code,
  iso: locale.iso,
  avatar: {
    icon: `flag-${locale.iso?.split("-").pop().toLowerCase()}-4x3`,
    alt: locale.name,
  },
}));

const language: WritableComputedRef<LanguageI | undefined> = computed({
  get: (): LanguageI | undefined =>
    availableLocales.find((l: LanguageI) => l.id === locale.value),
  set: (value: LanguageI) => setLocale(value.id),
});
</script>

<style>
</style>