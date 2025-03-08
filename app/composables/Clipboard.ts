export const useClipboard = () => {

  const toast = useToast()
  const { t } = useI18n()

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.add({
      title: t('copiedToClipboard'),
      description: text,
      duration: 5000
    })
  }


  return {
    copyToClipboard
  }

}
