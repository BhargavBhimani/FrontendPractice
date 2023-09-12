<template>
    <div class="max-w-6xl mx-auto xlg:border-l-2 xlg:border-r-2 xlg:border-black">
        <div class="px-4 md:text-center border-b-2 border-black ">

            <ProjectTitle title="Lobe" />

            <ProjectPageType pageType="Tour page" />

            <div class="flex flex-col font-semibold md:flex-row md:justify-center my-4">
                <ViewLiveSite link="https://www.lobe.ai/tour" />
                <ProjectLinkContainer />
            </div>
        </div>
        <div class=" md:border-b-2 md:border-black md:flex">
            <div class="pb-5 px-4 border-b-2 border-black md:border-r-2 md:border-black md:border-b-0 md:w-1/4">
                <ProjDetailTitle title="Recreate this to learn: " />
                <ProjLearnList list="Hover animations" />
                <ProjLearnList list="Video overlay" />
                <ProjLearnList list="Minimal layout" />
                <ProjLearnList list="Multi-column footer" />
                <ProjLearnList list="and more!" />
            </div>
            <div
                class="flex flex-col px-4 border-b-2 border-black pb-4 md:border-r-2 md:border-black md:border-b-0 md:text-center md:w-1/4">
                <ProjColorPalette />
                <div class="grid grid-cols-1 md:grid-cols-2 ">
                    <ProjColor colour="#04ddb2" />
                    <ProjColor colour="#333" />
                    <ProjColor colour="#fff" />
                    <ProjColor colour="#767676" />
                </div>
            </div>

            <!-- <RecommendedCourse /> -->
            <div class="px-3 pb-4 border-b-2 border-black md:border-r-2 md:border-black md:border-b-0 md:w-1/4">
                <ProjDetailTitle title="Recommended Course:">Recommended Course:</ProjDetailTitle>
                <ProjDetailsInnerTwo />
            </div>

            <div class="px-4 border-b-2 border-black md:border-b-0 md:w-1/4">
                <ProjDetailTitle title="Resources:" />
                <ResourseList name="Beginner’s Guide to Web Animation"
                    link="https://www.viget.com/articles/beginners-guide-to-web-animation-part-1/" />
                <ResourseList name="Video image overlay (example)" link="https://codepen.io/JonasSkjodt/pen/bvYegr" />
                <ResourseList name="Multi-Level Sticky Footer"
                    link="https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-multi-level-sticky-footer-with-flexbox--cms-33341" />
            </div>
        </div>
        <div class="px-4 py-4 flex flex-wrap md:justify-center border-b-2 border-black">
            <div class="bg-black text-white max-w-sm p-4 m-2">
                <CreditTitle title="Up for challange?" />
                <p>Add the opaque background to the navigation menu/bar.</p>
            </div>
            <div class="bg-zinc-700 text-white max-w-sm p-4 m-2">
                <CreditTitle title="Too easy?" />
                <p>Build the hamburger menu and animation that appears when on smaller screens.</p>
            </div>
            <div class="max-w-sm w-full p-4 m-2 border-2 border-black lg:w-max">
                <CreditTitle title="Too hard?" />
                <p>That's ok!</p>
                <RouterLink to="/projects" class="font-semibold underline">View other projects</RouterLink>
            </div>
        </div>
        <div>
            <ReferenceImg />
            <img src="../assets/proj-lobe.png" class="p-4 border-0 rounded-[35px]" alt="">
        </div>
    </div>
</template>

<script>
import ProjectTitle from '../components/project-title.vue';
import ProjectPageType from '../components/project-page-type.vue';
import ProjectLinkContainer from '../components/project-link-container.vue'
import ProjRecreate from '../components/proj-recreate.vue';
import ProjColorPalette from '../components/proj-color-palette.vue';
import RecommendedCourse from '../components/recommended-course.vue';
import Resourse from '../components/resourse.vue';
import CreditTitle from '../components/credit-title.vue';
import ProjDetailTitle from '../components/proj-detail-title.vue';
import ProjLearnList from '../components/proj-learn-list.vue';
import ProjColor from '../components/proj-color.vue';
import ResourseList from '../components/resourse-list.vue';
import ReferenceImg from '../components/reference-img.vue';
import ProjDetailsInner from '../components/proj-details-inner.vue';
import ProjDetailsInnerTwo from '../components/proj-details-inner-two.vue';
import ViewLiveSite from '../components/view-live-site.vue';

export default {
    components: {
        ProjectTitle,
        ProjectPageType,
        ProjectLinkContainer,
        ProjRecreate,
        ProjColorPalette,
        RecommendedCourse,
        Resourse,
        CreditTitle,
        ProjDetailTitle,
        ProjLearnList,
        ProjColor,
        ResourseList,
        ReferenceImg,
        ProjDetailsInner,
        ProjDetailsInnerTwo,
        ViewLiveSite
    }
}
</script>