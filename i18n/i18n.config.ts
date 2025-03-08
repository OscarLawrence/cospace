import en from './en'
import fr from './fr'
import de from './de'



export default defineI18nConfig(() => ({
    legacy: false,

    messages: {
        en,
        fr,
        de
    }
}))