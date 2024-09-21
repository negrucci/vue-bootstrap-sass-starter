<script setup>
import { ref, onMounted } from 'vue'
import { useWindowSize } from '@/composables/useWindowSize.js'
import toggleLanguage from '@/components/toggleLanguage.vue'
import toggleColorMode from '@/components/toggleColorMode.vue'

const { windowWidth } = useWindowSize()
const animationState = ref(false)

onMounted(() => {
    setTimeout(() => {
        animationState.value = true
    }, 300)
})
</script>

<template>
    <header class="container-fluid">
        <div class="container-xxl h-100 px-2 px-sm-3 px-md-4 px-lg-4 px-xxl-0">
            <div class="row nav h-100 align-content-center justify-content-between">
                <div class="col-auto px-0 d-flex h4 mb-0">
                    <RouterLink to="/" class="hstack gap-1 px-0 py-1 text-decoration-none">
                        <div class="brand-logo"></div>
                        <div class="link-color">egrucci</div>
                    </RouterLink>
                </div>
                <div class="col-auto px-0 hstack gap-0">
                    <div v-if="windowWidth > 630" class="d-flex">
                        <nav class="nav gap-2 border rounded-2 px-2">
                            <RouterLink to="/skills"
                                class="nav-link link-color px-2 py-2 h5 my-auto rounded-1"
                                :class="{ 'no-transition': !animationState }"
                            >
                                {{ $t('mainHeader.linkName.0') }}
                            </RouterLink>
                            <RouterLink to="/resume" 
                                class="nav-link link-color px-2 py-2 h5 my-auto rounded-1"
                                :class="{ 'no-transition': !animationState }"
                            >
                                {{ $t('mainHeader.linkName.1') }}
                            </RouterLink>
                            <RouterLink to="/projects" 
                                class="nav-link link-color px-2 py-2 h5 my-auto rounded-1" 
                                :class="{ 'no-transition': !animationState }"
                            >
                                {{ $t('mainHeader.linkName.2') }}
                            </RouterLink>
                        </nav>
                        <div class="mx-2"></div>
                        <div class="hstack gap-1">
                            <toggleLanguage/>
                            <toggleColorMode/>
                        </div>
                    </div>
                    <div v-else class="d-flex">
                        <div class="hstack gap-1">
                            <toggleLanguage/>
                            <toggleColorMode/>
                        </div>
                        <div class="mx-2"></div>
                        <toggleColorMode/>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.no-transition {
    transition: none !important;
}
header{
    height: 86px;
    .brand-logo{
        width: calc(260px/8);
        height: calc(420px/8);
        background-size: contain;
    }
}

[data-bs-theme='light']{
    header{
        background-color: var(--bs-light);
        .brand-logo{
            background-image: url(/src/assets/brand-logo-dark.png);
        }
        .link-color{
            color: var(--bs-dark);
        }
        nav{
            background-color: var(--bs-gray-200);
            .nav-link{
                color: var(--bs-gray-700);
                &:hover{
                    color: var(--bs-dark);
                    background-color: var(--bs-gray-400);
                }
            }
        }
    }
}

[data-bs-theme='dark']{
    header{
        background-color: var(--bs-dark);
        .brand-logo{
            background-image: url(/src/assets/brand-logo-light.png);
        }
        .link-color{
            color: var(--bs-light);
        }
        nav{
            background-color: var(--bs-gray-800);
            .nav-link{
                color: var(--bs-gray-400);
                &:hover{
                    color: var(--bs-light);
                    background-color: var(--bs-gray-700);
                }
            }
        }
    }
}
</style>
