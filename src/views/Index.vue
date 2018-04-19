<template>
  <div class="Index">
    <Header></Header>
    <Content/>
   
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'




export default {

  name: 'Index',
  components: {
    Header,
    Content
  },
    data () {
    return {
      name: 'wxy'

    }
  },
}
</script>

<style>

</style>
