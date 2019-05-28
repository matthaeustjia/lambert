import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    GameCards: {
      werewolves: {
        name: "werewolves",
        desc: [
          "Werewolf takes place in a small village which is haunted by werewolves. Each player is secretly assigned a role - Werewolf, Villager, or Seer (a special Villager). There is also a Moderator who controls the flow of the game.",
          "The game alternates between night and day phases. At night, the Werewolves secretly choose a Villager to kill. Also, the Seer (if still alive) asks whether another player is a Werewolf or not. During the day, the Villager who was killed is revealed and is out of the game.",
          "The remaining Villagers then vote on the player they suspect is a Werewolf. "
        ],
        overview: [
          "The other day, you hung out with two friends. All of a sudden, your friend Jerry was taken away by a giant black bat and the other disappeared. You panicked, and followed them to this underground palace. The gate to the palace was suddenly closed immediately after you entered. You tried to open it but failed. You, a vampire hunter, are familiar with the bat on the roof, the goblet with blood on the round table, and the skulls in the wooden cabinet. This place turned out to be the den of a vampire.",
          "When you found another friend in the cage, you knew that Jerry was killed by the vampire, and his soul taken away. As a friend and a hunter, you were eager to save him. The vampire was about to wake up in an hour, and you needed to work with your friend to kill the vampire and recapture Jerry’s soul. Time was short. Would you two succeed?"
        ],
        highlight: [
          "The game revolves around Dracula. Dark, thrilling and exciting, it will work on your nerves!",
          "It is logical and all parts linked with each other. It is plot-driven and provided with props.",
          "The story is thrilling, with a realistic setting, proper sound and lighting to completely involve players.",
          "It tests teamwork and upgrades friendship. You should enforce justice on behalf of Heaven. Helping others is helping yourself."
        ],
        img: "/img/center.jpg",
        players: "8-12",
        time: 60,
        complexity: 8
      },
      police: {
        name: "police",
        desc: [
          "Police takes place in a small village which is haunted by werewolves. Each player is secretly assigned a role - Werewolf, Villager, or Seer (a special Villager). There is also a Moderator who controls the flow of the game.",
          "The game alternates between night and day phases. At night, the Werewolves secretly choose a Villager to kill. Also, the Seer (if still alive) asks whether another player is a Werewolf or not. During the day, the Villager who was killed is revealed and is out of the game.",
          "The remaining Villagers then vote on the player they suspect is a Werewolf. "
        ],
        overview: [
          "The other day, you hung out with two friends. All of a sudden, your friend Jerry was taken away by a giant black bat and the other disappeared. You panicked, and followed them to this underground palace. The gate to the palace was suddenly closed immediately after you entered. You tried to open it but failed. You, a vampire hunter, are familiar with the bat on the roof, the goblet with blood on the round table, and the skulls in the wooden cabinet. This place turned out to be the den of a vampire.",
          "When you found another friend in the cage, you knew that Jerry was killed by the vampire, and his soul taken away. As a friend and a hunter, you were eager to save him. The vampire was about to wake up in an hour, and you needed to work with your friend to kill the vampire and recapture Jerry’s soul. Time was short. Would you two succeed?"
        ],
        highlight: [
          "The game revolves around Dracula. Dark, thrilling and exciting, it will work on your nerves!",
          "It is logical and all parts linked with each other. It is plot-driven and provided with props.",
          "The story is thrilling, with a realistic setting, proper sound and lighting to completely involve players.",
          "It tests teamwork and upgrades friendship. You should enforce justice on behalf of Heaven. Helping others is helping yourself."
        ],
        img: "/img/cover.jpg",
        players: "6-12",
        time: 30,
        complexity: 5
      },
      goblok: {
        name: "goblok",
        desc: [
          "Goblok takes place in a small village which is haunted by werewolves. Each player is secretly assigned a role - Werewolf, Villager, or Seer (a special Villager). There is also a Moderator who controls the flow of the game.",
          "The game alternates between night and day phases. At night, the Werewolves secretly choose a Villager to kill. Also, the Seer (if still alive) asks whether another player is a Werewolf or not. During the day, the Villager who was killed is revealed and is out of the game.",
          "The remaining Villagers then vote on the player they suspect is a Werewolf. "
        ],
        overview: [
          "The other day, you hung out with two friends. All of a sudden, your friend Jerry was taken away by a giant black bat and the other disappeared. You panicked, and followed them to this underground palace. The gate to the palace was suddenly closed immediately after you entered. You tried to open it but failed. You, a vampire hunter, are familiar with the bat on the roof, the goblet with blood on the round table, and the skulls in the wooden cabinet. This place turned out to be the den of a vampire.",
          "When you found another friend in the cage, you knew that Jerry was killed by the vampire, and his soul taken away. As a friend and a hunter, you were eager to save him. The vampire was about to wake up in an hour, and you needed to work with your friend to kill the vampire and recapture Jerry’s soul. Time was short. Would you two succeed?"
        ],
        highlight: [
          "The game revolves around Dracula. Dark, thrilling and exciting, it will work on your nerves!",
          "It is logical and all parts linked with each other. It is plot-driven and provided with props.",
          "The story is thrilling, with a realistic setting, proper sound and lighting to completely involve players.",
          "It tests teamwork and upgrades friendship. You should enforce justice on behalf of Heaven. Helping others is helping yourself."
        ],
        img: "/img/image2.jpeg",
        players: "8-10",
        time: 15,
        complexity: 8
      }
    },
    GameList: ["Uno", "Goblok", "Dongo", "Sinting", "Gila"]
  }
});
