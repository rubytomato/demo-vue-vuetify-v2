<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-sheet height="64">
          <v-toolbar flat color="white">
            <v-btn outlined class="mr-4" color="grey darken-3" @click="setToday">
              Today
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on }">
                <v-btn outlined color="grey darken-2" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600" width="900">
          <!-- change: カレンダーに表示される日の範囲が変更されました。 これは初期化時にトリガーされます。 渡されるイベントは、開始日オブジェクトと終了日オブジェクトを持つオブジェクトです。-->
          <!-- locale="ja-JP" -->
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            locale="ja-JP"
            :events="events"
            :event-color="getEventColor"
            :event-name="eventNameFormatter"
            :event-margin-bottom="4"
            :now="now"
            :first-interval="16"
            :interval-count="48"
            :interval-minutes="30"
            :short-intervals="false"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-text>
                <span v-html="selectedEvent.start"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const dateFormat = {
  _fmt: {
    yyyy: function(date) {
      return date.getFullYear() + ''
    },
    MM: function(date) {
      return ('0' + (date.getMonth() + 1)).slice(-2)
    },
    dd: function(date) {
      return ('0' + date.getDate()).slice(-2)
    },
    hh: function(date) {
      return ('0' + date.getHours()).slice(-2)
    },
    mm: function(date) {
      return ('0' + date.getMinutes()).slice(-2)
    },
    ss: function(date) {
      return ('0' + date.getSeconds()).slice(-2)
    }
  },
  _priority: ['yyyy', 'MM', 'dd', 'hh', 'mm', 'ss'],
  format: function(date, format) {
    return this._priority.reduce((res, fmt) => res.replace(fmt, this._fmt[fmt](date)), format)
  }
}
export default {
  data: () => ({
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days'
    },
    // YYYY-MM-DD形式のカレンダーの開始日（含む）。 これは、カレンダーの種類によっては無視される場合があります。
    start: null,
    // YYYY-MM-DD形式のカレンダーの終了日（含む）。 これは、カレンダーの種類によっては無視される場合があります。
    end: null,
    // 現在考慮されている日時をオーバーライドします。 これは、YYYY-MM-DD hh：mm：ssの形式です。 カレンダーのスタイルは現在に従っています。
    now: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    container: null
  }),
  computed: {
    title() {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }

      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth

      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear

      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)

      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
        case '4day':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC',
        month: 'long'
      })
    }
  },
  created() {},
  mounted() {
    this.$refs.calendar.checkChange()
    console.log('mounted type:', this.type)
  },
  methods: {
    viewDay({ date }) {
      console.log('viewDay:', date)
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.now = dateFormat.format(new Date(), 'yyyy-MM-dd hh:mm:ss')
      console.log('setToday:', this.now)
      this.focus = this.now
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        console.log('selected Event:', this.selectedEvent)
        this.selectedElement = nativeEvent.target
        setTimeout(() => (this.selectedOpen = true), 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    // 日表示のフォーマッター
    dayFormatter(event, timedEvent) {
      console.log('event:', event, 'timedEvent', timedEvent)
      return 'xx'
    },
    eventNameFormatter(event, timedEvnet) {
      // event
      // eslint-disable-next-line no-console
      console.log('event:', event, 'timedEvent', timedEvnet)
      // event.input.{eventオブジェクト}
      if (timedEvnet) {
        return event.input.name + ' ' + '<b>' + event.input.details + '</b>'
      }
      if (event.allDay || !event.start.hasTime) {
        return event.input.name
      }
      return event.start.time + ' ' + event.input.name
    },
    updateRange({ start, end }) {
      console.log('updateRange start:', start, 'end:', end)
      this.start = start
      this.end = end
      this.events = [
        { name: 'Holiday', start: '2019-12-28', end: '2020-01-03', color: 'pink', details: '年末年始' },
        { name: 'Holiday', start: '2020-01-13', end: '', color: 'pink', details: '成人の日' },
        { name: 'PTO', start: '2020-01-14 10:00', end: '', color: 'indigo', details: 'xxxxxx' },
        { name: 'Event', start: '2020-01-14 13:15', end: '', color: 'cyan', details: 'xxxxxx' },
        { name: 'Party', start: '2020-01-17 19:30', end: '2020-01-17 21:00', color: 'orange', details: '新年会' },
        { name: 'Party', start: '2020-01-18 20:15', end: '', color: 'orange', details: 'xxxxxx' },
        { name: 'Meeting', start: '2020-01-20 15:00', end: '2020-01-20 16:00', color: 'blue', details: 'yyyyy' },
        { name: 'Meeting', start: '2020-01-20 16:00', end: '2020-01-20 18:00', color: 'blue', details: 'yyyyy' },
        { name: 'Meeting', start: '2020-01-20 19:15', end: '2020-01-20 20:00', color: 'blue', details: 'yyyyy' },
        { name: 'Travel', start: '2020-01-22', end: '2020-01-26', color: 'green', details: 'zzzzz' }
      ]
    },
    nth(d) {
      return d > 3 && d < 21 ? 'th' : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    formatDate(a, withTime) {
      //${a.getMinutes()}
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    }
  },
  watch: {
    type: function(val) {
      console.log('val:' + val)
      if (val === 'day') {
        this.container = document.getElementsByClassName('v-calendar-daily__day-container')
        console.log('container:', this.container)
      }
    }
  }
}
</script>
