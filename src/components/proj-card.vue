<template>
    <div class="my-10">
        <div class="flex justify-center flex-wrap gap-3 mb-4">
            <!-- Filter buttons -->
            <Btn v-for="filter in filters" :key="filter" @click="setActiveFilter(filter)"
                :class="{ 'bg-black text-white': activeFilter === filter, 'bg-white': activeFilter !== filter }"
                class="px-4 py-2 transition duration-300">
                {{ filter }}
            </Btn>

        </div>
        <div class="flex justify-center items-center">
            <input v-model="searchTerm" @input="filterCards" placeholder="Search by title"
                class="border-2 border-black w-[476px] px-4 py-2" />
        </div>

        <p class="font-semibold text-center max-w-xl px-4 mx-auto my-14 text-lg">There are no rules with these projects.
            Use any languages, libraries, or frameworks you want to recreate and learn from them.</p>
        <!-- Display filtered cards -->
        <div class="flex flex-wrap justify-center">
            <div v-if="filteredCards.length === 0" class="text-gray-500 text-center">
                Sorry, no results found for "{{ searchTerm }}".
            </div>
            <div v-else v-for="card in filteredCards" :key="card.id">
                <div
                    class="max-w-xs mx-5 my-5 relative mb-3 hover:translate-y-[-10px] hover:transition hover:duration-300 hover:ease-in delay-0">
                    <RouterLink :to="card.path">
                        <img :src="card.imgs" alt="Card Image" class="border-2 border-black" />
                        <h2
                            class="bg-[#faebd7] font-semibold border-l-2 border-r-2 border-b-2 border-black px-2 text-2xl underline">
                            {{ card.title }}</h2>
                    </RouterLink>
                    <p class="border-2 max-w-md border-black absolute px-2 py-1 right-[-10px] top-[-7.5px] z-10 font-semibold"
                        :class="{ 'bg-lime-200': card.level === 1, 'bg-yellow-200': card.level === 2, 'bg-amber-400': card.level === 3 }">
                        Level: {{ card.level }}</p>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import Btn from './btn.vue';

export default {
    data() {
        return {
            filters: ['View All', 1, 2, 3],
            activeFilter: 'View All',
            searchTerm: '',
            cards: [
                {
                    imgs: 'src/assets/project-card/Ableton.png',
                    title: 'Ableton',
                    level: 1,
                    path: '/projects/ableton'
                },

                {
                    imgs: 'src/assets/project-card/abstarct.png',
                    title: 'Abstact',
                    level: 1,
                    path: '/projects/abstract'
                },

                {
                    imgs: 'src/assets/project-card/backstage.png',
                    title: 'Backstage Talks',
                    level: 1,
                    path: '/projects/backstage-talks'
                },

                {
                    imgs: 'src/assets/project-card/basic.png',
                    title: 'Basic',
                    level: 3,
                    path: '/projects/basic'
                },

                {
                    imgs: 'src/assets/project-card/Bonsai.png',
                    title: 'Bonsai',
                    level: 1,
                    path: '/projects/bonsai'

                },

                {
                    imgs: 'src/assets/project-card/Canal-Street.png', title: 'Canal Street Market',
                    level: 3,
                    path: '/project/canal-street-market'
                },

                {
                    imgs: 'src/assets/project-card/Deplace-maison.png',
                    title: 'Déplacé Maison',
                    level: 3,
                    path: '/projects/deplace-maison'
                },

                {
                    imgs: 'src/assets/project-card/Figma.png',
                    title: 'Figma Merch',
                    level: 3,
                    path: '/projects/figma-merch'
                },

                {
                    imgs: 'src/assets/project-card/GoDaddy.png',
                    title: 'GoDaddy',
                    level: 2,
                    path: '/projects/go-daddy'
                },

                {
                    imgs: 'src/assets/project-card/Lobe.png',
                    title: 'Lobe',
                    level: 1,
                    path: '/projects/lobe'
                },

                {
                    imgs: 'src/assets/project-card/Monogram.png',
                    title: 'Monogram',
                    level: 2,
                    path: '/projects/monogram'
                }
                ,
                {
                    imgs: 'src/assets/project-card/Monstercat.png',
                    title: 'Monstercat',
                    level: 2,
                    path: '/projects/monstercat'
                },

                {
                    imgs: 'src/assets/project-card/Nintendo.png',
                    title: 'Nintendo',
                    level: 3,
                    path: '/projects/nintendo'
                }
                ,
                {
                    imgs: 'src/assets/project-card/Oh-studio.png',
                    title: 'Oh.studio',
                    level: 1,
                    path: '/projects/oh-studio'
                }
                ,
                {
                    imgs: 'src/assets/project-card/Podia.png',
                    title: 'Podia',
                    level: 2,
                    path: '/projects/podia'
                },

                {
                    imgs: 'src/assets/project-card/Pulse.png',
                    title: 'Pulse',
                    level: 1,
                    path: '/projects/pulse'
                },

                {
                    imgs: 'src/assets/project-card/Qrates.png',
                    title: 'Qrates',
                    level: 3,
                    path: '/projects/qrates'
                },

                {
                    imgs: 'src/assets/project-card/Starbucks.png',
                    title: 'Starbucks',
                    level: 2,
                    path: '/projects/starbucks'
                }
                ,
                {
                    imgs: 'src/assets/project-card/Stark.png',
                    title: 'Stark',
                    level: 2,
                    path: '/projects/stark'
                },

            ],
        };
    },
    computed: {
        filteredCards() {
            if (this.activeFilter === 'View All') {
                return this.cards.filter((card) => card.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
            }
            else {
                return this.cards.filter((card) => card.level === this.activeFilter &&
                    card.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
            }
        },
    },
    methods: {
        setActiveFilter(filter) {
            this.activeFilter = filter;
        },
        filterCards() {

        },
    },
    components: {
        Btn,
    }
};
</script>
