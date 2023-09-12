<template>
    <div class="max-w-6xl mx-auto xlg:border-l-2 xlg:border-r-2 xlg:border-black">
        <div class="px-4 md:text-center border-b-2 border-black ">

            <ProjectTitle title="Backstage Talks" />

            <ProjectPageType pageType="Magazine page" />

            <div class="flex flex-col font-semibold md:flex-row md:justify-center my-4">
                <ViewLiveSite link="https://backstagetalks.com/" />
                <ProjectLinkContainer />
            </div>
        </div>
        <div class=" md:border-b-2 md:border-black md:flex">
            <div class="pb-5 px-4 border-b-2 border-black md:border-r-2 md:border-black md:border-b-0 md:w-1/4">
                <ProjDetailTitle title="Recreate this to learn: " />
                <ProjLearnList list="Scroll transitions." />
                <ProjLearnList list="Color choices." />
                <ProjLearnList list="Fixed content." />
                <ProjLearnList list="Minimal layout." />
                <ProjLearnList list="and more!" />
            </div>
            <div
                class="flex flex-col px-4 border-b-2 border-black pb-4 md:border-r-2 md:border-black md:border-b-0 md:text-center md:w-1/4">
                <ProjColorPalette />
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <ProjColor colour="#00c1b5" />
                    <ProjColor colour="#ff651a" />
                    <ProjColor colour="#ffbe00" />
                    <ProjColor colour="#1d3fbb" />
                    <ProjColor colour="#e30512" />
                </div>
            </div>

            <!-- <RecommendedCourse /> -->
            <div class="px-3 pb-4 border-b-2 border-black md:border-r-2 md:border-black md:border-b-0 md:w-1/4">
                <ProjDetailTitle title="Recommended Course:">Recommended Course:</ProjDetailTitle>
                <ProjDetailsInnerTwo />
            </div>

            <div>

            </div>

            <div class="px-4 border-b-2 border-black md:border-b-0 md:w-1/4">
                <ProjDetailTitle title="Resources:" />
                <ResourseList name="Create a anchor link" link="https://www.w3schools.com/html/html_links_bookmarks.asp" />
                <ResourseList name="Fixed Positioning"
                    link="https://www.w3schools.com/css/css_positioning.asp#:~:text=An%20element%20with%20position%3A%20fixed,would%20normally%20have%20been%20located." />
                <ResourseList name="Practical CSS Scroll Snapping"
                    link="https://css-tricks.com/practical-css-scroll-snapping/" />
            </div>
        </div>
        <div class="px-4 py-4 flex flex-wrap md:justify-center border-b-2 border-black">
            <div class="bg-black text-white max-w-sm p-4 m-2">
                <CreditTitle title="Up for challange?" />
                <p>Create the full-page scroll background transitions & anchor link.</p>
            </div>
            <div class="bg-zinc-700 text-white max-w-sm p-4 m-2">
                <CreditTitle title="Too easy?" />
                <p>Make it mobile responsive. You'll notice there is no full-page scroll on smaller screens.</p>
            </div>
            <div class="max-w-sm w-full p-4 m-2 border-2 border-black lg:w-max">
                <CreditTitle title="Too hard?" />
                <p>That's ok!</p>
                <RouterLink to="/projects" class="font-semibold underline">View other projects</RouterLink>
            </div>
        </div>
        <div>
            <ReferenceImg />
            <img src="../assets/proj-Backstage-Talks.png" class="p-4 mx-auto border-0 rounded-[35px]" alt="">
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
        ProjDetailsInnerTwo,
        ViewLiveSite
    }
}
</script>