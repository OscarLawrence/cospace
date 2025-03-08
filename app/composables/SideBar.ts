export const useSideBar = () => {
  const { isMobile } = useDevice()
  const isOpen = useState('sidebarOpen', () => !isMobile)



  return {
    isOpen
  }
}
