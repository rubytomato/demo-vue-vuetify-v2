<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-tooltip v-model="theme" top dark>
          <template v-slot:activator="{ on }">
            <v-btn dark v-on="on" class="mt-4 ml-1">Button</v-btn>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="3" class="my-2 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-tooltip v-model="theme" top light>
          <template v-slot:activator="{ on }">
            <v-btn light v-on="on" class="mt-4 ml-1">Button</v-btn>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="3" class="my-2 grey lighten-4">
        <v-subheader>on/off</v-subheader>
        <v-tooltip top :open-on-hover="true" :open-on-click="false">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mt-4 mx-2">hover</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip top :open-on-hover="false" :open-on-click="true">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mt-4 mx-2">click</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="3" class="my-2 grey lighten-4">
        <v-subheader>delay</v-subheader>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mt-4 mx-2">default</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip top open-delay="2000" close-delay="2000">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mt-4 mx-2">delay</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip top open-delay="2000" close-delay="2000" open-on-click :open-on-hover="false">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mt-4 mx-2">click + delay</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-col>

      <v-col cols="12" md="12" class="my-4 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-tooltip v-model="color" top color="red">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">red</v-chip>
          </template>
          <span>red</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="pink">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">pink</v-chip>
          </template>
          <span>pink</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="purple">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">purple</v-chip>
          </template>
          <span>purple</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="deep-purple">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">deep-purple</v-chip>
          </template>
          <span>purple</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="indigo">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">indigo</v-chip>
          </template>
          <span>indigo</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="blue">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">blue</v-chip>
          </template>
          <span>blue</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="light-blue">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">light-blue</v-chip>
          </template>
          <span>light-blue</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="cyan">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">cyan</v-chip>
          </template>
          <span>cyan</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="teal">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">teal</v-chip>
          </template>
          <span>teal</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="green">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">green</v-chip>
          </template>
          <span>green</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="light-green">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">light-green</v-chip>
          </template>
          <span>light-green</span>
        </v-tooltip>
      </v-col>

      <v-col cols="12" md="12" class="my-4 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-tooltip v-model="color" top color="lime">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">lime</v-chip>
          </template>
          <span>lime</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="yellow">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">yellow</v-chip>
          </template>
          <span>yellow</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="amber">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">amber</v-chip>
          </template>
          <span>amber</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="orange">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">orange</v-chip>
          </template>
          <span>orange</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="deep-orange">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">deep-orange</v-chip>
          </template>
          <span>deep-orange</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="brown">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">brown</v-chip>
          </template>
          <span>brown</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="blue-grey">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">blue-grey</v-chip>
          </template>
          <span>blue-grey</span>
        </v-tooltip>
        <v-tooltip v-model="color" top color="grey">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="mx-3">grey</v-chip>
          </template>
          <span>grey</span>
        </v-tooltip>
      </v-col>

      <v-col cols="12" md="4" class="my-4 grey lighten-4">
        <v-subheader>position</v-subheader>
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">left</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">top</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">bottom</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">right</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="4" class="my-4 grey lighten-4">
        <v-subheader>size</v-subheader>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">default</v-chip>
          </template>
          <span
            >Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget,
            vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod
            vitae, posuere imperdiet, leo. Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras
            risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent
            turpis.</span
          >
        </v-tooltip>
        <v-tooltip top min-width="200" max-width="400">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">min/max-width</v-chip>
          </template>
          <span
            >Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget,
            vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod
            vitae, posuere imperdiet, leo. Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras
            risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent
            turpis.</span
          >
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="4" class="my-4 grey lighten-4">
        <v-subheader>transition</v-subheader>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">default</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <!--
        <v-tooltip top transition="scale-transition">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">scale</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
-->
        <v-tooltip top transition="fade-transition">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">fade</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip top transition="slide-x-transition">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">slide</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip top transition="scroll-x-transition">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-4 mx-3">scroll</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>top + nudge-left/right</v-subheader>
        <v-tooltip v-model="nudge" top nudge-left="30">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-3 mx-3">top</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip v-model="nudge" top>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-3 mx-3">top</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip v-model="nudge" top nudge-right="30">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-3 mx-3">top</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>bottom + nudge-left/right</v-subheader>
        <v-tooltip v-model="nudge" bottom nudge-left="30">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-3 mx-3">bottom</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip v-model="nudge" bottom>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-3 mx-3">bottom</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
        <v-tooltip v-model="nudge" bottom>
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-3 mx-3">bottom</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="4" class="my-4 grey lighten-4">
        <v-subheader>right + nudge-top/bottom</v-subheader>
        <v-container>
          <v-row>
            <v-col>
              <v-tooltip v-model="nudge" right nudge-top="50">
                <template v-slot:activator="{ on }">
                  <v-chip link v-on="on" class="my-3 mx-3">right</v-chip>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-tooltip v-model="nudge" right>
                <template v-slot:activator="{ on }">
                  <v-chip link v-on="on" class="my-3 mx-3">right</v-chip>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-tooltip v-model="nudge" right nudge-bottom="50">
                <template v-slot:activator="{ on }">
                  <v-chip link v-on="on" class="my-3 mx-3">right</v-chip>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="4" class="my-4 grey lighten-4">
        <v-subheader>left + nudge-top/bottom</v-subheader>
        <v-container>
          <v-row>
            <v-col>
              <v-tooltip v-model="nudge" left nudge-top="50">
                <template v-slot:activator="{ on }">
                  <v-chip link v-on="on" class="my-3 mx-3">left</v-chip>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-tooltip v-model="nudge" left>
                <template v-slot:activator="{ on }">
                  <v-chip link v-on="on" class="my-3 mx-3">left</v-chip>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-tooltip v-model="nudge" left nudge-bottom="50">
                <template v-slot:activator="{ on }">
                  <v-chip link v-on="on" class="my-3 mx-3">left</v-chip>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="4" class="my-4 grey lighten-4">
        <v-subheader>nudge</v-subheader>
        <v-tooltip v-model="nudge" left nudge-top="25" nudge-right="25">
          <template v-slot:activator="{ on }">
            <v-chip link v-on="on" class="my-3 mx-3">left + nudge-top + nudge-right</v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="6" class="my-4 grey lighten-4">
        <v-subheader>card</v-subheader>
        <v-tooltip left nudge-top="20" activator="#card_ok">
          <span>ok tooltip</span>
        </v-tooltip>
        <v-tooltip right nudge-top="20" activator="#card_cancel">
          <span>cancel tooltip</span>
        </v-tooltip>
        <v-card>
          <v-card-title class="headline">title</v-card-title>
          <v-card-subtitle>card subtitle</v-card-subtitle>
          <v-divider class="mx-3"></v-divider>
          <v-card-text>
            <div class="body-1 mb-1">
              card text. card text. card text. card text. card text. card text. card text. card text. card text. card
              text. card text.
            </div>
            <div class="body-2 mb-1">
              card text. card text. card text. card text. card text. card text. card text. card text. card text. card
              text. card text.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small id="card_ok">OK</v-btn>
            <v-btn small id="card_cancel">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="my-4 grey lighten-4">
        <v-subheader>text</v-subheader>
        <v-tooltip top color="cyan darken-3" activator="#tc1">
          <span>Tooltip</span>
        </v-tooltip>
        <div class="body-1">
          Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum
          et, tempor auctor, justo. Pellentesque posuere. <span id="tc1" style="color: red">Curabitur</span> ligula
          sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Phasellus nec sem in justo pellentesque
          facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse
          platea dictumst. Praesent turpis.
        </div>
      </v-col>
      <v-col cols="12" md="6" class="my-4 grey lighten-4">
        <v-subheader>z-index</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-sheet width="120" height="100" class="ma-2">
              <v-tooltip right z-index="1">
                <template v-slot:activator="{ on }">
                  <v-chip link v-on="on" class="my-4 mx-3">z-index</v-chip>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
            </v-sheet>
            <v-sheet width="200" height="100" elevation="10" class="ma-2" style="z-index: 2">
              <div>sheet "style=z-index: 2"</div>
            </v-sheet>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Tooltip',
  data() {
    return {
      theme: false,
      color: false,
      nudge: false
    }
  }
}
</script>
