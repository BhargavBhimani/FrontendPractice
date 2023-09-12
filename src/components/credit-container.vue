<template>
    <div class="px-4 py-4 flex flex-wrap md:justify-center border-b-2 border-black">
        <div class="bg-black text-white max-w-sm p-4 m-2">
            <CreditTitle title="Up for challange?" />
            <p>Try building the mega-menu that appears when you click "More +" in the main menu.</p>
        </div>
        <div class="bg-zinc-700 text-white max-w-sm p-4 m-2">
            <CreditTitle title="Too easy?" />
            <p>Is it responsive on mobile? Make the 2nd menu bar sticky on scroll.</p>
        </div>
        <div class="max-w-sm w-full p-4 m-2 border-2 border-black lg:w-max">
            <CreditTitle title="Too hard?" />
            <p>That's ok!</p>
            <RouterLink to="/projects" class="font-semibold underline">View other projects</RouterLink>
        </div>
    </div>
</template>

<script>
import CreditTitle from './credit-title.vue';
export default {
    components: {
        CreditTitle
    }
}
</script>