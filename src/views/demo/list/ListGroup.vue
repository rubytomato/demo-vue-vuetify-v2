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
                <v-list-item-subtitle class="caption">{{ item.frends.join(', ') }}</v-list-item-subtitle>
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
                <v-list-item-subtitle class="caption">{{ item.frends.join(', ') }}</v-list-item-subtitle>
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
      ],
      groups: [
        {
          name: 'ロボダッチ 4点コレクション',
          description: '300円で4種類のロボダッチが楽しめます (4点パックの再販)',
          icon: 'mdi-star',
          items: [
            {
              title: '1) 忍者セット',
              subTitle: '天下をとるのはおれだ！！',
              frends: ['入道ロボ', 'サスケロボ', 'ガマロボ', '火トンロボ']
            },
            {
              title: '2) スポーツセット',
              subTitle: 'めざせチャンピオン！！',
              frends: ['すもうロボ', '先生ロボ', 'ガキ大将ロボ', 'サッカーロボ']
            },
            {
              title: '3) ファイアセット',
              subTitle: '',
              frends: ['ガリ勉ロボ', '野球ロボ', 'フットボールロボ', 'クイシンボ―ロボ']
            },
            {
              title: '4) わんぱくセット',
              subTitle: '',
              frends: ['ロボX', 'ロボZ', 'ドライブタマゴロー', 'ブンブンタマゴロー']
            },
            {
              title: '5) スピードセット',
              subTitle: 'おれが一番早いダッチ！！',
              frends: ['モグラロボ', 'レーサーロボ', 'ライダーロボ', 'ジェットロボ']
            },
            {
              title: '6) タウンセット',
              subTitle: 'みんなでつくろうすみよい町！！',
              frends: ['出前ロボ', '駅弁ロボ', '牛乳ロボ', '焼きイモロボ']
            },
            {
              title: '7) トマランセット',
              subTitle: '今日もはりきるダッチ！',
              frends: ['ドーロローラーロボ', '消防ロボ', 'ジャングルロボ', '宇宙人ロボ']
            },
            {
              title: '8) パクパクセット',
              subTitle: 'お母さんと遊べるダッチ！',
              frends: ['コックロボ', '買物ロボ', 'おフロロボ', 'トイレロボ']
            },
            {
              title: '9) スポコンセット',
              subTitle: 'いくぜ！！ダッシュダ！',
              frends: ['シャゲキロボ', 'スキーロボ', 'バーベルロボ', 'テニスロボ']
            },
            {
              title: '10) オービーセット',
              subTitle: 'メチャンコがんばるダッチ！！',
              frends: ['アイスホッケーロボ', 'ゴルフロボ', '料理ロボ', '信号ロボ']
            },
            {
              title: '11) ゴーゴーセット',
              subTitle: 'どどーんとでっかく登場！',
              frends: ['ドライブロボ', 'スタンドロボ', '工事ロボ', 'ドロボーロボ']
            },
            {
              title: '12) ドカンチセット',
              subTitle: 'パワフルロボダッチ大集合！',
              frends: ['ダンプロボ', 'ショベルロボ', 'ブルロボ', 'クレーンロボ']
            },
            {
              title: '13) ガスケツセット',
              subTitle: 'ガソリンほっちいだっち！！',
              frends: ['F-1 75', 'チャンピオンブガッティ', 'ロードプレーン', 'ジョニーウォーカー']
            },
            {
              title: '14) リタイヤセット',
              subTitle: '',
              frends: ['コブラ', 'F-1 Z', 'GT-Z', 'タルボトル']
            },
            {
              title: '15) エンストセット',
              subTitle: 'いけねー。エンジン忘れただっち！！',
              frends: ['モーガン', 'トーマス', 'メルセデス', 'ロードマン']
            },
            {
              title: '16) ピカピカセット',
              subTitle: '',
              frends: ['ブリスコ', 'ランドジープ', 'パンサー', 'レーサー28号']
            },
            {
              title: '17) ギンギンセット',
              subTitle: 'おーっと。俺さまのお通りだー！！',
              frends: ['フェアレディZ', 'セリカ', 'トヨタ2000GT', 'ヨタ8']
            },
            {
              title: '18) バリバリセット',
              subTitle: 'ハチャメチャ冒険するだっち！！',
              frends: ['ポルシェRS', 'ムスタングマッハ1', 'ジャガーE', 'アルファロメオ3プロト']
            }
          ]
        },
        {
          name: 'ロボッ島 シリーズ',
          description: '',
          icon: 'mdi-star',
          items: [
            {
              title: '大島',
              subTitle: '南海の孤島はロボダッチの楽園！！',
              price: 3200,
              frends: [
                'タマタマタマゴロー',
                '火トンロボ',
                'モグラロボ',
                'ロボZ',
                'ライダーロボ',
                'ドライブタマゴロー',
                '入道ロボ',
                'ブンブンタマゴロー',
                'サスケロボ',
                'レーサーロボ',
                'ドラタロー',
                'ロボX'
              ]
            },
            {
              title: '小島',
              subTitle: '南海の孤島はロボダッチの楽園！！',
              price: 1800,
              frends: ['ライダーロボ', 'モグラロボ', 'レーサーロボ', 'ジェットロボ', 'ミニ水中ロボ', 'ミニ宇宙戦艦']
            },
            {
              title: 'ドンドンタワー',
              subTitle: 'あつめて遊ぼう 楽しい仲間！！',
              price: 800,
              frends: ['ロボX', 'タマタマタマゴロー', 'ドライブタマゴロー', 'ライダーロボ', '火トンロボ', 'サスケロボ']
            },
            {
              title: 'キャンプ村',
              subTitle: 'あつめて遊ぼう 楽しい仲間！！',
              price: 800,
              frends: ['モグラロボ', 'ドラタロー', 'ロボZ', 'ブンブンタマゴロー', 'レーサーロボ', '入道ロボ']
            },
            {
              title: '秘密島',
              subTitle: '',
              price: 800,
              frends: ['ヒコーキロボ', 'ジェットロボ', 'モグラロボ', '空中散歩ロボ']
            }
          ]
        },
        {
          name: 'ロボッ木 シリーズ',
          description: '',
          icon: 'mdi-star',
          items: [
            {
              title: '柿の木',
              subTitle: '',
              price: 800,
              frends: ['アストロZ', 'タマロク', 'タマコロン', 'ポケバイロボ', 'タマゲタ', 'ヘリZ']
            },
            {
              title: 'リンゴッ木',
              subTitle: '',
              price: 800,
              frends: ['タマコプター', 'ウォークマンロボ', '社長ロボ', 'タマコローラー', '大工ロボ', 'キコリロボ']
            },
            {
              title: '大木',
              subTitle: '島の大木はロボダッチの遊び場！！',
              price: 3800,
              frends: [
                'ローラーボードロボ',
                'モビルタマゴロー',
                'ドリルロボ',
                'お茶ダッチ',
                '暴走ダッチ',
                'タマラン',
                'タマガサ',
                'ペアダッチ',
                '時計ロボ',
                'ジョギングロボ',
                '医者ロボ',
                'カプセルタマゴロー'
              ]
            },
            {
              title: 'マルヒの木',
              subTitle: '密林のジャングルに不思議な木を発見！！',
              price: 2200,
              frends: [
                '火トンロボ',
                'タマタマタマゴロー',
                'モグラロボ',
                'ロボZ',
                'ライダーロボ',
                'ドライブタマゴロー',
                '入道ロボ',
                'ブンブンタマゴロー',
                'サスケロボ',
                'ロボX',
                'レーサーロボ',
                'ドラタロー'
              ]
            }
          ]
        },
        {
          name: 'ミニロボダッチ 4点パック',
          description: '',
          price: 300,
          icon: 'mdi-star',
          items: [
            {
              title: 'No1～4パック',
              subTitle: '',
              price: 300,
              frends: [
                'No1 タマゴロー・火トンロボ',
                'No2 モグラロボ・ロボZ',
                'No3 ライダーロボ・ドライブタマゴロー',
                'No4 入道ロボ・ブンブンタマゴロー'
              ]
            },
            {
              title: 'No5～8パック',
              subTitle: '',
              price: 300,
              frends: [
                'No5 ロボX・サスケロボ',
                'No6 レーサーロボ・ドラタロー',
                'No7 ガキ大将ロボ・ジャングルロボ',
                'No8 サッカーロボ・フットボールロボ'
              ]
            },
            {
              title: 'No9～12パック',
              subTitle: '',
              price: 300,
              frends: [
                'No9 ゴルフロボ・野球ロボ',
                'No10 スモウロボ・バーベルロボ',
                'No11 ガンXロボ・シャゲキロボ',
                'No12 ガンZロボ・ガンテツロボ'
              ]
            },
            {
              title: 'No13～16パック',
              subTitle: '',
              price: 300,
              frends: [
                'アストロZ・タマロク',
                'タマコロン・ポケバイロボ',
                'ヘリZ・タマゲタ',
                'ウォークマンロボ・タマコプター'
              ]
            },
            {
              title: 'No17～20パック',
              subTitle: '',
              price: 300,
              frends: [
                'No17 社長ロボ・タマコローラー',
                'No18 大工ロボ・キコリロボ',
                'No19 ローラーボ－ドロボ・カプセルタマゴロー',
                'No20 ドリルロボ・お茶ダッチ'
              ]
            },
            {
              title: 'No21～24パック',
              subTitle: '',
              price: 300,
              frends: [
                'タマラン・暴走ダッチ',
                'タマガサ・ペアダッチ',
                '時計ロボ・ジョギングロボ',
                '医者ロボ・モビルタマゴロー'
              ]
            },
            {
              title: 'No25～28パック',
              subTitle: '',
              price: 300,
              frends: [
                '海賊ロボX・海賊ロボQ',
                '海賊ロボZ・海賊タマゴロー',
                '海賊ドクロ砲・ロボXガンダモビル',
                '海賊タカラ箱・賊ドクロタンク'
              ]
            },
            {
              title: 'No29～32パック',
              subTitle: '',
              price: 300,
              frends: [
                'さんしたパイレーツ・黒ヒゲパイレーツ',
                'ロボZガンダスーツ・タマゴローガンダスーツ',
                'チビクロ・人喰いクロベエ',
                'しゅうちょうクロ・カツギクロ'
              ]
            },
            {
              title: 'No33～36パック',
              subTitle: '',
              price: 300,
              frends: [
                'デブクロ・ガリコン',
                'タルクロ・ハコクロ',
                '海賊船長ピョコタン・海賊トロヒゲ',
                'いけにえロボ・探険隊長ジジタン'
              ]
            },
            {
              title: 'No37～40パック',
              subTitle: '',
              price: 300,
              frends: ['ホネザウルス・トリラ', 'ミニザウルス・ミニモス', 'ワニラ・ゴリラ', 'サソラ・ヘビラ']
            },
            {
              title: 'No41～44パック',
              subTitle: '',
              price: 300,
              frends: ['タコラ・カニラ', 'カメラ・クジラ', 'ロボクロ2号・冒険タマ吉', 'タマクロ1号・ロボクロ6号']
            },
            {
              title: 'No45～48パック',
              subTitle: '',
              price: 300,
              frends: [
                'No45 クロZクロタ・ロボクロ7号',
                'No46 ロボクロ4号・ロボクロ8号',
                'No47 ロボクロ5号・ロボクロ12号',
                'No48 ロボクロ3号・クロロ'
              ]
            }
          ]
        },
        {
          name: 'ミニロボダッチ 12点セットシリーズ',
          description: 'ディスプレー台紙とミニロボ12点が入っています',
          price: 500,
          icon: 'mdi-star',
          items: [
            {
              title: 'No1 ブンブン島セット',
              subTitle: '仲間がいっぱい 楽しい島！！',
              price: 500,
              frends: [
                'タマゴロー',
                'ブンブンタマゴロー',
                'ドライブタマゴロー',
                'ロボZ',
                'ロボX',
                'ドラタロー',
                '入道ロボ',
                '火トンロボ',
                'サスケロボ',
                'レーサーロボ',
                'ライダーロボ',
                'モグラロボ'
              ]
            },
            {
              title: 'No2 ジャンプ島セット',
              subTitle: '',
              price: 500,
              frends: [
                'がき大将ロボ',
                '野球ロボ',
                'ゴルフロボ',
                'サッカーロボ',
                'フットボールロボ',
                'スモウロボ',
                'バーベルロボ',
                '射撃ロボ',
                '冒険ロボ',
                'ガンテツロボ',
                'ガンZロボ',
                'ガンXロボ'
              ]
            },
            {
              title: 'No3 タマゲタ島セット',
              subTitle: '',
              price: 500,
              frends: [
                'タマゲタ',
                'タマコロン',
                'タマコプター',
                'ヘリZ',
                'アストロZ',
                'タマロク',
                'タマコローラー',
                '社長ロボ',
                'ポケバイロボ',
                'ウォークマンロボ',
                'キコリロボ',
                '大工ロボ'
              ]
            },
            {
              title: 'No4 ジャングル島セット',
              subTitle: '',
              price: 500,
              frends: [
                'タマラン',
                'カプセルタマゴロー',
                'タマガサ',
                'モビルスーツタマゴロー',
                '暴走ダッチ',
                'ペアダッチ',
                'ドリルロボ',
                'ローラーボードロボ',
                'ジョギングロボ',
                '時計ロボ',
                'お茶ダッチ',
                '医者ダッチ'
              ]
            },
            {
              title: 'No5 海賊島セット',
              subTitle: '',
              price: 500,
              frends: [
                '海賊タマゴロー',
                '海賊ロボZ',
                '海賊ロボX',
                '海賊ロボQ',
                'タマゴローガンダスーツ',
                'ロボZガンダスーツ',
                'ロボXガンダモビル',
                '黒ヒゲパイレーツ',
                'さんしたパイレーツ',
                '海賊ドクロタンク',
                '海賊ドクロ砲',
                '海賊タカラ箱'
              ]
            },
            {
              title: 'No6 黒ダッチ島セット',
              subTitle: '',
              price: 500,
              frends: [
                'チビクロ',
                'デブクロ',
                'タルクロ',
                'ハコクロ',
                'カツギクロ',
                'しゅうちょうクロ',
                '人喰いクロベエ',
                '海賊船長ピョコタン',
                '海賊トロヒゲ',
                '探険隊長ジジタン',
                'ガリコン',
                'いけにえロボ'
              ]
            },
            {
              title: 'No7 怪物島セット',
              subTitle: '',
              price: 500,
              frends: [
                'ホネザウルス',
                'トリラ',
                'ミニザウルス',
                'ミニモス',
                'ワニラ',
                'ゴリラ',
                'ヘビラ',
                'サソラ',
                'タコラ',
                'カニラ',
                'クジラ',
                'カメラ'
              ]
            },
            {
              title: 'No8 冒険タマ吉島セット',
              subTitle: '',
              price: 500,
              frends: [
                '冒険タマ吉',
                'クロZクロタ',
                'タマクロ1号',
                'ロボクロ2号',
                'ロボクロ3号',
                'ロボクロ4号',
                'ロボクロ5号',
                'ロボクロ6号',
                'ロボクロ7号',
                'ロボクロ8号',
                'クロキュー',
                'ロボクロ12号'
              ]
            },
            {
              title: 'No9 ネービーモビルセット',
              subTitle: '',
              price: 500,
              frends: [
                'タマゴローネービー',
                'ロボZネービー',
                'タマロクネービー',
                'ロボパイ',
                '司令官ロボ',
                'マリーンネービー',
                '舵取りネービー',
                '手旗ネービー',
                'そうじネービー',
                '酒ダルロボ',
                '無線ロボ',
                'ボースンロボ'
              ]
            },
            {
              title: 'No10 エアーコンバットセット',
              subTitle: '',
              price: 500,
              frends: [
                'エアロスカウト',
                'ナイトアベニュー',
                'スカイスパロー×2',
                'ファンタズム×2',
                'イフェクター×3',
                'ジェットフォーカス×3'
              ]
            },
            {
              title: 'No11 宇宙空母セット',
              subTitle: '',
              price: 500,
              frends: [
                'イーティーロボ',
                'ウチュウセンシ',
                'キャプテンジジタン',
                'キュウユロボ',
                'クリンクリン',
                'コプターロボ',
                'シャークライダー',
                'シャークロボ',
                'ファイヤーマンロボ',
                'ミサイルロボ',
                'レーダーカンシロボ',
                'レッツゴーロボ'
              ]
            },
            {
              title: 'No12 スペースガウォークセット',
              subTitle: '',
              price: 500,
              frends: [
                'スカイウォード',
                'フライアウェイ',
                'ジェットワインダー×2',
                'ワイルドキャット×2',
                'スペクター×3',
                'フリーチャイルド×3'
              ]
            },
            {
              title: 'No13 スペースセット',
              subTitle: '',
              price: 500,
              frends: [
                'タマポット',
                'パルキリーロボ',
                'サテライトロボ',
                'スペースロボ2号',
                'スペースロボ3号',
                'スペースロボ4号',
                'スペースロボ5号',
                'スペースロボ6号',
                'フライトロボ',
                'ベビーシャトル',
                'スペースタンク',
                'ユーホーロボ'
              ]
            },
            {
              title: 'No14 プロレスセット',
              subTitle: '',
              price: 500,
              frends: [
                'キングタマゴロー',
                'グレートZ',
                'ミラクルX',
                'アントニオイノチ',
                'ジャイアンロボ',
                'リッキーロボ',
                'イチバンロボ',
                'デブッチャー',
                'テキサスロボ',
                'モンスターロボ',
                'ミスターチュン',
                'レフリーロボ'
              ]
            },
            {
              title: 'No15 北アメリカセット',
              subTitle: '',
              price: 500,
              frends: [
                'カウボーイロボ',
                'インディアンロボ',
                'バッファローロボ',
                'サボテンロボ',
                'スーパーロボ',
                'レーガンロボ',
                'サーファーロボ',
                'アロハロボ',
                'ナサロボ',
                'エスキモーロボ',
                'ロボカイ',
                '白クマロボ'
              ]
            },
            {
              title: 'No16 アフリカセット',
              subTitle: '',
              price: 500,
              frends: [
                '探検隊長ロボ',
                '探検隊下士官',
                '土人ロボ',
                'ターザンロボ',
                'クレオパトラロボ',
                'ヘビ使い',
                'タマゾウ',
                'キリンロボ',
                'カバロボ',
                'ラクダロボ',
                'ライオンロボ',
                'サイロボ'
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
