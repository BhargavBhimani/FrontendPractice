<template>
    <div class="mb-10 px-4">
        <div class="max-w-lg mx-auto p-5 border-2 border-black text-center bg-orange-100">
            <p class="font-semibold text-lg">Join our newsletter and get the latest Frontend Practice updates and
                recommendations for websites, articles, and videos worth checking out.</p>
            <a href="https://frontendpractice.substack.com/?showWelcome=true">
                <Btn class="my-6 bg-white">Subscribe</Btn>
            </a>
        </div>
    </div>
</template>

<script>
import Btn from './btn.vue';
export default {
    components: {
        Btn,
    }
}
</script>