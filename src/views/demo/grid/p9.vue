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
      style="height: 150px;"
    >
      <v-col style="background-color: #FFCDD2">
        1
      </v-col>
      <v-col style="background-color: #F8BBD0">
        2
      </v-col>
      <v-col style="background-color: #E1BEE7">
        3
      </v-col>
      <v-col style="background-color: #D1C4E9">
        4
      </v-col>
      <v-col style="background-color: #C5CAE9">
        5
      </v-col>
      <v-col style="background-color: #BBDEFB">
        6
      </v-col>
      <v-col style="background-color: #B3E5FC">
        7
      </v-col>
      <v-col style="background-color: #B2EBF2">
        8
      </v-col>
      <v-col style="background-color: #B2DFDB">
        9
      </v-col>
      <v-col style="background-color: #C8E6C9">
        10
      </v-col>
      <v-col style="background-color: #DCEDC8">
        11
      </v-col>
      <v-col style="background-color: #F0F4C3">
        12
      </v-col>
    </v-row>
    <v-row
      :dense="dense"
      :no-gutters="gutters"
      :align="align"
      :justify="justify"
      :align-content="alignContent"
      class="grey lighten-3"
      style="height: 150px;"
    >
      <v-col style="background-color: #FFF9C4">
        13
      </v-col>
      <v-col style="background-color: #FFECB3">
        14
      </v-col>
      <v-col style="background-color: #FFE0B2">
        15
      </v-col>
      <v-col style="background-color: #FFCCBC">
        16
      </v-col>
      <v-col style="background-color: #D7CCC8">
        17
      </v-col>
      <v-col style="background-color: #CFD8DC">
        18
      </v-col>
    </v-row>
    <v-row
      :dense="dense"
      :no-gutters="gutters"
      :align="align"
      :justify="justify"
      :align-content="alignContent"
      class="grey lighten-3"
      style="height: 150px;"
    >
      <v-col style="background-color: #FFCDD2">
        19
      </v-col>
      <v-col style="background-color: #F8BBD0">
        20
      </v-col>
      <v-col style="background-color: #E1BEE7">
        21
      </v-col>
      <v-col style="background-color: #D1C4E9">
        22
      </v-col>
      <v-col style="background-color: #C5CAE9">
        23
      </v-col>
    </v-row>

    <v-row class="mt-8">
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
        <b-btn @click="dump">dump</b-btn>
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
  name: 'GridP6',
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
