$(function () {

	chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
		console.log(typeof message);
		console.log(sendResponse);
		if (message.substring(0,4)=='GRI-') { //get review info
			var tableRows = $(".confluenceTable tbody tr");
			/*
			targetRow = targetRow.eq(targetRow.length-1);
			console.log(targetRow.find('td').eq(0).text());
			return;*/
			var amountOfRowsToGet = parseInt(message.substring(4, message.length));
			var reviewData = [];
			for (var i = 0; i < amountOfRowsToGet; i++) {
				var currentRow = tableRows.eq(tableRows.length-(i+1));
				reviewData.push({'email':currentRow.find('td').eq(0).text(),
												'username':currentRow.find('td').eq(1).text(),
												'password':currentRow.find('td').eq(2).text(),
												'school':currentRow.find('td').eq(3).text(),
												'books':currentRow.find('td').eq(4).text(),
												'date':currentRow.find('td').eq(5).text()
												});
			}
			console.log(reviewData);
			sendResponse(reviewData);
		}
	});

})
