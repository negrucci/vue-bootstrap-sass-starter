<script setup>
import { onMounted } from 'vue'
import { Tooltip } from 'bootstrap'
import dataComp from '@/components/dataComp.vue'
import mainHeader from '@/components/mainHeader.vue'

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
  tooltipList
})
</script>

<template>
    <mainHeader />
    <div class="container-fluid user-select-none">
        <div class="container-xxl px-2 px-sm-3 px-md-4 px-lg-4 px-xxl-0">
            <div class="row row-cols-1 justify-content-center gap-3">
                <dataComp class="col px-0 border"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
