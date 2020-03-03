<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-card dark height="150" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer dark padless>
          <v-card tile width="100%" class="text-center">
            <v-card-text>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-account</v-icon>
              </v-btn>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-home</v-icon>
              </v-btn>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-email</v-icon>
              </v-btn>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-calendar</v-icon>
              </v-btn>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-delete</v-icon>
              </v-btn>
            </v-card-text>
            <v-divider />
            <v-card-text class="font-weight-medium">2020 — Footer</v-card-text>
          </v-card>
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-card light height="150" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer light padless>
          <v-card tile width="100%" class="text-center">
            <v-card-text>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-account</v-icon>
              </v-btn>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-home</v-icon>
              </v-btn>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-email</v-icon>
              </v-btn>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-calendar</v-icon>
              </v-btn>
              <v-btn class="mx-4" icon>
                <v-icon size="24px">mdi-delete</v-icon>
              </v-btn>
            </v-card-text>
            <v-divider />
            <v-card-text class="font-weight-medium">2020 — Footer</v-card-text>
          </v-card>
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-card height="120" color="white" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer color="red">
          <v-col class="font-weight-medium text-center" cols="12">2020 — Footer</v-col>
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>elevation</v-subheader>
        <v-card height="120" color="white" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer elevation="10">
          <v-col class="font-weight-medium text-center" cols="12">2020 — Footer</v-col>
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>padless</v-subheader>
        <v-card height="120" color="white" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer color="blue" padless>
          <v-col class="font-weight-medium text-center" cols="12" style="background-color: #90CAF9;"
            >2020 — Footer</v-col
          >
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>no padless</v-subheader>
        <v-card height="120" color="white" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer color="blue">
          <v-col class="font-weight-medium text-center" cols="12" style="background-color: #90CAF9;"
            >2020 — Footer</v-col
          >
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>tile</v-subheader>
        <v-card height="120" color="white" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer color="blue">
          <v-col class="font-weight-medium text-center" cols="12">2020 — Footer</v-col>
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>no tile</v-subheader>
        <v-card height="120" color="white" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer :tile="false" color="blue">
          <v-col class="font-weight-medium text-center" cols="12">2020 — Footer</v-col>
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>width</v-subheader>
        <v-card light height="120" width="400" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer width="400" color="blue darken-1">
          <v-col class="font-weight-medium text-center" cols="12">2020 — Footer</v-col>
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>height</v-subheader>
        <v-card light height="120" tile>
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
        </v-card>
        <v-footer height="100" color="blue darken-1">
          <v-col class="font-weight-medium text-center" cols="12">2020 — Footer</v-col>
        </v-footer>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>absolute</v-subheader>
        <v-card light tile height="300">
          <v-card-title>Main Contents</v-card-title>
          <v-card-text>contents...</v-card-text>
          <v-footer absolute color="lime lighten-3">
            <v-col class="font-weight-medium text-center" cols="12">2020 — Footer</v-col>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
