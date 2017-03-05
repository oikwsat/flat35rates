/**
 * draw chart
 */

var dates = Array();
var myhome_9under_21over = Array();
var myhome_9under_20under = Array();
var myhome_9over_21over_20160129 = Array();
var myhome_9over_21over_20160130 = Array();
var myhome_9over_21under_20160129 = Array();
var myhome_9over_21under_20160130 = Array();
var myhome_commission_evaluation = Array();
var myhome_commission_other = Array();
var conversion_21over = Array();
var conversion_20under = Array();
var conversion_commission_evaluation = Array();
var conversion_commission_other = Array();
var bridge_commission_basic = Array();
var bridge_commission_add = Array();

$.getJSON("data.json", function(json) {
  json.forEach(function(value) {
    dates.push(value.date);
    myhome_9under_21over.push(value.myhome_9under_21over);
    myhome_9under_20under.push(value.myhome_9under_20under);
    myhome_9over_21over_20160130.push(value.myhome_9over_21over_20160130);
    myhome_9over_21over_20160130.push(value.myhome_9over_21over_20160130);
    myhome_9over_21under_20160129.push(value.myhome_9over_21under_20160129);
    myhome_9over_21under_20160130.push(value.myhome_9over_21under_20160130);
    myhome_commission_evaluation.push(value.myhome_commission_evaluation);
    myhome_commission_other.push(value.myhome_commission_other);
    conversion_21over.push(value.conversion_21over);
    conversion_20under.push(value.conversion_20under);
    conversion_commission_evaluation.push(value.conversion_commission_evaluation);
    conversion_commission_other.push(value.conversion_commission_other);
    bridge_commission_basic.push(value.bridge_commission_basic);
    bridge_commission_add.push(value.bridge_commission_add);
  });
});

var config = {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
      label: "融資率9割以下 返済期間が21年以上",
      fill: false,
      backgroundColor: "#3A7AC9",
      borderWidth: 2,
      borderColor: "rgba(2,63,138,0.8)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(2,63,138,0.8)",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#1D5191",
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 2,
      tension: 0,
      data: myhome_9under_21over
    },
    {
      label: "融資率9割以下 返済期間が20年以下",
      fill: false,
      backgroundColor: "#DB514E",
      borderWidth: 2,
      borderColor: "rgba(201,60,58,0.8)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(201,60,58,0.8)",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#9A1B19",
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 2,
      tension: 0,
      data: myhome_9under_20under
    }]
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
