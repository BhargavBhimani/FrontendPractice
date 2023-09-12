<template>
    <div class="pt-16">
        <div class="px-5 max-w-[350px] mx-auto text-center md:max-w-3xl">

            <Title class="my-8 text-[40px] md:text-7xl ">Project Library</Title>
            <Title class="underline text-[26px]">
                How to get started:
            </Title>

            <div class="my-5 max-w-sm space-y-3 text-lg text-left md:text-2xl md:max-w-[420px] md:mx-auto">
                <p>&rarr; Choose one of our projects below.</p>
                <p>&rarr; Recreate all or parts of the page.</p>
                <p>&rarr; Improve and test your skill.</p>
                <p class="font-semibold">&#10004; Become a better frontend developer.</p>
            </div>

        </div>

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