<script setup>
import fontComp from '@/components/fontComp.vue'
import dataComp from '@/components/dataComp.vue'
import mainHeader from '@/components/mainHeader.vue'
</script>

<template>
    <mainHeader />
    <div class="container-fluid user-select-none">
        <div class="row row-cols-1 justify-content-center gap-3">
            <fontComp class="col"/>
            <dataComp class="col"/>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
