<script setup>
import { ref, onMounted } from 'vue'
import { useBootstrapColorMode } from '@/composables/useBootstrapColorMode'
import iconLightMode from './icons/iconLightMode.vue'
import iconDarkMode from './icons/iconDarkMode.vue'

const { bootstrapColorMode, toggleBootstrapColorMode } = useBootstrapColorMode()
const animationState = ref(false)

onMounted(() => {
    setTimeout(() => {
        animationState.value = true
    }, 300)
})
</script>

<template>
    <div class="w-auto px-0" data-bs-toggle="tooltip" data-bs-title="color theme" data-bs-placement="bottom">
        <button 
            @click="toggleBootstrapColorMode()"
            type="button" aria-expanded="false"
            class="btn border-0 p-2" :class="{ 'no-transition': !animationState }"
        >
            <iconLightMode v-if="bootstrapColorMode == 'light'" class="icon" width="32px" height="32px" />
            <iconDarkMode v-if="bootstrapColorMode == 'dark'" class="icon" width="32px" height="32px" />
        </button>
    </div>
</template>

<style scoped lang="scss">
.no-transition {
    transition: none !important;
}
[data-bs-theme='light'] {
    .btn:hover {
        background-color: rgba(var(--bs-dark-rgb), 0.08);
    }
    .icon {
        fill: var(--bs-dark);
    }
}
[data-bs-theme='dark'] {
    .btn:hover {
        background-color: rgba(var(--bs-light-rgb), 0.08);
    }
    .icon {
        fill: var(--bs-light);
    }
}
</style>
