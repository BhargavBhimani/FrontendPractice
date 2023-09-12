<template>
    <div class="text-center my-20">
        <Title class="font-semibold max-w-xs mx-auto text-5xl my-5 mobile:text-6xl mobile:max-w-sm mobile:mx-auto">Frontend
            Practice Blog</Title>
        <p class="px-6 mb-20 md:text-xl md:max-w-2xl  md:mx-auto">Covering a wide range of topics, including project
            tutorials, responsive design, accessibility, testing, helpful tips, and more.</p>
    </div>
</template>

<script>

import Title from './title.vue';

export default {
    components: {
        Title,
    }
}
</script>