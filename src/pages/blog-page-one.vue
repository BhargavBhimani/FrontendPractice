<template>
    <div>
        <BlogPgOneInfo />
        <BlogPgOneNetlify />
        <BlogPgOneVercel />
        <BlogPgOneGit />
        <BlogPgOneSurge />
        <BlogPgObeConclusion />
        <BlogSubscribe />
    </div>
</template>

<script>
    import BlogPgOneInfo from '../components/blog-pg-one-info.vue';
    import BlogPgOneNetlify from '../components/blog-pg-one-netlify.vue';
    import BlogPgOneVercel from '../components/blog-pg-one-vercel.vue';
    import BlogPgOneGit from '../components/blog-pg-one-git.vue';
    import BlogPgOneSurge from '../components/blog-pg-one-surge.vue';
    import BlogPgObeConclusion from '../components/blog-pg-one-conclusion.vue';
    import BlogSubscribe from '../components/blog-subscribe.vue'

    export default {
        components : {
            BlogPgOneInfo,
            BlogPgOneNetlify,
            BlogPgOneVercel,
            BlogPgOneGit,
            BlogPgOneSurge,
            BlogPgObeConclusion,
            BlogSubscribe,
        }
    }
</script>
