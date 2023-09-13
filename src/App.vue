<template>
  <NavigationBar />
  <RouterView></RouterView>
  <Footer />
</template>
<script>

import NavigationBar from './components/navigation-bar.vue';
import Footer from './components/fe-footer.vue';
// import { RouterView } from 'vue-router';


export default {
  name: 'App',
  components: {
    // RouterView,
    Footer,
    NavigationBar
  }
}

</script>



