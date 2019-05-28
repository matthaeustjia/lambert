<template>
  <div class="container flex text-grey-dark">
    <div class="w-2/3">
      <div class="text-left">
        <h4 class="text-2xl mb-3 text-white">OVERVIEW</h4>
        <p class="mb-3" v-for="overview in Content.overview">{{overview}}</p>
      </div>
      <div class="text-left">
        <h4 class="mb-3 text-white">HIGHLIGHTS</h4>
        <p class="mb-3" v-for="highlight in Content.highlight">{{highlight}}</p>
      </div>
      <div class="flex justify-between text-yellow-dark text-xs md:text-sm my-3 md:my-3">
        <div class>
          <span class="mr-2">
            <i class="fas fa-users"></i>
            {{Content.players}} Players
          </span>
          <span class="mr-2">
            <i class="far fa-clock"></i>
            {{Content.time}} Minutes
          </span>
        </div>
        <div>
          <span class>Complexity {{Content.complexity}}/10</span>
        </div>
      </div>
    </div>
    <div class="w-1/3"></div>
  </div>
</template>

<script>
export default {
  props: ["Content"]
};
</script>

<style lang="scss" scoped>
</style>