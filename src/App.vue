<template>
  <div id="app">

    <header class="fixed pin-x pin-t w-full z-50">
      <div class="flex flex-row justify-end pr-2 bg-black">
        <a class="text-white text-3xl p-2" href="https://soundcloud.com/scttgr" target="_blank"><i class="fab fa-soundcloud"></i></a>
        <a class="text-white text-3xl p-2" href="https://www.instagram.com/scott_tiger_records/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a class="text-white text-3xl p-2" href="https://twitter.com/scttgr" target="_blank"><i class="fab fa-twitter"></i></a>
        <a class="text-white text-3xl p-2" href="https://www.facebook.com/scttgr/" target="_blank"><i class="fab fa-facebook"></i></a>
      </div>
      <div class="flex flex-row justify-end pr-2">
        <a class="text-black text-lg p-2 no-underline" href="#RELEASE"><i class="fas fa-dot-circle pr-1"></i>RELEASE</a>
        <a class="text-black text-lg p-2 no-underline" href="#CONTACT"><i class="fas fa-envelope pr-1"></i>CONTACT</a>
      </div>
    </header>

    <keep-alive :max="10">
      <router-view />
    </keep-alive>

    <footer class="fixed pin-x pin-b w-full bg-black">
      <div class="flex flex-row justify-center">
        <small class="text-white py-2">©2018 Scott Tiger Records</small>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/css/style.css'

export default {
}
</script>

<style>
</style>
