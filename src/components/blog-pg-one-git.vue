<template>
    <div class="text-left max-w-3xl mx-auto px-4">
        <Title class="text-4xl my-7">GitHub Pages</Title>
        <blockquote class="my-6">
            <Title class="bg-black text-white px-10 py-4 text-center text-xl">“Hosted directly from your GitHub repository.
                Just edit, push, and your changes are live.”</Title>
        </blockquote>
        <p class="my-6 text-xl">GitHub Pages is a free service provided by GitHub that allows you to host static websites.
            It is an excellent option for developers who are already using GitHub. With GitHub Pages, you can easily deploy
            your static websites directly from your repositories, and you can use custom domains to create a personalized
            URL for your site.</p>

        <Title class="text-2xl my-4">Pros:</Title>
        <ul class="list-[circle] my-4 px-4">
            <li>Free hosting for static websites</li>
            <li>Straightforward deployment with Git</li>
            <li>Custom domains and HTTPS support</li>
            <li>Supports Jekyll, a popular static site generator</li>
        </ul>
        <Title class="text-2xl my-4">Details:</Title>
        <ul class="list-[circle] my-4 px-4">
            <li>Pricing: Free</li>
            <li>SSL encryption: Yes</li>
            <li>URL: <a href="https://pages.github.com" class="font-semibold underline">https://pages.github.com</a> </li>
            <li>Documentation: <a href="https://docs.github.com/en/pages"
                    class="font-semibold underline">https://docs.github.com/en/pages</a>
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