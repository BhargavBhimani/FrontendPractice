<template>
    <div class="mt-20 mb-32 max-w-3xl mx-auto">
        <hr class="border-black" />

        <div class="flex items-center justify-between hover:bg-slate-100">
            <RouterLink to="/blog/Where-to-host-your-frontend-projects">
                <Title class="px-5 py-4 text-2xl hover:underline"> Where to host your frontend projects. </Title>
            </RouterLink>
            <div class="hidden  mobile:flex">
                <BlogPostRounded>Hosting</BlogPostRounded>
                <BlogPostRounded>Projects</BlogPostRounded>
            </div>
        </div>
        <hr class="border-black" />

        <div class="flex items-center justify-between hover:bg-slate-100">
            <RouterLink to="/blog/build-your-portfolio-faster">
                <Title class="px-5 py-4 text-2xl hover:underline"> How to quickly build your developer portfolio. </Title>
            </RouterLink>
            <div class="hidden  mobile:flex">
                <BlogPostRounded>Tips</BlogPostRounded>
                <BlogPostRounded>Portfolio</BlogPostRounded>
            </div>
        </div>
        <hr class="border-black" />

        <div class="flex items-center justify-between hover:bg-slate-100">
            <RouterLink to="/blog/frontend-practice-how-it-works">
                <Title class="px-5 py-4 text-2xl hover:underline"> Frontend Practice and how it works. </Title>
            </RouterLink>
            <div class="hidden  mobile:flex">
                <BlogPostRounded>Project</BlogPostRounded>
                <BlogPostRounded class="w-max">How-to</BlogPostRounded>
            </div>
        </div>
        <hr class="border-black" />

    </div>
</template>

<script>
import Title from './title.vue';
import BlogPostRounded from './blog-post-rounded.vue'
import { RouterLink } from 'vue-router'

export default {
    components: {
        Title,
        BlogPostRounded,
        RouterLink
    }
}
</script>