import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

class Graph {
  ctx = document.querySelector('.js-myChart').getContext('2d');

  // green gradient
  canvasOfGreen = document.querySelector('.js-myChart').getContext('2d');
  gradientOfGreen = canvasOfGreen.createLinearGradient(0,0,0,170).addColorStop(0, 'rgba(111, 207, 151, 1)').addColorStop(1, 'rgba(102, 210, 234, 1)');

  // orange gradinet
  canvasOfOrange = document.querySelector('.js-myChart').getContext('2d');
  gradientOfOrange = canvasOfOrange.createLinearGradient(0,0,0,170).addColorStop(0, 'rgba(255, 227, 156, 1)').addColorStop(1, 'rgba(255, 186, 156, 1)');

  // purple gradient
  canvasOfPurple = document.querySelector('.js-myChart').getContext('2d');
  gradientOfPurple = canvasOfPurple.createLinearGradient(0,0,0,170).addColorStop(0, 'rgba(188, 156, 255, 1)').addColorStop(1, 'rgba(139, 164, 249, 1)');

  // black gradinet
  canvasOfBlack = document.querySelector('.js-myChart').getContext('2d');
  gradientOfBlack = canvasOfBlack.createLinearGradient(0,0,0,170).addColorStop(0, 'rgba(144, 144, 144, 1)').addColorStop(1, 'rgba(61, 73, 117, 1)');

  // add text in the center of doughnut

  votes = {
    id: 'votes',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {top, right, bottom, left, width, height}} = chart;
      ctx.save();
      options.fontSize = 24;
      options.fontFamily = 'Montserrat';
      options.fontWeight = '700';
      ctx.font = options.fontWeight + ' ' + options.fontSize + 'px ' + options.fontFamily;
      ctx.textAlign = options.position;
      ctx.fillStyle = options.fontColor;
      ctx.allVotesText = options.allVotesText;
      ctx.fillText(options.allVotesText, 63, 150);
    }
  };

  bigText = {
    id: 'bigText',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {top, right, bottom, left, width, height}} = chart;
      ctx.save();
      options.fontSize = 14;
      options.fontFamily = 'Montserrat';
      options.fontWeight = '700';
      ctx.font = options.fontWeight + ' ' + options.fontSize + 'px ' + options.fontFamily;
      ctx.textAlign = options.position;
      ctx.fillStyle = options.fontColor;
      ctx.text = options.text;
      // ctx.fillText(options.text, width / 2 , top + (height / 2) + (options.fontSize * 1.7));
      ctx.fillText(options.text, 63, 170);
    }
  }

  // count all votes
  reducer = (previousValue, currentValue) => previousValue + currentValue;

  // settings of chart.js
  myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        'Великолепно',
        'Хорошо',
        'Удовлетворительно',
        'Разочарован',
      ],
      datasets: [{
        label: 'Doughnut dataset',
        data:[130, 65, 65, 0],
        backgroundColor: [
          gradientOfOrange,
          gradientOfGreen,
          gradientOfPurple,
          gradientOfBlack,
        ],
        hoverOffset: 4,
        offset: 4,
        rotation: 180,
        cutout: '90%',
      }]
    },
    plugins: [votes, bigText],
    options: {
      // add text to the center
      plugins: {
        votes: {
          fontColor: 'rgba(188, 156, 255, 1)',
          position: 'center',
          allVotesText: [130, 65, 65, 0].reduce(reducer),
        },
        bigText: {
          fontColor: 'rgba(188, 156, 255, 1)',
          position: 'center',
          text: 'голосов',
        },
        legend: {
          position: 'right',
          maxWidth: 180,
          maxHeight: 96,
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            color: 'rgba(31, 32, 65, 0.75)',
            padding: 10,
            usePointStyle: true,
            pointStyle: 'circle',
            font: {
                family: 'Montserrat',
                size: 14
            }
          }
        },
      }
    }
  });
}

let graph = new Graph();