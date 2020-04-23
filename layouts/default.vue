<template>
  <div class="app">
    <Header />
    <nuxt />
    <div style="height:50px"></div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/header";
import Footer from "~/components/footer";
export default {
  components: {
    Header,
    Footer
  },
  // asyncData() {
  //   return new Promise(resolve => {
  //     setTimeout(function() {
  //       resolve({});
  //     }, 1000);
  //   });
  // },
  loading:true
};
</script>
<style>
.margin {
  margin: 0 auto;
}
</style>
