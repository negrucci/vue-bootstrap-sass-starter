<script setup>
import { ref, onMounted } from 'vue'
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher.js'
import iconWorld from './icons/iconWorld.vue'

const { locale, availableLocales, changeLanguage } = useLanguageSwitcher()
const animationState = ref(false)

onMounted(() => {
    setTimeout(() => {
        animationState.value = true
    }, 300)
})
</script>

<template>
    <div class="dropdown w-auto px-0">
        <button
            class="btn border-0 p-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            :class="{ 'no-transition': !animationState }"
        >
            <iconWorld class="icon" width="42px" height="42px" />
        </button>
        <ul class="dropdown-menu p-1">
            <li @click="changeLanguage(lang)" v-for="lang in availableLocales" :key="lang">
                <a class="dropdown-item d-flex px-2 py-2 rounded-1" href="#" :class="{ active: lang === locale }">
                    <div style="width: 47px">{{ lang }}</div>
                    <div class="px-1"></div>
                    <div class="text-capitalize">
                        {{ lang === 'en-US' ? 'English (United States)' : 'Português (Brasil)' }}
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.no-transition {
    transition: none !important;
}
[data-bs-theme='light'] {
    .btn:hover {
        background-color: rgba(var(--bs-dark-rgb), 0.2);
    }
    .icon {
        fill: var(--bs-dark);
    }
}
[data-bs-theme='dark'] {
    .btn:hover {
        background-color: rgba(var(--bs-light-rgb), 0.2);
    }
    .icon {
        fill: var(--bs-light);
    }
}
</style>
