<template>
    <div class="text-left max-w-3xl mx-auto px-4">
        <Title class="text-4xl my-7">Vercel</Title>
        <blockquote class="my-6">
            <Title class="bg-black text-white px-10 py-4 text-center text-xl">“Vercel is the platform for frontend
                developers, providing the speed and reliability innovators need to create at the moment of inspiration.”
            </Title>
        </blockquote>
        <p class="my-6 text-xl">Vercel is a hosting platform that specializes in hosting frontend projects built with
            frameworks like React, Next.js, and Vue.js. Vercel is designed to optimize performance and provide a seamless
            developer experience. With Vercel, you can deploy your projects with one click, and you can take advantage of
            features like automatic scaling, instant cache invalidation, and global CDN.</p>

        <Title class="text-2xl my-4">Pros:</Title>
        <ul class="list-[circle] my-4 px-4">
            <li>Automatic scaling and global CDN</li>
            <li>Automatic build optimizations</li>
            <li>Serverless functions and API routes</li>
            <li>Easy integrations with popular frontend frameworks</li>
        </ul>
        <Title class="text-2xl my-4">Details:</Title>
        <ul class="list-[circle] my-4 px-4">
            <li>Pricing: Free, with paid plans available</li>
            <li>SSL encryption: Yes</li>
            <li>URL: <a href="https://vercel.com" class="font-semibold underline">https://vercel.com</a> </li>
            <li>Documentation: <a href="https://vercel.com/docs" class="font-semibold underline">https://vercel.com/docs</a>
            </li>
        </ul>
    </div>
</template>

<script>
import Title from './title.vue';

export default {
    components: {
        Title
    }
}
</script>