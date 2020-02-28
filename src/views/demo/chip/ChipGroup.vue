<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12" md="5" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-chip-group v-model="dark" dark>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd1</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd2</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd3</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd4</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="7" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-chip-group v-model="dark" dark>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd1</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd2</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd3</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd4</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd5</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd6</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd7</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd8</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>cmd9</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>cmd10</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="5" class="my-2 grey lighten-3">
        <v-subheader>ligth theme</v-subheader>
        <v-chip-group v-model="light" light>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd1</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd2</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd3</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd4</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="7" class="my-2 grey lighten-3">
        <v-subheader>ligth theme</v-subheader>
        <v-chip-group v-model="light" light>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd1</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd2</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd3</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd4</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd5</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd6</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd7</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd8</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>cmd9</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>cmd10</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>show-arrows</v-subheader>
        <v-chip-group show-arrows>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd1</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd2</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd3</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd4</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd5</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd6</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd7</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd8</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>cmd9</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>cmd10</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>show-arrows + prev-icon, next-icon</v-subheader>
        <v-chip-group show-arrows prev-icon="mdi-chevron-left-box-outline" next-icon="mdi-chevron-right-box-outline">
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd1</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd2</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd3</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd4</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd5</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd6</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd7</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd8</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>cmd9</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>cmd10</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>active-class</v-subheader>
        <v-chip-group active-class="primary--text">
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd1</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd2</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd3</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd4</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd5</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd6</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd7</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd8</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>cmd9</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>cmd10</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>center-active</v-subheader>
        <v-chip-group center-active active-class="primary--text">
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd1</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd2</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd3</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd4</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd5</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd6</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd7</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd8</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>cmd9</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>cmd10</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>column</v-subheader>
        <v-chip-group column active-class="primary--text">
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd1</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>cmd2</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd3</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>cmd4</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd5</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd6</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>cmd7</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>cmd8</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>cmd9</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>cmd10</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>value</v-subheader>
        <v-chip-group v-model="selected1" active-class="primary--text">
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>up</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>down</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>left</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>right</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>a</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>b</v-chip>
        </v-chip-group>
        <div>selected : {{ selected1 }}</div>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>value</v-subheader>
        <v-chip-group v-model="selected2" active-class="primary--text">
          <v-chip pill value="up"><v-icon left>mdi-gamepad-round-up</v-icon>up</v-chip>
          <v-chip pill value="down"><v-icon left>mdi-gamepad-round-down</v-icon>down</v-chip>
          <v-chip pill value="left"><v-icon left>mdi-gamepad-round-left</v-icon>left</v-chip>
          <v-chip pill value="right"><v-icon left>mdi-gamepad-round-right</v-icon>right</v-chip>
          <v-chip pill value="a"><v-icon left>mdi-alpha-a-circle</v-icon>a</v-chip>
          <v-chip pill value="b"><v-icon left>mdi-alpha-b-circle</v-icon>b</v-chip>
        </v-chip-group>
        <div>selected : {{ selected2 }}</div>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>mandatory</v-subheader>
        <v-chip-group v-model="selected3" mandatory active-class="primary--text">
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>up</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>down</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>left</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>right</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>a</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>b</v-chip>
        </v-chip-group>
        <div>selected : {{ selected3 }}</div>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>multiple</v-subheader>
        <v-chip-group v-model="selected4" multiple active-class="primary--text">
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>up</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>down</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>left</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>right</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>a</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>b</v-chip>
        </v-chip-group>
        <div>selected({{ selected4.length }}) : {{ selected4 }}</div>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>multiple + max=3</v-subheader>
        <v-chip-group v-model="selected5" multiple max="3" active-class="primary--text">
          <v-chip pill><v-icon left>mdi-gamepad-round-up</v-icon>up</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-down</v-icon>down</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-left</v-icon>left</v-chip>
          <v-chip pill><v-icon left>mdi-gamepad-round-right</v-icon>right</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-a-circle</v-icon>a</v-chip>
          <v-chip pill><v-icon left>mdi-alpha-b-circle</v-icon>b</v-chip>
        </v-chip-group>
        <div>selected({{ selected5.length }}) : {{ selected5 }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ChipGroup',
  data() {
    return {
      dark: 0,
      light: 0,
      selected1: 0,
      selected2: '',
      selected3: 0,
      selected4: [],
      selected5: []
    }
  }
}
</script>
