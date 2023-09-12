<template>
    <div>
        <ProjectContainer />

        <!-- <Cards /> -->
        <ProjCard />

        <hr class="border-[1px] border-black mb-2" />

        <RetiredProject />

        <RtCard />
    </div>
</template>

<script>
import ProjectContainer from '../components/project-container.vue';
// import Cards from '../components/cards.vue';
import RetiredProject from '../components/retired-project.vue';
import RtCard from '../components/rt-card.vue';
import ProjCard from '../components/proj-card.vue';
// import FilterBtn from '../components/filter-btn.vue';

export default {
    components: {
        ProjectContainer,
        ProjCard,
        // Cards,
        RetiredProject,
        RtCard,
    }
}
</script>