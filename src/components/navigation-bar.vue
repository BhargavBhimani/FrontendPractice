<template>
    <nav class="sticky top-0 w-full z-50">
        <div class="p-4 bg-white border-b-2 border-black">
            <div class="container mx-auto flex justify-between lg:max-w-6xl">
                <div class=" font-bold text-lg">
                    <RouterLink to="/">
                        <h1 class="text-2xl hover:underline font-semibold lg:text-3xl">Frontend Practice</h1>
                    </RouterLink>
                </div>

                <div class="lg:hidden">
                    <button @click="isMenuOpen = !isMenuOpen" class="focus:outline-none">
                        <svg viewBox="0 0 24 24" class="w-8 h-8 fill-current relative z-50">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:flex space-x-4 font-semibold">
                    <RouterLink to="/" class="text-lg hover:underline lg:px-5 cursor-pointer">Home</RouterLink>
                    <RouterLink to="/projects" class="text-lg hover:underline lg:px-4 cursor-pointer">Projects</RouterLink>
                    <RouterLink to="/blog" class="text-lg hover:underline lg:px-4 cursor-pointer">Blog</RouterLink>
                    <RouterLink to="/faq" class="text-lg hover:underline lg:px-4 cursor-pointer">FAQ</RouterLink>
                    <RouterLink to="/contact" class="text-lg hover:underline lg:px-4 cursor-pointer">Contact</RouterLink>
                    <a href="https://frontendpractice.substack.com/?showWelcome=true"
                        class="text-lg hover:underline lg:px-4 cursor-pointer">Newsletter&#8599;</a>
                </div>
            </div>

            <div v-if="isMenuOpen"
                class="font-semibold flex flex-col lg:hidden w-[280px] bg-white fixed z-10 right-0 top-0 py-12 px-4 space-y-4 h-[100vh] border-l-2 border-black lg:border-hidden lg:h-11 lg:items-center">
                <RouterLink to="/" class="text-lg hover:underline lg:px-5 cursor-pointer">Home</RouterLink>
                <RouterLink to="/projects" class="text-lg hover:underline lg:px-4 cursor-pointer">Projects</RouterLink>
                <RouterLink to="/blog" class="text-lg hover:underline lg:px-4 cursor-pointer">Blog</RouterLink>
                <RouterLink to="/faq" class="text-lg hover:underline lg:px-4 cursor-pointer">FAQ</RouterLink>
                <RouterLink to="/contact" class="text-lg hover:underline lg:px-4 cursor-pointer">Contact</RouterLink>
                <a href="https://frontendpractice.substack.com/?showWelcome=true"
                    class="text-lg hover:underline lg:px-4 cursor-pointer">Newsletter&#8599;</a>
            </div>
        </div>

    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
};
</script>
  