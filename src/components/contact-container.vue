<template>
    <div class="px-3 py-9 bg-orange-100 ">
        <Title class="text-[50px]">Contact us.</Title>
        <p>You may find that our <strong class="underline"><router-link to="/faq">FAQ page</router-link></strong>has the
            answers that you are looking for. If not, feel free to reach out! </p>
    </div>
</template>

<script>
import Title from './title.vue';
import { RouterLink } from 'vue-router';
export default {
    components: {
        Title,
        RouterLink
    }
}
</script>