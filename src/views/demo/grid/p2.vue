<!--
  -- 実装例：ポイントを指定しない例
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
      <v-col style="background-color: #FFCDD2">
        column 1
      </v-col>
      <v-col cols="6" style="background-color: #F8BBD0">
        column 2 (6)
      </v-col>
      <v-col style="background-color: #E1BEE7">
        column 3
      </v-col>
      <v-col cols="4" style="background-color: #D1C4E9">
        column 4 (4)
      </v-col>
      <v-col style="background-color: #C5CAE9">
        column 5
      </v-col>
      <v-col cols="3" style="background-color: #BBDEFB">
        column 6 (3)
      </v-col>
      <v-col style="background-color: #B3E5FC">
        column 7
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
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GridP2',
  data() {
    return {
      dense: false,
      gutters: false,
      align: undefined,
      justify: undefined,
      alignContent: undefined,
      alignValues: [undefined, 'start', 'end', 'center', 'baseline', 'stretch'],
      justifyValues: [undefined, 'start', 'end', 'center', 'space-between', 'space-around'],
      alignContentValues: [undefined, 'start', 'end', 'center', 'space-between', 'space-around', 'stretch']
    }
  }
}
</script>
