<template>
  <div class="container flex flex-col">
    <div>
      <div class="flex flex-wrap items-center px-16">
        <div class="w-full justify-center content-center">
          <h5 class="text-yellow-dark">Welcome</h5>
          <h1 class="font-semibold">Board Game</h1>
          <p class="text-grey-dark">Our extensive list of bord games!</p>
        </div>
      </div>
      <div class="my-16 w-full xs:px-0 md:px-32 items-center justify-center content-center">
        <h5 class="text-yellow-dark">Select one of our</h5>
        <h1 class="font-semibold">GAMES</h1>
        <p
          class="text-grey-dark"
        >You are presented with different games and challenging scenarios to ponder and solve. Limited to use only elements inside the game along with their abilities to find clues, solve puzzles and perform actions in order to escape within a specific time!!!</p>
      </div>
    </div>
    <div v-for="GameCard,index in GameCards">
      <GameCard :Content="GameCard"></GameCard>
    </div>
  </div>
</template>

<script>
import GameCard from "@/component/GameCard.vue";
export default {
  computed: {
    GameCards() {
      return this.$store.state.GameCards;
    }
  },
  components: {
    GameCard
  }
};
</script>

<style lang="scss" scoped>
</style>