# city
微信小程序商城
# 框架
微信小程序 https://developers.weixin.qq.com/miniprogram/dev/index.html
Echart 微信小程序版本 图表框架 https://echarts.baidu.com/
# 使用例子
# 首先需要下载Echart，在项目目录中添加该文件
# 在需要使用的文件中引入 
# .json文件中
#"usingComponents": {
#   "ec-canvas": "../../../ec-canvas/ec-canvas"
#  },
#.wxml文件中
# <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>
需要注意一定要设置它的width和heigth大小
#.js文件中
import * as echarts from '../../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    color: ['#F2F2F2'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        show:false,
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['广东', '深圳', '珠海', '四川', '北京', '汕头', '哈尔滨', '长春', '青岛', '厦门'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    series: [
      {
        name: '正面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'right',
            color: "#333333"
          }
        },
        data: [120, 102, 141, 174, 190, 250, 220, 174, 190, 250],
        itemStyle: {
          // emphasis: {
          //   color: '#32c5e9'
          // }
        }
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

#在Page({
#    data:{
#        ec: {
#      onInit: initChart
#    }
#   }
#})