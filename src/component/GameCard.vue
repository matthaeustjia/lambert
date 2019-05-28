<template>
  <div class="flex flex-wrap mt-10">
    <div class="my-2 md:my-0 w-full md:w-1/2">
      <router-link :to="'/games/'+Content.name">
        <img :src="Content.img" :alt="Content.name">
      </router-link>
    </div>
    <div class="my-2 md:my-0 flex flex-col w-full md:w-1/2 justify-between">
      <div>
        <router-link
          class="capitalize hover:text-yellow-dark text-yellow-dark"
          :to="'/games/'+Content.name"
        >
          <h4 class="mb-3 text-left font-semibold">{{Content.name}}</h4>
        </router-link>
        <p v-for="desc in Content.desc" class="mb-2 text-grey-dark text-left">{{desc}}</p>
        <div class="flex justify-between text-yellow-dark text-xs md:text-sm my-3">
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
      <div class="self-start">
        <router-link :to="'/games/'+Content.name">
          <button
            class="text-sm hover:bg-yellow-dark text-white font-semibold py-2 px-2 border border-yellow-300"
          >Read More...</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Content"]
};
</script>

<style lang="scss" scoped>
img {
  height: 26rem;
  width: 26rem;
}
</style>