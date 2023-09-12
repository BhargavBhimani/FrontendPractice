<template>
    <div>
        <div class="bg-black px-4 py-6 lg:flex lg:flex-col items-center">
            <div class="text-white py-3">
                <p>Frontend Practice - © 2023</p>
            </div>
            <div>
                <ul class="font-semibold text-white mobile:flex ">
                    <li class="text-base hover:underline pr-4"><router-link to="/">Home</router-link></li>
                    <li class="text-base hover:underline pr-4"><router-link to="/projects">Projects</router-link></li>
                    <li class="text-base hover:underline pr-4"><router-link to="/blog">Blog</router-link></li>
                    <li class="text-base hover:underline pr-4"><router-link to="/faq">FAQ</router-link></li>
                    <li class="text-base hover:underline pr-4"><router-link to="/contact">Contact</router-link></li>
                    <li><a href="https://frontendpractice.substack.com/?showWelcome=true"
                            class="text-base hover:underline cursor-pointer">Newsletter &#8599;</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>