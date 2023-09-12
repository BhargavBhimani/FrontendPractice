<template>
    <div>
        <BlogContainer />
        <BlogPostContainer />
    </div>
</template>

<script>

import BlogContainer from '@/components/blog-container.vue';
import BlogPostContainer from '../components/blog-post-container.vue';

export default {
    data() {
        return {
            name: 'Blog'
        }
    },
    components: {
        BlogContainer,
        BlogPostContainer
    }
}
</script>