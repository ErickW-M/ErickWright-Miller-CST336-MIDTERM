var queryBtn = $("#query-btn");
var info = $("#info");
var cover = $("#cover");


var getInfo = function(){
  $.ajax({
    url: "https://openlibrary.org/api/books",
    type: "GET",
    dataType: "json",
    data:{
      "bibkeys": "ISBN:" + $("#isbn").val(),
      "jscmd": "data",
      "format": "json"
    },
    success: function(data) {
        console.log(data);
      info.empty();
      cover.empty();
      info.append("Title: " + data['title'] + "<br>Author: " + data.authors + "<br>Publish: " + data.publish_date + "<br>Publisher: " + 
      data.publishers + "<br>ISBN: " + data.isbn_10 + "<br>Pages: " + data.number_of_pages);
      cover.append("<div class=\"img-thumbnail flex-item\"><img src=\""+data.cover.medium+"\"></div>");
 
      
      
    },
    error: function(e) {
      console.log("2", e);
    }
  });
}
