<template>
  <main id="app" class="scttgr">
    <header class="fixed pin-x pin-t z-50 w-full h-12">
      <div class="flex items-center px-2 h-12">
        <router-link class="flex items-center text-black text-lg h-full no-underline" to="/">
          <img svg-inline class="h-8" src="./assets/img/type.svg">
        </router-link>
        <div class="sm:hidden ml-auto">
          <a
            class="text-black no-underline"
            href="#"
            @click.prevent="menu = !menu"
          >{{ menu ? 'Close' : 'MENU' }}</a>
        </div>
        <nav class="nav" :class="{ active: menu }">
          <router-link to="/release" @click.>Release</router-link>
          <router-link to="/contact" @click.>Contact</router-link>
          <a href="https://amochi.jp/" target="_blank">A.Mochi</a>
          <a class="sm:ml-auto" href="https://soundcloud.com/scttgr" target="_blank">
            <i class="fab fa-soundcloud text-2xl"></i>
            <span class="ml-2 sm:hidden">SoundCloud</span>
          </a>
          <a href="https://www.instagram.com/scott_tiger_records/" target="_blank">
            <i class="fab fa-instagram text-2xl"></i>
            <span class="ml-2 sm:hidden">instagram</span>
          </a>
          <a href="https://twitter.com/scttgr" target="_blank">
            <i class="fab fa-twitter text-2xl"></i>
            <span class="ml-2 sm:hidden">Twitter</span>
          </a>
          <a href="https://www.facebook.com/scttgr/" target="_blank">
            <i class="fab fa-facebook text-2xl"></i>
            <span class="ml-2 sm:hidden">Facebook</span>
          </a>
        </nav>
      </div>
    </header>

    <section class="content">
      <transition name="router-transition" mode="out-in">
        <keep-alive :max="10">
          <router-view/>
        </keep-alive>
      </transition>
    </section>

    <footer class="bg-black">
      <div class="flex flex-row justify-center">
        <small class="text-white py-2">©2018 Scott Tiger Records</small>
      </div>
    </footer>
  </main>
</template>

<script>
import "@/assets/css/style.css";

export default {
  data() {
    return {
      menu: false
    };
  },
  watch: {
    $route() {
      this.menu = false;
    }
  }
};
</script>

<style lang="postcss" scoped>
.scttgr {
  @apply flex flex-col min-h-screen;
}
header {
  background-color: rgba(255, 255, 255, 0.75);
}
.nav {
  @apply hidden flex-grow;
}
.nav.active {
  @apply flex flex-col items-center fixed pin-x;
  top: 48px;
  background-color: rgba(255, 255, 255, 0.75);
}
.nav a {
  @apply p-3 text-xl text-center no-underline;
}
@screen sm {
  .nav {
    @apply flex items-center ml-2;
  }
  .nav.active {
    @apply flex flex-row static pin-none bg-transparent;
  }
  .nav a {
    @apply p-2 text-xl;
  }
}
.content {
  @apply flex flex-col flex-grow;
}

.router-transition-enter-active {
  transition: opacity ease-in-out 100ms;
}
.router-transition-leave-active {
  transition: opacity ease-in-out 100ms 75ms;
}
.router-transition-enter,
.router-transition-leave-to {
  opacity: 0;
}
</style>
