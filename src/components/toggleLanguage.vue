<script setup>
import { ref, onMounted } from 'vue'
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher.js'
import iconWorld from './icons/iconWorld.vue'

const { availableLocales, changeLanguage } = useLanguageSwitcher()
const animationState = ref(false)

onMounted(() => {
    setTimeout(() => {
        animationState.value = true
    }, 300)
})
</script>

<template>
    <div class="dropdown w-auto px-0" data-bs-toggle="tooltip" data-bs-title="language" data-bs-placement="bottom">
        <button
            class="btn border-0 p-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            :class="{ 'no-transition': !animationState }"
        >
            <iconWorld class="icon" width="32px" height="32px" />
        </button>

        <ul class="dropdown-menu p-0 user-select-none" style="width: max-content;">
            <div class="row mx-0 p-2 border-bottom rounded-top">
                <div class="col px-0 text-center h6 mb-0">language</div>
            </div>
            <div class="row gap-2 mx-0 p-2 rounded-bottom">
                <li @click="changeLanguage(lang)" v-for="lang in availableLocales" :key="lang"
                class="col border rounded-2 px-0" style="min-width: 68px; max-width: 80px; min-height: 60px;"
                >
                    <a class="dropdown-item rounded-2 px-0 w-100 h-100 d-flex justify-content-center align-items-center" href="#">{{ lang }}</a>
                    <!-- {{ lang === 'en-US' ? 'English (United States)' : 'Português (Brasil)' }} -->
                </li>
            </div>
        </ul>
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
    .dropdown-menu .row{
        &:nth-child(1){
            background-color: var(--bs-gray-200);
        }
        &:nth-child(2){
            background-color: var(--bs-gray-100);
        }
        .dropdown-item{
            background-color: var(--bs-gray-100);
            color: var(--bs-gray-600);
            &:hover{
                background-color: var(--bs-gray-200);
                color: var(--bs-gray-900);
            }
            &:active{
                color: var(--bs-dark);
            }
        }
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
