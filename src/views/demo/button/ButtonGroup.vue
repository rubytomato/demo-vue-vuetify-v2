<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="my-2 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="4">
              <v-subheader class="white--text">default : {{ bg1 }}</v-subheader>
              <v-btn-toggle dark v-model="bg1">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader class="white--text">borderless</v-subheader>
              <v-btn-toggle dark borderless v-model="bg1">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader class="white--text">dense</v-subheader>
              <v-btn-toggle dark dense v-model="bg1">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader class="white--text">group</v-subheader>
              <v-btn-toggle dark group v-model="bg1">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader class="white--text">rounded</v-subheader>
              <v-btn-toggle dark rounded v-model="bg1">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader class="white--text">shaped</v-subheader>
              <v-btn-toggle dark shaped v-model="bg1">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader class="white--text">tile</v-subheader>
              <v-btn-toggle dark tile v-model="bg1">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="my-2 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="4">
              <v-subheader>default : {{ bg2 }}</v-subheader>
              <v-btn-toggle light v-model="bg2">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>borderless</v-subheader>
              <v-btn-toggle light borderless v-model="bg2">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>dense</v-subheader>
              <v-btn-toggle light dense v-model="bg2">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>group</v-subheader>
              <v-btn-toggle light group v-model="bg2">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>rounded</v-subheader>
              <v-btn-toggle light rounded v-model="bg2">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>shaped</v-subheader>
              <v-btn-toggle light shaped v-model="bg2">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>tile</v-subheader>
              <v-btn-toggle light tile v-model="bg2">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>size</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="4">
              <v-subheader>x-small</v-subheader>
              <v-btn-toggle>
                <v-btn x-small>
                  <v-icon x-small>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn x-small>
                  <v-icon x-small>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn x-small>
                  <v-icon x-small>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn x-small>
                  <v-icon x-small>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>small</v-subheader>
              <v-btn-toggle>
                <v-btn small>
                  <v-icon small>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn small>
                  <v-icon small>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn small>
                  <v-icon small>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn small>
                  <v-icon small>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>default</v-subheader>
              <v-btn-toggle>
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="5">
              <v-subheader>large</v-subheader>
              <v-btn-toggle>
                <v-btn large>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn large>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn large>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn large>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="7">
              <v-subheader>x-large</v-subheader>
              <v-btn-toggle>
                <v-btn x-large>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn x-large>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn x-large>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn x-large>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>value</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="4">
              <v-subheader>default : {{ bg4 }}</v-subheader>
              <v-btn-toggle v-model="bg4">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>value : {{ bg5 }}</v-subheader>
              <v-btn-toggle v-model="bg5">
                <v-btn value="apple">
                  <v-icon>mdi-food-apple</v-icon>
                </v-btn>
                <v-btn value="baguette">
                  <v-icon>mdi-baguette</v-icon>
                </v-btn>
                <v-btn value="cherries">
                  <v-icon>mdi-fruit-cherries</v-icon>
                </v-btn>
                <v-btn value="food">
                  <v-icon>mdi-food-variant</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="4">
              <v-subheader>default</v-subheader>
              <v-btn-toggle background-color="lime lighten-3" color="blue">
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>borderless</v-subheader>
              <v-btn-toggle borderless background-color="lime lighten-3" color="blue">
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>group</v-subheader>
              <!-- group は 背景色、境界線を削除しボタン間のスペースを増やす-->
              <v-btn-toggle group background-color="lime lighten-3" color="blue">
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon class="cyan--text">mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>v-btn-toggle=blue</v-subheader>
              <v-btn-toggle background-color="blue" color="green">
                <v-btn>
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn>
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>v-btn=blue</v-subheader>
              <v-btn-toggle>
                <v-btn color="red">
                  <v-icon>mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn color="pink">
                  <v-icon>mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn color="purple">
                  <v-icon>mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn color="blue">
                  <v-icon>mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" class="my-2 grey lighten-4">
        <v-subheader>select</v-subheader>
        <v-container>
          <v-row justify="start">
            <v-col cols="12" md="4">
              <v-subheader>mandatory : {{ bg3 }}</v-subheader>
              <v-btn-toggle mandatory v-model="bg3" color="light-blue">
                <v-btn icon value="A">
                  <v-icon class="cyan--text">mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="B">
                  <v-icon class="cyan--text">mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="C">
                  <v-icon class="cyan--text">mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="Z">
                  <v-icon class="cyan--text">mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>multiple : {{ bgm1 }}</v-subheader>
              <v-btn-toggle multiple v-model="bgm1" color="light-blue">
                <v-btn icon value="A">
                  <v-icon class="cyan--text">mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="B">
                  <v-icon class="cyan--text">mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="C">
                  <v-icon class="cyan--text">mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="Z">
                  <v-icon class="cyan--text">mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" md="4">
              <v-subheader>max =2 / multiple : {{ bgm2 }}</v-subheader>
              <v-btn-toggle :max="2" multiple v-model="bgm2" color="light-blue">
                <v-btn icon value="A">
                  <v-icon class="cyan--text">mdi-alpha-a-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="B">
                  <v-icon class="cyan--text">mdi-alpha-b-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="C">
                  <v-icon class="cyan--text">mdi-alpha-c-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="D">
                  <v-icon class="cyan--text">mdi-alpha-d-box-outline</v-icon>
                </v-btn>
                <v-btn icon value="Z">
                  <v-icon class="cyan--text">mdi-alpha-z-box-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>

<script>
export default {
  name: 'ButtonGroup',
  data() {
    return {
      bg1: '',
      bg2: '',
      bg3: 'A',
      bg4: '',
      bg5: '',
      bgm1: ['B'],
      bgm2: []
    }
  }
}
</script>
