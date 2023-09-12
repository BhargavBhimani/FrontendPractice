<template>
    <div class="mx-auto">
        <div
            class="max-w-xs mx-5 my-5 relative mb-3 hover:translate-y-[-10px] hover:transition hover:duration-300 hover:ease-in delay-0">
            <RouterLink :to="path">
                <img :src="imgs" class="border-2 border-black ">
                <div
                    class="bg-[#faebd7] font-semibold border-l-2 max-w-md border-r-2 border-b-2 border-black min-w-[259px] px-2 text-2xl underline">
                    <h2>{{ title }}</h2>
                </div>
            </RouterLink>
            <div class="border-2 max-w-md border-black absolute px-2 py-1 right-[-10px] top-[-7.5px] z-10 font-semibold"
                :class="{ 'bg-lime-200': level === 1, 'bg-yellow-200': level === 2, 'bg-amber-400': level === 3 }">
                <p>Level {{ level }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    props: {
        imgs: String,
        title: String,
        level: Number,
        path: String
    }
}
</script>
