$(document).ready(function() {
	var height1 = $(document).height();
	$.ajaxSetup({
		cache: false
	});

});

$("#txt").one("focusin", function() {
	$("#random").hide();
	$("#div1").animate({
		marginTop: '-=150px'
	})
});

$("#search-submit").submit(function(e) {
	$("#div2").empty();
	e.preventDefault();
								
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $("#txt").val(),
      dataType: 'jsonp',
      headers: {
        'Api-User-Agent': 'Example/1.0'
      },
      success: function(data) {
        console.log(data);
        var data = data.query.search;
        //console.log(data);
        for (i in data) {
          $('#div2').append(
            '<a href="' + 'https://en.wikipedia.org/wiki/' + data[i].title +
            '" target="_blank"' + '"><h3>' + data[i].title +
            '</h3><p>' + data[i].snippet + '...</p></a>');
        }
      }
		});
});