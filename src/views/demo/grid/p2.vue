<template>
  <v-container class="grey lighten-5">
    <!-- style="height: 600px;" -->
    <v-row :dense="dense" :no-gutters="gutters" justify="space-around">
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #FFCDD2">
        <v-sheet color="red" tile class="pa-1">column 1</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #F8BBD0">
        <v-sheet color="pink" tile class="pa-1">column 2</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #E1BEE7">
        <v-sheet color="purple" tile class="pa-1">column 3</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #D1C4E9">
        <v-sheet color="deep-purple" tile class="pa-1">column 4</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #C5CAE9">
        <v-sheet color="indigo" tile class="pa-1">column 5</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #BBDEFB">
        <v-sheet color="blue" tile class="pa-1">column 6</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #B3E5FC">
        <v-sheet color="light-blue" tile class="pa-1">column 7</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #B2EBF2">
        <v-sheet color="cyan" tile class="pa-1">column 8</v-sheet>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #B2DFDB">
        <v-sheet color="teal" tile class="pa-1">column 9</v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet elevation="2" color="green lighten-4" tile class="pa-2">
          <pre>
(12) xs :        - 600px
( 8) sm :  600px - 960px
( 6) md :  960px - 1264px
( 4) lg : 1264px - 1904px
( 3) xl : 1904px -
          </pre>
        </v-sheet>
        <v-sheet elevation="2" color="green lighten-4" tile class="pa-2">
          <ul>
            <li>Height: {{ $vuetify.breakpoint.height }} / Width: {{ $vuetify.breakpoint.width }}</li>
            <li>XS: {{ $vuetify.breakpoint.xs }}</li>
            <li>SM: {{ $vuetify.breakpoint.sm }}</li>
            <li>MD: {{ $vuetify.breakpoint.md }}</li>
            <li>LG: {{ $vuetify.breakpoint.lg }}</li>
            <li>XL: {{ $vuetify.breakpoint.xl }}</li>
          </ul>
        </v-sheet>
        <v-switch v-model="dense" label="dense" />
        <v-switch v-model="gutters" label="no-gutters" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dense: false,
      gutters: false
    }
  }
}
</script>
