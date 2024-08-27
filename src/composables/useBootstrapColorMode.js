import { ref, watch, onMounted } from 'vue'

export function useBootstrapColorMode() {
    const getInitialBootstrapColorMode = () => {
        const savedMode = localStorage.getItem('bootstrapColorMode')
        return savedMode ? savedMode : 'light'
    }

    const bootstrapColorMode = ref(getInitialBootstrapColorMode())

    const toggleBootstrapColorMode = () => {
        bootstrapColorMode.value = bootstrapColorMode.value === 'light' ? 'dark' : 'light'
    }

    watch(bootstrapColorMode, (newMode) => {
        document.documentElement.setAttribute('data-bs-theme', newMode)
        localStorage.setItem('bootstrapColorMode', newMode)
    })

    onMounted(() => {
        document.documentElement.setAttribute('data-bs-theme', bootstrapColorMode.value)
    })

    return {
        bootstrapColorMode,
        toggleBootstrapColorMode
    }
}
