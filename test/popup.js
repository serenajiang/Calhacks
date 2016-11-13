chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
	$.post('https://apiv2.indico.io/political',
		JSON.stringify({
			'api_key': 'ae63f26c7f98d4b206d13c7779ad104c',
			'data': selection[0],
			'threshold': 0
		})).then(function(res){
			var results = $.parseJSON(res).results
			google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
			// document.write(results)
		};
});

