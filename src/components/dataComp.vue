<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL
const apiToken = import.meta.env.VITE_API_TOKEN
const tableName = 'table02'
const sortBy = 'id'

var airTableAPI = ref('')

const getUsers = () => {
    axios
        .get(
            `${apiURL}/${tableName}?sort%5B0%5D%5Bfield%5D=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiToken}`
                }
            }
        )
        .then((response) => {
            airTableAPI.value = response.data
        })
        .catch((error) => {
            console.error('Error fetching users:', error)
        })
}

onMounted(() => {
    getUsers()
})
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div
                    v-for="{ id, fields } in airTableAPI.records"
                    :key="id"
                    class="row justify-content-center"
                >
                    <div>{{ fields.ptBR }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
