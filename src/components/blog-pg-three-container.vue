<template>
    <div class="max-w-3xl mx-auto px-4">
        <BlogTitle class="text-center my-16 leading-10 ">
            <h2 class="md:text-[64px] md:leading-[70px] hover:cursor-default">
                Frontend Practice and how it works.
            </h2>
        </BlogTitle>

        <hr class="my-16 border-[1px]" />

        <BlogDescription>At Frontend Practice, we believe there is great value in recreating real websites as a form of
            coding practice. With our large collection of hand-picked projects to choose from, there's something for
            everyone, no matter your skill level.
        </BlogDescription>

        <BlogDescription>
            One advantage of this particular type of coding practice is that you can use any technology you prefer,
            including HTML, CSS, JavaScript, or your favorite framework or library.
        </BlogDescription>


        <BlogTitle>To get started</BlogTitle>
        <BlogDescription>
            Create a new HTML, CSS, and JavaScript file and begin recreating the web pages that are featured in our
            projects. If you prefer to work with a specific framework or library, you can install the package of your choice
            with the command line and start building.
        </BlogDescription>
        <BlogDescription>
            Each project on Frontend Practice comes with a recommended course and helpful resources, including color
            palettes, reference images, and links to free photo assets and icons.
        </BlogDescription>
        <BlogDescription>
            We also provide a list of what you can learn from each project and unique challenges specific to each project,
            making it easy for you to focus on the skills you want to improve.
        </BlogDescription>

        <img src="../assets/Abletonimg.png" class="my-4">

        <BlogDescription>
            If you're just starting with frontend development, we recommend starting with the Level 1 projects, which focus
            on basic layouts, color choices, and simple animations. As you progress, you can move on to Level 2 projects,
            which offer a wider variety of designs, interactive elements, and more advanced animations.
        </BlogDescription>
        <BlogDescription>
            And if you're feeling confident and ready to push your skills to the next level, you can tackle the Level 3
            projects, which are some of the most complex and challenging projects on the site.
        </BlogDescription>

        <img src="../assets/projects.png" class="my-4">

        <BlogDescription>
            No matter your skill level, Frontend Practice has something to offer. So don't hesitate to dive in and start
            practicing - the only way to improve is through hands-on experience and hard work. So, start your journey today
            and become an even better frontend developer!
        </BlogDescription>

        <BlogTitle>Last but not least</BlogTitle>
        <BlogDescription>
            After building a project or two, showcase your skills and projects by creating your own portfolio website. Check
            out our article, "
            <RouterLink to="/blog/build-your-portfolio-faster" class="font-semibold underline">How to quickly build your
                developer portfolio</RouterLink>
            " for helpful tips.
        </BlogDescription>
        <BlogDescription>
            Until next time, happy coding!
        </BlogDescription>

        <BlogSubscribe />
    </div>
</template>

<script>
import BlogTitle from './blog-title.vue'
import BlogDescription from './blog-description.vue';
import BlogSubscribe from './blog-subscribe.vue';

export default {
    components: {
        BlogTitle,
        BlogDescription,
        BlogSubscribe
    }
}
</script>