import { Line } from 'vue-chartjs'

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
      gradient2: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')
    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')
    this.renderChart({
      labels: ['Kwadraat A', 'Kwadraat B', 'Kwadraat C', 'Kwadraat D'],
      datasets: [
        {
          label: 'Week 37 2017',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [0, 0, 0, 0]
        }, {
          label: 'Week 38 2017',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient2,
          data: [0, 2, 0, 3]
        }, {
          label: 'Week 39 2017',
          borderColor: '#FC0025',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [19, 11, 0, 5]
        }, {
          label: 'Week 40 2017',
          borderColor: '#05CB00',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient2,
          data: [0, 0, 0, 0]
        }, {
          label: 'Week 41 2017',
          borderColor: '#002525',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [68, 0, 0, 6]
        }, {
          label: 'Week 42 2017',
          borderColor: '#0500E1',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient2,
          data: [0, 4, 0, 23]
        }, {
          label: 'Week 43 2017',
          borderColor: '#FC2500',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [0, 0, 0, 0]
        }, {
          label: 'Week 44 2017',
          borderColor: '#00CBE1',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient2,
          data: [0, 0, 0, 0]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
