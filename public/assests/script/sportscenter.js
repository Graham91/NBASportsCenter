let data;
let logourl;
let color124;
let color125;
let playerpicture;
let playerindex = [];
var eventFired = 0;
let windowSize;
let newImg;
let outsideData;
let runOnce = false;

if ($(window).width() < 960) {
  windowSize = "medium";
} else {
  windowSize = "large";
  $(newImg).attr("id", "theImg");
  eventFired = 1;
}

$(window).on("resize", function () {
  if (!eventFired) {
    if ($(window).width() < 960) {
      windowSize = "medium";
      runOnce = false;
    } else {
      if (runOnce === false) {
        newImg.parentNode.removeChild(newImg);
        windowSize = "large";
        getimageandsize(outsideData);
        runOnce = true;
      }
    }
  }
});
function getimageandsize(data) {
  newImg = new Image();
  newImg.src = data.color.url;
  console.log(newImg.src);
  if (windowSize === "large") {
    $(newImg).attr("id", "theImg");
  }
  $(newImg).on("load", function () {
    $("#imagediv").prepend(newImg);
    //all the stuff has to happen after.

    let imagewidth = $("#theImg").width();
    let imagewidth2 = parseInt(imagewidth) + 20;
    console.log(imagewidth);
    let left;
    let leftstring;
    let buttonleft;
    let buttonleftstring;
    if (imagewidth < 180) {
      $("#theImg").css("height", "275px");
      $("#imagediv").css("height", "305px");
      imagewidth = $("#theImg").width();
      // console.log(imagewidth);
      imagewidth2 = parseInt(imagewidth) + 60;
      left = (imagewidth2 - 200) / 2;
      leftstring = left + "px";
      buttonleft = left + 60;
      buttonleftstring = buttonleft + "px";
      let imagewidthstring = imagewidth2 + "px";
      $(".grid-item").css("width", imagewidthstring);
      $(".inner").css("width", imagewidthstring);
      $(".boxDivForApps").css("left", leftstring);
      $("#arrowbuttondiv").css("top", "350px");
      $("#arrowbuttondiv").css("left", buttonleftstring);
      $("#arrowbuttondiv2").css("left", buttonleftstring);
    } else if (imagewidth > 308) {
      $("#imagediv").css("height", "");
      imagewidth = 308;
      imagewidth2 = parseInt(imagewidth) + 60;
      let imagewidthstring = imagewidth2 + "px";
      left = (imagewidth2 - 200) / 2;
      leftstring = left + "px";
      console.log(imagewidthstring);
      buttonleft = left + 60;
      buttonleftstring = buttonleft + "px";
      $(".grid-item").css("width", imagewidthstring);
      $(".inner").css("width", imagewidthstring);
      $(".boxDivForApps").css("left", leftstring);
      $("#arrowbuttondiv").css("top", "275px");
      $("#arrowbuttondiv").css("left", buttonleftstring);
      $("#arrowbuttondiv2").css("left", buttonleftstring);
    } else {
      $("#imagediv").css("height", "");
      imagewidth2 = parseInt(imagewidth) + 60;
      let imagewidthstring = imagewidth2 + "px";
      left = (imagewidth2 - 200) / 2;
      leftstring = left + "px";
      console.log(imagewidthstring);
      buttonleft = left + 60;
      buttonleftstring = buttonleft + "px";
      $(".grid-item").css("width", imagewidthstring);
      $(".inner").css("width", imagewidthstring);
      $(".boxDivForApps").css("left", leftstring);
      $("#arrowbuttondiv").css("top", "275px");
      $("#arrowbuttondiv").css("left", buttonleftstring);
      $("#arrowbuttondiv2").css("left", buttonleftstring);
    }
  });
}

$(document).ready(function () {
  console.log("ready!");
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf("/") + 1);
  console.log(id);

  // function getVideo() {
  //     $.ajax({
  //         type: 'GET',
  //         url: 'https://www.googleapis.com/youtube/v3/search',
  //         data: {
  //             key: 'AIzaSyDFqW- mKPfwbTiosSlG1_wmSmE6D53a3cg',
  //             q: "cats",
  //             part: 'snippet',
  //             maxResults: 1,
  //             type: 'video',
  //             videoEmbeddable: true,
  //         },
  //         success: function (data) {
  //             console.log(data);
  //             embedVideo(data)
  //         },
  //         error: function (response) {
  //             console.log("Request Failed");
  //         }
  //     });
  // }
  let selectedTeamScores = [];
  var queryGameURL =
    "https://www.balldontlie.io/api/v1/games?seasons[]=2019&team_ids[]=" + 1;
  console.log("2222", queryGameURL);
  $.ajax({
    url: queryGameURL,
    method: "GET",
  }).then(function (res) {
    let homeTeamScore,
      homeTeamName,
      homeTeam,
      visitingTeamScore,
      visitingTeamName;
    for (let index = 0; index < 6; index++) {
      // if (homeTeam) {
      homeTeamName = res.data[index].home_team.full_name;
      visitingTeamName = res.data[index].visitor_team.full_name;
      homeTeamScore = res.data[index].home_team_score;
      visitingTeamScore = res.data[index].visitor_team_score;

      selectedTeamScores.push({
        gameyoutubesearch:
          "Home team: " +
          homeTeamName +
          " " +
          homeTeamScore +
          " vs " +
          "Visiting team: " +
          visitingTeamName +
          " " +
          visitingTeamScore,
      });
      // $.ajax({
      //     type: 'GET',
      //     url: 'https://www.googleapis.com/youtube/v3/search',
      //     data: {
      //         key: 'AIzaSyDFqW- mKPfwbTiosSlG1_wmSmE6D53a3cg',
      //         q: selectedTeamScores[index].gameyoutubesearch,
      //         part: 'snippet',
      //         maxResults: 1,
      //         type: 'video',
      //         videoEmbeddable: true,
      //     },
      //     success: function (data) {
      //         console.log(data);
      //         $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
      //         $('h3').text(data.items[0].snippet.title)
      //         $('.description').text(data.items[0].snippet.description)
      //         // embedVideo(data)
      //     },
      //     error: function (response) {
      //         console.log("Request Failed");
      //     }
      // });
    }
    console.log(selectedTeamScores);
  });
  // function embedVideo(data) {
  //     $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
  //     $('h3').text(data.items[0].snippet.title)
  //     $('.description').text(data.items[0].snippet.description)
  // }
  // getVideo();

  $(".inner").on("click", function () {
    console.log("hi");
    $(".hide1").css("display", "block");
    $(".mainappdiv").css("border-color", color125);
    $.ajax("/api/getplayers/" + id, {
      type: "GET",
    }).then(function (data) {
      console.log(data);
      playerindex = data;
      console.log(playerindex);

      data.forEach((element, index) => {
        console.log(index);
        $("table tbody").append(
          "<tr><td><div class='playerinfo'>" +
            element.player.number +
            "</div></td><td><div class='getplayerstats playerinfo2' value=" +
            index +
            " id='" +
            element.player.image +
            "' name='" +
            element.player.url +
            "'>" +
            element.player.name +
            "</div></td><td><div class='playerinfo'>" +
            element.player.position +
            "</div></td><td><div class='playerinfo'>" +
            element.player.height +
            "</div></td><td><div class='playerinfo'>" +
            element.player.weight +
            "</div></tr>"
        );
      });
      $(".getplayerstats").on("click", function () {
        var target = event.target;
        let playerurl = target.getAttribute("name");
        let playervalue = target.getAttribute("value");
        let playerindexnumber = parseInt(playervalue);
        console.log(playerurl);
        var parts = playerurl.split("/");
        var playerid = parts[parts.length - 1];
        playerpicture = target.getAttribute("id");

        var playerstatsurl = {
          url: playerid,
          img: playerpicture,
        };
        console.log(playerstatsurl);

        $.get("/api/individual/" + playerid).then(function (data) {
          let playerNameForIndivTable =
            playerindex[playerindexnumber].player.name;
          let playerPositionForIndivTable =
            playerindex[playerindexnumber].player.position;
          let playerNumberForIndivTable =
            playerindex[playerindexnumber].player.number;
          let playerwieghtForIndivTable =
            playerindex[playerindexnumber].player.weight;
          let playerheightForIndivTable =
            playerindex[playerindexnumber].player.height;

          console.log(data);
          const populatearray = [
            { idkey: "#minC", info: data.statistics.careerSummary.min },
            { idkey: "#min", info: data.statistics.latest.min },
            { idkey: "#assistsC", info: data.statistics.careerSummary.assists },
            { idkey: "#assists", info: data.statistics.latest.assists },
            { idkey: "#blocksC", info: data.statistics.careerSummary.blocks },
            { idkey: "#blocks", info: data.statistics.latest.blocks },
            {
              idkey: "#gamesPlayedC",
              info: data.statistics.careerSummary.gamesPlayed,
            },
            { idkey: "#gamesPlayed", info: data.statistics.latest.gamesPlayed },
            {
              idkey: "#gamesStartedC",
              info: data.statistics.careerSummary.gamesStarted,
            },
            {
              idkey: "#gamesStarted",
              info: data.statistics.latest.gamesStarted,
            },
            { idkey: "#totRebC", info: data.statistics.careerSummary.totReb },
            { idkey: "#totReb", info: data.statistics.latest.totReb },
            { idkey: "#offRebC", info: data.statistics.careerSummary.offReb },
            { idkey: "#offReb", info: data.statistics.latest.offReb },
            { idkey: "#defRebC", info: data.statistics.careerSummary.defReb },
            { idkey: "#defReb", info: data.statistics.latest.defReb },
            { idkey: "#fgpC", info: data.statistics.careerSummary.fgp },
            { idkey: "#fgp", info: data.statistics.latest.fgp },
            { idkey: "#tpmC", info: data.statistics.careerSummary.tpm },
            { idkey: "#tpm", info: data.statistics.latest.tpm },
            { idkey: "#tpaC", info: data.statistics.careerSummary.tpa },
            { idkey: "#tpa", info: data.statistics.latest.tpa },
            { idkey: "#stealsC", info: data.statistics.careerSummary.steals },
            { idkey: "#steals", info: data.statistics.latest.steals },
            {
              idkey: "#turnoversC",
              info: data.statistics.careerSummary.turnovers,
            },
            { idkey: "#turnovers", info: data.statistics.latest.turnovers },
            { idkey: "#pFoulsC", info: data.statistics.careerSummary.pFouls },
            { idkey: "#pFouls", info: data.statistics.latest.pFouls },
            { idkey: "#pointsC", info: data.statistics.careerSummary.points },
            { idkey: "#points", info: data.statistics.latest.points },
            { idkey: "#ppgC", info: data.statistics.careerSummary.ppg },
            { idkey: "#ppg", info: data.statistics.latest.ppg },
            { idkey: "#tppC", info: data.statistics.careerSummary.tpp },
            { idkey: "#tpp", info: data.statistics.latest.tpp },
            { idkey: "#spgC", info: data.statistics.careerSummary.spg },
            { idkey: "#spg", info: data.statistics.latest.spg },
            { idkey: "#bpgC", info: data.statistics.careerSummary.bpg },
            { idkey: "#bpg", info: data.statistics.latest.bpg },
            { idkey: "#mpgC", info: data.statistics.careerSummary.mpg },
            { idkey: "#mpg", info: data.statistics.latest.mpg },
            { idkey: "#rpgC", info: data.statistics.careerSummary.rpg },
            { idkey: "#rpg", info: data.statistics.latest.rpg },
          ];

          populatearray.forEach((element) => {
            $(element.idkey).html(element.info);
          });

          $(".mainappdiv").css("display", "none");
          $(".playerinfo").css("display", "none");
          $(".playerinfo2").css("display", "none");

          $(".mainappdiv2").css("display", "block");
          $(".mainappdiv2").css("border-color", color125);

          $(".mainappdiv2").css("background-image", "url(" + logourl + ")");
          console.log(logourl);
          // $("#imagedivbackground2").append('<img id="theImg55" src="' + logourl + '" />');
          $(".gradient").css("background", color125);
          $(".gradient").css(
            "background",
            "linear-gradient(180deg, " +
              color125 +
              " 0%, " +
              color124 +
              " 100%)"
          );
          $("#playerpicturebackground").append(
            '<img id="playerpic" src="' + playerpicture + '" />'
          );
          console.log(playerNameForIndivTable);
          $("#playernameForIndiv").html(playerNameForIndivTable);
          $("#playerpositionForIndiv").html(playerPositionForIndivTable);
          $("#playerheightForIndiv").html(playerwieghtForIndivTable);
          $("#playerwieghtForIndiv").html(playerheightForIndivTable);
        });
      });
    });
  });
  $.ajax("/api/home/" + id, {
    type: "GET",
  }).then(function (data) {
    outsideData = data;
    logourl = data.color.url;
    color124 = data.color.colors1[1];
    color125 = data.color.colors1[3];
    getimageandsize(data);

    // // $("#theImg").css()
    // var img = $('theImg');
    // stuff needed to get the image right;

    // newImg.src = data.color.url;
    // $("#imagediv").prepend(newImg);
    let blueborder2string =
      data.color.colors1[3] + " transparent transparent transparent";

    $(".redback").css("background-color", data.color.colors1[1]);
    $(".redborder").css("border-color", data.color.colors1[1]);
    $("#theImg").css("border-color", data.color.colors1[2]);
    $(".blueborder").css("border-color", data.color.colors1[3]);
    $(".blueborder3").css(
      "border-color",
      "transparent transparent " + data.color.colors1[3] + " transparent"
    );
    $("#arrowbuttondiv").css(
      "border-color",
      "transparent transparent " + data.color.colors1[3] + " transparent"
    );
    $("#arrowbuttondiv2").css("border-color", blueborder2string);
    $(".blueborder2").css("border-color", blueborder2string);
    $(".blueborder1").css(
      "border-color",
      "transparent " + data.color.colors1[3] + " transparent transparent"
    );
    $(".blueback").css("background-color", data.color.colors1[3]);

    // console.log(data.db.gamestats)
    // if (data.db.gamestats === false){
    //   $("#gamestats").empty()}
    // if (data.db.FavPlayer === null){
    //   $("player").empty();
    // }
    // $("#welcomeid").html("Welcome: "+ data.db.UserID)
    // $("#favteam").html("Your favorite Team is: " + data.db.FavTeam);
    // $("#favplayer").html("Your favorite Player is: " + data.db.FavPlayer);

    console.log(data.color.url);
    console.log(data);
  });
});

//     $(".gamestats").on("click", function(){
//       console.log("YOU A BUTT");
//       var url = window.location.pathname;
//         var id = url.substring(url.lastIndexOf('/') + 1);

//             window.location.href="/sportscentergame/"+id;

//   });
//   $(".pref").on("click", function(){
//       console.log("YOU A BUTT");
//       var url = window.location.pathname;
//         var id = url.substring(url.lastIndexOf('/') + 1);

//             window.location.href="/sportscenterpref/"+id;

//   });
