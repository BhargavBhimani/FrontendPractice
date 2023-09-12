<template>
    <div class="flex  mr-4 md:p-1 ">
        <span :style="dynamicStyle" class="inline-block min-w-[24px] w-6 h-6 border rounded-[50%]">
        </span>
        <p class="inline-block">{{ colour }}</p>
    </div>
</template>

<script>
export default {

    props: {
        colour: String
    },
    computed: {
        dynamicStyle() {
            return {
                backgroundColor: this.colour
            };
        }
    }
}
</script>