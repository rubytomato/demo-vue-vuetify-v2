<!--
  -- 実装例：fill-height
  -->
<template>
  <v-container class="grey lighten-5 fill-height" style="background-color:grey !important">
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
    <v-row>
      <v-col cols="12" md="4">
        <v-card outlined tile class="pa-2">
          column 1
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card outlined tile class="pa-2">
          column 2
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card outlined tile class="pa-2">
          column 3
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GridP8',
  data() {
    return {}
  }
}
</script>
