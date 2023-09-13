<template>
    <div>
        <h2 class="text-2xl font-semibold">{{ pageType }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        pageType: String
    }
}
</script>