<script setup>
import { ref, onMounted } from 'vue'
import { useBootstrapColorMode } from '@/composables/useBootstrapColorMode'

const { bootstrapColorMode, toggleBootstrapColorMode } = useBootstrapColorMode()
const animationState = ref(false)

onMounted(() => {
    setTimeout(() => {
        animationState.value = true
    }, 300)
})
</script>

<template>
    <div class="form-check form-switch my-auto" style="width: 90px">
        <input
            @click="toggleBootstrapColorMode()"
            class="form-check-input"
            :class="{ 'no-transition': !animationState }"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckColorMode"
            :checked="bootstrapColorMode == 'dark'"
        />
        <label class="form-check-label text-capitalize" for="flexSwitchCheckColorMode">{{
            bootstrapColorMode
        }}</label>
    </div>
</template>

<style scoped lang="scss">
.no-transition {
    transition: none !important;
}
</style>
