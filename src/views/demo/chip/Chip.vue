<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-1 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-chip dark>default</v-chip>
        <v-chip dark>
          <v-icon left>mdi-vuetify</v-icon>
          icon + default
        </v-chip>
        <v-chip dark label>label</v-chip>
        <v-chip dark label>
          <v-icon left>mdi-vuetify</v-icon>
          icon + label
        </v-chip>
        <v-chip dark outlined>outlined</v-chip>
        <v-chip dark outlined>
          <v-icon left>mdi-vuetify</v-icon>
          icon + outlined
        </v-chip>
        <v-chip dark filter :input-value="true">filter</v-chip>
        <v-chip dark close>close</v-chip>
        <v-chip dark close>
          <v-icon left>mdi-vuetify</v-icon>
          icon + close
        </v-chip>
      </v-col>
      <v-col cols="12" class="mb-1 grey darken-3">
        <v-chip dark disabled>default</v-chip>
        <v-chip dark disabled>
          <v-icon left>mdi-vuetify</v-icon>
          icon + default
        </v-chip>
        <v-chip dark label disabled>label</v-chip>
        <v-chip dark label disabled>
          <v-icon left>mdi-vuetify</v-icon>
          icon + label
        </v-chip>
        <v-chip dark outlined disabled>outlined</v-chip>
        <v-chip dark outlined disabled>
          <v-icon left>mdi-vuetify</v-icon>
          icon + outlined
        </v-chip>
        <v-chip dark filter :input-value="true" disabled>filter</v-chip>
        <v-chip dark close disabled>close</v-chip>
        <v-chip dark close disabled>
          <v-icon left>mdi-vuetify</v-icon>
          icon + close
        </v-chip>
      </v-col>

      <v-col cols="12" class="mt-1 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-chip light>default</v-chip>
        <v-chip light>
          <v-icon left>mdi-vuetify</v-icon>
          icon + default
        </v-chip>
        <v-chip light label>label</v-chip>
        <v-chip light label>
          <v-icon left>mdi-vuetify</v-icon>
          icon + label
        </v-chip>
        <v-chip light outlined>outlined</v-chip>
        <v-chip light outlined>
          <v-icon left>mdi-vuetify</v-icon>
          icon + outlined
        </v-chip>
        <v-chip light filter :input-value="true">filter</v-chip>
        <v-chip light close>close</v-chip>
        <v-chip light close>
          <v-icon left>mdi-vuetify</v-icon>
          icon + close
        </v-chip>
      </v-col>
      <v-col cols="12" class="mb-1 grey lighten-3">
        <v-chip light disabled>default</v-chip>
        <v-chip light disabled>
          <v-icon left>mdi-vuetify</v-icon>
          icon + default
        </v-chip>
        <v-chip light label disabled>label</v-chip>
        <v-chip light label disabled>
          <v-icon left>mdi-vuetify</v-icon>
          icon + label
        </v-chip>
        <v-chip light outlined disabled>outlined</v-chip>
        <v-chip light outlined disabled>
          <v-icon left>mdi-vuetify</v-icon>
          icon + outlined
        </v-chip>
        <v-chip light filter :input-value="true" disabled>filter</v-chip>
        <v-chip light close disabled>close</v-chip>
        <v-chip light close disabled>
          <v-icon left>mdi-vuetify</v-icon>
          icon + close
        </v-chip>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-chip color="red" text-color="white">red</v-chip>
        <v-chip color="pink" text-color="white">pink</v-chip>
        <v-chip color="purple" text-color="white">purple</v-chip>
        <v-chip color="deep-purple" text-color="white">deep-purple</v-chip>
        <v-chip color="indigo" text-color="white">indigo</v-chip>
        <v-chip color="blue" text-color="white">blue</v-chip>
        <v-chip color="light-blue" text-color="white">light-blue</v-chip>
        <v-chip color="cyan" text-color="white">cyan</v-chip>
        <v-chip color="teal" text-color="white">teal</v-chip>
        <v-chip color="green" text-color="white">green</v-chip>
        <v-chip color="light-green" text-color="white">light-green</v-chip>
        <v-chip color="lime" text-color="white">lime</v-chip>
        <v-chip color="yellow" text-color="white">yellow</v-chip>
        <v-chip color="amber" text-color="white">amber</v-chip>
        <v-chip color="orange" text-color="white">orange</v-chip>
        <v-chip color="deep-orange" text-color="white">deep-orange</v-chip>
        <v-chip color="brown" text-color="white">brown</v-chip>
        <v-chip color="blue-grey" text-color="white">blue-grey</v-chip>
        <v-chip color="grey" text-color="white">grey</v-chip>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>size</v-subheader>
        <v-chip x-small>x-small</v-chip>
        <v-chip small>small</v-chip>
        <v-chip>default</v-chip>
        <v-chip large>large</v-chip>
        <v-chip x-large>x-large</v-chip>
        <v-chip pill x-small><v-icon left x-small>mdi-star</v-icon>x-small</v-chip>
        <v-chip pill small><v-icon left small>mdi-star</v-icon>small</v-chip>
        <v-chip pill><v-icon left>mdi-star</v-icon>default</v-chip>
        <v-chip pill large><v-icon left large>mdi-star</v-icon>large</v-chip>
        <v-chip pill x-large><v-icon left x-large>mdi-star</v-icon>x-large</v-chip>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>filter + input-value</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="2">
              <v-chip
                filter
                :input-value="filter1"
                :color="filter1 ? 'indigo lighten-1' : 'blue lighten-2'"
                text-color="white"
                @click="filter1 = !filter1"
                >filter1</v-chip
              >
            </v-col>
            <v-col cols="2">
              <v-chip
                filter
                filter-icon="mdi-check-circle"
                :color="filter2 ? 'indigo lighten-1' : 'blue lighten-2'"
                text-color="white"
                :input-value="filter2"
                @click="filter2 = !filter2"
                >filter2</v-chip
              >
            </v-col>
            <v-col cols="2">
              <v-chip
                filter
                filter-icon="mdi-check-underline"
                :color="filter3 ? 'indigo lighten-1' : 'blue lighten-2'"
                text-color="white"
                :input-value="filter3"
                @click="filter3 = !filter3"
                >filter3</v-chip
              >
            </v-col>
            <v-col cols="2">
              <v-chip
                :color="filter4 ? 'indigo lighten-1' : 'blue lighten-2'"
                text-color="white"
                :input-value="filter4"
                @click="filter4 = !filter4"
                v-text="filter4 ? 'selected' : 'select'"
              ></v-chip>
            </v-col>
            <v-col cols="2">
              <v-chip
                link
                filter
                :color="filter5 ? 'indigo lighten-1' : 'blue lighten-2'"
                text-color="white"
                :input-value="filter5"
                :label="!filter5"
                :ripple="false"
                @click="filter5 = !filter5"
                >filter5</v-chip
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2"> filter1 = {{ filter1 }} </v-col>
            <v-col cols="2"> filter2 = {{ filter2 }} </v-col>
            <v-col cols="2"> filter3 = {{ filter3 }} </v-col>
            <v-col cols="2"> filter4 = {{ filter4 }} </v-col>
            <v-col cols="2"> filter5 = {{ filter5 }} </v-col>
          </v-row>
          <v-btn
            @click="
              filter1 = false
              filter2 = false
              filter3 = false
              filter4 = false
              filter5 = false
            "
            >reset</v-btn
          >
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>close</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="2">
              <v-chip link close :active="close1" @update:active="close1 = $event">close1</v-chip>
            </v-col>
            <v-col cols="2">
              <v-chip link close close-icon="mdi-close" :active="close2" @update:active="close2 = $event"
                >close2</v-chip
              >
            </v-col>
            <v-col cols="2">
              <v-chip
                link
                close
                close-icon="mdi-close-outline"
                :active="close3"
                @update:active="
                  v => {
                    close3 = v
                  }
                "
                >close3</v-chip
              >
            </v-col>
          </v-row>
          <v-row justify="start">
            <v-col cols="2"> close1 = {{ close1 }} </v-col>
            <v-col cols="2"> close2 = {{ close2 }} </v-col>
            <v-col cols="2"> close3 = {{ close3 }} </v-col>
          </v-row>
          <v-btn
            @click="
              close1 = true
              close2 = true
              close3 = true
            "
            >reset</v-btn
          >
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>pill + v-avatar</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-chip pill color="cyan" text-color="white" @click="pill1 = !pill1">
              <v-avatar left>
                <v-icon v-if="pill1" color="white">mdi-email</v-icon>
                <v-icon v-else color="white">mdi-email-lock</v-icon>
              </v-avatar>
              icon + pill = {{ pill1 }}
            </v-chip>
            <v-chip color="cyan" text-color="white" @click="pill2 = !pill2">
              <v-avatar left>
                <v-icon v-if="pill2" color="white">mdi-email</v-icon>
                <v-icon v-else color="white">mdi-email-lock</v-icon>
              </v-avatar>
              icon + no pill = {{ pill2 }}
            </v-chip>
            <v-chip pill link color="light-green lighten-1" @click="counter = counter + 1">
              <v-avatar left>
                <span class="pa-3 green darken-4 white--text">{{ counter }}</span>
              </v-avatar>
              text
            </v-chip>
            <v-chip link color="light-green lighten-1" @click="counter = counter + 1">
              <v-avatar left>
                <span class="pa-3 green darken-4 white--text">{{ counter }}</span>
              </v-avatar>
              text + no pill
            </v-chip>
            <v-chip pill link>
              <v-avatar left>
                <v-img :src="require('@/assets/logo.png')" alt="vuetify"></v-img>
              </v-avatar>
              image
            </v-chip>
            <v-chip link>
              <v-avatar left>
                <v-img :src="require('@/assets/logo.png')" alt="vuetify"></v-img>
              </v-avatar>
              image + no pill
            </v-chip>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>icon</v-subheader>
        <v-chip>
          <v-icon left>mdi-star</v-icon>
          mdi-star
        </v-chip>
        <v-chip>
          mdi-star
          <v-icon right>mdi-star</v-icon>
        </v-chip>
        <v-chip>
          <v-icon left>mdi-email</v-icon>
          mdi-email
        </v-chip>
        <v-chip>
          <v-icon left>mdi-cellphone-android</v-icon>
          mdi-cellphone-android
        </v-chip>
      </v-col>

      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>link + ripple</v-subheader>
        <v-chip>no link</v-chip>
        <v-chip link>link + ripple</v-chip>
        <v-chip link :ripple="{ center: true }">link + center=true</v-chip>
        <v-chip link :ripple="false">link + ripple=false</v-chip>
      </v-col>

      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>link</v-subheader>
        <v-chip href="https://www.google.co.jp" target="_blank">HREF</v-chip>
        <v-chip href="#top">to #top</v-chip>
        <v-chip :to="{ name: 'Home' }" active-class="blue" exact-active-class="cyan">to Home</v-chip>
        <v-chip :to="{ name: 'Chip' }" active-class="blue" exact-active-class="cyan">to Chip</v-chip>
        <v-chip :to="{ name: 'ChipGroup' }" active-class="blue" exact-active-class="cyan">to Chip Group</v-chip>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>active</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="auto">
              <v-chip>ON</v-chip>
            </v-col>
            <v-col cols="2">
              <v-chip :active="act1" link @click="act1 = !act1" color="red">active</v-chip>
            </v-col>
            <v-col cols="2">
              <v-chip :active="act2" link @click="act2 = !act2" color="pink">active</v-chip>
            </v-col>
            <v-col cols="2">
              <v-chip :active="act3" link @click="act3 = !act3" color="purple">active</v-chip>
            </v-col>
          </v-row>
          <v-row justify="start">
            <v-col cols="auto">
              <v-chip>OFF</v-chip>
            </v-col>
            <v-col cols="2">
              <v-chip :active="!act1" link @click="act1 = !act1" outlined color="red">active</v-chip>
            </v-col>
            <v-col cols="2">
              <v-chip :active="!act2" link @click="act2 = !act2" outlined color="pink">active</v-chip>
            </v-col>
            <v-col cols="2">
              <v-chip :active="!act3" link @click="act3 = !act3" outlined color="purple">active</v-chip>
            </v-col>
          </v-row>
        </v-container>
        <v-btn
          @click="
            act1 = true
            act2 = true
            act3 = true
          "
          >reset</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-chip {
  margin: 8px !important;
}
</style>

<script>
export default {
  name: 'Chip',
  data() {
    return {
      filter1: false,
      filter2: false,
      filter3: false,
      filter4: false,
      filter5: false,
      close1: true,
      close2: true,
      close3: true,
      pill1: true,
      pill2: true,
      act1: true,
      act2: true,
      act3: true,
      counter: 99
    }
  }
}
</script>
