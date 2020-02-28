<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>slot</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-avatar color="teal" class="ma-2">
              <v-icon class="white--text">mdi-alert</v-icon>
            </v-avatar>
            <v-avatar tile color="teal" class="ma-2">
              <v-icon class="white--text">mdi-alert</v-icon>
            </v-avatar>
            <v-avatar color="cyan" class="ma-2">
              <span class="white--text headline">Aa</span>
            </v-avatar>
            <v-avatar tile color="cyan" class="ma-2">
              <span class="white--text headline">Aa</span>
            </v-avatar>
            <v-avatar color="indigo" class="ma-2">
              <v-img :src="require('@/assets/logo.png')" alt="vuetify.js"></v-img>
            </v-avatar>
            <v-avatar tile color="indigo" class="ma-2">
              <v-img :src="require('@/assets/logo.png')" alt="vuetify.js"></v-img>
            </v-avatar>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-avatar color="red" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="pink" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="purple" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="deep-purple" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="indigo" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="blue" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="light-blue" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="cyan" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="teal" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="green" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="light-green" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="lime" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="yellow" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="amber" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="orange" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="deep-orange" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="brown" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="blue-grey" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
            <v-avatar color="grey" class="ma-2">
              <v-icon>mdi-star</v-icon>
            </v-avatar>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>size</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-avatar size="32" color="teal" class="ma-2">
              <span class="white--text headline">32</span>
            </v-avatar>
            <v-avatar size="40" color="teal" class="ma-2">
              <span class="white--text headline">40</span>
            </v-avatar>
            <v-avatar size="48" color="teal" class="ma-2">
              <span class="white--text headline">48</span>
            </v-avatar>
            <v-avatar size="56" color="teal" class="ma-2">
              <span class="white--text headline">56</span>
            </v-avatar>

            <v-divider vertical></v-divider>

            <v-avatar height="32" width="64" color="teal" class="ma-2">
              <span class="white--text headline">32</span>
            </v-avatar>
            <v-avatar height="40" width="80" color="teal" class="ma-2">
              <span class="white--text headline">40</span>
            </v-avatar>
            <v-avatar height="48" width="96" color="teal" class="ma-2">
              <span class="white--text headline">48</span>
            </v-avatar>
            <v-avatar height="56" width="112" color="teal" class="ma-2">
              <span class="white--text headline">56</span>
            </v-avatar>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>with chip</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-chip class="ma-2">
              <v-avatar left color="green accent-2">
                <v-icon>mdi-alarm</v-icon>
              </v-avatar>
              Alarm
            </v-chip>

            <v-chip class="ma-2">
              <v-avatar color="green accent-2">
                <v-icon>mdi-alarm</v-icon>
              </v-avatar>
              Alarm
            </v-chip>

            <v-chip class="ma-2">
              Alarm
              <v-avatar color="green accent-2">
                <v-icon>mdi-alarm</v-icon>
              </v-avatar>
            </v-chip>

            <v-chip class="ma-2">
              Alarm
              <v-avatar right color="green accent-2">
                <v-icon>mdi-alarm</v-icon>
              </v-avatar>
            </v-chip>

            <v-divider vertical></v-divider>

            <v-chip pill class="ma-2">
              <v-avatar left color="blue accent-2">
                <v-icon>mdi-alarm</v-icon>
              </v-avatar>
              Alarm
            </v-chip>

            <v-chip pill class="ma-2">
              <v-avatar color="blue accent-2">
                <v-icon>mdi-alarm</v-icon>
              </v-avatar>
              Alarm
            </v-chip>

            <v-chip pill class="ma-2">
              Alarm
              <v-avatar color="blue accent-2">
                <v-icon>mdi-alarm</v-icon>
              </v-avatar>
            </v-chip>

            <v-chip pill class="ma-2">
              Alarm
              <v-avatar right color="blue accent-2">
                <v-icon>mdi-alarm</v-icon>
              </v-avatar>
            </v-chip>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>with botton</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-btn class="ma-2">
              <v-avatar size="32" class="mr-2">
                <v-icon>mdi-folder-search-outline</v-icon>
              </v-avatar>
              Search
            </v-btn>

            <v-btn class="ma-2">
              <v-avatar size="32" class="mr-2">
                <span class="grey--text">(56)</span>
              </v-avatar>
              Search
            </v-btn>

            <v-btn class="ma-2">
              Search
              <v-avatar size="32" class="ml-2">
                <v-icon>mdi-folder-search-outline</v-icon>
              </v-avatar>
            </v-btn>

            <v-btn class="ma-2">
              Search
              <v-avatar size="32" class="ml-2">
                <span class="grey--text">(56)</span>
              </v-avatar>
            </v-btn>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>conbination</v-subheader>
        <v-avatar>
          <v-img v-if="conbiFlag" :src="require('@/assets/logo.png')" alt="vuetify"></v-img>
          <v-icon v-else size="48">
            mdi-vuetify
          </v-icon>
        </v-avatar>
        <v-switch v-model="conbiFlag" color="blue"></v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Avatar',
  data() {
    return {
      conbiFlag: false
    }
  }
}
</script>
