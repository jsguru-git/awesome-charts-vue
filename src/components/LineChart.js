import { Line } from 'vue-chartjs'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

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
    this.axios.get('https://api.myjson.com/bins/8sqwr')
    .then(response => {
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
  }
}
