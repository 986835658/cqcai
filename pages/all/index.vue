<template>
  <div>
    <div id="echarts">
      <div style="height:50px"></div>
      <div id="myChart"></div>
      <div id="myChart2"></div>
    </div>
    <div class="echarts">
      <div id="myChart3"></div>
      <div id="myChart4"></div>
    </div>
    <div style="height:100px"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      dom: null
    };
  },
  methods: {
    echartsInit() {
      // 找到容器
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 开始渲染
      myChart.setOption({
        title: {
          text: "办公类计算机",
          subtext: "2019年销售统计"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["净利润", "销售额"]
        },
        grid: {
          left: "0%",
          right: "4%",
          bottom: "0%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.1]
        },
        yAxis: {
          type: "category",
          data: [
            "便携式计算机",
            "台式计算机",
            "平板式微型计算机",
            "一体机",
            "计算机显示器"
          ]
        },
        series: [
          {
            name: "净利润",
            type: "bar",
            data: [10023, 18000, 20000, 8049, 9317]
          },
          {
            name: "销售额",
            type: "bar",
            data: [19320, 23430, 31560, 12540, 14410]
          }
        ]
      });
    },
    echartsInit2() {
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      myChart.setOption({
        title: {
          text: "专业类计算机",
          subtext: "2019年销售量",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["安全存储", "数据处理", "图形加工", "设计渲染", "云桌面"]
        },

        series: [
          {
            name: "销售量占比",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "安全存储" },
              { value: 274, name: "数据处理" },
              { value: 310, name: "图形加工" },
              { value: 335, name: "设计渲染" },
              { value: 400, name: "云桌面" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    echartsInit3() {
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      myChart.setOption({
        title: {
          text: "操作系统和办公软件",
          subtext: "年销售量"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["操作系统", "办公软件"]
        },
        grid: {
          left: "4%",
          right: "4%",
          bottom: "0%",
          containLabel: true
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            // dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "操作系统",
            type: "line",
            data: [1001, 2420, 1783, 1763, 1902, 2213, 2100],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最大值"
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          },
          {
            name: "办公软件",
            type: "line",
            data: [500, 900, 1500, 1000, 1600, 1300, 1500],
              markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最大值"
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
        ]
      });
    },
    echartsInit4() {
      let myChart = this.$echarts.init(document.getElementById("myChart4"));
      myChart.setOption({
          title: {
          text: "交通工具分类",
          subtext: "2019年采购数量"
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["轿车", "皮卡", "越野车", "微型车"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "采购量",
            type: "bar",
            barWidth: "60%",
            data: [ 334, 390, 330, 220]
          }
        ]
      });
    }
  },
  mounted() {
    this.echartsInit();
    this.echartsInit2();
    this.echartsInit3();
    this.echartsInit4();
  }
};
</script>
<style scoped lang="less">
#echarts {
  height: auto;
  width: 50%;
  margin: auto;
}
.echarts {
  height: auto;
  width: 50%;
  margin: auto;
}
#myChart {
  width: 45%;
  height: 580px;
  margin-left: auto;
  margin-right: auto;
  float: left;
}
#myChart2 {
  width: 45%;
  height: 580px;
  margin-left: auto;
  margin-right: auto;
  float: right;
}
#myChart3 {
  width: 45%;
  height: 580px;
  margin-left: auto;
  margin-right: auto;
  float: left;
  margin-top: 110px;
  margin-bottom: 110px;
}
#myChart4 {
  width: 45%;
  height: 580px;
  margin-left: auto;
  margin-right: auto;
  float: right;
  margin-top: 110px;
  margin-bottom: 110px;
}
</style>

