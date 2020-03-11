<template>
  <v-app>
    <v-content>
      <slot />
    </v-content>
    <v-footer app>
      <v-btn
        small
        outlined
        v-for="comp in components"
        :key="comp.name"
        :to="comp.path"
        :exact-active-class="comp.active"
        class="ma-1 pa-1"
        >{{ comp.name }}</v-btn
      >
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Default',
  data: () => ({}),
  computed: {
    ...mapState(['components'])
  }
}
</script>
