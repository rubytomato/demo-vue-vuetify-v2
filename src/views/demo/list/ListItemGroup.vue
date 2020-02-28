<template>
  <v-container>
    <v-row justify="start">
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>item group : {{ model1 }}</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item-group v-model="model1">
            <v-list-item v-for="(item, index) in items" :key="index" link :value="item.value">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-avatar>
                  <v-icon left color="blue">{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>done</v-list-item-action-text>
                  <v-checkbox :input-value="active" @click="toggle"></v-checkbox>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>item group : {{ model2 }}</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item-group v-model="model2" mandatory>
            <v-list-item v-for="(item, index) in items" :key="index" link :value="item.value">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-avatar>
                  <v-icon left color="blue">{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>done</v-list-item-action-text>
                  <v-checkbox :input-value="active" @click="toggle"></v-checkbox>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>item group : {{ model3 }}</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item-group v-model="model3" multiple>
            <v-list-item v-for="(item, index) in items" :key="index" link :value="item.value">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-avatar>
                  <v-icon left color="blue">{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>done</v-list-item-action-text>
                  <v-checkbox :input-value="active" @click="toggle"></v-checkbox>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>item group : {{ model4 }}</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item-group v-model="model4" multiple max="3">
            <v-list-item v-for="(item, index) in items" :key="index" link :value="item.value">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-avatar>
                  <v-icon left color="blue">{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>done</v-list-item-action-text>
                  <v-checkbox :input-value="active" @click="toggle"></v-checkbox>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ListItemGroup',
  data() {
    return {
      model1: 'A',
      model2: 'B',
      model3: ['C'],
      model4: ['D'],
      items: [
        {
          title: 'ロボッ島 宝島',
          subTitle: 'おまたせ ビッグに登場',
          description: '●ミニロボ24点つき ●発射装置2基・丸木舟・海賊船もついています。',
          icon: 'mdi-treasure-chest',
          value: 'A',
          rating: 3.0,
          url: 'https://www.google.co.jp'
        },
        {
          title: 'ロボッ木 大木',
          subTitle: 'キミも木っと気にいる！！',
          description: '発射装置でミニロボを発射したり、リンゴッ木・柿の木と連結できます。',
          icon: 'mdi-pine-tree',
          value: 'B',
          rating: 3.0,
          url: 'https://www.google.co.jp'
        },
        {
          title: '戦艦島',
          subTitle: 'ギョギョ！これは島か？戦艦か？',
          description: '●長さはなんと46.7cm ●ミニロボダッチ12点つき',
          icon: 'mdi-ship-wheel',
          value: 'C',
          rating: 3.0,
          url: 'https://www.google.co.jp'
        },
        {
          title: '南洋島',
          subTitle: '夏だ！海だ！南洋島で遊ぶだっち',
          description: '●ミニロボダッチ12点セット',
          icon: 'mdi-island',
          value: 'D',
          rating: 2.5,
          url: 'https://www.google.co.jp'
        },
        {
          title: '宇宙船 日本丸',
          subTitle: 'さあ、ロボダッチの宇宙大旅行だ！',
          description: '●6枚の大型の帆がついたロボダッチ帆船日本丸！',
          icon: 'mdi-robot',
          value: 'E',
          rating: 2.5,
          url: 'https://www.google.co.jp'
        }
      ]
    }
  },
  methods: {
    formatPrice(price, date) {
      return `定価: ${price.toString()} 発売日: ${date.toString()}`
    }
  }
}
</script>
