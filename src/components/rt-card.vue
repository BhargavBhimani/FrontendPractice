<template>
    <div class="flex justify-center items-center ">
        <div class="my-10 flex flex-wrap">
            <Card v-for="(card, index) in cards" :key="index" :imgs="card.imgs" :title="card.title" :level="card.level"
                :path="card.path" />
        </div>
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
            cards: [
                {
                    imgs: 'src/assets/project-card/Ecwid.png',
                    title: 'Ecwid',
                    level: 2,
                    path: '/projects/ecwid'
                },

                {
                    imgs: 'src/assets/project-card/Grasshopper.png',
                    title: 'Grasshopper',
                    level: 3,
                    path: '/projects/grasshoper'
                },

                {
                    imgs: 'src/assets/project-card/Instrument.png',
                    title: 'Instrument',
                    level: 1,
                    path: '/projects/instrument'
                },

                {
                    imgs: 'src/assets/project-card/Red-Square.png',
                    title: 'Red Square',
                    level: 2,
                    path: '/projects/red-square'
                },

                {
                    imgs: 'src/assets/project-card/Shopify-Dev.png',
                    title: 'Shopify Dev',
                    level: 2,
                    path: '/projects/shopify-dev'
                },

                {
                    imgs: 'src/assets/project-card/Sketch.png',
                    title: 'Sketch',
                    level: 2,
                    path: '/projects/sketch'
                },

                {
                    imgs: 'src/assets/project-card/Trello.png',
                    title: 'Trello',
                    level: 2,
                    path: '/projects/trello'
                },

            ]
        }
    },
}
</script>
