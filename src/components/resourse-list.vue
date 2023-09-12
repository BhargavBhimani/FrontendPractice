<template>
    <div class="font-semibold underline hover:text-blue-700">
        <a :href="link">{{ name }}</a>
    </div>
</template>

<script>
export default {
    props: {
        link: String,
        name: String,
    }
}
</script>