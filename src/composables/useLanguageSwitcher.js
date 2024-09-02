import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguageSwitcher() {
    const { locale } = useI18n()
    const availableLocales = ref(['en-US', 'pt-BR'])
    const savedLocale = localStorage.getItem('userLocale')

    if (savedLocale && availableLocales.value.includes(savedLocale)) {
        locale.value = savedLocale
    }

    const changeLanguage = (lang) => {
        if (availableLocales.value.includes(lang)) {
            locale.value = lang
            localStorage.setItem('userLocale', lang)
            document.documentElement.setAttribute('lang', locale.value)
        }
    }

    onMounted(() => {
        document.documentElement.setAttribute('lang', locale.value)
    })

    return {
        locale,
        availableLocales,
        changeLanguage
    }
}
