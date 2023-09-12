<template>
    <div class="px-4 border-b-2 border-black md:border-b-0 md:w-1/4">
        <ProjDetailTitle title="Resources:" />
        <ResourseList name="A Complete Guide to Grid" link="https://css-tricks.com/snippets/css/complete-guide-grid/" />
        <ResourseList name="A Complete Guide to FlexBox" link="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" />
        <ResourseList name="Css Box Model" link="https://www.w3schools.com/css/css_boxmodel.asp" />
        <ResourseList name="Multi-level Stickey Footer"
            link="https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-multi-level-sticky-footer-with-flexbox--cms-33341" />
    </div>
</template>

<script>
import ProjDetailTitle from './proj-detail-title.vue';
import ResourseList from './resourse-list.vue';
export default {
    components: {
        ProjDetailTitle,
        ResourseList,
    }
}
</script>