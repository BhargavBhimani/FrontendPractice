<template>
    <div class="font-semibold my-2">
        <p class="">
            Frontend Masters offers a 100% free
            "
            <a href="https://frontendmasters.com/courses/web-development-v3/?utm_source=frontendpractice&utm_medium=website&utm_campaign=frontendpractice"
                class="underline">
                Complete Intro to Web Development
            </a>"
            course.
        </p>
    </div>
    <div class="md:text-center">
        <button class="px-2 text-black hover:bg-black hover:text-white border-2 border-black" @click="toggleTooltip">
            Learn More
        </button>

        <div v-if="showTooltip"
            class="absolute p-4 text-center max-w-xs mx-auto bg-white text-black rounded border-[1px] shadow">
            <div>

                <a class="font-semibold underline hover:text-blue-700"
                    href="https://frontendmasters.com/?utm_source=frontendpractice&utm_medium=website&utm_campaign=frontendpractice">
                    Frontend Masters
                </a>
                offers a variety of programming courses that are perfect for developers looking to improve their skills.
                From foundational concepts to advanced techniques, these courses cover a wide range of topics and are
                suitable for developers at all levels.
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const showTooltip = ref(false);

        const toggleTooltip = () => {
            showTooltip.value = !showTooltip.value;
        };

        return {
            showTooltip,
            toggleTooltip,
        };
    },
}
</script>
