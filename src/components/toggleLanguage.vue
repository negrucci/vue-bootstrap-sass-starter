<script setup>
import { ref, onMounted } from 'vue'
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher.js'

const { locale, availableLocales, changeLanguage } = useLanguageSwitcher()
const animationState = ref(false)

onMounted(() => {
    setTimeout(() => {
        animationState.value = true
    }, 300)
})
</script>

<template>
    <div class="btn-group" role="group" aria-label="Toggle Language" style="width: 140px">
        <button
            @click="changeLanguage(lang)"
            v-for="lang in availableLocales"
            :key="lang"
            type="button"
            class="btn btn-outline-primary"
            :class="{ active: lang === locale, 'no-transition': !animationState }"
        >
            {{ lang }}
        </button>
    </div>
</template>

<style scoped lang="scss">
.no-transition {
    transition: none !important;
}
</style>
