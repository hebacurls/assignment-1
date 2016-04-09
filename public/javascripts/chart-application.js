'use strict';

/* Controllers */
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(function () {
angular.bootstrap(document.body, ['myApp']);
});
angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
	var data = google.visualization.arrayToDataTable([
          ['Album', 'Year', 'Us_Peak_chart_post'],
          ['The White Stripes',  1999, 9],
          ['De Stijl',  2000, 5],
          ['White Blood Cells', 2001, 61],
          ['Elephant',  2003, 6],
          ['Get Behind me Satan', 2005, 3],
          ['Icky Thump', 2007, 2],
          ['Under Great White Northern Lights', 2010, 11],
          ['Live in Mississippi', 2011, 7],
          ['Live at the Gold Dollar', 2012, 11],
          ['Nine Miles from the White City', 2013, 12]
        
          []
        ]);
	var options = {
          title: 'Company Performance'
        };
        var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));
        chart.draw(data, options);
  }])
  .controller('MyCtrl2', [function() {

  }]);

