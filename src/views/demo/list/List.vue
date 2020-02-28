<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-list dark>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-avatar>
              <v-icon left :color="item.iconColor">{{ item.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox v-model="item.value"></v-checkbox>
              <v-list-item-action-text>done</v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-list light>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-avatar>
              <v-icon left :color="item.iconColor">{{ item.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>done</v-list-item-action-text>
              <v-checkbox v-model="item.value"></v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>two-line</v-subheader>
        <v-list two-line>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link selectable>
            <v-list-item-avatar left>
              <v-icon :color="item.iconColor">{{ item.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }} </v-list-item-title>
              <v-list-item-subtitle>{{ item.subTitle }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>done</v-list-item-action-text>
              <v-checkbox v-model="item.value"></v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="6" class="my-2 grey lighten-4">
        <v-subheader>three-line</v-subheader>
        <v-list three-line>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-avatar>
              <v-icon :color="item.iconColor">{{ item.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ item.subTitle }}
                <div>
                  <small>{{ item.description }}</small>
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>done</v-list-item-action-text>
              <v-checkbox v-model="item.value"></v-checkbox>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-list color="blue lighten-3">
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>elevation</v-subheader>
        <v-list elevation="15">
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>subheader</v-subheader>
        <v-list subheader>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>dense</v-subheader>
        <v-list dense>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>flat</v-subheader>
        <v-list flat>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>nav</v-subheader>
        <v-list nav>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>rounded</v-subheader>
        <v-list rounded>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>shaped</v-subheader>
        <v-list shaped>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>tile</v-subheader>
        <v-list tile>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>disabled</v-subheader>
        <v-list disabled>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link :input-value="item.value" selectable>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>active class</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            link
            :input-value="item.value"
            active-class="blue lighten-4"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>size</v-subheader>
        <v-list width="200" two-line>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.subTitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>non link</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" :input-value="item.value">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>link</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :input-value="item.value"
            @click="item.value = !item.value"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>inactive</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :input-value="item.value"
            :href="item.url"
            target="_blank"
            inactive
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>v-icon</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-icon>
              <v-icon right :color="item.iconColor">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>v-icon</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon left :color="item.iconColor">{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>avatar</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-avatar tile>
              <v-img :src="`https://i.pravatar.cc/180?img=${index + 1}`" size="40"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>v-card</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-card class="ma-1" outlined flat hover style="overflow-x: auto; width: 600px">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title v-text="item.title"></v-card-title>
                  <v-card-subtitle v-text="item.subTitle"></v-card-subtitle>
                </div>
                <v-avatar class="ma-2" size="80" tile>
                  <v-img src="https://dummyimage.com/80x80/555555/fff.png"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>v-divider</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <template v-for="(item, index) in items">
            <v-divider inset :key="`div-${index}`"></v-divider>
            <v-list-item :key="`list-${index}`" link>
              <v-list-item-icon>
                <v-icon left>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>done</v-list-item-action-text>
                <v-checkbox></v-checkbox>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>v-rating</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <template v-for="(item, index) in items">
            <v-divider :key="`div-${index}`"></v-divider>
            <v-list-item :key="`list-${index}`" link>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>rating</v-list-item-action-text>
                <v-rating small dense :value="item.rating" half-increments length="3"></v-rating>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
      <v-col cols="12" md="4" class="my-2 grey lighten-4">
        <v-subheader>selectable</v-subheader>
        <v-list>
          <v-subheader>Todo List</v-subheader>
          <v-list-item v-for="(item, index) in items" :key="index" :selectable="false">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      items: [
        {
          title: 'ロボッ島 宝島',
          subTitle: 'おまたせ ビッグに登場',
          price: 4800,
          description: '●ミニロボ24点つき ●発射装置2基・丸木舟・海賊船もついています。',
          icon: 'mdi-treasure-chest',
          iconColor: 'red',
          value: false,
          rating: 3.0,
          url: 'https://www.google.co.jp'
        },
        {
          title: 'ロボッ木 大木',
          subTitle: 'キミも木っと気にいる！！',
          price: 3800,
          description: '発射装置でミニロボを発射したり、リンゴッ木・柿の木と連結できます。',
          icon: 'mdi-pine-tree',
          iconColor: 'pink',
          value: true,
          rating: 3.0,
          url: 'https://www.google.co.jp'
        },
        {
          title: '戦艦島',
          subTitle: 'ギョギョ！これは島か？戦艦か？',
          price: 3500,
          description: '●長さはなんと46.7cm ●ミニロボダッチ12点つき',
          icon: 'mdi-ship-wheel',
          iconColor: 'purple',
          value: false,
          rating: 3.0,
          url: 'https://www.google.co.jp'
        },
        {
          title: '南洋島',
          subTitle: '夏だ！海だ！南洋島で遊ぶだっち',
          price: 1500,
          description: '●ミニロボダッチ12点セット',
          icon: 'mdi-island',
          iconColor: 'deep-purple',
          value: true,
          rating: 2.5,
          url: 'https://www.google.co.jp'
        },
        {
          title: '宇宙船 日本丸',
          subTitle: 'さあ、ロボダッチの宇宙大旅行だ！',
          price: 3200,
          description: '●6枚の大型の帆がついたロボダッチ帆船日本丸！',
          icon: 'mdi-robot',
          iconColor: 'blue',
          value: false,
          rating: 2.5,
          url: 'https://www.google.co.jp'
        }
      ]
    }
  }
}
</script>
