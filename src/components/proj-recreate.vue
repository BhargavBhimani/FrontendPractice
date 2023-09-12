<template>
    <div class="pb-5 px-4 border-b-2 border-black md:border-r-2 md:border-black md:border-b-0 md:w-1/4">
        <ProjDetailTitle title="Recreate this to learn: " />
        <ProjLearnList list="Typography choice" />
        <ProjLearnList list="Spacing" />
        <ProjLearnList list="Unique grid layout" />
        <ProjLearnList list="Multi-column footer" />
        <ProjLearnList list="and more!" />
    </div>
</template>

<script>
import ProjDetailTitle from './proj-detail-title.vue';
import ProjLearnList from './proj-learn-list.vue';
export default {
    components: {
        ProjDetailTitle,
        ProjLearnList
    }
}
</script>