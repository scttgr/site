<template>
  <div class="flex-grow container mx-auto mt-10 px-4">
    <h2 class="p-8 text-5xl text-center">RELEASE</h2>
    <div>
      <div v-for="item in list" :key="item.key" class="mb-10">
        <div class="flex flex-wrap -mx-3">
          <div class="mb-6 px-3 w-full md:w-1/2">
            <img clas="max-w-full" :src="`https://raw.githubusercontent.com/scttgr/${item.repo}/master/banner.jpg`" alt="">
          </div>
          <vue-markdown class="mb-6 px-3 w-full md:w-1/2 readme" :source="item.body"></vue-markdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
// import {  } from 'vuex'

export default {
  components: {
    VueMarkdown,
  },
  computed: {
    list() {
      return this.$store.getters['release/list']
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$store.dispatch('release/initialize')
    },
  }
}
</script>

<style lang="postcss" scoped>
.readme {
  @apply leading-normal;
}
.readme >>> h1 {
  @apply mb-3 text-xl;
}
.readme >>> h2 {
  @apply mt-3 mb-2 text-lg;
}
.readme >>> h3 {
  @apply mt-3 mb-2 text-lg;
}
.readme >>> p {
  @apply mb-2 text-base;
}
</style>
