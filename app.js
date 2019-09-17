$(document).ready(function () {

  $("#sumbit").click(function){
    console.log("Submit")
  }

  var url = 'https://api.giphy.com/v1/gifs/search?q=${searchTopic}&api_key=oGYgispO8f1ljs4yIM0McQJsr1S8Iysi` 
  var topicsarray = ["cat];
$button.addClass("gify")
    function renderbuttons() {
      $("#animal-buttons").empty();

      for (var i = 0; i < topicsarray.length, I++) {
        var $button = $('<button>');

        $button.attr("cali", topicsarray[i]);
        $button.text(topicsarray[i]);
        $("#animal-buttons").append($button)
      }
    } renderbuttons();

  $.ajax({
    URL,
    method: "Get"
      )
}
  .then(respone) = > {
    console.log(response)
        $('#imageblock').empty();
  }
      var TopicIndex = TopicArray.indexof(searchtopic)

var results = response.data;
if (results.length === 0) {
  topicsarray.splice(TopicIndex, 1);
  alert("search not found, try again")
  renderbuttons();
  return ;
}
    ]

  for (let i = 0; i< results.length, i++) {
    var $div = $('<div>');
    var $img = $('<img>');
    $img.attr('src, results[i].images.fixed_height_still.url');
     $img.addClass("img")

     $div.append($p)
     $div.append($img)

     $('#imagesBlock').append($div);
  }




)}