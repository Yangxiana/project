<template>
  <div class="EchartPractice">
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "EchartPractice",
  methods: {
    fn() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          top: "5%",
          left: "right",
          X:'right',
        },
        series: [
          {
            name: "嘻嘻嘻",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "上姚江", itemStyle: { color: "pink",fontSize:'16' } },
              { value: 735, name: "下姚江", itemStyle: { color: "blue", fontSize:'16'} },
              { value: 580, name: "姚西北", itemStyle: { color: "puper",fontSize:'16' } },
              { value: 484, name: "南部山区", itemStyle: { color: "yellow",fontSize:'16' } },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.fn();
  },
};
</script>

<style>
#main {
  width: 600px;
  height: 400px;
  margin: left;
  /* margin-top: 10px; */
}
</style>
