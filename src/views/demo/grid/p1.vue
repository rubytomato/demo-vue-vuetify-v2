<template>
  <v-container class="grey lighten-5" fluid>
    <!-- justify 横方向 -->
    <!-- start -->
    <!-- end -->
    <!-- center -->
    <!-- space-between -->
    <!-- space-around -->

    <!-- align 縦方向 -->
    <!-- start -->
    <!-- end -->
    <!-- center -->
    <!-- baseline -->
    <!-- stretch -->
    <v-row :dense="dense" :no-gutters="gutters" style="height: 400px;" align="start" justify="center">
      <!--
      <v-card color="red" tile width="200" class="ma-0 pa-3">
        <v-card-title>column 1</v-card-title>
      </v-card>
      <v-card color="pink" tile width="200" class="ma-0 pa-3">
        <v-card-title>column 1</v-card-title>
      </v-card>
      <v-card color="purple" tile width="200" class="ma-0 pa-3">
        <v-card-title>column 1</v-card-title>
      </v-card>
-->
      <v-col cols="12" sm="8" md="3" lg="2">
        <v-sheet color="red" tile class="ma-0 pa-3">column 1</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="3" lg="2">
        <v-sheet color="pink" tile class="ma-0 pa-3">column 1</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="3" lg="2">
        <v-sheet color="purple" tile class="ma-0 pa-3">column 1</v-sheet>
      </v-col>

      <!--
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="red" tile class="ma-0 pa-3">column 1</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="pink" tile class="ma-0 pa-3">column 2</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="purple" tile class="ma-0 pa-3">column 3</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="deep-purple" tile class="ma-0 pa-3">column 4</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="indigo" tile class="ma-0 pa-3">column 5</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="blue" tile class="ma-0 pa-3">column 6</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="light-blue" tile class="ma-0 pa-3">column 7</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="cyan" tile class="ma-0 pa-3">column 8</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="teal" tile class="ma-0 pa-3">column 9</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3">
        <v-sheet color="green" tile class="ma-0 pa-3">column 10</v-sheet>
      </v-col>
-->
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card elevation="2" color="green lighten-4" tile class="pa-2">
          <v-card-title>$vuetify</v-card-title>
          <v-card-text>
            <ul>
              <li>Height: {{ $vuetify.breakpoint.height }} / Width: {{ $vuetify.breakpoint.width }}</li>
              <li>XS: {{ $vuetify.breakpoint.xs }}</li>
              <li>SM: {{ $vuetify.breakpoint.sm }}</li>
              <li>MD: {{ $vuetify.breakpoint.md }}</li>
              <li>LG: {{ $vuetify.breakpoint.lg }}</li>
              <li>XL: {{ $vuetify.breakpoint.xl }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GridP1',
  data() {
    return {
      dense: false,
      gutters: false
    }
  }
}
</script>
