<template>
  <div>
    <div class="flex flex-col h-full w-full justify-center content-center items-center">
      <div>
        <p class="text-xl md:text-3xl text-white">
          Ooops... Error 404
          We are sorry, but the page you are looking for does not exist.
        </p>
        <p class="text-xl md:text-3xl text-white">
          Please check entered address and try again or
          <router-link class="text-yellow hover:text-yellow-darker" to="/">Home</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>