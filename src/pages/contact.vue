<template>
    <div class="bg-orange-100 ">
        <div class="max-w-md mx-auto">
            <ContactContainer />
            <ContactForm />
        </div>
    </div>
</template>

<script>
import ContactContainer from '../components/contact-container.vue';
import ContactForm from '../components/contact-form.vue';

export default {
    components: {
        ContactContainer,
        ContactForm
    }
}
</script>
