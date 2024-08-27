<script setup>
import toggleLanguage from '@/components/toggleLanguage.vue'
import toggleColorMode from '@/components/toggleColorMode.vue'
import fontComp from '../components/fontComp.vue'
import dataComp from '../components/dataComp.vue'
</script>

<template>
    <div class="container-fluid user-select-none">
        <div class="row row-cols-1 justify-content-center gap-3">
            <toggleColorMode />
            <toggleLanguage />
            <fontComp class="col" />
            <dataComp class="col" />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
