import { Line } from 'vue-chartjs'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// path = path.sibstring(0,path.lastIndexOf('\\')+1);
// alert(path);
Vue.use(VueAxios, axios)

// export default {
//   extends: Line,
//   name: 'LineExample',
//   data () {
//     return {
//       gradient: null,
//       gradient2: null
//     }
//   },
//   mounted () {
//     this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
//     this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
//     this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
//     this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
//     this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')
//     this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
//     this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
//     this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

//     this.renderChart({
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [
//         {
//           label: 'Data One',
//           borderColor: '#FC2525',
//           pointBackgroundColor: 'white',
//           borderWidth: 1,
//           pointBorderColor: 'white',
//           backgroundColor: this.gradient,
//           data: [40, 39, 10, 40, 39, 80, 40]
//         }, {
//           label: 'Data Two',
//           borderColor: '#05CBE1',
//           pointBackgroundColor: 'white',
//           borderWidth: 1,
//           pointBorderColor: 'white',
//           backgroundColor: this.gradient2,
//           data: [60, 55, 32, 10, 2, 12, 53]
//         }
//       ]
//     }, {responsive: true, maintainAspectRatio: false})
//   }
// }
export default {
  extends: Line,
  data () {
    return {
      gradient: null,
      options: null,
      temp: null
    }
  },
  mounted () {
    this.options = {responsive: true, maintainAspectRatio: false}
    // this.axios.get('https://beheer.mijnbewijsstukken.nl/foobar?json=true&yolo=true', {headers: {'Access-Control-Allow-Origin': 'https://beheer.mijnbewijsstukken.nl', 'Access-Control-Request-Method': 'GET', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}})
    // this.axios.get('https://beheer.mijnbewijsstukken.nl/foobar', {
    //   params: {
    //     json: true,
    //     yolo: true
    //   }
    // })
    // this.axios.post('https://beheer.mijnbewijsstukken.nl/foobar', {
    //   json: true,
    //   yolo: true
    // })
    this.axios.get('https://api.myjson.com/bins/8sqwr')
    // this.axios.get('http://127.0.0.1:8080/Json/test.json')
    .then(response => {
      // this.dataCollection = response.data
      // console.log(JSON.parse(response.data))
      // alert('JSON.parse(response.data)')
      // this.renderChart(this.dataCollection, this.options)
      this.temp = response.data
      this.gradient = []
      for (var i = 0; i < this.temp.length; i++) {
        var color = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
        var red = Math.floor((Math.random() * 254) + 1)
        var green = Math.floor((Math.random() * 254) + 1)
        var blue = Math.floor((Math.random() * 254) + 1)
        color.addColorStop(0, 'rgba(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ', 1)')
        color.addColorStop(0.5, 'rgba(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ', 0.5)')
        color.addColorStop(1, 'rgba(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ', 0)')
        this.gradient[i] = color
      }
      var datasets = []
      var dataCollection = []
      var buffs = []
      var labels = []
      for (var j = 0; j < this.temp.length; j++) {
        for (var l = 1; l < Object.keys(this.temp[j]).length; l++) {
          labels[l - 1] = Object.keys(this.temp[j])[l]
          buffs[l - 1] = this.temp[j][Object.keys(this.temp[j])[l]]
        }
        datasets.push({
          label: this.temp[j]['category'],
          borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient[j],
          data: buffs
        })
      }
      dataCollection.push({
        labels: labels,
        datasets: datasets
      })
      this.options = {responsive: true, maintainAspectRatio: false}
      this.renderChart(dataCollection[0], this.options)
    })
    // var gradient1 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // var gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // var gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // var gradient4 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // var gradient5 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // var gradient6 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    // gradient1.addColorStop(0, 'rgba(255, 0, 0, 0.5)')
    // gradient1.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    // gradient1.addColorStop(1, 'rgba(255, 0, 0, 0)')
    // gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    // gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    // gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')
    // gradient3.addColorStop(0, 'rgba(0, 352, 50, 0.6)')
    // gradient3.addColorStop(0.5, 'rgba(0, 352, 50, 0.25)')
    // gradient3.addColorStop(1, 'rgba(0, 352, 50, 0)')
    // gradient4.addColorStop(0, 'rgba(0, 12, 150, 0.4)')
    // gradient4.addColorStop(0.5, 'rgba(0, 12, 150, 0.25)')
    // gradient4.addColorStop(1, 'rgba(0, 12, 150, 0)')
    // gradient5.addColorStop(0, 'rgba(120, 69, 150, 0.2)')
    // gradient5.addColorStop(0.5, 'rgba(120, 69, 50, 0.25)')
    // gradient5.addColorStop(1, 'rgba(120, 69, 50, 0)')
    // gradient6.addColorStop(0, 'rgba(255, 120, 0, 0.8)')
    // gradient6.addColorStop(0.5, 'rgba(255, 120, 0, 0.25)')
    // gradient6.addColorStop(1, 'rgba(255, 120, 0, 0)')
    // this.gradient = [gradient1, gradient2, gradient3, gradient4, gradient5, gradient6]
    /* this.temp = [
      {
        'week': 'Week 37 2017',
        'Kwadraat A': 0,
        'Kwadraat B': 0,
        'Kwadraat C': 0,
        'Kwadraat D': 0
      },
      {
        'week': 'Week 38 2017',
        'Kwadraat A': 0,
        'Kwadraat B': 2,
        'Kwadraat C': 0,
        'Kwadraat D': 3
      },
      {
        'week': 'Week 39 2017',
        'Kwadraat A': 19,
        'Kwadraat B': 11,
        'Kwadraat C': 0,
        'Kwadraat D': 5
      },
      {
        'week': 'Week 40 2017',
        'Kwadraat A': 0,
        'Kwadraat B': 0,
        'Kwadraat C': 0,
        'Kwadraat D': 0
      },
      {
        'week': 'Week 41 2017',
        'Kwadraat A': 68,
        'Kwadraat B': 0,
        'Kwadraat C': 0,
        'Kwadraat D': 7
      },
      {
        'week': 'Week 42 2017',
        'Kwadraat A': 0,
        'Kwadraat B': 4,
        'Kwadraat C': 0,
        'Kwadraat D': 23
      },
      {
        'week': 'Week 43 2017',
        'Kwadraat A': 0,
        'Kwadraat B': 0,
        'Kwadraat C': 0,
        'Kwadraat D': 0
      },
      {
        'week': 'Week 44 2017',
        'Kwadraat A': 0,
        'Kwadraat B': 0,
        'Kwadraat C': 0,
        'Kwadraat D': 0
      }
    ]
    this.gradient = []
    for (var i = 0; i < this.temp.length; i++) {
      var color = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      var red = Math.floor((Math.random() * 254) + 1)
      var green = Math.floor((Math.random() * 254) + 1)
      var blue = Math.floor((Math.random() * 254) + 1)
      color.addColorStop(0, 'rgba(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ', 1)')
      color.addColorStop(0.5, 'rgba(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ', 0.5)')
      color.addColorStop(1, 'rgba(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ', 0)')
      this.gradient[i] = color
    }
    var datasets = []
    var dataCollection = []
    for (var j = 0; j < this.temp.length; j++) {
      datasets.push({
        label: this.temp[j]['week'],
        borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
        pointBackgroundColor: 'white',
        borderWidth: 1,
        pointBorderColor: 'white',
        backgroundColor: this.gradient[j],
        data: [this.temp[j]['Kwadraat A'],
          this.temp[j]['Kwadraat B'],
          this.temp[j]['Kwadraat C'],
          this.temp[j]['Kwadraat D']
        ]
      })
    }
    dataCollection.push({
      labels: ['Kwadraat A', 'Kwadraat B', 'Kwadraat C', 'Kwadraat D'],
      datasets: datasets
    }) */
    // alert(JSON.parse(this.temp[0]))
    // this.dataCollection = {
    //   labels: ['Kwadraat A', 'Kwadraat B', 'Kwadraat C', 'Kwadraat D'],
    //   datasets: [
    //     {
    //       label: 'Week 37 2017',
    //       // borderColor: '#FC2525',
    //       // pointBackgroundColor: 'white',
    //       // borderWidth: 1,
    //       // pointBorderColor: 'white',
    //       // backgroundColor: this.gradient,
    //       data: [0, 0, 0, 0]
    //     }, {
    //       label: 'Week 38 2017',
    //       // borderColor: '#05CBE1',
    //       // pointBackgroundColor: 'white',
    //       // borderWidth: 1,
    //       // pointBorderColor: 'white',
    //       // backgroundColor: this.gradient2,
    //       data: [0, 2, 0, 3]
    //     }, {
    //       label: 'Week 39 2017',
    //       // borderColor: '#FC0025',
    //       // pointBackgroundColor: 'white',
    //       // borderWidth: 1,
    //       // pointBorderColor: 'white',
    //       // backgroundColor: this.gradient,
    //       data: [19, 11, 0, 5]
    //     }, {
    //       label: 'Week 40 2017',
    //       // borderColor: '#05CB00',
    //       // pointBackgroundColor: 'white',
    //       // borderWidth: 1,
    //       // pointBorderColor: 'white',
    //       // backgroundColor: this.gradient2,
    //       data: [0, 0, 0, 0]
    //     }, {
    //       label: 'Week 41 2017',
    //       // borderColor: '#002525',
    //       // pointBackgroundColor: 'white',
    //       // borderWidth: 1,
    //       // pointBorderColor: 'white',
    //       // backgroundColor: this.gradient,
    //       data: [68, 0, 0, 6]
    //     }, {
    //       label: 'Week 42 2017',
    //       // borderColor: '#0500E1',
    //       // pointBackgroundColor: 'white',
    //       // borderWidth: 1,
    //       // pointBorderColor: 'white',
    //       // backgroundColor: this.gradient2,
    //       data: [0, 4, 0, 23]
    //     }, {
    //       label: 'Week 43 2017',
    //       // borderColor: '#FC2500',
    //       // pointBackgroundColor: 'white',
    //       // borderWidth: 1,
    //       // pointBorderColor: 'white',
    //       // backgroundColor: this.gradient,
    //       data: [0, 0, 0, 0]
    //     }, {
    //       label: 'Week 44 2017',
    //       // borderColor: '#00CBE1',
    //       // pointBackgroundColor: 'white',
    //       // borderWidth: 1,
    //       // pointBorderColor: 'white',
    //       // backgroundColor: this.gradient2,
    //       data: [0, 0, 0, 0]
    //     }
    //   ]
    // }
    // this.options = {responsive: true, maintainAspectRatio: false}
    // this.renderChart(dataCollection[0], this.options)
  }
}
