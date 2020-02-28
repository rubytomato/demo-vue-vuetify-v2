<template>
  <v-container fluid>
    <v-row>
      <v-sheet height="1440" width="810" color="grey lighten-4" class="ma-8">
        <v-img :src="require('@/assets/kashima.jpg')" height="1440" width="810" aspect-ratio="2" contain>
          <div class="fill-height repeating-gradient"></div>
        </v-img>
        <v-btn fixed top left x-large>top + left</v-btn>
        <v-btn fixed top right x-large>top + right</v-btn>
        <v-btn fixed bottom left x-large>bottom + left</v-btn>
        <v-btn fixed bottom right x-large @click="$vuetify.goTo(0)">bottom + right</v-btn>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(205, 150, 0, 0.25),
    rgba(205, 120, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>
