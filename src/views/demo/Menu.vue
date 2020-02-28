<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" class="my-12 grey darken-3" style="height: 360px">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-menu dark>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              Dropdown
            </v-btn>
          </template>
          <v-list dark dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dark dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="3" class="my-12 grey lighten-3" style="height: 360px">
        <v-subheader>light theme</v-subheader>
        <v-menu light>
          <template v-slot:activator="{ on: menu }">
            <v-btn v-on="{ ...menu }">
              Dropdown
            </v-btn>
          </template>
          <v-list light dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon light dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" class="my-12 grey lighten-4" style="height: 360px">
        <v-subheader>open</v-subheader>
        <v-menu :open-on-hover="true" :open-on-click="false" offset-y>
          <template v-slot:activator="{ on: menu }">
            <v-btn v-on="{ ...menu }" class="ma-2">
              hover
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu :close-on-click="true" :close-on-content-click="false">
          <template v-slot:activator="{ on: menu }">
            <v-btn v-on="{ ...menu }" class="ma-2">
              click close
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu :close-on-click="false" :close-on-content-click="true">
          <template v-slot:activator="{ on: menu }">
            <v-btn v-on="{ ...menu }" class="ma-2">
              content click close
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-delay="2000" close-delay="2000" :open-on-hover="true">
          <template v-slot:activator="{ on }">
            <v-chip v-on="on" link class="ma-2">
              delay
            </v-chip>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" class="my-12 grey lighten-4" style="height: 300px">
        <v-subheader>disable</v-subheader>
        <v-menu disabled>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              disabled
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu disable-keys>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              disable-keys
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" class="my-12 grey lighten-4" style="height: 300px">
        <v-subheader>offset</v-subheader>
        <v-menu offset-x>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              offset-x
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              offset-y
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-x offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              offset-x,y
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" class="my-12 grey lighten-4" style="height: 300px">
        <v-subheader>position</v-subheader>
        <v-menu top offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              top + offset-y
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              bottom + offset-y
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu left offset-x>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              left + offset-x
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu right offset-x>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              right + offset-x
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" class="my-12 grey lighten-4" style="height: 300px">
        <v-subheader>size</v-subheader>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" width="200" class="ma-2">
              width
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y max-width="150">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" width="200" class="ma-2">
              width
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y max-height="180">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              height
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu max-width="300">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              max-width
            </v-btn>
          </template>
          <v-list dense two-line>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue" large>{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ menu.description }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" class="my-12 grey lighten-4" style="height: 300px">
        <v-subheader>transition</v-subheader>
        <!-- style="height: 300px" -->
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              default
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu transition="scale-transition">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              scale
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu transition="scroll-x-transition">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              scroll
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu transition="slide-x-transition">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              slide
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu :transition="false">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              false
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" class="my-12 grey lighten-4" style="height: 300px">
        <v-subheader>nudge</v-subheader>
        <v-menu top offset-y nudge-top="10">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              top
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu bottom offset-y nudge-bottom="10">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              bottom
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu left offset-x nudge-left="10">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              left
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu right offset-x nudge-right="10">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="ma-2">
              right
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4" style="height: 400px">
        <v-subheader>absolute</v-subheader>
        <v-menu activator="#sheet1" absolute>
          <v-list dense>
            <v-list-item v-for="menu in menus" :key="menu.no" link>
              <v-list-item-icon>
                <v-icon dense left color="blue">{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-sheet id="sheet1" width="300" height="200" color="grey"></v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menus: [
        {
          no: 1,
          name: 'Cut',
          description: 'Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut Cut ',
          icon: 'mdi-content-cut'
        },
        {
          no: 2,
          name: 'Copy',
          description: 'Copy Copy Copy Copy Copy Copy Copy Copy Copy Copy Copy Copy Copy Copy Copy Copy ',
          icon: 'mdi-content-copy'
        },
        {
          no: 3,
          name: 'Paste',
          description: 'Paste Paste Paste Paste Paste Paste Paste Paste Paste Paste Paste Paste Paste Paste Paste ',
          icon: 'mdi-content-paste'
        },
        {
          no: 4,
          name: 'Duplicate',
          description:
            'Duplicate Duplicate Duplicate Duplicate Duplicate Duplicate Duplicate Duplicate Duplicate Duplicate Duplicate Duplicate Duplicate Duplicate ',
          icon: 'mdi-content-duplicate'
        },
        {
          no: 5,
          name: 'Save',
          description:
            'Save Save Save Save Save Save Save Save Save Save Save Save Save Save Save Save Save Save Save Save Save Save ',
          icon: 'mdi-content-save'
        }
      ]
    }
  }
}
</script>
