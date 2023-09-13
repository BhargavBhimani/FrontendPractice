<template>
    <div class="max-w-6xl mx-auto xlg:border-x-2 xlg:border-black">
        <div class="px-4 py-4 md:text-center border-b-2 border-black ">
            <h2 class="text-4xl font-semibold pt-4 mobile:text-5xl md:text-8xl">{{ pageData.title }}</h2>
            <h2 class="text-2xl font-semibold">{{ pageData.pageName }}</h2>
            <div class="flex flex-col font-semibold md:flex-row md:justify-center md:space-x-4 my-4    ">
                <div v-html="pageData.viewLive"></div>
                <div>&#128247; <a href="https://www.pexels.com" class="underline"> Free Photo Assest</a></div>
                <div>&#x2B50; <a href="https://boxicons.com/" class="underline">Open Source Icons</a></div>
            </div>
        </div>
        <div class="md:border-b-2 md:border-black md:flex">
            <div class="pb-5 px-4 border-b-2 border-black md:border-r-2 md:border-black md:border-b-0 md:w-1/4">
                <h2 class="text-2xl font-semibold my-5 md:text-center ">{{ pageData.recreateThisToLearn.learnTitle }}</h2>
                <div v-for="list in pageData.recreateThisToLearn.lists" :key="list.id">
                    <li class="list-[circle]">{{ list }}</li>
                </div>

            </div>
            <div
                class="flex flex-col px-4 border-b-2 border-black pb-4 md:border-r-2 md:border-black md:border-b-0 md:text-center md:w-1/4">
                <h2 class="text-2xl font-semibold my-5 ">{{ pageData.colorPalette.colorTitle }}
                </h2>
                <div class="text-left grid grid-cols-1 mobile:grid-cols-2 sm:grid-cols-3 md:grid-cols-1 xlg:grid-cols-2">

                    <div v-for="list in pageData.colorPalette.colorList" :key="list.id"
                        class="flex p-2 md:mx-auto max-w-[100px]">
                        <span :style="{ backgroundColor: list }"
                            class="inline-block min-w-[24px] w-6 h-6 border rounded-full"> </span>
                        <span>
                            &nbsp;{{ list }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="px-3 pb-4 border-b-2 border-black md:border-r-2 md:border-black md:border-b-0 md:w-1/4">
                <h2 class="text-2xl font-semibold my-5 md:text-center ">{{ pageData.recommendedCourse.courseTitle }}</h2>
                <div class="font-semibold my-2">
                    <p class="">
                        Frontend Masters offers a 100% free
                        "
                        <a href="https://frontendmasters.com/courses/web-development-v3/?utm_source=frontendpractice&utm_medium=website&utm_campaign=frontendpractice"
                            class="underline">
                            Complete Intro to Web Development
                        </a>"
                        course.
                    </p>
                </div>
            </div>
            <div class="px-4 border-b-2 border-black md:border-b-0 md:w-1/4">
                <h2 class="text-2xl font-semibold my-5 md:text-center ">{{ pageData.resources.resourceTitle }}</h2>
                <div v-for="list in pageData.resources.resourceList" :key="list.id"
                    class="flex underline font-semibold hover:text-blue-600">
                    <div v-html="list">
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 py-4 flex justify-center flex-wrap md:justify-center border-b-2 border-black">
            <div class="bg-black text-white max-w-sm p-4 m-2">
                <h2 class="text-3xl font-semibold">Up for challange?</h2>
                <p>{{ pageData.extraCredit.challangeDescription }}</p>
            </div>
            <div class="bg-black text-white max-w-sm p-4 m-2">
                <h2 class="text-3xl font-semibold">Too easy?</h2>
                <p>{{ pageData.extraCredit.easyDescription }}</p>
            </div>
            <div class="max-w-sm w-full p-4 m-2 border-2 border-black lg:w-max">
                <h2 class="text-3xl font-semibold">Too hard?</h2>
                <p>That's ok!</p>
                <RouterLink to="/projects" class="font-semibold underline">View other projects</RouterLink>
            </div>
        </div>
        <div class="p-4">
            <h2 class="text-4xl font-semibold text-center my-10">Referenced image</h2>
            <img :src="pageData.imgLink" class="mx-auto border-0 rounded-3xl shadow-md" alt="">
        </div>
    </div>
</template>

<script>
export default {

    props: {
        pageData: Object
    }

}
</script>