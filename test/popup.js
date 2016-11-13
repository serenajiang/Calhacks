
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
	$.post('https://apiv2.indico.io/political',
		JSON.stringify({
			'api_key': 'ae63f26c7f98d4b206d13c7779ad104c',
			'data': selection[0],
			'threshold': 0
		})).then(function(res){
			var results = $.parseJSON(res).results;
			var ctx = document.getElementById("myChart");
			var myChart = new Chart(ctx, {
			    type: 'pie',
			    data: {
			        labels: ["Conservative", "Liberal", "Libertarian", "Green"],
			        datasets: [{
			            label: 'Likelihood of Affiliation',
			            data: [results.Conservative * 100, results.Liberal * 100, results.Libertarian * 100, results.Green * 100],
			            backgroundColor: [
			                'rgba(255, 99, 132, 0.2)',
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)',
			            ],
			            borderColor: [
			                'rgba(255,99,132,1)',
			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)',
			            ],
			            borderWidth: 1
			        }]
			    },

			});
		});
});
