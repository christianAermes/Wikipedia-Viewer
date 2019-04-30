$(document).ready(function(){
  $("#searchForm").submit(function(event){
    var searchTerm = $("#searchBox").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: api,
      async: false,
      dataType: "json",
      success: function(data){
        $("#searchResults").html("");
        for (var i=0; i<data[1].length; i++){
          var newLink = "<a href=" + data[3][i] + " target='_blank'>";
          var titlePar = "<p style='font-size: 20px; font-weight:bold; '>" + data[1][i] + "</p>";
          var previewPar = "<p>" + data[2][i] + "</p></a>";
          var newContent = newLink + titlePar + previewPar;
          $("#searchResults").append(newContent);
        }
      },
      error: function(error){
        alert("Error");
      }
    })
  event.preventDefault();
  })
});