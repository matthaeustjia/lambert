<template>
  <div class="flex nav mb-20" id="nav">
    <nav class="nav w-full navbar fixed-top navbar-dark navbar-expand-lg">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="/favicon.ico" width="30" height="30" alt> Mr ?
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="font-semibold collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto text-lg">
            <li class="nav-item">
              <router-link @click.native="closeNavBar" class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link @click.native="closeNavBar" class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link @click.native="closeNavBar" class="nav-link" to="/gameslist">Games List</router-link>
            </li>
            <li class="nav-item">
              <router-link @click.native="closeNavBar" class="nav-link" to="/gallery">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link @click.native="closeNavBar" class="nav-link" to="/contact">Contact us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    closeNavBar() {
      $("#navbarSupportedContent").collapse("hide");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav:hover {
  background-color: rgb(0, 0, 0, 0.9);
}
.nav {
  background-color: rgb(0, 0, 0, 0.15);
  transition: background-color 0.5s ease;
}
li {
  padding-left: 1rem;
  padding-right: 1rem;
}
#nav {
  a {
    color: #e2e8f0;
    font-weight: bold;
    &.router-link-exact-active {
      color: rgb(242, 207, 35);
    }
  }
}
</style>