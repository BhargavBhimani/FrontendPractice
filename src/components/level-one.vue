<template>
    <div class="my-14 flex flex-wrap">
        <Card v-for="(card, index) in cards" :key="index" :imgs="card.imgs" :title="card.title" :level="card.level"
            class="max-w-md" />
    </div>
</template>

<script>

import Card from './card.vue'

export default {
    components: {
        Card
    },
    data() {
        return {

        }
    },
}
</script>
