<template>
  <div class="container">
    <div>
      <h1>WereWolves Room</h1>
      <div class="flex flex-wrap justify-center">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div
          class="image"
          v-for="(image, imageIndex) in imageList.Werewolves"
          :key="imageIndex"
          @click="showImages(imageIndex, 'Werewolves')"
          :style="{ backgroundImage: 'url(' + image + ')', width: '280px', height: '200px' }"
        ></div>
      </div>
      <h1>WereWolves Room</h1>
      <div class="flex flex-wrap justify-center">
        <div
          class="image"
          v-for="(image, imageIndex) in imageList.Dark"
          :key="imageIndex"
          @click="showImages(imageIndex, 'Dark')"
          :style="{ backgroundImage: 'url(' + image + ')', width: '280px', height: '200px' }"
        ></div>
      </div>
    </div>
  </div>
</template>
 
<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      imageSelection: "Werewolves",
      imageList: {
        Werewolves: [
          "/img/contact.png",
          "/img/center.jpg",
          "/img/1550295422.jpg",
          "/img/cover.jpg"
        ],
        Dark: [
          "https://dummyimage.com/400/000000/ffffff",
          "https://dummyimage.com/500/111111/ffffff",
          "https://dummyimage.com/600/343245/ffffff",
          "https://dummyimage.com/700/572057/ffffff",
          "https://dummyimage.com/800/122122/ffffff",
          "https://dummyimage.com/3000/572057/ffffff"
        ]
      },
      index: null
    };
  },
  computed: {
    images() {
      return this.imageList[this.imageSelection];
    }
  },

  methods: {
    showImages(imageIndex, imageName) {
      this.imageSelection = imageName;
      this.index = imageIndex;
    }
  },
  components: {
    gallery: VueGallery
  }
};
</script> 
 
<style scoped>
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style> 