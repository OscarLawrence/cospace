import type { UserI } from '@/types/User'


const user: UserI = reactive({
  id: '',
  name: '',
  info: ''
})


export const useUser = () => {



  const userIdCookie = useCookie('userId', { default: () => generateUserId() })
  const userNameCookie = useCookie('userName', { default: () => '' })
  const userInfoCookie = useCookie('userInfo', { default: () => 'Hey there, I am using CoSpace because I care about my Data as much as I care about yours.' })


  user.id = userIdCookie.value
  user.name = userNameCookie.value
  user.info = userInfoCookie.value

  const valid = computed(() => user.name.length >= 3)

  const inviteLink = computed(() => {
    const { origin } = useRequestURL()

    return `${origin}/invite/${encodeURI(user.id)}`
  })

  const initializeUser = async () => {
    const { getCurrentUser, setCurrentUser } = useIDB()

    // load user from IDB
    const storedUser = await getCurrentUser()
    if (!storedUser) {
      // No User found, Probably new User

      setCurrentUser({ ...user })
    }
    // User found, load it
    Object.assign(user, storedUser)
    if (!user.avatar && user.name) {
      const { DEFAULT_AVATAR_COLLECTION } = useRuntimeConfig().public
      const avatar = createAvatar(DEFAULT_AVATAR_COLLECTION, { seed: user.name })
      user.avatar = avatar.toDataUri()
      setCurrentUser({ ...user })
    }

  }


  onMounted(() => {
    initializeUser()
  })

  watch(user, (newUser) => {
    const { setCurrentUser } = useIDB()
    setCurrentUser({ ...newUser })
    userNameCookie.value = newUser.name
    userInfoCookie.value = newUser.info
  })


  return {
    valid,
    user,
    inviteLink,
  }

}
