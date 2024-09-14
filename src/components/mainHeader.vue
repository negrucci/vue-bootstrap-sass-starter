<script setup>
import toggleLanguage from '@/components/toggleLanguage.vue'
import toggleColorMode from '@/components/toggleColorMode.vue'
</script>

<template>
    <header class="container-fluid">
        <div class="container-xxl h-100">
            <div class="row nav h-100 align-content-center justify-content-between">
                <div class="col-auto px-0 d-flex h4 mb-0">
                    <RouterLink to="/" class="hstack gap-1 px-0 py-1 text-decoration-none">
                        <div class="brand-logo"></div>
                        <div class="link-color">egrucci</div>
                    </RouterLink>
                </div>
                <div class="col-auto px-0 hstack gap-0">
                    <nav class="nav me-3 gap-2">
                        <RouterLink to="/skills" class="nav-link link-color px-2 py-2 h5 my-auto">skills</RouterLink>
                        <RouterLink to="/resume" class="nav-link link-color px-2 py-2 h5 my-auto">resume</RouterLink>
                        <RouterLink to="/projects" class="nav-link link-color px-2 py-2 h5 my-auto me-4">projects</RouterLink>
                        <toggleLanguage/>
                        <toggleColorMode/>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
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
    }
}
</style>
