$(document).ready(function () {
  var topicsarray = ["dog", "wolf", "giraffe", "bird"]

  $("#submit").on('click', function () {
    event.preventDefault()
    var val = $("#textbox").val()
    $("#textbox").val("")

    if (val) {
      topicsarray.push(val)
    }
    renderbuttons()
    console.log("Submit")
  })

  $(document).on("click", "button.gify", function () {
    //this
    var searchTopic = $(this).attr("cali")
    console.log(searchTopic)
    var url = `https://api.giphy.com/v1/gifs/search?q=${searchTopic}&api_key=oGYgispO8f1ljs4yIM0McQJsr1S8Iysi`

    $.ajax({
      url: url,
      method: "get"
    })
      .then(response => {
        console.log(response)
        $('#imageblock').empty();
        var results = response.data;
        if (results.length === 0) {
          var TopicIndex = topicsarray.indexOf(searchTopic)
          topicsarray.splice(TopicIndex, 1);
          alert("search not found, try again")
          renderbuttons();
          return;
        }
        for (let i = 0; i < results.length; i++) {
          var $div = $('<div>');
          var $img = $('<img>');
          $img.attr('src', results[i].images.fixed_height_still.url);
          $img.attr('data-animate', results[i].images.fixed_height.url);
          $img.attr('data-still', results[i].images.fixed_height_still.url);
          $img.attr('data-is-still', "yes");

          $img.addClass("img")
          var $p = $("<p>")
          $div.append($p)
          $div.append($img)

          $('#image-block').append($div);
        }

      })
  })

  $(document).on("click", "img.img", function () {
    //this
    var isStill = $(this).attr("data-is-still")
    if (isStill === "yes") {
      $(this).attr("src", $(this).attr("data-animate"))
      $(this).attr("data-is-still", "no")
    } else {
      $(this).attr("src", $(this).attr("data-still"))
      $(this).attr("data-is-still", "yes")
    }
  })



  function renderbuttons() {
    $("#animal-buttons").empty();

    for (var i = 0; i < topicsarray.length; i++) {
      var $button = $('<button>');

      $button.attr("cali", topicsarray[i]);
      $button.text(topicsarray[i]);
      $button.addClass("gify")
      $("#animal-buttons").append($button)
    }
  }

  renderbuttons();



  //     console.log(response)
  //   }

  //     ]





})