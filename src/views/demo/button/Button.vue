<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-container>
          <v-row justify="space-around">
            <v-col cols="12">
              <v-btn dark>Default</v-btn>
              <v-btn dark depressed>depressed</v-btn>
              <v-btn dark fab>fab</v-btn>
              <v-btn dark outlined>outlined</v-btn>
              <v-btn dark rounded>rounded</v-btn>
              <v-btn dark text>text</v-btn>
              <v-btn dark tile>tile</v-btn>
              <v-btn dark icon height="50" width="50">
                <v-icon>mdi-vuetify</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12">
              <v-btn dark disabled>Default</v-btn>
              <v-btn dark disabled depressed>depressed</v-btn>
              <v-btn dark disabled fab>fab</v-btn>
              <v-btn dark disabled outlined>outlined</v-btn>
              <v-btn dark disabled rounded>rounded</v-btn>
              <v-btn dark disabled text>text</v-btn>
              <v-btn dark disabled tile>tile</v-btn>
              <v-btn dark disabled icon height="50" width="50">
                <v-icon>mdi-vuetify</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-container>
          <v-row justify="space-around">
            <v-col cols="12">
              <v-btn light>Default</v-btn>
              <v-btn light depressed>depressed</v-btn>
              <v-btn light fab>fab</v-btn>
              <v-btn light outlined>outlined</v-btn>
              <v-btn light rounded>rounded</v-btn>
              <v-btn light text>text</v-btn>
              <v-btn light tile>tile</v-btn>
              <v-btn light icon height="50" width="50">
                <v-icon>mdi-vuetify</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12">
              <v-btn light disabled>Default</v-btn>
              <v-btn light disabled depressed>depressed</v-btn>
              <v-btn light disabled fab>fab</v-btn>
              <v-btn light disabled outlined>outlined</v-btn>
              <v-btn light disabled rounded>rounded</v-btn>
              <v-btn light disabled text>text</v-btn>
              <v-btn light disabled tile>tile</v-btn>
              <v-btn light disabled icon height="50" width="50">
                <v-icon>mdi-vuetify</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>elevation</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-btn elevation="0">elevation=0</v-btn>
            <v-btn elevation="2">elevation=2</v-btn>
            <v-btn elevation="4">elevation=4</v-btn>
            <v-btn elevation="6">elevation=6</v-btn>
            <v-btn elevation="8">elevation=8</v-btn>
            <v-btn elevation="10">elevation=10</v-btn>
            <v-btn elevation="12">elevation=12</v-btn>
            <v-btn elevation="14">elevation=14</v-btn>
            <v-btn elevation="16">elevation=16</v-btn>
            <v-btn elevation="18">elevation=18</v-btn>
            <v-btn elevation="20">elevation=20</v-btn>
            <v-btn elevation="22">elevation=22</v-btn>
            <v-btn elevation="24">elevation=24</v-btn>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-btn color="red">red</v-btn>
            <v-btn color="pink">pink</v-btn>
            <v-btn color="purple">purple</v-btn>
            <v-btn color="deep-purple">deep-purple</v-btn>
            <v-btn color="indigo">indigo</v-btn>
            <v-btn color="blue">blue</v-btn>
            <v-btn color="light-blue">light-blue</v-btn>
            <v-btn color="cyan">cyan</v-btn>
            <v-btn color="teal">teal</v-btn>
            <v-btn color="green">green</v-btn>
            <v-btn color="light-green">light-green</v-btn>
            <v-btn color="lime">lime</v-btn>
            <v-btn color="yellow">yellow</v-btn>
            <v-btn color="amber">amber</v-btn>
            <v-btn color="orange">orange</v-btn>
            <v-btn color="deep-orange">deep-orange</v-btn>
            <v-btn color="brown">brown</v-btn>
            <v-btn color="blue-grey">blue-grey</v-btn>
            <v-btn color="grey">grey</v-btn>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>size</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-btn x-small>x-small</v-btn>
            <v-btn small>small</v-btn>
            <v-btn>default</v-btn>
            <v-btn large>large</v-btn>
            <v-btn x-large>x-large</v-btn>
            <v-btn height="80" width="160">height=80 <br />width=160</v-btn>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>block</v-subheader>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-btn>non block</v-btn>
              <v-btn block>block</v-btn>
            </v-col>
            <v-col class="12" md="4">
              <v-btn>non block</v-btn>
              <v-btn block>block</v-btn>
            </v-col>
            <v-col class="12" md="2">
              <v-btn>non block</v-btn>
              <v-btn block>block</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>retain-focus-on-click</v-subheader>
        <v-container>
          <v-row>
            <v-btn>A</v-btn>
            <v-btn>B</v-btn>
            <v-btn>C</v-btn>
            <v-divider vertical class="ma-2"></v-divider>
            <v-btn retain-focus-on-click>A</v-btn>
            <v-btn retain-focus-on-click>B</v-btn>
            <v-btn retain-focus-on-click>C</v-btn>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>ripple</v-subheader>
        <v-container>
          <v-row>
            <v-btn height="80" width="200">defalut</v-btn>
            <v-btn height="80" width="200" :ripple="{ center: true }">center = true</v-btn>
            <v-btn height="80" width="200" :ripple="{ center: false, class: 'blue--text' }"
              >center = false <br />
              blue--text</v-btn
            >
            <v-btn height="80" width="200" :ripple="false">ripple = false</v-btn>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>link</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-btn link>link</v-btn>
            <v-btn href="https://www.google.co.jp" target="_blank">href</v-btn>
            <v-btn href="#top">#top</v-btn>
            <v-btn :to="{ name: 'Home' }" active-class="blue">to Home</v-btn>
            <v-btn :to="{ name: 'Button' }" exact-active-class="red">to Button</v-btn>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>loading</v-subheader>
        <v-container>
          <v-row>
            <v-btn
              height="60"
              width="120"
              color="red"
              :loading="loading"
              :disabled="loading"
              @click="loader('loading')"
            >
              Load
            </v-btn>
            <v-btn
              height="60"
              width="120"
              color="pink"
              outlined
              :loading="loading2"
              :disabled="loading2"
              @click="loader('loading2')"
            >
              Load2
            </v-btn>
            <v-btn
              height="60"
              width="120"
              color="purple"
              rounded
              :loading="loading3"
              :disabled="loading3"
              @click="loader('loading3')"
            >
              Load3
            </v-btn>
            <v-btn
              height="60"
              width="120"
              color="deep-purple"
              tile
              :loading="loading4"
              :disabled="loading4"
              @click="loader('loading4')"
            >
              Load4
            </v-btn>
            <v-btn
              height="64"
              width="140"
              color="cyan ligten-4"
              :loading="loading5"
              :disabled="loading5"
              @click="loader('loading5')"
            >
              <template v-slot:loader>
                <v-progress-circular size="42" width="6" color="blue accent-4" indeterminate></v-progress-circular>
              </template>
              Load5
            </v-btn>
            <v-btn
              height="64"
              width="140"
              :loading="loading6"
              :disabled="loading6"
              color="light-blue accent-4"
              @click="loader('loading6')"
            >
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon size="42">mdi-sync</v-icon>
                </span>
              </template>
              Load6
            </v-btn>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>loading : v-progress-liner</v-subheader>
        <v-container>
          <v-row>
            <v-sheet color="light-blue lighten-4" style="height: 200px; width: 300px; position: relative">
              <v-progress-linear
                :active="loading7"
                :indeterminate="loading7"
                top
                color="blue accent-4"
              ></v-progress-linear>
              <v-btn absolute bottom right color="cyan ligten-4" :disabled="loading7" @click="loader('loading7')">
                Load7
              </v-btn>
            </v-sheet>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>position : absolute</v-subheader>
        <v-container>
          <v-row>
            <v-sheet color="grey" style="height: 300px; width: 600px; position: relative">
              <v-btn absolute top left>top + left</v-btn>
              <v-btn absolute top right>top + right</v-btn>
              <v-btn absolute bottom left>bottom + left</v-btn>
              <v-btn absolute bottom right>bottom + right</v-btn>
            </v-sheet>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
@keyframes loader {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
.v-btn {
  margin: 8px !important;
}
</style>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Button',
  data() {
    return {
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      loading7: false
    }
  },
  methods: {
    loader(p) {
      this[p] = true
      setTimeout(() => (this[p] = false), 5000)
    }
  }
})
</script>
