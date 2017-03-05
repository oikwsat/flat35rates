/**
 * draw chart
 */

// chart.js グラフデータセット生成
var datasetConstructor = function(label, color){
  return {
    label: label, // need
    fill: false,
    borderWidth: 2,
    borderColor: color, // need
    backgroundColor: color, // need
    pointBorderColor: "#fff",
    tension: 0,
    data: []
  };
};

var dates = Array();
// フラット35
var myhome_9under_21over              = new datasetConstructor("融資率9割以下 返済期間が21年以上", "rgba(2,63,138,0.8)");
var myhome_9under_20under             = new datasetConstructor("融資率9割以下 返済期間が20年以下", "rgba(201,60,58,0.8)");
var myhome_9over_21over_20160129      = new datasetConstructor('融資率9割超 返済期間が21年以上 (2016.1.29迄)', "rgba(2,63,138,0.8)");
var myhome_9over_21over_20160130      = new datasetConstructor('融資率9割超 返済期間が21年以上 (2016.1.30以降)', "rgba(2,63,138,0.8)");
var myhome_9over_21under_20160129     = new datasetConstructor('融資率9割超 返済期間が20年以下 (2016.1.29迄)', "rgba(2,63,138,0.8)");
var myhome_9over_21under_20160130     = new datasetConstructor('融資率9割超 返済期間が20年以下 (2016.1.30以降)', "rgba(2,63,138,0.8)");
var myhome_commission_evaluation      = new datasetConstructor('融資手数料 住宅性能評価物件', "rgba(2,63,138,0.8)");
var myhome_commission_other           = new datasetConstructor('融資手数料 その他物件', "rgba(2,63,138,0.8)");
// 借り換え
var conversion_21over                 = new datasetConstructor('借換 返済期間が21年以上', "rgba(2,63,138,0.8)");
var conversion_20under                = new datasetConstructor('借換 返済期間が20年以下', "rgba(2,63,138,0.8)");
var conversion_commission_evaluation  = new datasetConstructor('借換 融資手数料 住宅性能評価物件', "rgba(2,63,138,0.8)");
var conversion_commission_other       = new datasetConstructor('借換 融資手数料 その他物件', "rgba(2,63,138,0.8)");
// つなぎ融資
var bridge_commission_basic           = new datasetConstructor('つなぎ融資 融資手数料 基本手数料', "rgba(2,63,138,0.8)");
var bridge_commission_add             = new datasetConstructor('つなぎ融資 融資手数料 加算手数料', "rgba(2,63,138,0.8)");

$.getJSON("data.json", function(json) {
  json.forEach(function(value) {
    dates.push(value.date);
    myhome_9under_21over.data.push(value.myhome_9under_21over);
    myhome_9under_20under.data.push(value.myhome_9under_20under);
    myhome_9over_21over_20160129.data.push(value.myhome_9over_21over_20160129);
    myhome_9over_21over_20160130.data.push(value.myhome_9over_21over_20160130);
    myhome_9over_21under_20160129.data.push(value.myhome_9over_21under_20160129);
    myhome_9over_21under_20160130.data.push(value.myhome_9over_21under_20160130);
    myhome_commission_evaluation.data.push(value.myhome_commission_evaluation);
    myhome_commission_other.data.push(value.myhome_commission_other);
    conversion_21over.data.push(value.conversion_21over);
    conversion_20under.data.push(value.conversion_20under);
    conversion_commission_evaluation.data.push(value.conversion_commission_evaluation);
    conversion_commission_other.data.push(value.conversion_commission_other);
    bridge_commission_basic.data.push(value.bridge_commission_basic);
    bridge_commission_add.data.push(value.bridge_commission_add);
  });
});

var config = {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      myhome_9under_21over,
      myhome_9under_20under,
      myhome_9over_21over_20160129,
      myhome_9over_21over_20160130,
      myhome_9over_21under_20160129,
      myhome_9over_21under_20160130
//      myhome_commission_evaluation,
//      myhome_commission_other
    ]
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        stacked: false,
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: '%',
          fontFamily: 'monospace',
          fontSize: 14
        },
        ticks: {
          callback: function(value){
            return value+'%';
          }
        }
      }]
    }
  }
};
window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
};
