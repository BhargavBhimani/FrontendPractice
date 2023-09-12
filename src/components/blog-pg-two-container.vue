<template>
    <div class="max-w-3xl mx-auto  px-4">
        <div>
            <BlogTitle class="text-center my-20">
                <h2 class="md:text-[64px]">
                    How to quickly build your developer portfolio
                </h2>
            </BlogTitle>
            <hr class="my-16 border-[1px]" />

            <BlogDescription>
                Building a new developer portfolio can seem daunting and it's easy to
                continuously delay going live. I've been
                there and know how frustrating it can be. But not to worry, I have some tips to help you cross the finish
                line and publish your portfolio.
            </BlogDescription>
        </div>

        <div id="first-and-foremost">
            <a href="#first-and-foremost">
                <BlogTitle>
                    First and foremost, start.
                </BlogTitle>
            </a>
            <BlogDescription>
                It may sound simple, but this is the most important piece of advice I can give
                you. No one but you is going to create your portfolio. So, get started!
            </BlogDescription>
        </div>

        <div id="before-you-start-coding-pick-a-theme">
            <a href="#before-you-start-coding-pick-a-theme">
                <BlogTitle>
                    Before you start coding, pick a theme.
                </BlogTitle>
            </a>
            <BlogDescription>
                Having a theme in mind while building can significantly speed up the creation
                of your portfolio. By "theme", I mean the overall look and feel you want for your website, such as minimal,
                a black-and-white palette, a grid-focused approach, etc. Once you have decided on your theme, stick to it!
            </BlogDescription>
        </div>

        <div id="when-in-doubt-look-for-inspiration">
            <a href="#when-in-doubt-look-for-inspiration">
                <BlogTitle>
                    When in doubt, look for inspiration.
                </BlogTitle>
            </a>
            <BlogDescription>
                Looking at websites other developers and designers have created can be an
                invaluable source of both inspiration and knowledge. However, I'm not suggesting that you copy someone
                else's work. Instead, let their designs spark your creativity and teach you new design techniques and
                trends.
            </BlogDescription>
            <BlogDescription>
                One of my favorite inspirational resources is <a href="https://www.siteinspire.com/"
                    class="font-semibold underline">Siteinspire</a>
            </BlogDescription>
        </div>

        <div id="Write-your-content-before-building-a-new-page">
            <a href="#Write-your-content-before-building-a-new-page">
                <BlogTitle>
                    Write your content before building a new page.
                </BlogTitle>
            </a>
            <BlogDescription>
                Before you start on a new page, try writing down your content or most of it.This allows you to focus solely
                on the content of your page without worrying about the coding or design. Plus it will also speed up the
                building process as you'll have real content to work with.
            </BlogDescription>
        </div>

        <div id="Finish-one-part-and-quickly-move-to-the-next">
            <a href="#Finish-one-part-and-quickly-move-to-the-next">
                <BlogTitle>
                    Finish one part and quickly move to the next.
                </BlogTitle>
            </a>
            <BlogDescription>
                Avoid making constant changes to the same section. This might be great for
                exploring new designs and ideas but not for finishing your portfolio in a timely manner.
            </BlogDescription>
            <BlogDescription>
                Get your basic layout, colors, and content setup, and then move on to the next
                section. Once you've built out your page, then go back through and make any necessary changes.
            </BlogDescription>
        </div>

        <div id="Projects-If-youre-proud-of-it-include-it">
            <a href="">
                <BlogTitle>
                    Projects If youre proud of it include it.
                </BlogTitle>
            </a>
            <BlogDescription>
                This is one is pretty self-explanatory. There is no need to include every
                project you have ever built since
                you started programming.
            </BlogDescription>
            <BlogDescription> Ask yourself two questions:</BlogDescription>

            <ol class="list-decimal px-4 my-4">
                <li>"Am I proud of this project?"</li>
                <li>"Would I be willing to show this to a potential employer or client?"</li>
            </ol>
        </div>

        <div id="set-a-soft-deadline">
            <a href="#set-a-soft-deadline">
                <BlogTitle>set a [soft] deadline</BlogTitle>
            </a>
            <BlogDescription>
                Even if it's two weeks or two months, set a soft deadline and try your best to
                stick to it but also be realistic in regards to your own life and how much time you have to work on it.
            </BlogDescription>
            <BlogDescription>
                Two months is a reasonable deadline to set for yourself. This is long enough
                to spend quite a few hours working on your portfolio. Remember, the goal is to finish your portfolio, it
                does not have to be absolutely perfect. You can always come back and make changes later.
            </BlogDescription>
        </div>

        <div id="Share-your-progress">
            <a href="#Share-your-progress">
                <BlogTitle>Share your progress.</BlogTitle>
            </a>
            <BlogDescription>
                Sharing with friends and family, or on social media is a great motivator to
                finish your portfolio. It provides accountability, feedback, and support when you need it most.
            </BlogDescription>
            <BlogDescription>
                Sharing with friends and family, or on social media is a great motivator to
                finish your portfolio. It provides accountability, feedback, and support when you need it most.
            </BlogDescription>
        </div>

        <div id="most-importantly-have-fun-with-it">
            <a href="#most-importantly-have-fun-with-it">
                <BlogTitle>Most importantly, have fun with it.</BlogTitle>
            </a>
            <BlogDescription>
                Try not to overthink it. This is your little slice of the internet and you can
                do whatever you want with it. Make it as simple or as complex as you want.
            </BlogDescription>
        </div>

        <div id="and-finally-go-live">
            <a href="#and-finally-go-live">
                <BlogTitle>And finally, go live!</BlogTitle>
            </a>
            <BlogDescription>
                Take a deep breath, pat yourself on the back, and hit that publish button! There are plenty of options out
                there for hosting, so do your research. We share a handful of recommendations in our&nbsp;<RouterLink
                    to="/blog/Where-to-host-your-frontend-projects" class="font-semibold underline">
                    Where to Host your Frontend Projects
                </RouterLink> article.
            </BlogDescription>
            <BlogDescription>Until next time, happy coding!</BlogDescription>
        </div>


        <BlogSubscribe />
    </div>
</template>

<script>
import Title from './title.vue';
import BlogTitle from './blog-title.vue';
import BlogDescription from './blog-description.vue';
import BlogSubscribe from './blog-subscribe.vue';

export default {
    components: {
        Title,
        BlogSubscribe,
        BlogTitle,
        BlogDescription,
    }
}
</script>