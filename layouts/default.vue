<template>
  <div class="app">
    <Header />
    <nuxt />
    <div style="height:50px"></div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header'
import Footer from '~/components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
.margin {
  margin: 0 auto;
}
</style>
