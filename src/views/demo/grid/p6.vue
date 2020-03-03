<!--
  -- 実装例：v-colのorder
-->
<template>
  <v-container>
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
    <v-row
      :dense="dense"
      :no-gutters="gutters"
      :align="align"
      :justify="justify"
      :align-content="alignContent"
      class="grey lighten-3"
      style="height: 600px;"
    >
      <v-col cols="3" order="1" :align-self="alignSelf" style="background-color: #FFCDD2">
        <v-sheet color="red" tile class="pa-2">column 1</v-sheet>
      </v-col>
      <v-col cols="3" order="2" style="background-color: #F8BBD0">
        <v-sheet color="pink" tile class="pa-2">column 2</v-sheet>
      </v-col>
      <v-col cols="3" order="3" :align-self="alignSelf" style="background-color: #E1BEE7">
        <v-sheet color="purple" tile class="pa-2">column 3</v-sheet>
      </v-col>
      <v-col cols="3" order="4" style="background-color: #D1C4E9">
        <v-sheet color="deep-purple" tile class="pa-2">column 4</v-sheet>
      </v-col>
      <v-col cols="3" order="5" :align-self="alignSelf" style="background-color: #C5CAE9">
        <v-sheet color="indigo" tile class="pa-2">column 5</v-sheet>
      </v-col>
      <v-col cols="3" order="6" style="background-color: #BBDEFB">
        <v-sheet color="blue" tile class="pa-2">column 6</v-sheet>
      </v-col>
      <v-col cols="3" order="7" :align-self="alignSelf" style="background-color: #B3E5FC">
        <v-sheet color="light-blue" tile class="pa-2">column 7</v-sheet>
      </v-col>
      <v-col cols="3" order="8" style="background-color: #B2EBF2">
        <v-sheet color="cyan" tile class="pa-2">column 8</v-sheet>
      </v-col>
    </v-row>

    <v-row style="height: 600px;" class="cyan lighten-3 mt-8">
      <v-sheet elevation="2" color="green lighten-4" tile class="pa-2 ma-2" max-width="500">
        <pre>
(12) xs :         -   599px
( 8) sm :   600px -   959px
( 6) md :   960px - 1,263px
( 4) lg : 1,264px - 1,903px
( 3) xl : 1,904px -
          </pre
        >
      </v-sheet>
      <v-sheet elevation="2" color="green lighten-4" tile class="pa-2 ma-2" max-width="500">
        <p>Height: {{ $vuetify.breakpoint.height }} / Width: {{ $vuetify.breakpoint.width }}</p>
        <v-divider />
        <ul>
          <li>XS : {{ $vuetify.breakpoint.xs }}</li>
          <li>SM : {{ $vuetify.breakpoint.sm }}</li>
          <li>MD : {{ $vuetify.breakpoint.md }}</li>
          <li>LG : {{ $vuetify.breakpoint.lg }}</li>
          <li>XL : {{ $vuetify.breakpoint.xl }}</li>
        </ul>
      </v-sheet>
      <v-sheet elevation="2" color="green lighten-4" tile class="pa-2 ma-2" max-width="500">
        <v-switch v-model="dense" label="dense" />
        <v-switch v-model="gutters" label="no-gutters" />
        <v-select v-model="align" :items="alignValues" label="align" return-object />
        <v-select v-model="justify" :items="justifyValues" label="justify" return-object />
        <v-select v-model="alignContent" :items="alignContentValues" label="align-content" return-object />
        <v-select v-model="alignSelf" :items="alignSelfValues" label="align-self" return-object />
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GridP5',
  data() {
    return {
      dense: false,
      gutters: false,
      align: undefined,
      justify: undefined,
      alignContent: undefined,
      alignSelf: undefined,
      alignValues: [undefined, 'start', 'end', 'center', 'baseline', 'stretch'],
      justifyValues: [undefined, 'start', 'end', 'center', 'space-between', 'space-around'],
      alignContentValues: [undefined, 'start', 'end', 'center', 'space-between', 'space-around', 'stretch'],
      alignSelfValues: [undefined, 'auto', 'start', 'end', 'center', 'baseline', 'stretch']
    }
  }
}
</script>
