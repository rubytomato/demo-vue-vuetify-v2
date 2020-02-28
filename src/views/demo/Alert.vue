<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="6" md="3">
              <v-alert dark>dark</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert dark elevation="10">dark, elevation=10</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert dark color="success">dark, success</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert dark color="info">dark, info</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert dark color="warning">dark, warning</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert dark color="error">dark, error</v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="6" md="3">
              <v-alert light>light</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert light elevation="10">light, elevation=10</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert light color="success">light, success</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert light color="info">light, info</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert light color="warning">light, warning</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert light color="error">light, error</v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="6" md="3">
              <v-alert color="red" icon="mdi-vuetify">red</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="pink" icon="mdi-vuetify">pink</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="purple" icon="mdi-vuetify">purple</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="deep-purple" icon="mdi-vuetify">deep-purple</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="indigo" icon="mdi-vuetify">indigo</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="blue" icon="mdi-vuetify">blue</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="light-blue" icon="mdi-vuetify">light-blue</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="cyan" icon="mdi-vuetify">cyan</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="teal" icon="mdi-vuetify">teal</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="green" icon="mdi-vuetify">green</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="light-green" icon="mdi-vuetify">light-green</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="lime" icon="mdi-vuetify">lime</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="yellow" icon="mdi-vuetify">yellow</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="amber" icon="mdi-vuetify">amber</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="orange" icon="mdi-vuetify">orange</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="deep-orange" icon="mdi-vuetify">deep-orange</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="brown" icon="mdi-vuetify">brown</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="blue-grey" icon="mdi-vuetify">blue-grey</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="grey" icon="mdi-vuetify">grey</v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>elevation</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="0">0</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="2">2</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="4">4</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="6">6</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="8">8</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="10">10</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="12">12</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="14">14</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="16">16</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="18">18</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="20">20</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="22">22</v-alert>
            </v-col>
            <v-col cols="4" md="2">
              <v-alert icon="mdi-vuetify" elevation="24">24</v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>type</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="6" md="3">
              <v-alert type="success" prominent>success</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert type="info" prominent>info</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert type="warning" prominent>warning</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert type="error" prominent>error</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert type="success" outlined prominent>success</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert type="info" outlined prominent>info</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert type="warning" outlined prominent>warning</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert type="error" outlined prominent>error</v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>border</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="6" md="3">
              <v-alert border="top">top</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert border="left">left</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert border="bottom">bottom</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert border="right">right</v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>colored border</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="6" md="3">
              <v-alert color="red" border="top" colored-border>top, red</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="green" border="left" colored-border>left, green</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="blue" border="bottom" colored-border>bottom, blue</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert color="black" border="right" colored-border>right, black</v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>shape</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="6" md="3">
              <v-alert tile>tile</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert dense>dense</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert outlined>outlined</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert text>text</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert dismissible>dismissible</v-alert>
            </v-col>
            <v-col cols="6" md="3">
              <v-alert icon="mdi-vuetify">icon</v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>conbination</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="6">
              <v-alert color="pink accent-3" icon="mdi-vuetify" border="bottom" outlined dismissible elevation="3"
                >icon, border, outlined, dismissible, elevation</v-alert
              >
            </v-col>
            <v-col cols="12" md="6">
              <v-alert color="orange accent-3" icon="mdi-vuetify" border="bottom" tile text dismissible elevation="3"
                >icon, border, tile, text dismissible, elevation</v-alert
              >
            </v-col>
            <v-col cols="12" md="6">
              <v-alert color="cyan accent-3" icon="mdi-vuetify" border="bottom" dismissible elevation="3"
                >icon, border, dismissible, elevation</v-alert
              >
            </v-col>
            <v-col cols="12" md="6">
              <v-alert color="lime accent-3" icon="mdi-vuetify" border="bottom" tile dismissible
                >icon, border, tile, dismissible</v-alert
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>prominent</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="6">
              <v-alert icon="mdi-vuetify" outlined prominent min-height="300" width="auto"
                >Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et
                lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere,
                tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam
                sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet
                eros.</v-alert
              >
            </v-col>
            <v-col cols="12" md="6">
              <v-alert icon="mdi-vuetify" outlined min-height="300" width="auto"
                >Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et
                lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere,
                tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam
                sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet
                eros.</v-alert
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>transition</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="6">
              <v-alert
                color="pink"
                dark
                border="top"
                icon="mdi-home"
                transition="scale-transition"
                prominent
                dismissible
              >
                <v-subheader>scale-transition</v-subheader>
                Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget,
                vestibulum et, tempor auctor, justo.
              </v-alert>
            </v-col>
            <v-col cols="12" md="6">
              <v-alert
                color="pink"
                dark
                border="top"
                icon="mdi-home"
                transition="fade-transition"
                prominent
                dismissible
              >
                <v-subheader>fade-transition</v-subheader>
                Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget,
                vestibulum et, tempor auctor, justo.
              </v-alert>
            </v-col>
            <v-col cols="12" md="6">
              <v-alert
                color="pink"
                dark
                border="top"
                icon="mdi-home"
                transition="slide-x-transition"
                prominent
                dismissible
              >
                <v-subheader>slide-x-transition</v-subheader>
                Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget,
                vestibulum et, tempor auctor, justo.
              </v-alert>
            </v-col>
            <v-col cols="12" md="6">
              <v-alert
                color="pink"
                dark
                border="top"
                icon="mdi-home"
                transition="slide-y-transition"
                prominent
                dismissible
              >
                <v-subheader>slide-y-transition</v-subheader>
                Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget,
                vestibulum et, tempor auctor, justo.
              </v-alert>
            </v-col>
            <v-col cols="12" md="6">
              <v-alert
                color="pink"
                dark
                border="top"
                icon="mdi-home"
                transition="scroll-x-transition"
                prominent
                dismissible
              >
                <v-subheader>scroll-x-transition</v-subheader>
                Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget,
                vestibulum et, tempor auctor, justo.
              </v-alert>
            </v-col>
            <v-col cols="12" md="6">
              <v-alert
                color="pink"
                dark
                border="top"
                icon="mdi-home"
                transition="scroll-y-transition"
                prominent
                dismissible
              >
                <v-subheader>scroll-y-transition</v-subheader>
                Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget,
                vestibulum et, tempor auctor, justo.
              </v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>slot</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="6">
              <v-alert ref="alert1" outlined transition="fade-transition" @input="inputEvent">
                <template v-slot:prepend>
                  <v-icon size="32" color="green" left>mdi-arrow-left-bold</v-icon>
                </template>
                <template v-slot:append>
                  <v-icon size="32" color="green" right>mdi-arrow-right-bold</v-icon>
                </template>
                <template v-slot:close>
                  <v-btn icon @click="toggle">
                    <v-icon size="32" color="red">mdi-close-box</v-icon>
                  </v-btn>
                </template>
                Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et
                lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere,
                tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam
                sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet
                eros.
              </v-alert>
              <v-btn @click="toggle">toggle</v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-alert ref="alert2" v-model="alert2" outlined transition="fade-transition">
                <template v-slot:prepend>
                  <v-icon size="32" color="green" left>mdi-arrow-left-bold</v-icon>
                </template>
                <template v-slot:append>
                  <v-icon size="32" color="green" right>mdi-arrow-right-bold</v-icon>
                </template>
                <template v-slot:close>
                  <v-btn icon @click="$refs.alert2.toggle()">
                    <v-icon size="32" color="red">mdi-close-box</v-icon>
                  </v-btn>
                </template>
                Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et
                lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere,
                tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam
                sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet
                eros.
              </v-alert>
              <v-btn @click="alert2 = !alert2">toggle</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      alert2: true
    }
  },
  methods: {
    toggle() {
      console.log('toggle')
      this.$refs.alert1.toggle()
    },
    inputEvent(val) {
      console.log('input', val)
    }
  }
}
</script>
