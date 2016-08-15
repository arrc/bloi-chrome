// arrC . naveen@arrc.in . arrc.in
// lot of room refactoring here
// data extraction is very fragile eg., faviconurl, title which may no exist

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.name === 'bloiPageActionClicked') {
      // console.log("Message", message);

      // Extract data from message object
      var data = message.data[0];
      var _title = data.title;
      var _url = data.url;
      // https://toddmotto.com/methods-to-determine-if-an-object-has-a-given-property/#prop-in-myobject
      var _favIcon = 'favIconUrl' in data ? data.favIconUrl.split('?')[0] : "noicon";

      var _query = "url=" + encodeURIComponent(_url) + "&"
      _query += "title=" + encodeURIComponent(_title) + "&"
      _query += "favIcon=" + encodeURIComponent(_favIcon)

      // These are left here for debugging purposes ofcourse. Don't judge me.
      // console.log("Full url \n", _query);

      // Open new bookmarks page with query string
      chrome.tabs.create({
          // 'url': "http://localhost:3000/bookmarks/new?" + _query
          'url': "http://bloi.co/bookmarks/new?" + _query
      }, function(tab) {
        // You can sleep here or booze or whatever.
      });
    }
});
