<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12" md="6" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-list dark>
          <v-subheader>Todo List</v-subheader>
          <v-list-group v-for="group in groups" :key="group.name" :prepend-icon="group.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ group.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="item in group.items" :key="item.title">
              <v-list-item-content>
                <v-list-item-title
                  >{{ item.title }} <small class="caption">{{ item.subTitle }}</small></v-list-item-title
                >
                <v-list-item-subtitle class="caption">{{ item.friends.join(', ') }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-list light>
          <v-subheader>Todo List</v-subheader>
          <v-list-group v-for="group in groups" :key="group.name" :prepend-icon="group.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ group.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="item in group.items" :key="item.title">
              <v-list-item-content>
                <v-list-item-title
                  >{{ item.title }} <small class="caption">{{ item.subTitle }}</small></v-list-item-title
                >
                <v-list-item-subtitle class="caption">{{ item.friends.join(', ') }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="3" class="my-2 grey lighten-4">
        <v-subheader>default</v-subheader>
        <v-list>
          <v-subheader>Menu</v-subheader>
          <v-list-group v-for="menu in menus" :key="menu.name" :prepend-icon="menu.icon">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="sub in menu.subMenus" :key="sub.name" link>
              <v-list-item-icon>
                <v-icon>{{ sub.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ sub.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="3" class="my-2 grey lighten-4">
        <v-subheader>no-action</v-subheader>
        <v-list>
          <v-subheader>Menu</v-subheader>
          <v-list-group v-for="menu in menus" :key="menu.name" :prepend-icon="menu.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="sub in menu.subMenus" :key="sub.name" link>
              <v-list-item-icon>
                <v-icon>{{ sub.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ sub.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="3" class="my-2 grey lighten-4">
        <v-subheader>expand</v-subheader>
        <v-list expand>
          <v-subheader>Menu</v-subheader>
          <v-list-group v-for="menu in menus" :key="menu.name" :prepend-icon="menu.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="sub in menu.subMenus" :key="sub.name" link>
              <v-list-item-icon>
                <v-icon>{{ sub.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ sub.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="3" class="my-2 grey lighten-4">
        <v-subheader>group</v-subheader>
        <v-list expand>
          <v-subheader>Menu</v-subheader>
          <v-list-group v-for="menu in menus" :key="menu.name" :prepend-icon="menu.icon" no-action :group="menu.group">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="sub in menu.subMenus" :key="sub.name" :to="sub.url">
              <v-list-item-icon>
                <v-icon>{{ sub.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ sub.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>icon</v-subheader>
        <v-list>
          <v-subheader>Menu</v-subheader>
          <v-list-group
            v-for="menu in menus"
            :key="menu.name"
            :prepend-icon="menu.icon"
            append-icon="mdi-details"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="sub in menu.subMenus" :key="sub.name" link>
              <v-list-item-icon>
                <v-icon>{{ sub.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ sub.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>value</v-subheader>
        <v-list>
          <v-subheader>Menu</v-subheader>
          <v-list-group v-for="menu in menus" :key="menu.name" :prepend-icon="menu.icon" :value="menu.open" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="sub in menu.subMenus" :key="sub.name" :to="sub.url">
              <v-list-item-icon>
                <v-icon>{{ sub.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ sub.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>sub group</v-subheader>
        <v-list>
          <v-subheader>Menu</v-subheader>
          <v-list-group v-for="menu in menus" :key="menu.name" :prepend-icon="menu.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <template v-for="sub in menu.subMenus">
              <v-list-group v-if="sub.subMenus" :key="sub.name" sub-group no-action>
                <template v-slot:activator>
                  <v-list-item-icon class="mr-8">
                    <v-icon>{{ sub.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ sub.name }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item v-for="sub2 in sub.subMenus" :key="sub2.name" :to="sub2.url">
                  <v-list-item-icon>
                    <v-icon>{{ sub2.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ sub2.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-item v-else :key="sub.name" :to="sub.url">
                <v-list-item-icon>
                  <v-icon>{{ sub.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ sub.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>sub group</v-subheader>
        <v-list>
          <v-subheader>Menu</v-subheader>
          <v-list-group v-for="menu in menus" :key="menu.name" :prepend-icon="menu.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <template v-for="sub in menu.subMenus">
              <v-list-group v-if="sub.subMenus" :key="sub.name" sub-group no-action>
                <template v-slot:activator>
                  <v-list-item-icon class="mr-8">
                    <v-icon>{{ sub.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ sub.name }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item v-for="sub2 in sub.subMenus" :key="sub2.name" :to="sub2.url">
                  <v-list-item-content>
                    <v-list-item-title>{{ sub2.name }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>{{ sub2.icon }}</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
              <v-list-item v-else :key="sub.name" :to="sub.url">
                <v-list-item-icon>
                  <v-icon>{{ sub.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ sub.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ListGroup',
  data() {
    return {
      menus: [
        {
          name: 'Group-A',
          icon: 'mdi-alpha-a-box',
          group: '/list/group/a',
          open: false,
          subMenus: [
            {
              name: 'Sub Menu - A_1',
              icon: 'mdi-weather-sunny',
              url: '/list/group/a/1',
              subMenus: [
                { name: 'Sub Menu - A_1_1', icon: 'mdi-weather-sunset', url: '/list/group/a/1/1' },
                { name: 'Sub Menu -- A_1__2', icon: 'mdi-weather-sunset-down', url: '/list/group/a/1/2' },
                { name: 'Sub Menu --- A_1__3', icon: 'mdi-weather-sunset-up', url: '/list/group/a/1/3' }
              ]
            },
            { name: 'Sub Menu -- A__2', icon: 'mdi-weather-rainy', url: '/list/group/a/2' },
            { name: 'Sub Menu --- A___3', icon: 'mdi-weather-snowy', url: '/list/group/a/3' }
          ]
        },
        {
          name: 'Group-B',
          icon: 'mdi-alpha-b-box',
          group: '/list/group/b',
          open: true,
          subMenus: [
            { name: 'Sub Menu - B_1', icon: 'mdi-baseball-bat', url: '/list/group/b/1' },
            { name: 'Sub Menu -- B__2', icon: 'mdi-basketball-hoop', url: '/list/group/b/2' },
            { name: 'Sub Menu --- B___3', icon: 'mdi-bike', url: '/list/group/b/3' }
          ]
        },
        {
          name: 'Group-C',
          icon: 'mdi-alpha-c-box',
          group: '/list/group/c',
          open: false,
          subMenus: [
            { name: 'Sub Menu - C_1', icon: 'mdi-content-copy', url: '/list/group/c/1' },
            { name: 'Sub Menu -- C__2', icon: 'mdi-content-cut', url: '/list/group/c/2' },
            { name: 'Sub Menu --- C___3', icon: 'mdi-content-paste', url: '/list/group/c/3' }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState('friends', {
      groups: state => state.series
    })
  }
}
</script>
