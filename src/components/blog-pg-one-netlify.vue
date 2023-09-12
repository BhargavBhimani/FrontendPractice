<template>
    <div class="text-left max-w-3xl mx-auto px-4">
        <Title class="text-4xl my-7">Netlify</Title>
        <blockquote class="my-6">
            <Title class="bg-black text-white px-10 py-4 text-center text-xl">“The fastest way to combine your favorite
                tools and APIs to build the fastest sites, stores, and apps for the web.”</Title>
        </blockquote>
        <p class="my-6 text-xl">Netlify is a hosting platform that provides a range of features for web development,
            including continuous
            deployment, custom domain support, and HTTPS encryption. Netlify is an all-in-one platform that makes it easy to
            build, deploy, and manage your frontend projects. Also, their drag-and-drop interface makes it unbelievably easy
            to deploy new projects.</p>

        <Title class="text-2xl my-4">Pros:</Title>
        <ul class="list-[circle] my-4 px-4">
            <li>Continuous deployment with Git integration</li>
            <li>Custom domains and HTTPS support</li>
            <li>Automatic builds and deploy previews</li>
            <li>Serverless functions and form handling</li>
        </ul>
        <Title class="text-2xl my-4">Details:</Title>
        <ul class="list-[circle] my-4 px-4">
            <li>Pricing: Free, with paid plans available</li>
            <li>SSL encryption: Yes</li>
            <li>URL: <a href="https://netlify.com" class="font-semibold underline">https://netlify.com</a> </li>
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