<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-container>
          <v-row justify="space-around">
            <v-col cols="6" md="3" class="pa-2 my-1">
              <v-sheet dark height="100" max-width="auto" class="pa-1 mx-auto">dark</v-sheet>
            </v-col>
            <v-col cols="6" md="3" class="pa-2 my-1">
              <v-sheet dark tile height="100" max-width="auto" class="pa-1 mx-auto">dark, tile</v-sheet>
            </v-col>
            <v-col cols="6" md="3" class="pa-2 my-1">
              <v-sheet dark elevation="10" height="100" max-width="auto" class="pa-1 mx-auto"
                >dark, elevation=10</v-sheet
              >
            </v-col>
            <v-col cols="6" md="3" class="pa-2 my-1">
              <v-sheet dark tile elevation="10" height="100" max-width="auto" class="pa-1 mx-auto"
                >dark, tile, elevation=10</v-sheet
              >
            </v-col>
          </v-row>
          <v-row justify="space-around">
            <v-sheet dark color="primary" height="80" width="80" class="pa-1 ma-2">primary</v-sheet>
            <v-sheet dark color="secondary" height="80" width="80" class="pa-1 ma-2">secondary</v-sheet>
            <v-sheet dark color="accent" height="80" width="80" class="pa-1 ma-2">accent</v-sheet>
            <v-sheet dark color="success" height="80" width="80" class="pa-1 ma-2">success</v-sheet>
            <v-sheet dark color="info" height="80" width="80" class="pa-1 ma-2">info</v-sheet>
            <v-sheet dark color="warning" height="80" width="80" class="pa-1 ma-2">warning</v-sheet>
            <v-sheet dark color="error" height="80" width="80" class="pa-1 ma-2">error</v-sheet>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-container>
          <v-row justify="space-around">
            <v-col cols="6" md="3" class="pa-2 my-1">
              <v-sheet light height="100" max-width="auto" class="pa-1 mx-auto">light</v-sheet>
            </v-col>
            <v-col cols="6" md="3" class="pa-2 my-1">
              <v-sheet light tile height="100" max-width="auto" class="pa-1 mx-auto">light, tile</v-sheet>
            </v-col>
            <v-col cols="6" md="3" class="pa-2 my-1">
              <v-sheet light elevation="10" height="100" max-width="auto" class="pa-1 mx-auto"
                >light, elevation=10</v-sheet
              >
            </v-col>
            <v-col cols="6" md="3" class="pa-2 my-1">
              <v-sheet light tile elevation="10" height="100" max-width="auto" class="pa-1 mx-auto"
                >light, tile, elevation=10</v-sheet
              >
            </v-col>
          </v-row>
          <v-row justify="space-around">
            <v-sheet light color="primary" height="80" width="80" class="pa-1 ma-2">primary</v-sheet>
            <v-sheet light color="secondary" height="80" width="80" class="pa-1 ma-2">secondary</v-sheet>
            <v-sheet light color="accent" height="80" width="80" class="pa-1 ma-2">accent</v-sheet>
            <v-sheet light color="success" height="80" width="80" class="pa-1 ma-2">success</v-sheet>
            <v-sheet light color="info" height="80" width="80" class="pa-1 ma-2">info</v-sheet>
            <v-sheet light color="warning" height="80" width="80" class="pa-1 ma-2">warning</v-sheet>
            <v-sheet light color="error" height="80" width="80" class="pa-1 ma-2">error</v-sheet>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-sheet color="red" height="80" width="80" class="pa-1 ma-2">red</v-sheet>
            <v-sheet color="pink" height="80" width="80" class="pa-1 ma-2">pink</v-sheet>
            <v-sheet color="purple" height="80" width="80" class="pa-1 ma-2">purple</v-sheet>
            <v-sheet color="deep-purple" height="80" width="80" class="pa-1 ma-2">deep-purple</v-sheet>
            <v-sheet color="indigo" height="80" width="80" class="pa-1 ma-2">indigo</v-sheet>
            <v-sheet color="light-blue" height="80" width="80" class="pa-1 ma-2">light-blue</v-sheet>
            <v-sheet color="cyan" height="80" width="80" class="pa-1 ma-2">cyan</v-sheet>
            <v-sheet color="teal" height="80" width="80" class="pa-1 ma-2">teal</v-sheet>
            <v-sheet color="green" height="80" width="80" class="pa-1 ma-2">green</v-sheet>
            <v-sheet color="light-green" height="80" width="80" class="pa-1 ma-2">light-green</v-sheet>
            <v-sheet color="lime" height="80" width="80" class="pa-1 ma-2">lime</v-sheet>
            <v-sheet color="yellow" height="80" width="80" class="pa-1 ma-2">yellow</v-sheet>
            <v-sheet color="amber" height="80" width="80" class="pa-1 ma-2">amber</v-sheet>
            <v-sheet color="orange" height="80" width="80" class="pa-1 ma-2">orange</v-sheet>
            <v-sheet color="deep-orange" height="80" width="80" class="pa-1 ma-2 white--text">deep-orange</v-sheet>
            <v-sheet color="brown" height="80" width="80" class="pa-1 ma-2 white--text">brown</v-sheet>
            <v-sheet color="blue-grey" height="80" width="80" class="pa-1 ma-2 white--text">blue-grey</v-sheet>
            <v-sheet color="grey" height="80" width="80" class="pa-1 ma-2 white--text">grey</v-sheet>
            <v-sheet color="black" height="80" width="80" class="pa-1 ma-2 white--text">black</v-sheet>
            <v-sheet color="white" height="80" width="80" class="pa-1 ma-2">white</v-sheet>
            <v-sheet color="transparent" height="80" width="80" class="pa-1 ma-2">transparent</v-sheet>

            <v-sheet color="#EF5350" height="80" width="80" class="pa-1 ma-2">#EF5350</v-sheet>
            <v-sheet color="#EC407A" height="80" width="80" class="pa-1 ma-2">#EC407A</v-sheet>
            <v-sheet color="#AB47BC" height="80" width="80" class="pa-1 ma-2">#AB47BC</v-sheet>
            <v-sheet color="#7E57C2" height="80" width="80" class="pa-1 ma-2">#7E57C2</v-sheet>
            <v-sheet color="#5C6BC0" height="80" width="80" class="pa-1 ma-2">#5C6BC0</v-sheet>
            <v-sheet color="#42A5F5" height="80" width="80" class="pa-1 ma-2">#42A5F5</v-sheet>
            <v-sheet color="#29B6F6" height="80" width="80" class="pa-1 ma-2">#29B6F6</v-sheet>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="grey lighten-4">
        <v-subheader>elevation</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-sheet height="80" width="80" elevation="0" class="pa-1 ma-4">0</v-sheet>
            <v-sheet height="80" width="80" elevation="2" class="pa-1 ma-4">2</v-sheet>
            <v-sheet height="80" width="80" elevation="4" class="pa-1 ma-4">4</v-sheet>
            <v-sheet height="80" width="80" elevation="6" class="pa-1 ma-4">6</v-sheet>
            <v-sheet height="80" width="80" elevation="8" class="pa-1 ma-4">8</v-sheet>
            <v-sheet height="80" width="80" elevation="10" class="pa-1 ma-4">10</v-sheet>
            <v-sheet height="80" width="80" elevation="12" class="pa-1 ma-4">12</v-sheet>
            <v-sheet height="80" width="80" elevation="14" class="pa-1 ma-4">14</v-sheet>
            <v-sheet height="80" width="80" elevation="16" class="pa-1 ma-4">16</v-sheet>
            <v-sheet height="80" width="80" elevation="18" class="pa-1 ma-4">18</v-sheet>
            <v-sheet height="80" width="80" elevation="20" class="pa-1 ma-4">20</v-sheet>
            <v-sheet height="80" width="80" elevation="22" class="pa-1 ma-4">22</v-sheet>
            <v-sheet height="80" width="80" elevation="24" class="pa-1 ma-4">24</v-sheet>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>height=250 / width=350 固定</v-subheader>
        <v-sheet height="250" width="350" class="pa-1 ma-1 d-inline-block">Phasellus tempus. </v-sheet>
        <v-divider class="my-3"></v-divider>
        <v-sheet height="250" width="350" class="pa-1 ma-1 d-inline-block">
          Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum
          et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
          imperdiet, leo. Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus
          ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
        </v-sheet>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>min-height=250 / min-width=350 最小固定</v-subheader>
        <v-sheet min-height="250" min-width="350" class="pa-1 ma-1 d-inline-block">Phasellus tempus. </v-sheet>
        <v-divider class="my-3"></v-divider>
        <v-sheet min-height="250" min-width="350" class="pa-1 ma-1 d-inline-block">
          Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum
          et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
          imperdiet, leo. Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus
          ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
        </v-sheet>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>max-height=250 / max-width=350 最大固定</v-subheader>
        <v-sheet max-height="250" max-width="350" class="pa-1 ma-1 d-inline-block">Phasellus tempus. </v-sheet>
        <v-divider class="my-3"></v-divider>
        <v-sheet max-height="250" max-width="350" class="pa-1 ma-1 d-inline-block">
          Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum
          et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
          imperdiet, leo. Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus
          ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
        </v-sheet>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>tag</v-subheader>
        <v-sheet tag="main" max-width="350" elevation="3" class="pa-2 mx-auto">
          Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum
          et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
          imperdiet, leo.
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Sheet'
}
</script>
