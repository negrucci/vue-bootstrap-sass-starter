<script setup></script>

<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-5">
                <div class="row row-cols-1 gap-2">
                    <div class="col px-0 display-4">{{ $t('main.title') }}</div>
                    <div class="col px-0 h3">{{ $t('main.subtitle') }}</div>
                    <div class="col px-0">
                        {{ $t('main.paragraphs.0') }}
                        <br />
                        {{ $t('main.paragraphs.1') }}
                        <br />
                        {{ $t('main.paragraphs.2') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
