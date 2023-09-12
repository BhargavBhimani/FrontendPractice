<template>
    <div>
        <h1 class="text-[40px] font-semibold pt-4 mobile:text-[52px] md:text-[105px]">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>