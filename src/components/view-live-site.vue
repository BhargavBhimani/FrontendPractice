<template>
    <div>
        <span class="mx-2">&#127760; <a :href="link" class="underline cursor-pointer">View Live</a></span>
    </div>
</template>

<script>
     export default{
        props : {
            link : String,
        }
    }
</script>