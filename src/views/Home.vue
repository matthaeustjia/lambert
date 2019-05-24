<template>
  <div class="container flex flex-col">
    <div>
      <div class="flex flex-wrap items-center px-16">
        <div class="w-1/2 justify-center content-center">
          <h5 class="text-yellow-dark">Welcome</h5>
          <h1>ESCAPE ROOM ADVENTURES</h1>
          <p
            class="text-grey-dark"
          >BULLSHIT'S is Australia’s largest and most technologically developed Escape Room based in Sydney. Our multiple rooms, advanced technology and attention to detail will have you fully immersed in a totally new world full of adventure, puzzles and thrills. We deliver the ultimate player experience.</p>
        </div>
        <div class="md:w-1/2">
          <img src="/img/center.jpg" alt="Werewolves">
        </div>
      </div>
      <div class="w-full px-32 items-center justify-center content-center">
        <h5 class="text-yellow-dark">Select one of our</h5>
        <h1>GAMES</h1>
        <p
          class="text-grey-dark"
        >You are presented with different themes and challenging scenarios to ponder and solve. Limited to use only elements inside the game along with their abilities to find clues, solve puzzles and perform actions in order to escape within a specific time!!!</p>
      </div>
    </div>
    <div>
      <div class="px-5 flex flex-wrap mt-10">
        <div class="my-2 md:my-0 w-full md:w-1/2">
          <img src="/img/center.jpg" alt="Werewolves">
        </div>
        <div class="my-2 md:my-0 xs:p-0 md:px-5 flex flex-col w-full md:w-1/2">
          <div>
            <a class="hover:text-yellow-dark" href>
              <h5 class="text-yellow-dark text-left font-bold">Werewolves</h5>
            </a>
            <p class="text-grey-dark text-left">
              Werewolf takes place in a small village which is haunted by werewolves.
              Each player is secretly assigned a role - Werewolf, Villager, or Seer (a special Villager). There is also a Moderator who controls the flow of the game.
              The game alternates between night and day phases. At night, the Werewolves secretly choose a Villager to kill. Also, the Seer (if still alive) asks whether another player is a Werewolf or not. During the day, the Villager who was killed is revealed and is out of the game. The remaining Villagers then vote on the player they suspect is a Werewolf. That player reveals his/her role and is out of the game.
              Werewolves win when there are an equal number of Villagers and Werewolves. Villagers win when they have killed all Werewolves. Werewolf is a social game that requires no equipment to play, and can accommodate almost any large group of players.
            </p>
            <div class="flex justify-between text-yellow-dark text-xs md:text-sm my-3 md:my-3">
              <div class>
                <span class="mr-2">
                  <i class="fas fa-users"></i> 4-7 Players
                </span>
                <span class="mr-2">
                  <i class="far fa-clock"></i> 60 Minutes
                </span>
              </div>
              <div>
                <span class>Complexity</span>
              </div>
            </div>
          </div>
          <div class="self-start mt-10">
            <button
              class="hover:bg-yellow-dark text-white font-semibold py-2 px-2 border border-yellow-300"
            >Read More...</button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <h1 class="text-yellow-dark">LARGE GROUP BOOKINGS!</h1>
      <p
        class="text-grey-dark px-32"
      >For corporate groups and schools, we can be flexible to suit your objectives. To organise multiple rooms or multiple session booking, please contact us via email or through the form in about us.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.goblok {
  background-repeat: no-repeat;
  background-image: url("/img/center.jpg");
}
</style>