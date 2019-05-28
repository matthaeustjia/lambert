<template>
  <div class="container flex flex-col">
    <div v-for="GameCard,index in GameCards">
      <GameCard :Content="GameCard"></GameCard>
    </div>
    <ol class="list-disc">
      <li v-for="game in GameList">{{game}}</li>
    </ol>
  </div>
</template>

<script>
import GameCard from "@/component/GameCard.vue";
export default {
  computed: {
    GameCards() {
      return this.$store.state.GameCards;
    },
    GameList() {
      return this.$store.state.GameList;
    }
  },
  components: {
    GameCard
  }
};
</script>

<style lang="scss" scoped>
</style>