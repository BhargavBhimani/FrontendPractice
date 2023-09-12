<template>
    <div class="px-3 pb-4 border-b-2 border-black md:border-r-2 md:border-black md:border-b-0 md:w-1/4">
        <ProjDetailTitle title="Recommended Course:">Recommended Course:</ProjDetailTitle>
        <ProjDetailsInner />
    </div>
</template>

<script>
import ProjDetailTitle from './proj-detail-title.vue';
import ProjDetailsInner from './proj-details-inner.vue'
export default {
    components: {
        ProjDetailTitle,
        ProjDetailsInner,
    },

};

</script>