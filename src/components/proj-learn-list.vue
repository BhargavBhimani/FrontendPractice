<template>
    <div>
        <li class="list-[circle]">{{ list }}</li>
    </div>
</template>

<script>
export default {
    props: {
        list: String
    }
}
</script>