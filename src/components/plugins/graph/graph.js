/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
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
  SubTitle,
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
  SubTitle,
);

// green gradient
const canvasOfGreen = document.querySelector('.js-myChart').getContext('2d');
const gradientOfGreen = canvasOfGreen.createLinearGradient(0, 0, 0, 170);
gradientOfGreen.addColorStop(0, 'rgba(111, 207, 151, 1)');
gradientOfGreen.addColorStop(1, 'rgba(102, 210, 234, 1)');

// orange gradinet
const canvasOfOrange = document.querySelector('.js-myChart').getContext('2d');
const gradientOfOrange = canvasOfOrange.createLinearGradient(0, 0, 0, 170);
gradientOfOrange.addColorStop(0, 'rgba(255, 227, 156, 1)');
gradientOfOrange.addColorStop(1, 'rgba(255, 186, 156, 1)');

// purple gradient
const canvasOfPurple = document.querySelector('.js-myChart').getContext('2d');
const gradientOfPurple = canvasOfPurple.createLinearGradient(0, 0, 0, 170);
gradientOfPurple.addColorStop(0, 'rgba(188, 156, 255, 1)');
gradientOfPurple.addColorStop(1, 'rgba(139, 164, 249, 1)');

// black gradinet
const canvasOfBlack = document.querySelector('.js-myChart').getContext('2d');
const gradientOfBlack = canvasOfBlack.createLinearGradient(0, 0, 0, 170);
gradientOfBlack.addColorStop(0, 'rgba(144, 144, 144, 1)');
gradientOfBlack.addColorStop(1, 'rgba(61, 73, 117, 1)');

const ctx = document.querySelector('.js-myChart').getContext('2d');

class Graph {
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
        data: [130, 65, 65, 0],
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
      }],
    },
    plugins: [
      {
        id: 'votes',
        beforeDraw(chart, args, options) {
          const { ctx } = chart;
          ctx.save();
          options.fontSize = 24;
          options.fontFamily = 'Montserrat';
          options.fontWeight = '700';
          ctx.font = `${options.fontWeight} ${options.fontSize}px ${options.fontFamily}`;
          ctx.textAlign = options.position;
          ctx.fillStyle = options.fontColor;
          ctx.allVotesText = options.allVotesText;
          ctx.fillText(options.allVotesText, 63, 150);
        },
      },
      {
        id: 'bigText',
        beforeDraw(chart, args, options) {
          const { ctx } = chart;
          ctx.save();
          options.fontSize = 14;
          options.fontFamily = 'Montserrat';
          options.fontWeight = '700';
          ctx.font = `${options.fontWeight} ${options.fontSize}px ${options.fontFamily}`;
          ctx.textAlign = options.position;
          ctx.fillStyle = options.fontColor;
          ctx.text = options.text;
          ctx.fillText(options.text, 63, 170);
        },
      },
    ],
    options: {
      // add text to the center
      plugins: {
        votes: {
          fontColor: 'rgba(188, 156, 255, 1)',
          position: 'center',
          // eslint-disable-next-line max-len
          allVotesText: [130, 65, 65, 0].reduce((previousValue, currentValue) => previousValue + currentValue),
        },
        bigText: {
          fontColor: 'rgba(188, 156, 255, 1)',
          position: 'center',
          text: 'голосов',
        },
        legend: {
          position: 'right',
          maxWidth: 160,
          maxHeight: 136,
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            color: 'rgba(31, 32, 65, 0.75)',
            padding: 8,
            usePointStyle: true,
            pointStyle: 'circle',
            font: {
              family: 'Montserrat',
              size: 10,
            },
          },
        },
      },
    },
  });
}

const graph = new Graph();
