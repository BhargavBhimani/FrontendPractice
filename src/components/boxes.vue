<template>
  <div
    class="flex flex-col items-center mx-6 my-3 lg:flex lg:flex-row lg:flex-wrap lg:mx-2  lg:justify-center lg:items-center">
    <Box v-for="(box, index) in boxes" :key="index" :image="box.image" :description="box.description" />
  </div>
</template>
  
<script>
import Box from './box.vue';

export default {
  components: {
    Box
  },
  data() {
    return {
      boxes: [
        {
          image: '/src/assets/1.png',
          description: 'Enhance your skills by building real websites selected for their educational value.'
        },

        {
          image: '/src/assets/2.png',
          description: 'Test and improve your frontend knowledge through various challenges.'
        },

        {
          image: '/src/assets/3.png',
          description: 'Use the provided color palettes for each project to save time.'
        },

        {
          image: '/src/assets/4.png',
          description: 'Find helpful, curated resources to tackle challenging elements.'
        }

      ]
    };
  }
}
</script>
  