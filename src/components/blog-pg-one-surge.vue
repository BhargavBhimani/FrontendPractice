<template>
    <div class="text-left max-w-3xl mx-auto px-4">
        <Title class="text-4xl my-7">Surge</Title>
        <blockquote class="my-6">
            <Title class="bg-black text-white px-10 py-4 text-center text-xl">“Simple, single-command web publishing.
                Publish HTML, CSS, and JS for free, without leaving the command line.”</Title>
        </blockquote>
        <p class="my-6 text-xl">Surge.sh is a simple static web publishing service that allows you to quickly and
            easily host static websites. Surge is ideal for developers who need a quick
            and simple hosting solution. With Surge, you can deploy your static websites
            with just a few commands in the terminal, and you can use custom domains to
            create a personalized URL for your site.</p>

        <Title class="text-2xl my-4">Pros:</Title>
        <ul class="list-[circle] my-4 px-4">
            <li>Free hosting for static websites</li>
            <li>Easy to deploy with terminal commands</li>
            <li>Custom domains and HTTPS support</li>
            <li>Supports single-page applications and static assets</li>
        </ul>
        <Title class="text-2xl my-4">Details:</Title>
        <ul class="list-[circle] my-4 px-4">
            <li>Pricing: Free, with paid plans available</li>
            <li>GitHub integration: No</li>
            <li>SSL encryption: Yes</li>
            <li>URL: <a href="https://surge.sh" class="font-semibold underline">https://surge.sh</a> </li>
            <li>Documentation: <a href="https://surge.sh/help" class="font-semibold underline">https://surge.sh/help</a>
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