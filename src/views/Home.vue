<template>
  <div class="flex-grow flex flex-col">
    <div class="helloworld"></div>
    <div class="news py-12">
      <div class="container mx-auto px-4">
        <h2 class="mb-6 pb-3 border-b">News</h2>
        <article class="news-item mb-10" v-for="item in list" :key="item.key">
          <div class="mb-1">
            <a class="text-black text-sm no-underline hover:underline" :href="item.url" target="_blank">{{ item.date }}</a>
          </div>
          <div class="news-body" v-html="bodyFormat(item.body)"></div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
// import {  } from 'vuex'

export default {
  computed: {
    list() {
      return this.$store.getters['news/list']
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$store.dispatch('news/initialize')
    },
    bodyFormat(value) {
      return value
        // url to anchor tag
        .replace(/((https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+))/g, '<a href="$1" target="_blank">$1</a>')
        // \n to break tag
        .replace(/\n/g, '<br>')
    },
  }
}
</script>

<style lang="postcss" scoped>
.helloworld {
  @apply flex-grow;
  height: 52.4682652vw;
  max-height: 80vh;
  background: url(https://raw.githubusercontent.com/scttgr/SCTTGR001/master/banner2.jpg) center center;
  background-size: cover;
}
.news {
  /* @apply min-h-screen; */
}
.news-item {
  @apply py-3;
}
.news-body {
  @apply leading-normal text-sm;
}
.news-body:first-line {
  @apply font-bold text-base;
}
</style>
