<template>
    <Title class="text-6xl md:text-7xl my-16 text-center max-w-2xl mx-auto">Frenquntly Asked Questions</Title>

    <questions-container />
</template>
<script>
import Title from '../components/title.vue';
import QuestionsContainer from '../components/questions-container.vue'

export default{
    components:{
        Title , QuestionsContainer 
    }
}
</script>