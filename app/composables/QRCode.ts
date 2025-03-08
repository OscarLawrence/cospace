import QRCode from 'qrcode'

export const useQRCode = (link: Ref<string>) => {
  const qrCodeImage = ref('')

  const generateQRCode = async (text: string) => {
    try {
      qrCodeImage.value = await QRCode.toDataURL(text)
    } catch (error) {
      console.error('Failed to generate QR code', error)
    }
  }

  watch(link, (value) => {
    generateQRCode(value)
  })

  generateQRCode(link.value)

  return {
    qrCodeImage,
    generateQRCode
  }
}
