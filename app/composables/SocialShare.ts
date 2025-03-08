import { ref } from 'vue';

export const useSocialShare = () => {
  const isSupported = computed(() => navigator && 'share' in navigator);


  const shareContent = async (title: string, text: string, url: string) => {
    if (!isSupported.value) {
      console.error('Web Share API is not supported in this browser.');
      return;
    }

    try {
      await navigator.share({
        title,
        text,
        url
      });
      console.log('Content shared successfully');
    } catch (error) {
      console.error('Error sharing content:', error);
    }
  };

  return {
    isSupported,
    shareContent
  };
};