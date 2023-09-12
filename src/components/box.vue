<template>
    <div
        class="border-2 border-black mx-5 my-5 max-w-sm flex flex-col items-center px-3 py-5 text-center md:flex-row space-y-5 lg:max-w-[470px] lg:my-5">
        <img :src="image" class="w-16 mr-2" />
        <p class="text-lg">{{ description }}</p>
    </div>
</template>
  
<script>
export default {
    props: {
        image: String,
        description: String
    }
}
</script>
  
  