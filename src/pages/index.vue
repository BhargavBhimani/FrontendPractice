<template>
    <div class="bg-[#faebd7] px-4 py-20 border-b-2 border-black  lg:flex-col items-center">
        <div class="flex flex-row mt-10 max-w-6xl mx-auto">
            <div class="my-7 md:max-w-sm">
                <Title class="text-3xl md:text-5xl">Become a better frontend developer. </Title>
                <p class="mt-3 md:mt-6 md:text-2xl">Take your frontend skills to the next level by recreating
                    <strong> real websites </strong> from <strong> real companies</strong>.
                </p>
                <p class="mt-3 md:mt-6 md:text-2xl">The perfect type of practice for developers of all skill levels. Are you
                    up for the
                    challenge?</p>
            </div>
            <div class="md:max-w-lg md:mx-auto flex justify-center">
                <img src="https://www.frontendpractice.com/_next/image?url=%2Fproject-collage.png&w=3840&q=100" alt=""
                    class="hidden md:flex">
            </div>
        </div>
        <div class="xlg:px-40">

            <router-link to="/projects">
                <Btn class="bg-white">

                    View Projects
                </Btn>
            </router-link>

            <Btn class="ml-4" @click="redirectToTarget">
                Learn More
            </Btn>

        </div>

    </div>
    <div id="targetElement">
        <LmTitle />
        <LmSubtitle />
        <Boxes />
        <Title class="text-2xl text-center p-7 max-w-md mx-auto">Ready to become a better frontend developer?</Title>
        <div class="flex justify-center items-center mb-7">
            <router-link to="/projects">
                <Btn>
                    Get Started
                </Btn>
            </router-link>
        </div>
    </div>
</template>

<script>

import Btn from '../components/btn.vue';
import LmTitle from '../components/lm-title.vue'
import LmSubtitle from '../components/lm-subtitle.vue'
import Title from '../components/title.vue'
import Boxes from '../components/boxes.vue'


export default {

    components: {
        Btn,
        LmTitle,
        LmSubtitle,
        Title,
        Boxes
    },

    data() {
        return {
            name: 'Index'
        }
    },
    methods: {
        redirectToTarget() {
            const targetElement = document.getElementById('targetElement');
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        },
    },

}
</script>