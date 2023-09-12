<template>
    <div class="my-20">
        <question-container v-for="(question, index) in questions" :key="index" :summary="question.summary"
            :description="question.descriptionContent" />
    </div>
</template>

<script>
import QuestionContainer from './question-container.vue';
import { RouterLink } from 'vue-router';
export default {
    components: {
        QuestionContainer, RouterLink
    },
    data() {
        return {
            questions: [
                {
                    summary: 'What is Frontend Practice?',
                    descriptionContent: 'Frontend Practice offers developers the opportunity to practice and improve their skills in design, interactions, animations, responsiveness, troubleshooting, and more by providing a selection of real websites for them to recreate from scratch. This hands-on approach allows developers to gain a diverse set of valuable skills that will make them more employable in the industry.'
                },
                {
                    summary: 'Where is the code? || I need help.',
                    descriptionContent: 'Frontend Practice does not provide any pre-written code, but we do offer a few resources to assist with each project. However, there will always be unexpected challenges that arise during the learning process, which is where the true learning begins. <br /><br /> If you want a more structured approach to learning coding, consider taking Frontend Masters <a href="" class="underline font-semibold hover:cursor-pointer hover:text-blue-700">"Complete Intro to Web Development"</a> or <a href="" class="underline font-semibold hover:cursor-pointer hover:text-blue-700">"Getting Started With CSS"</a> courses, which are <strong> completely free.</strong> <br /><br /> <a href="" class="underline font-semibold hover:cursor-pointer hover:text-blue-700">Frontend Masters</a> offers a variety of programming courses that are perfect for developers looking to improve their skills. From foundational concepts to advanced techniques, these courses cover a wide range of topics and are suitable for developers at all levels.'
                },
                {
                    summary: 'Which languages do I use for these projects?',
                    descriptionContent: 'In short, you can use any programming language you desire for these practice projects. <br> The beauty of recreating websites for practice is that you can utilize any tech stack, such as HTML, CSS, JavaScript, React, Vue, Angular, Svelte, or any other language, framework, or library.'
                },
                {
                    summary: 'Where can I find images and icons?',
                    descriptionContent: '<a href=" "class="underline font-semibold hover:cursor-pointer hover:text-blue-700">Pexels</a> and <a href=" "class="underline font-semibold hover:cursor-pointer hover:text-blue-700">Pixabay</a> are excellent sources for free stock photos, while <a href=" "class="underline font-semibold hover:cursor-pointer hover:text-blue-700"> Boxicons</a> and <a href=" "class="underline font-semibold hover:cursor-pointer hover:text-blue-700"> Font Awesome </a> offer a variety of free icons. Links to these resources can be found at the top of every project page on Frontend Practice.'
                },
                {
                    summary: 'Why did you pick these websites?',
                    descriptionContent: 'The selection of websites featured on Frontend Practice is based on personal preference and takes into consideration various factors, including design and style, difficulty to recreate, and elements and features that offer a learning opportunity through recreation. <br><br><i>It is important to note that some projects may be more challenging to recreate than others.</i>'
                },
                {
                    summary: 'Can I use these in my portfolio?',
                    descriptionContent: 'We encourage you to make these projects your own by incorporating your own colors, content, and images. If you choose to use these projects for your portfolio, please clearly state that it is an "unofficial" version. <br /><br /> <strong>It is important to note that these are practice projects and all materials owned by companies and individuals whose websites are featured on Frontend Practice are intended for practice purposes only.</strong>'
                },
                {
                    summary: 'Why does the live website not look like the project anymore?',
                    descriptionContent: 'How dare they update the website! We will talk with their manager right away. If they don&apos;t respond, we&apos;ll periodically check the websites we feature and make the necessary updates. <br /><br />In some cases, if we really love the previous design, we may keep it and link to an archived page if possible. If not, please see the reference image on the project page.'
                },
                {
                    summary: 'Where did some of the projects go?',
                    descriptionContent: 'Occasionally we will retire projects from the main collection if the design is no longer up to date or an archived version is not available.<br /><br /> <strong>You can still find the retired projects at the bottom of our <p class="inline underline font-semibold hover:cursor-pointer hover:text-blue-700"> <router-link to="/projects">Projects</router-link></p> page.</strong> '
                },
            ]
        }
    },
}
</script>