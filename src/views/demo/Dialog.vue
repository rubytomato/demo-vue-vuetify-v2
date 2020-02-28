<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-dialog dark v-model="dark" max-width="500">
                <!-- v-slot:activator -->
                <!-- #activator -->
                <template #activator="{ on }">
                  <!-- イベントハンドラの登録 -->
                  <!-- v-on="on" -->
                  <v-btn v-on="on">dark theme</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ dark }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" outlined @click="dark = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-dialog light v-model="light" max-width="500">
                <template #activator="{ on }">
                  <v-btn v-on="on">light theme</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ light }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" outlined @click="light = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-btn id="oa1">custom activator</v-btn>
              <v-dialog v-model="activator1" max-width="500" activator="#oa1">
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ activator1 }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="activator1 = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-btn @click.stop="activator2 = true">without activator</v-btn>
              <v-dialog v-model="activator2" max-width="500">
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ activator2 }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="activator2 = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <!--persistent ダイアログの外側をクリックしても閉じない -->
              <!--persistent + no-click-animation ダイアログの外側をクリックしたときにダイアログのアニメーションをしない -->
              <!--escキーで閉じることはできない-->
              <v-dialog v-model="persistent" max-width="500" persistent>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">persistent</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ persistent }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="persistent = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-dialog v-model="disabled" max-width="500" disabled>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">disabled</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ disabled }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="disabled = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <!-- hide-overlay オーバーレイを無効にする-->
              <v-dialog v-model="overlay1" max-width="500" overlay-color="blue" overlay-opacity="0.7">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">overlay</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ overlay1 }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="overlay1 = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <!-- hide-overlay オーバーレイを無効にする-->
              <v-dialog v-model="overlay2" max-width="500" hide-overlay>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">hide overlay</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ overlay2 }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="overlay2 = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-dialog v-model="scrollable" max-width="500" scrollable>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">scrollable</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ scrollable }}]</v-card-subtitle>
                  <v-card-text style="height: 100px;">
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text.card text. card text. card text. card text.
                      card text.
                    </div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text.card text. card text. card text. card text.
                      card text.
                    </div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text.card text. card text. card text. card text.
                      card text.
                    </div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text.card text. card text. card text. card text.
                      card text.
                    </div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text.card text. card text. card text. card text.
                      card text.
                    </div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text.card text. card text. card text. card text.
                      card text.
                    </div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text.card text. card text. card text. card text.
                      card text.
                    </div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text.card text. card text. card text. card text.
                      card text.
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="scrollable = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-dialog v-model="fullscreen" max-width="500" fullscreen>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">fullscreen</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ fullscreen }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="fullscreen = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-dialog v-model="eager" max-width="500" eager>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">SEO</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ eager }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="eager = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <!-- dialog-transition -->
              <!-- scale-transition -->
              <!-- fade-transition -->
              <!-- slide-x-transition -->
              <!-- scroll-x-transition -->
              <v-dialog v-model="transition" max-width="500" transition="scroll-x-transition">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">transition</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Dialog Title
                  </v-card-title>
                  <v-card-subtitle>model:[{{ transition }}]</v-card-subtitle>
                  <v-card-text>
                    <div class="body-1">card text. card text. card text. card text. card text.</div>
                    <div class="body-2">
                      card text. card text. card text. card text. card text. card text. card text. card text. card text.
                      <small class="cyan--text">card text. card text. card text.</small>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="transition = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="9" class="grey lighten-4">
        <v-sheet height="auto" width="auto">
          <v-container>
            <v-row justify="start">
              <v-sheet height="100" width="180" color="light-green lighten-3" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-blue lighten-4" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="grey lighten-5" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-green lighten-3" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-blue lighten-4" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="grey lighten-5" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-green lighten-3" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-blue lighten-4" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="grey lighten-5" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-green lighten-3" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-blue lighten-4" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="grey lighten-5" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-green lighten-3" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-blue lighten-4" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="grey lighten-5" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-green lighten-3" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-blue lighten-4" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="grey lighten-5" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-green lighten-3" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="light-blue lighten-4" elevation="5" class="ma-3"></v-sheet>
              <v-sheet height="100" width="180" color="grey lighten-5" elevation="5" class="ma-3"></v-sheet>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="12" class="grey lighten-2">
        <v-container>
          <v-row>
            <v-col cols="12" md="2">
              <v-chip id="chip1" link outlined color="primary">open-on-hover</v-chip>
            </v-col>
            <v-col cols="12" md="10">
              <v-sheet height="350" width="auto" class="grey lighten-4">
                <v-dialog v-model="hover" max-width="500" hide-overlay open-on-hover activator="#chip1">
                  <v-card>
                    <v-card-title class="headline">
                      Dialog Title
                    </v-card-title>
                    <v-card-subtitle>model:[{{ hover }}]</v-card-subtitle>
                    <v-card-text>
                      <div class="body-1">card text. card text. card text. card text. card text.</div>
                      <div class="body-2">
                        card text. card text. card text. card text. card text. card text. card text. card text. card
                        text.
                        <small class="cyan--text">card text. card text. card text.</small>
                      </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="hover = false">
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" md="12" class="my-1 grey lighten-2">
        <v-subheader>Events</v-subheader>
        <v-container>
          <v-row>
            <v-dialog :value="event" @input="event = $event" max-width="500">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on">Open Dialog(13) [{{ event }}]</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  Dialog Title(13)
                </v-card-title>
                <v-card-subtitle>model:[{{ event }}]</v-card-subtitle>
                <v-card-text>
                  <div class="body-1">card text. card text. card text. card text. card text.</div>
                  <div class="body-2">
                    card text. card text. card text. card text. card text. card text. card text. card text. card text.
                    <small class="cyan--text">card text. card text. card text.</small>
                  </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="event = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="12" class="my-1 grey lighten-2">
        <v-subheader>retain-focus</v-subheader>
        <v-container>
          <v-row>
            <p>
              <v-btn @click.stop="copy">Copy random number to clipboard</v-btn>
            </p>
            <p>random:{{ num }}</p>
          </v-row>
          <v-row>
            <v-dialog v-model="retain" max-width="500" :retain-focus="true">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on">Open Dialog [{{ retain }} ]</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  Dialog Title
                </v-card-title>
                <v-card-subtitle>model:[{{ retain }}]</v-card-subtitle>
                <v-card-text>
                  <v-btn @click.stop="copy">Copy random number</v-btn>
                  <div>random:{{ num }}</div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="retain = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      dark: false,
      light: false,
      activator1: false,
      activator2: false,
      persistent: false,
      disabled: false,
      overlay1: false,
      overlay2: false,
      scrollable: false,
      fullscreen: false,
      eager: false,
      transition: false,
      hover: false,
      event: false,
      retain: false,
      num: 0
    }
  },
  methods: {
    copy() {
      this.num = parseInt(Math.random() * 1000)
      this.copyToClipboard(this.num)
    },
    copyToClipboard(val) {
      const el = document.createElement('textarea')
      el.value = val
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
}
</script>
