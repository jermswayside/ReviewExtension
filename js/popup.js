$(function () {
  $('.pdf-btn').click(function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currTab = tabs[0];
      console.log(currTab)
      var message = 'GRI-'+$('#reviewNum').val();
      console.log(chrome)
      chrome.storage.local.set({'reviewNum': $('#reviewNum').val()}, function() {
          console.log('reviewNum is set to ' + $('#reviewNum').val());

          chrome.tabs.sendMessage(currTab.id, message, {}, function (reviewData) {

            console.log(reviewData);
            chrome.storage.local.set({'reviewData': reviewData}, function() {
              console.log(reviewData)
              console.log( JSON.stringify(reviewData) );
              chrome.tabs.create({active: true, url: 'http://localhost:8888?j='+JSON.stringify(reviewData)});
            });
          });
      });

    });
/*
    chrome.runtime.sendMessage('getReviewInfo', function (json) {
      console.log(json)
      chrome.tabs.create({active: true, url: 'http://localhost:8888?u='+json.u});
    });*/

    //chrome.tabs.create({active: true, url: 'http://localhost:8888'});

  });

  $('.acc-btn').click(function () {

  });
});
