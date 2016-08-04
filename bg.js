// arrC . naveen@arrc.in . arrc.in
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.name === 'bloiPageActionClicked') {
      // console.log("Message", message);

      // Extract data from message object
      var data = message.data[0];
      var _favIcon = data.favIconUrl.split('?')[0];
      var _title = data.title;
      var _url = data.url;

      // Prepare querified url
      var _query = "favIcon=" + _favIcon + "&"
      _query += "title=" + _title + "&"
      _query += "url=" + _url

      // Encode the url
      var encodedUrl = encodeURIComponent(_query); // rails doesn't like this.

      // These are left here for debugging purposes ofcourse. Don't judge me.
      // console.log("Full url \n", _query);
      // console.log("Encoded url \n", encodedUrl);
      // console.log("Decoded url \n", decodeURIComponent(encodedUrl));

      // Open new bookmarks page with query string
      chrome.tabs.create({
          'url': "http://localhost:3000/bookmarks/new?" + _query
      }, function(tab) {
        // You can sleep here or booze or whatever.
      });
    }
});
