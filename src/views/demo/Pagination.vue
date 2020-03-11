<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-container class="pa-0">
          <v-row justify="start">
            <v-col cols="12" md="5">
              <v-pagination dark v-model="p1" :length="20"> </v-pagination>
            </v-col>
            <v-divider vertical class="white ma-2"></v-divider>
            <v-col cols="12" md="5">
              <v-pagination dark v-model="p1" circle :length="20"> </v-pagination>
            </v-col>
            <v-col cols="12" md="5">
              <v-pagination dark v-model="p1" disabled :length="20"> </v-pagination>
            </v-col>
            <v-divider vertical class="white ma-2"></v-divider>
            <v-col cols="12" md="5">
              <v-pagination dark v-model="p1" circle disabled :length="20"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-container class="pa-0">
          <v-row justify="start">
            <v-col cols="12" md="5">
              <v-pagination light v-model="p2" :length="20"> </v-pagination>
            </v-col>
            <v-divider vertical class="black ma-2"></v-divider>
            <v-col cols="12" md="5">
              <v-pagination light v-model="p2" circle :length="20"> </v-pagination>
            </v-col>
            <v-col cols="12" md="5">
              <v-pagination light v-model="p2" disabled :length="20"> </v-pagination>
            </v-col>
            <v-divider vertical class="black ma-2"></v-divider>
            <v-col cols="12" md="5">
              <v-pagination light v-model="p2" circle disabled :length="20"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-3">
        <v-subheader>color</v-subheader>
        <v-container class="pa-0">
          <v-row justify="start">
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="red" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="pink" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="purple" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="deep-purple" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="indigo" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="blue" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="light-blue" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="cyan" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="teal" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="green" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="light-green" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="lime" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="yellow" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="amber" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="orange" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="deep-orange" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="brown" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="blue-grey" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p3" color="grey" :length="3"> </v-pagination>
            </v-col>
            <v-col cols="6" md="3" class="teal accent-1">
              <v-pagination v-model="p3" color="transparent" :length="3"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-3">
        <v-subheader>icon</v-subheader>
        <v-container class="pa-0">
          <v-row justify="start">
            <v-col cols="6" md="3">
              <v-pagination v-model="p9" prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right" :length="3">
              </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p10" prev-icon="mdi-arrow-left-bold" next-icon="mdi-arrow-right-bold" :length="3">
              </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination
                v-model="p11"
                prev-icon="mdi-arrow-left-drop-circle-outline"
                next-icon="mdi-arrow-right-drop-circle-outline"
                :length="3"
              >
              </v-pagination>
            </v-col>
            <v-col cols="6" md="3">
              <v-pagination v-model="p12" prev-icon="mdi-pan-left" next-icon="mdi-pan-right" :length="3">
              </v-pagination>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>page</v-subheader>
        <v-container class="pa-0 my-1">
          <v-row>
            <v-col cols="12" md="10" class="grey darken-1">
              <v-pagination v-model="p13" :length="20"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="pa-0 my-1">
          <v-row>
            <v-col cols="12" md="8" class="grey darken-1">
              <v-pagination v-model="p14" :length="20"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="pa-0 my-1">
          <v-row>
            <v-col cols="12" md="6" class="grey darken-1">
              <v-pagination v-model="p15" :length="20"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>page</v-subheader>
        <v-container class="pa-0 my-1">
          <v-row>
            <v-col cols="12" md="10" class="grey darken-1">
              <v-pagination v-model="p16" :length="20" :total-visible="8"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="pa-0 my-1">
          <v-row>
            <v-col cols="12" md="8" class="grey darken-1">
              <v-pagination v-model="p17" :length="20" :total-visible="8"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="pa-0 my-1">
          <v-row>
            <v-col cols="12" md="6" class="grey darken-1">
              <v-pagination v-model="p18" :length="20" :total-visible="8"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>event</v-subheader>
        <v-container class="pa-0">
          <v-row>
            <v-col cols="12" md="6">
              <v-pagination ref="page" v-model="p19" :length="20"> </v-pagination>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      p1: 1,
      p2: 1,
      p3: 1,
      p4: 1,
      p5: 1,
      p6: 1,
      p7: 1,
      p8: 1,
      p9: 1,
      p10: 1,
      p11: 1,
      p12: 1,
      p13: 1,
      p14: 1,
      p15: 1,
      p16: 1,
      p17: 1,
      p18: 1,
      p19: 1,
      p20: 1,
      p21: 1,
      p22: 1,
      p23: 1,
      p24: 1,
      p25: 1,
      p26: 1,
      p27: 1,
      p28: 1,
      p29: 1,
      p30: 1
    }
  }
}
</script>
