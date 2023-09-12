<template>
    <div class="px-5 my-5">
        <details class="bg-orange-100  border-2 border-black max-w-3xl mx-auto">
            <summary class="p-3 text-2xl">
                <h2 class="inline hover:underline hover:cursor-pointer">{{ summary }}</h2>
            </summary>
            <p class="border-t-2 border-black p-3 bg-white text-lg" v-html="description"></p>
        </details>
    </div>
</template>

<script>
export default {
    props: {
        summary: String,
        description: String,
    }
}
</script>