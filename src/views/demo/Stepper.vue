<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="my-1 grey darken-3">
        <v-subheader class="white--text">dark theme</v-subheader>
        <v-stepper v-model="s1" dark>
          <v-stepper-header>
            <v-stepper-step :complete="s1 > 1" step="1">
              <div>step<v-icon size="24" class="mx-1">mdi-numeric-1-box-outline</v-icon></div>
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="s1 > 2" step="2">
              <div>step<v-icon size="24" class="mx-1">mdi-numeric-2-box-outline</v-icon></div>
              <small>optional</small>
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="s1 > 3" step="3">
              <div>step<v-icon size="24" class="mx-1">mdi-numeric-3-box-outline</v-icon></div>
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" height="200px" elevation="3">
                <v-card-title>step1</v-card-title>
                <v-card-text>{{ s1 }}</v-card-text>
              </v-card>
              <v-btn color="primary" @click="s1 = 2">
                Next
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" height="200px" elevation="3">
                <v-card-title>step2</v-card-title>
                <v-card-text>{{ s1 }}</v-card-text>
              </v-card>
              <v-btn color="primary" @click="s1 = 3">
                Next
              </v-btn>
              <v-btn text @click="s1 = 1">Previous</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" height="200px" elevation="3">
                <v-card-title>step3</v-card-title>
                <v-card-text>{{ s1 }}</v-card-text>
              </v-card>
              <v-btn color="info" @click="s1 = 4">
                Finish
              </v-btn>
              <v-btn text @click="s1 = 2">Previous</v-btn>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card class="mb-12" height="200px" elevation="3">
                <v-card-title>Finish</v-card-title>
                <v-card-text>{{ s1 }}</v-card-text>
              </v-card>
              <v-btn color="success" @click="s1 = 1">
                Reset
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
      <v-col cols="12" md="6" class="my-1 grey lighten-3">
        <v-subheader>light theme</v-subheader>
        <v-stepper v-model="s2" light>
          <v-stepper-header>
            <v-stepper-step :complete="s2 > 1" step="1">
              <div>step<v-icon size="24" class="mx-1">mdi-numeric-1-box-outline</v-icon></div>
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="s2 > 2" step="2">
              <div>step<v-icon size="24" class="mx-1">mdi-numeric-2-box-outline</v-icon></div>
              <small>optional</small>
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="s2 > 3" step="3">
              <div>step<v-icon size="24" class="mx-1">mdi-numeric-3-box-outline</v-icon></div>
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>step1</v-card-title>
                <v-card-text>{{ s2 }}</v-card-text>
              </v-card>
              <v-btn color="primary" @click="s2 = 2">
                Next
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>step2</v-card-title>
                <v-card-text>{{ s2 }}</v-card-text>
              </v-card>
              <v-btn color="primary" @click="s2 = 3">
                Next
              </v-btn>
              <v-btn text @click="s2 = 1">Previous</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>step3</v-card-title>
                <v-card-text>{{ s2 }}</v-card-text>
              </v-card>
              <v-btn color="info" @click="s2 = 4">
                Finish
              </v-btn>
              <v-btn text @click="s2 = 2">Previous</v-btn>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>Finish</v-card-title>
                <v-card-text>{{ s2 }}</v-card-text>
              </v-card>
              <v-btn color="success" @click="s2 = 1">
                Reset
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>

      <v-col cols="12" class="my-1 grey lighten-4">
        <v-subheader>alt labels</v-subheader>
        <v-stepper alt-labels>
          <v-stepper-header>
            <v-stepper-step step="1">step 1</v-stepper-step>
            <v-divider color="accent"></v-divider>
            <v-stepper-step step="2">step 2<small>optional</small></v-stepper-step>
            <v-divider color="accent"></v-divider>
            <v-stepper-step step="3">step 3</v-stepper-step>
            <v-divider color="accent"></v-divider>
            <v-stepper-step step="4">step 4<small>optional</small></v-stepper-step>
            <v-divider color="accent"></v-divider>
            <v-stepper-step step="5">step 5</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-col>

      <v-col cols="12" class="my-1 grey lighten-4">
        <v-subheader>divider</v-subheader>
        <v-stepper>
          <v-stepper-header>
            <v-stepper-step step="1">step 1</v-stepper-step>
            <v-stepper-step step="2">step 2<small>optional</small></v-stepper-step>
            <v-stepper-step step="3">step 3</v-stepper-step>
            <v-stepper-step step="4">step 4<small>optional</small></v-stepper-step>
            <v-stepper-step step="5">step 5</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
        <v-spacer class="ma-1"></v-spacer>
        <v-stepper>
          <v-stepper-header>
            <v-stepper-step step="1">step 1</v-stepper-step>
            <v-divider color="accent"></v-divider>
            <v-stepper-step step="2">step 2<small>optional</small></v-stepper-step>
            <v-divider color="accent"></v-divider>
            <v-stepper-step step="3">step 3</v-stepper-step>
            <v-divider color="accent"></v-divider>
            <v-stepper-step step="4">step 4<small>optional</small></v-stepper-step>
            <v-divider color="accent"></v-divider>
            <v-stepper-step step="5">step 5</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
        <v-spacer class="ma-1"></v-spacer>
        <v-stepper>
          <v-stepper-header>
            <v-divider vertical class="transparent"></v-divider>
            <v-stepper-step step="1">step 1</v-stepper-step>
            <v-divider vertical></v-divider>
            <v-stepper-step step="2">step 2<small>optional</small></v-stepper-step>
            <v-divider vertical></v-divider>
            <v-stepper-step step="3">step 3</v-stepper-step>
            <v-divider vertical></v-divider>
            <v-stepper-step step="4">step 4<small>optional</small></v-stepper-step>
            <v-divider vertical></v-divider>
            <v-stepper-step step="5">step 5</v-stepper-step>
            <v-divider vertical class="transparent"></v-divider>
          </v-stepper-header>
        </v-stepper>
      </v-col>

      <v-col cols="12" class="my-1 grey lighten-4">
        <v-subheader>color</v-subheader>
        <v-stepper alt-labels>
          <v-stepper-header>
            <v-stepper-step complete editable color="red" step="1">red</v-stepper-step>
            <v-stepper-step complete editable color="pink" step="2">pink</v-stepper-step>
            <v-stepper-step complete editable color="purple" step="3">purple</v-stepper-step>
            <v-stepper-step complete editable color="deep-purple" step="4">deep-purple</v-stepper-step>
            <v-stepper-step complete editable color="indigo" step="5">indigo</v-stepper-step>
            <v-stepper-step complete editable color="blue" step="6">blue</v-stepper-step>
            <v-stepper-step complete editable color="light-blue" step="7">light-blue</v-stepper-step>
            <v-stepper-step complete editable color="cyan" step="8">cyan</v-stepper-step>
            <v-stepper-step complete editable color="teal" step="9">teal</v-stepper-step>
            <v-stepper-step complete editable color="green" step="10">green</v-stepper-step>
            <v-stepper-step complete editable color="light-green" step="11">light-green</v-stepper-step>
            <v-stepper-step complete editable color="lime" step="12">lime</v-stepper-step>
            <v-stepper-step complete editable color="yellow" step="13">yellow</v-stepper-step>
            <v-stepper-step complete editable color="amber" step="14">amber</v-stepper-step>
            <v-stepper-step complete editable color="orange" step="15">orange</v-stepper-step>
            <v-stepper-step complete editable color="deep-orange" step="16">deep-orange</v-stepper-step>
            <v-stepper-step complete editable color="brown" step="17">brown</v-stepper-step>
            <v-stepper-step complete editable color="blue-grey" step="18">blue-grey</v-stepper-step>
            <v-stepper-step complete editable color="grey" step="19">grey</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-col>

      <v-col cols="12" class="my-1 grey lighten-4">
        <v-subheader>icon</v-subheader>
        <v-stepper v-model="s8">
          <v-stepper-header>
            <v-stepper-step step="1">step 1</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step complete complete-icon="mdi-check-underline" step="2"
              >step 2<small>complete</small></v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step editable step="3">step 3<small>editable</small></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step editable error-icon="mdi-comment-alert-outline" :rules="[() => false]" step="4"
              >step 4<small>rules</small></v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step complete editable edit-icon="mdi-keyboard-settings" step="5"
              >step 5<small>complete editable</small></v-stepper-step
            >
          </v-stepper-header>
        </v-stepper>
      </v-col>

      <v-col cols="12" md="6" class="my-1 grey lighten-4">
        <v-subheader>editable</v-subheader>
        <v-stepper v-model="s3">
          <v-stepper-header>
            <v-stepper-step :complete="s3_s1" editable edit-icon="$complete" step="1">Group A</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="s3_s2" editable edit-icon="$complete" step="2">Group B</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="s3_s3" editable edit-icon="$complete" step="3">Group C</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>Setting Group A</v-card-title>
              </v-card>
              <div class="d-inline-block">
                <v-switch v-model="s3_s1" label="check" class="mt-0 ml-4">check</v-switch>
              </div>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>Setting Group B</v-card-title>
              </v-card>
              <div class="d-inline-block">
                <v-switch v-model="s3_s2" label="check" class="mt-0 ml-4">check</v-switch>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>Setting Group C</v-card-title>
              </v-card>
              <div class="d-inline-block">
                <v-switch v-model="s3_s3" label="check" class="mt-0 ml-4">check</v-switch>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>

      <v-col cols="12" md="6" class="my-1 grey lighten-4">
        <v-subheader>editable + non-linear</v-subheader>
        <v-stepper v-model="s4" non-linear>
          <v-stepper-header>
            <v-stepper-step complete editable edit-icon="mdi-card-bulleted-settings-outline" step="1"
              >Group A</v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step complete editable edit-icon="mdi-file-settings-outline" step="2">Group B</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step complete editable edit-icon="mdi-keyboard-settings-outline" step="3"
              >Group C</v-stepper-step
            >
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>Setting Group A</v-card-title>
              </v-card>
              <div class="d-inline-block">
                <v-switch v-model="s4_s1" label="check" class="mt-0 ml-4">check</v-switch>
              </div>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>Setting Group B</v-card-title>
              </v-card>
              <div class="d-inline-block">
                <v-switch v-model="s4_s2" label="check" class="mt-0 ml-4">check</v-switch>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" height="200px" color="grey lighten-4" elevation="3">
                <v-card-title>Setting Group C</v-card-title>
              </v-card>
              <div class="d-inline-block">
                <v-switch v-model="s4_s3" label="check" class="mt-0 ml-4">check</v-switch>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>

      <v-col cols="12" md="6" class="my-1 grey lighten-4">
        <v-subheader>vertical</v-subheader>
        <v-sheet height="620" width="auto" color="grey lighten-3">
          <v-stepper v-model="s5" vertical non-linear>
            <v-stepper-step :complete="s5 > 1" step="1">step 1</v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="mb-12" height="200px" elevation="3" color="grey lighten-4">
                <v-card-title>step1</v-card-title>
                <v-card-text>{{ s5 }}</v-card-text>
              </v-card>
              <v-btn color="primary" @click="s5 = 2">
                Next
              </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="s5 > 2" step="2">step 2<small>optional</small></v-stepper-step>
            <v-stepper-content step="2">
              <v-card class="mb-12" height="200px" elevation="3" color="grey lighten-4">
                <v-card-title>step2</v-card-title>
                <v-card-text>{{ s5 }}</v-card-text>
              </v-card>
              <v-btn color="primary" @click="s5 = 3">
                Next
              </v-btn>
              <v-btn text @click="s5 = 1">Previous</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="s5 > 3" step="3">step 3</v-stepper-step>
            <v-stepper-content step="3">
              <v-card class="mb-12" height="200px" elevation="3" color="grey lighten-4">
                <v-card-title>step3</v-card-title>
                <v-card-text>{{ s5 }}</v-card-text>
              </v-card>
              <v-btn color="info" @click="s5 = 4">
                Finish
              </v-btn>
              <v-btn text @click="s5 = 2">Previous</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="s5 > 3" step="4">Finish</v-stepper-step>
            <v-stepper-content step="4">
              <v-card class="mb-12" height="200px" elevation="3" color="grey lighten-4">
                <v-card-title>Finish</v-card-title>
                <v-card-text>{{ s5 }}</v-card-text>
              </v-card>
              <v-btn color="success" @click="s5 = 1">
                Reset
              </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="6" class="my-1 grey lighten-4">
        <v-subheader>vertical + editable</v-subheader>
        <v-sheet height="620" width="auto" color="grey lighten-3">
          <v-stepper v-model="s6" vertical>
            <v-stepper-step :complete="s6_s1" editable edit-icon="$complete" step="A">Group A</v-stepper-step>
            <v-stepper-content step="A">
              <v-card class="mb-12" height="200px" elevation="3" color="grey lighten-4">
                <v-card-title>Setting Group A</v-card-title>
                <v-card-text>{{ s6 }}</v-card-text>
              </v-card>
              <div class="d-inline-block">
                <v-switch v-model="s6_s1" label="check" class="mt-0 ml-4">check</v-switch>
              </div>
            </v-stepper-content>

            <v-stepper-step :complete="s6_s2" editable edit-icon="$complete" step="B"
              >Group B<small>optional</small></v-stepper-step
            >
            <v-stepper-content step="B">
              <v-card class="mb-12" height="200px" elevation="3" color="grey lighten-4">
                <v-card-title>Setting Group B</v-card-title>
                <v-card-text>{{ s6 }}</v-card-text>
              </v-card>
              <div class="d-inline-block">
                <v-switch v-model="s6_s2" label="check" class="mt-0 ml-4">check</v-switch>
              </div>
            </v-stepper-content>

            <v-stepper-step :complete="s6_s3" editable edit-icon="$complete" step="C">Group C</v-stepper-step>
            <v-stepper-content step="C">
              <v-card class="mb-12" height="200px" elevation="3" color="grey lighten-4">
                <v-card-title>Setting Group C</v-card-title>
                <v-card-text>{{ s6 }}</v-card-text>
              </v-card>
              <div class="d-inline-block">
                <v-switch v-model="s6_s3" label="check" class="mt-0 ml-4">check</v-switch>
              </div>
            </v-stepper-content>
          </v-stepper>
        </v-sheet>
      </v-col>

      <v-col cols="12" class="my-1 grey lighten-4">
        <v-subheader>rules</v-subheader>
        <v-stepper v-model="s7">
          <v-stepper-header>
            <v-stepper-step :rules="[rules.rule1]" step="1"
              >step 1<small v-if="s7_s1_error">{{ s7_s1_error }}</small></v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step :rules="[rules.rule2]" step="2"
              >step 2<small v-if="s7_s2_error">{{ s7_s2_error }}</small></v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step :rules="[rules.rule3]" step="3"
              >step 3<small v-if="s7_s3_error">{{ s7_s3_error }}</small></v-stepper-step
            >
            <v-divider></v-divider>
            <v-stepper-step :rules="[rules.rule1, rules.rule2]" step="4"
              >step 4<small v-if="s7_s4_error">{{ s7_s4_error }}</small></v-stepper-step
            >
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" height="200px" elevation="3">
                <v-card-title>step1</v-card-title>
                <v-card-text>{{ s7 }}</v-card-text>
              </v-card>
              <v-btn color="primary" @click="s7 = 2">
                Next
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" height="200px" elevation="3">
                <v-card-title>step2</v-card-title>
                <v-card-text>{{ s7 }}</v-card-text>
              </v-card>
              <v-btn color="primary" @click="s7 = 3">
                Next
              </v-btn>
              <v-btn text @click="s7 = 1">Previous</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" height="200px" elevation="3">
                <v-card-title>step3</v-card-title>
                <v-card-text>{{ s7 }}</v-card-text>
              </v-card>
              <v-btn color="info" @click="s7 = 4">
                Next
              </v-btn>
              <v-btn text @click="s7 = 2">Previous</v-btn>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card class="mb-12" height="200px" elevation="3">
                <v-card-title>step4</v-card-title>
                <v-card-text>{{ s7 }}</v-card-text>
              </v-card>
              <v-btn color="info" @click="s7 = 5">
                Finish
              </v-btn>
              <v-btn text @click="s7 = 3">Previous</v-btn>
            </v-stepper-content>

            <v-stepper-content step="5">
              <v-card class="mb-12" height="200px" elevation="3">
                <v-card-title>Finish</v-card-title>
                <v-card-text>{{ s7 }}</v-card-text>
              </v-card>
              <v-btn color="success" @click="s7 = 1">
                Reset
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Stepper',
  data() {
    return {
      s1: 1,
      s2: 1,
      s3: 1,
      s3_s1: false,
      s3_s2: false,
      s3_s3: false,
      s4: 1,
      s4_s1: false,
      s4_s2: false,
      s4_s3: false,
      s5: 1,
      s6: 'A',
      s6_s1: false,
      s6_s2: false,
      s6_s3: false,
      s7: 1,
      rules: {
        rule1: () => {
          return true
        },
        rule2: () => {
          return true
        },
        rule3: () => {
          this.s7_s3_error = 'error'
          return false
        }
      },
      s7_s1_error: null,
      s7_s2_error: null,
      s7_s3_error: null,
      s7_s4_error: null,
      s8: 4
    }
  },
  methods: {
    stepRule1() {
      return true
    },
    stepRule2() {
      return true
    },
    stepRule3() {
      return true
    }
  }
}
</script>
