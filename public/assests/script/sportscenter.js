//the rise for the bottom only works after height adjustments have been made.
let data;
let logourl;
let color124;
let color123;
let color125;
// let playerpicture;
let playerindex = [];
var eventFired = 0;
let windowSize;
let newImg;
let outsideData;
let id;
let runOnce = false;
let gotPlayersYet = false;
let appendonce = false;
let playersApp;
let playersAppState = "list";
let teamArticles;
let appPlaceHolder;
let appPlaceHolder2;
let appPlaceHolder3;
let appPlaceHolder4;
let development = false;

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    windowSize = "Large";
    imagetransition(windowSize);
  } else {
    windowSize = "medium";
    let windowWidth = $(window).width();
    console.log(windowWidth + "yeah baby");
    if (windowWidth > 929) {
      console.log("inegniues");
      imagetransition(windowSize);
    } else {
      console.log("outgeniues");
      $(".centraldiv").css("display", "none");
    }
  }
}

var x = window.matchMedia("(min-width: 1280px)");
// Call listener function at run time

x.addListener(myFunction); // Attach listener function on state changes
newImg = new Image();
var lastheight = $(window).height();
var lastWidth = $(window).width();

$(window).resize(function () {
  if ($(window).width() != lastWidth) {
    adjustcenterdivmargins();
    lastwidth = $(window).width();
  }
});

$(window).resize(function () {
  if ($(window).height() != lastheight) {
    //execute code here.
    centerdivlocation();
    //having a timeout issue;
    // $(".center").css("top", "-30vh");
    setTimeout(function () {
      adjustleftsidevisualizer();
    }, 1500);

    lastheight = $(window).height();
  }
});

function imagetransition(displaysize) {
  if (displaysize === "Large") {
    getimageandsize(outsideData, displaysize);
  } else if (displaysize === "medium") {
    getimageandsize(outsideData, displaysize);
  }
}
function getimageandsize(data, displaysize) {
  newImg.src = data.color.url;

  if (displaysize === "medium") {
    $(newImg).on("load", function () {
      $(".hide1").css("display", "none");
      $(newImg).removeAttr("id", "theImg");
      $(newImg).css("height", "");
      $(newImg).attr("id", "mediumscreenimage");
      $("#imagediv").css("height", "171px");
      $(".grid-item").css("display", "none");
      $("#imagediv").prepend(newImg);
      $(".viewerContainers").css("display", "none");
      $(".centraldiv").css("display", "block");
      $("#mediumscreenimage").css("border-color", color123);
      $(".largeScreenAppViewer").css("display", "none");
      if (appendonce === false) {
        $("#players1").append(playersApp);
        appendonce = true;
      }
      getclicks();
      if (playersAppState === "list") {
        $(".hide2").css("display", "none");
        $(".hide1").css("display", "block");
      }
      if (playersAppState === "individual") {
        $(".hide1").css("display", "none");
        $(".hide2").css("display", "block");
      }
      //all the stuff has to happen after.
      runOnce = false;
    });
  }
  if (displaysize === "Large") {
    $(newImg).on("load", function () {
      $(newImg).attr("id", "theImg");
      $(".viewerContainers").css("display", "block");
      $("#imagediv").prepend(newImg);
      $(".grid-item").css("display", "block");
      //all the stuff has to happen after.
      determineimageproportions();
      $("#theImg").css("border-color", color123);
      $(".centraldiv").css("display", "none");
      playersclickedonce = false;

      getclicks();
      adjustcenterdivmargins();
    });
  }
}
function adjustcenterdivmargins() {
  let screenwidth = $(window).width();
  let divwidth = $(".inner").width();
  console.log("div width: " + divwidth);
  let leftmargin = (screenwidth - divwidth - 900) / 2;
  if (divwidth > 237) {
    let differenceCentering = divwidth - 237;
    leftmargin = leftmargin + differenceCentering;
  }
  console.log(leftmargin);
  let wholeinterger = Math.round(leftmargin);
  $(".center").css("margin-left", wholeinterger + "px");
  $(".top").css("margin-left", wholeinterger + "px");
  $(".bottom").css("margin-left", wholeinterger + "px");
}
function adjustleftsidevisualizer() {
  let divheight = $(".inner").height();
  let leftoverspace = divheight - 351;
  let divspaceing = leftoverspace / 4;
  console.log(divspaceing);
  let centerlocation = divheight / 2 - 58 + 194;
  $("#box3").css("top", centerlocation + "px");
  let box2location = centerlocation - 117 - divspaceing;
  $("#box2").css("top", box2location + "px");
  let box1location = box2location - 117 - divspaceing;
  $("#box1").css("top", box1location + "px");
  let box4location = centerlocation + 117 + divspaceing;
  $("#box4").css("top", box4location + "px");
  let box5location = box4location + 117 + divspaceing;
  $("#box5").css("top", box5location + "px");
  let halfDivspacing = divspaceing / 2;
  let downarrowlocation = box4location + 117 + halfDivspacing;
  $("#arrowbuttondiv2").css("top", downarrowlocation + "px");
  // let topmargin = divheight / 2 - 400;
  // console.log(topmargin);
  // $(".center").css("margin-top", topmargin + "px");
}
function fillinsmalltable(data) {
  data.forEach((element, index) => {
    $(".innersmalldiv1").append(
      "<div class='displaynormal'><div class='smallscreenIndividualwhole'><div class='playerpicturebackgroundsmall'><img class='smallscreenIndividualPlayerPicture' src='" +
        element.player.image +
        "'></div><p class='smallscreenIndividualPlayerNumber'>" +
        element.player.number +
        "</p><div class='smallscreenwordbox'><p class='smallscreenIndividualPlayerName'>" +
        element.player.name +
        "</p><p class='smallscreenIndividualPlayerPosition'>Position: " +
        element.player.position +
        "</p><p class='smallscreenIndividualPlayerWeight'>Weight: " +
        element.player.weight +
        "</p><p class='smallscreenIndividualPlayerHeight'>Height: " +
        element.player.height +
        "</p><div class='smallScreenPlayerStats' value='" +
        index +
        "' name='" +
        element.player.url +
        "'>&#9660 Player Stats</div></div></div><div class='bottomsmallplayer'></div>"
    );
    $(".smallScreenPlayerStats").css("color", color125);
  });
}

function determineimageproportions() {
  let imagewidth = $("#theImg").width();
  let imageHeight = $("#theImg").height();
  let imagewidth2 = parseInt(imagewidth) + 18;

  let left;
  let leftstring;
  let buttonleft;
  let buttonleftstring;
  if (runOnce === false) {
    if (imagewidth < 162) {
      $("#theImg").css("height", "248px");
      $("#imagediv").css("height", "275px");
      imagewidth = $("#theImg").width();

      imagewidth2 = parseInt(imagewidth) + 56;
      left = (imagewidth2 - 180) / 2;
      leftstring = left + "px";
      buttonleft = left + 54;
      buttonleftstring = buttonleft + "px";
      let imagewidthstring = imagewidth2 + "px";
      $(".grid-item").css("width", imagewidthstring);
      $(".inner").css("width", imagewidthstring);
      $(".boxDivForApps").css("left", leftstring);
      $("#arrowbuttondiv").css("top", "315px");
      $("#arrowbuttondiv").css("left", buttonleftstring);
      $("#arrowbuttondiv2").css("left", buttonleftstring);
      runOnce = true;
    } else if (imagewidth > 278) {
      $("#imagediv").css("height", "");
      imagewidth = 278;
      imagewidth2 = parseInt(imagewidth) + 56;
      let imagewidthstring = imagewidth2 + "px";
      left = (imagewidth2 - 180) / 2;
      leftstring = left + "px";

      buttonleft = left + 54;
      buttonleftstring = buttonleft + "px";
      $(".grid-item").css("width", imagewidthstring);
      $(".inner").css("width", imagewidthstring);
      $(".boxDivForApps").css("left", leftstring);
      $("#arrowbuttondiv").css("top", "248px");
      $("#arrowbuttondiv").css("left", buttonleftstring);
      $("#arrowbuttondiv2").css("left", buttonleftstring);
    } else {
      $("#imagediv").css("height", "");
      imagewidth2 = parseInt(imagewidth) + 56;
      let imagewidthstring = imagewidth2 + "px";
      left = (imagewidth2 - 180) / 2;
      leftstring = left + "px";

      buttonleft = left + 54;
      buttonleftstring = buttonleft + "px";
      $(".grid-item").css("width", imagewidthstring);
      $(".inner").css("width", imagewidthstring);
      $(".boxDivForApps").css("left", leftstring);
      $("#arrowbuttondiv").css("top", "248px");
      $("#arrowbuttondiv").css("left", buttonleftstring);
      $("#arrowbuttondiv2").css("left", buttonleftstring);
    }
  }
}
function fillInPlayerFromteam(data) {
  data.forEach((element, index) => {
    $(".mainscreenplayertable tbody").append(
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
}
function productionaddplayerstats(data) {
  const populatearray = [
    {
      idkey: ".minC",
      info: data.statistics.careerSummary.min,
    },
    {
      idkey: ".min",
      info: data.statistics.latest.min,
    },
    {
      idkey: ".assistsC",
      info: data.statistics.careerSummary.assists,
    },
    {
      idkey: ".assists",
      info: data.statistics.latest.assists,
    },
    {
      idkey: ".blocksC",
      info: data.statistics.careerSummary.blocks,
    },
    {
      idkey: ".blocks",
      info: data.statistics.latest.blocks,
    },
    {
      idkey: ".gamesPlayedC",
      info: data.statistics.careerSummary.gamesPlayed,
    },
    {
      idkey: ".gamesPlayed",
      info: data.statistics.latest.gamesPlayed,
    },
    {
      idkey: ".gamesStartedC",
      info: data.statistics.careerSummary.gamesStarted,
    },
    {
      idkey: ".gamesStarted",
      info: data.statistics.latest.gamesStarted,
    },
    {
      idkey: ".totRebC",
      info: data.statistics.careerSummary.totReb,
    },
    {
      idkey: ".totReb",
      info: data.statistics.latest.totReb,
    },
    {
      idkey: ".offRebC",
      info: data.statistics.careerSummary.offReb,
    },
    {
      idkey: ".offReb",
      info: data.statistics.latest.offReb,
    },
    {
      idkey: ".defRebC",
      info: data.statistics.careerSummary.defReb,
    },
    {
      idkey: ".defReb",
      info: data.statistics.latest.defReb,
    },
    {
      idkey: ".fgpC",
      info: data.statistics.careerSummary.fgp,
    },
    {
      idkey: ".fgp",
      info: data.statistics.latest.fgp,
    },
    {
      idkey: ".tpmC",
      info: data.statistics.careerSummary.tpm,
    },
    {
      idkey: ".tpm",
      info: data.statistics.latest.tpm,
    },
    {
      idkey: ".tpaC",
      info: data.statistics.careerSummary.tpa,
    },
    {
      idkey: ".tpa",
      info: data.statistics.latest.tpa,
    },
    {
      idkey: ".stealsC",
      info: data.statistics.careerSummary.steals,
    },
    {
      idkey: ".steals",
      info: data.statistics.latest.steals,
    },
    {
      idkey: ".turnoversC",
      info: data.statistics.careerSummary.turnovers,
    },
    {
      idkey: ".turnovers",
      info: data.statistics.latest.turnovers,
    },
    {
      idkey: ".pFoulsC",
      info: data.statistics.careerSummary.pFouls,
    },
    {
      idkey: ".pFouls",
      info: data.statistics.latest.pFouls,
    },
    {
      idkey: ".pointsC",
      info: data.statistics.careerSummary.points,
    },
    {
      idkey: ".points",
      info: data.statistics.latest.points,
    },
    {
      idkey: ".ppgC",
      info: data.statistics.careerSummary.ppg,
    },
    {
      idkey: ".ppg",
      info: data.statistics.latest.ppg,
    },
    {
      idkey: ".tppC",
      info: data.statistics.careerSummary.tpp,
    },
    {
      idkey: ".tpp",
      info: data.statistics.latest.tpp,
    },
    {
      idkey: ".spgC",
      info: data.statistics.careerSummary.spg,
    },
    {
      idkey: ".spg",
      info: data.statistics.latest.spg,
    },
    {
      idkey: ".bpgC",
      info: data.statistics.careerSummary.bpg,
    },
    {
      idkey: ".bpg",
      info: data.statistics.latest.bpg,
    },
    {
      idkey: ".mpgC",
      info: data.statistics.careerSummary.mpg,
    },
    {
      idkey: ".mpg",
      info: data.statistics.latest.mpg,
    },
    {
      idkey: ".rpgC",
      info: data.statistics.careerSummary.rpg,
    },
    {
      idkey: ".rpg",
      info: data.statistics.latest.rpg,
    },
  ];

  populatearray.forEach((element) => {
    $(element.idkey).html(element.info);
  });
}

function developmentaddplayerstats() {
  const populatearray = [
    {
      idkey: ".minC",
      testnumbers: 69,
    },
    {
      idkey: ".min",
      testnumbers: 69,
    },
    {
      idkey: ".assistsC",
      testnumbers: 69,
    },
    {
      idkey: ".assists",
      testnumbers: 69,
    },
    {
      idkey: ".blocksC",
      testnumbers: 69,
    },
    {
      idkey: ".blocks",
      testnumbers: 69,
    },
    {
      idkey: ".gamesPlayedC",
      testnumbers: 69,
    },
    {
      idkey: ".gamesPlayed",
      testnumbers: 69,
    },
    {
      idkey: ".gamesStartedC",
      testnumbers: 69,
    },
    {
      idkey: ".gamesStarted",
      testnumbers: 69,
    },
    {
      idkey: ".totRebC",
      testnumbers: 69,
    },
    {
      idkey: ".totReb",
      testnumbers: 69,
    },
    {
      idkey: ".offRebC",
      testnumbers: 69,
    },
    {
      idkey: ".offReb",
      testnumbers: 69,
    },
    {
      idkey: ".defRebC",
      testnumbers: 69,
    },
    {
      idkey: ".defReb",
      testnumbers: 69,
    },
    {
      idkey: ".fgpC",
      testnumbers: 69,
    },
    {
      idkey: ".fgp",
      testnumbers: 69,
    },
    {
      idkey: ".tpmC",
      testnumbers: 69,
    },
    {
      idkey: ".tpm",
      testnumbers: 69,
    },
    {
      idkey: ".tpaC",
      testnumbers: 69,
    },
    {
      idkey: ".tpa",
      testnumbers: 69,
    },
    {
      idkey: ".stealsC",
      testnumbers: 69,
    },
    {
      idkey: ".steals",
      testnumbers: 69,
    },
    {
      idkey: ".turnoversC",
      testnumbers: 69,
    },
    {
      idkey: ".turnovers",
      testnumbers: 69,
    },
    {
      idkey: ".pFoulsC",
      testnumbers: 69,
    },
    {
      idkey: ".pFouls",
      testnumbers: 69,
    },
    {
      idkey: ".pointsC",
      testnumbers: 69,
    },
    {
      idkey: ".points",
      testnumbers: 69,
    },
    {
      idkey: ".ppgC",
      testnumbers: 69,
    },
    {
      idkey: ".ppg",
      testnumbers: 69,
    },
    {
      idkey: ".tppC",
      testnumbers: 69,
    },
    {
      idkey: ".tpp",
      testnumbers: 69,
    },
    {
      idkey: ".spgC",
      testnumbers: 69,
    },
    {
      idkey: ".spg",
      testnumbers: 69,
    },
    {
      idkey: ".bpgC",
      testnumbers: 69,
    },
    {
      idkey: ".bpg",
      testnumbers: 69,
    },
    {
      idkey: ".mpgC",
      testnumbers: 69,
    },
    {
      idkey: ".mpg",
      testnumbers: 69,
    },
    {
      idkey: ".rpgC",
      testnumbers: 69,
    },
    {
      idkey: ".rpg",
      testnumbers: 69,
    },
  ];
  populatearray.forEach((element) => {
    $(element.idkey).html(element.testnumbers);
  });
}
function getlargescreenAPPPLayers() {
  $(".largeScreenAppViewer").css("display", "block");

  $("#mainviewer1").append(playersApp);
  // $(".largeScreenAppViewer").append();
  $(".hide1").css("display", "block");
  getclicks();
  if (playersAppState === "list") {
    $(".hide2").css("display", "none");
    $(".hide1").css("display", "block");
  }
  if (playersAppState === "individual") {
    $(".hide1").css("display", "none");
    $(".hide2").css("display", "block");
  }
}
function playerinformation(id, windowSize) {
  console.log("hi");
  $(".mainappdiv").css("border-color", color125);
  const teamarray = [
    {
      player: {
        name: "Giannis Antetokounmpo",
        position: "Forward",
        height: "6 ft 11 in ",
        weight: " 242 lbs",
        number: "34",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png",
        url: "https://www.nba.com/players/giannis/antetokounmpo/203507",
      },
    },
    {
      player: {
        name: "Thanasis Antetokounmpo",
        position: "Forward",
        height: "6 ft 6 in ",
        weight: " 219 lbs",
        number: "43",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203648.png",
        url: "https://www.nba.com/players/thanasis/antetokounmpo/203648",
      },
    },
    {
      player: {
        name: "Eric Bledsoe",
        position: "Guard",
        height: "6 ft 1 in ",
        weight: " 214 lbs",
        number: "6",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202339.png",
        url: "https://www.nba.com/players/eric/bledsoe/202339",
      },
    },
    {
      player: {
        name: "Sterling Brown",
        position: "Guard-Forward",
        height: "6 ft 5 in ",
        weight: " 219 lbs",
        number: "23",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628425.png",
        url: "https://www.nba.com/players/sterling/brown/1628425",
      },
    },
    {
      player: {
        name: "Pat Connaughton",
        position: "Guard",
        height: "6 ft 5 in ",
        weight: " 209 lbs",
        number: "24",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1626192.png",
        url: "https://www.nba.com/players/pat/connaughton/1626192",
      },
    },
    {
      player: {
        name: "Donte DiVincenzo",
        position: "Guard",
        height: "6 ft 4 in ",
        weight: " 203 lbs",
        number: "0",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628978.png",
        url: "https://www.nba.com/players/donte/divincenzo/1628978",
      },
    },
    {
      player: {
        name: "George Hill",
        position: "Guard",
        height: "6 ft 3 in ",
        weight: " 188 lbs",
        number: "3",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201588.png",
        url: "https://www.nba.com/players/george/hill/201588",
      },
    },
    {
      player: {
        name: "Ersan Ilyasova",
        position: "Forward",
        height: "6 ft 9 in ",
        weight: " 235 lbs",
        number: "7",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/101141.png",
        url: "https://www.nba.com/players/ersan/ilyasova/101141",
      },
    },
    {
      player: {
        name: "Kyle Korver",
        position: "Guard-Forward",
        height: "6 ft 7 in ",
        weight: " 212 lbs",
        number: "26",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2594.png",
        url: "https://www.nba.com/players/kyle/korver/2594",
      },
    },
    {
      player: {
        name: "Brook Lopez",
        position: "Center",
        height: "7 ft 0 in ",
        weight: " 282 lbs",
        number: "11",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201572.png",
        url: "https://www.nba.com/players/brook/lopez/201572",
      },
    },
    {
      player: {
        name: "Robin Lopez",
        position: "Center",
        height: "7 ft 0 in ",
        weight: " 281 lbs",
        number: "42",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201577.png",
        url: "https://www.nba.com/players/robin/lopez/201577",
      },
    },
    {
      player: {
        name: "Frank Mason",
        position: "Guard",
        height: "5 ft 11 in ",
        weight: " 190 lbs",
        number: "15",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1628412.png",
        url: "https://www.nba.com/players/frank/mason/1628412",
      },
    },
    {
      player: {
        name: "Wesley Matthews",
        position: "Guard",
        height: "6 ft 4 in ",
        weight: " 220 lbs",
        number: "9",
        image:
          "//ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202083.png",
        url: "https://www.nba.com/players/wesley/matthews/202083",
      },
    },
  ];
  if (development) {
    fillinsmalltable(teamarray);
    fillInPlayerFromteam(teamarray);
    playersApp = $(".playerApp").html();
    console.log(playersApp);
    console.log(windowSize);
    gotPlayersYet = true;
    getlargescreenAPPPLayers();
    getsmalltablediv();

    if (windowSize === "medium") {
      $("#players1").append(playersApp);
      getclicks();
      appendonce = true;
    }
    if (windowSize === "large") {
      $("#mainviewer1").append(baseHtml);
      getclicks();
    }
  } else {
    $.ajax("/api/getplayers/" + id, {
      type: "GET",
    }).then(function (data) {
      console.log(data);
      playerindex = data;
      console.log(playerindex);
      fillInPlayerFromteam(data);
      fillinsmalltable(data);
      getsmalltablediv();
      playersApp = $(".playerApp").html();
      console.log(playersApp);
      console.log(windowSize);
      gotPlayersYet = true;
      getlargescreenAPPPLayers();

      if (windowSize === "medium") {
        $("#players1").append(playersApp);
        getclicks();
        appendonce = true;
      }
      if (windowSize === "large") {
        $("#mainviewer1").append(baseHtml);
        getclicks();
      }
    });
  }
}

function getHighlightvideos() {
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
      console.log(selectedTeamScores);
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
}
let playersclickedonce = false;
function getreturnclick() {
  $(".returnButton").on("click", function () {
    returnplayerstatstolist();
  });
}
function returnplayerstatstolist() {
  $(".mainappdiv2").css("display", "none");
  $(".playerinfo").css("display", "block");
  $(".playerinfo2").css("display", "block");
  $(".mainappdiv").css("display", "block");
  $("#players1").empty();
  $("#mainviewer1").empty();
  $(".playerpicturebackground").empty();
  $("#mainviewer1").append(playersApp);
  $("#players1").append(playersApp);
  playersAppState = "list";
  getclicks();
  playersclickedonce = false;
}
function getsmalltablediv() {
  let smalltable = $(".smallscreenindividualPlayerstats").html();
  $(".smallScreenPlayerStats").on("click", function () {
    $(".bottomsmallplayer").empty();
    playertarget = event.target;
    let openOrcloseIndicator = $(playertarget).text();
    console.log(openOrcloseIndicator);
    if (openOrcloseIndicator === "▲ Player Stats") {
      console.log("your in");
      $(playertarget).html("&#9660 Player Stats");
    } else {
      returnplayerstatstolist();
      console.log(playertarget);
      let parent = $(event.target).parent();
      let parentdiv = parent.parent();
      let parentdiv2 = parentdiv.parent();
      // let tablediv = parentdiv2.child();
      let tablediv = $(parentdiv2).find(".bottomsmallplayer");
      let smplayerurl = playertarget.getAttribute("name");
      let smplayervalue = playertarget.getAttribute("value");
      tablediv.append(smalltable);
      $(".individualPlayertable3").css("background", color125);
      $(".individualPlayertable3").css(
        "background",
        "linear-gradient(0deg, " +
          color125 +
          " 0%, rgba(255, 255, 255, 1) 100%)"
      );
      $(playertarget).html("&#9650 Player Stats");
      if (development) {
        developmentaddplayerstats();
      } else {
        let playerurl = playertarget.getAttribute("name");
        // let playervalue = playertarget.getAttribute("value");
        // let playerindexnumber = parseInt(playervalue);
        var parts = playerurl.split("/");
        var playerid = parts[parts.length - 1];
        $.get("/api/individual/" + playerid).then(function (data) {
          productionaddplayerstats(data);
          alert(
            "Because I used Cheerio to gather this information from NBA.com please do not click to find stats more times than you need to test functionality. I want to respect there site, and I would perfer to not get cut off!"
          );
        });
      }
    }
  });
}
function populatesmalltable(data) {
  // let smplayerurl = target.getAttribute("name");
  // let smplayervalue = target.getAttribute("value");
}
function getclicks() {
  $(".getplayerstats").on("click", function () {
    if (playersclickedonce === false) {
      playersclickedonce = true;
      let baseHtml = $(".individualPlayerApp").html();
      playersAppState = "individual";
      $("#players1").append(baseHtml);
      // $(".largeScreenAppViewer").append(baseHtml);
      $("#mainviewer1").append(baseHtml);

      $(".playerinfo").css("display", "none");
      $(".playerinfo2").css("display", "none");
      $(".mainappdiv").css("display", "none");
      $(".mainappdiv2").css("display", "block");
      $(".mainappdiv2").css("border-color", color125);
      $(".returnButton").css("background-color", color125);
      $(".returnButton").css("border-color", color125);

      var target = event.target;
      let playerurl = target.getAttribute("name");
      let playervalue = target.getAttribute("value");
      let playerindexnumber = parseInt(playervalue);
      console.log(playerurl);
      var parts = playerurl.split("/");
      var playerid = parts[parts.length - 1];
      let playerpicture = target.getAttribute("id");

      var playerstatsurl = {
        url: playerid,
        img: playerpicture,
      };
      console.log(playerstatsurl);

      if (development) {
        developmentaddplayerstats();
        $(".mainappdiv2").css("background-image", "url(" + logourl + ")");
        console.log(logourl);
        // $("#imagedivbackground2").append('<img id="theImg55" src="' + logourl + '" />');
        $(".gradient").css("background", color125);
        $(".gradient").css(
          "background",
          "linear-gradient(180deg, " + color125 + " 0%, " + color124 + " 100%)"
        );
        $(".playerpicturebackground").append(
          '<img class="playerpic" src="' + playerpicture + '" />'
        );
        // console.log(playerNameForIndivTable);

        $(".playernameForIndiv").html("Giannis Antetokounmpo");
        $(".playerpositionForIndiv").html("Guard-Forward");
        $(".playerheightForIndiv").html("219 lbs");
        $(".playerwieghtForIndiv").html("6 ft 5 in");
        getreturnclick();
      } else {
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
          productionaddplayerstats(data);

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
          $(".playerpicturebackground").append(
            '<img class="playerpic" src="' + playerpicture + '" />'
          );
          console.log(playerNameForIndivTable);
          $(".playernameForIndiv").html(playerNameForIndivTable);
          $(".playerpositionForIndiv").html(playerPositionForIndivTable);
          $(".playerheightForIndiv").html(playerwieghtForIndivTable);
          $(".playerwieghtForIndiv").html(playerheightForIndivTable);
          getreturnclick();
          alert(
            "Because I used Cheerio to gather this information from NBA.com please do not click to find stats more times than you need to test functionality. I want to respect there site, and I would perfer to not get cut off!"
          );
        });
      }
    }
  });
}
const TeamNameTranslator = {
  AtlantaHawks: "Alanta Hawks",
  BostonCeltics: "Boston Celtics",
  BrooklynNets: "Brooklyn Nets",
  CharlotteHornets: "Charlotte Hornets",
  ChicagoBulls: "Chicago Bulls",
  ClevelandCavaliers: "Cleveland Cavaliers",
  DallasMavericks: "Dallas Mavericks",
  DenverNuggets: "Denver Nuggets",
  DetroitPistons: "Detroit Pistons",
  GoldenStateWarriors: ">Golden State Warriors",
  HoustonRockets: ">Houston Rockets",
  IndianaPacers: ">Indiana Pacers",
  LAClippers: ">LA Clippers",
  LALakers: "LA Lakers",
  MemphisGrizzlies: "Memphis Grizzlies",
  MiamiHeat: "Miami Heat",
  MilwaukeeBucks: "Milwaukee Bucks",
  MinnesotaTimberwolves: ">Minnesota Timberwolves",
  NewOrleansPelicans: "New Orleans Pelicans",
  NewYorkKnicks: "New York Knicks",
  OklahomaCityThunder: "Oklahoma City Thunder",
  OrlandoMagic: "Orlando Magic",
  PhiladelphiaSixers: "Philadelphia Sixers",
  PhoenixSuns: "Phoenix Suns",
  PortlandTrailBlazers: "Portland Trail Blazer",
  SacramentoKings: "Sacramento Kings",
  SanAntonioSpurs: "San Antonio Spurs",
  TorontoRaptors: "Toronto Raptors",
  UtahJazz: "Utah Jazz",
  WashingtonWizards: "Washington Wizards",
};

function getteamarticles(data) {
  let keyforteam = data.db.FavTeam;
  console.log(TeamNameTranslator[keyforteam]);
  var url =
    "http://newsapi.org/v2/everything?" +
    "q=" +
    TeamNameTranslator[keyforteam] +
    "&" +
    "sortBy=popularity&" +
    "apiKey=3a86c5be23994784b1f40189188428ee";
  var req = new Request(url);
  fetch(req)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      teamArticles = myJson.articles;
    });
}

let locationIndex = 2;
const playerselementarray = [
  { id: ".players1", position: "#navbox1" },
  { id: ".players2", position: "#navbox2" },
  { id: ".players3", position: "#navbox3" },
  { id: ".players4", position: "#navbox4" },
  { id: ".players5", position: "#navbox5" },
];
// const postitionOne = ["p1", "p2", "p3", "p4", "p5"];

//for each left push the central div gets push to the left
//for each right click the first item in left is pull out and put in central div
//if left side array is empty and right side is clicked the last item from rightsidearry gets put in central div and central div is push to right side
//if array is empty
let leftsidearray = [".players1", ".players2"];
let centraldiv = ".players3";
let rightsidearray = [".players4", ".players5"];
function sortimages() {
  $(rightsidearray[1]).removeClass("transition");
  $(leftsidearray[0]).removeClass("transition");
  $(leftsidearray[1]).addClass("transition");
  $(rightsidearray[0]).addClass("transition");
  $(centraldiv).removeClass("right");
  $(centraldiv).removeClass("left");
  $(rightsidearray[0]).removeClass("left");
  $(leftsidearray[0]).removeClass("right");
  $(rightsidearray[1]).removeClass("left");
  $(leftsidearray[1]).removeClass("right");
  $(leftsidearray[0]).addClass("left");
  $(leftsidearray[1]).addClass("left");
  $(rightsidearray[0]).addClass("right");
  $(rightsidearray[1]).addClass("right");
  playerselementarray.forEach((element) => {
    let navItem = element.position;
    $(navItem).removeClass("blue");
  });
  function findplayer(box) {
    return box.id === centraldiv;
  }
  const mainviewer = playerselementarray.find(findplayer);
  let navIdString = mainviewer.position;
  $(navIdString).addClass("blue");
}
sortimages();
// console.log("working");
function moveright() {
  // console.log("leftsidearray: " + leftsidearray + ", central" + centraldiv + ", Rightsidearray: " + rightsidearray);
  let centraldivcurrent = centraldiv;
  centraldiv = leftsidearray[1];
  // console.log(centraldivcurrent);
  leftsidearray.pop();
  rightsidearray.unshift(centraldivcurrent);
  leftsidearray.unshift(rightsidearray[2]);
  // rightsidearray.splice(1, 1);
  rightsidearray.pop();
  // console.log("leftsidearray: " + leftsidearray + ", central" + centraldiv + ", Rightsidearray: " + rightsidearray);
  sortimages();

  //left side
  //last one from left side gets centralized moved to the central space
  //first one get transition added
  //central
  // central div gets moved to right gets added to front of rightsidearray
  // the id is taken and adjust the bottom one
  //right
  //last in right side array gets moved to left side added to front
  //middle gets transition removed
}
function moveleft() {
  // console.log("leftsidearray: " + leftsidearray + ", central" + centraldiv + ", Rightsidearray: " + rightsidearray);
  let centraldivcurrent = centraldiv;
  centraldiv = rightsidearray[0];
  // console.log(centraldivcurrent);
  rightsidearray.shift();
  leftsidearray.push(centraldivcurrent);
  rightsidearray.push(leftsidearray[0]);
  // rightsidearray.splice(1, 1);
  leftsidearray.shift();
  // console.log("leftsidearray: " + leftsidearray + ", central" + centraldiv + ", Rightsidearray: " + rightsidearray);
  sortimages();
}
function centerdivlocation() {
  // if(window.height())
  if (locationIndex === 2) {
  }
  if (locationIndex === 1) {
    moveUpButton();
    moveleft();
  }
  if (locationIndex === 0) {
    moveUpButton();
    moveleft();
    moveUpButton();
    moveleft();
  }
  if (locationIndex === 3) {
    moveDownButton();
    moveright();
  }
  if (locationIndex === 4) {
    moveDownButton();
    moveright();
    moveDownButton();
    moveright();
  }
}

$("#leftbutton").click(function (event) {
  // console.log("leftbuttonclicked");
  moveright();
  moveDivsConditional("down", "mediumScreen");
});
$("#rightbutton").click(function (event) {
  // console.log("rightbuttonclicked");
  moveleft();
  moveDivsConditional("up", "mediumScreen");
});
$(".buttonright2").click(function () {
  moveleft();
  moveDivsConditional("up", "mediumScreen");
});
$(".buttonleft2").click(function () {
  moveright();
  moveDivsConditional("down", "mediumScreen");
});
$(".shadowright").click(function () {
  moveleft();
  moveDivsConditional("up", "mediumScreen");
});
$(".shadowleft").click(function () {
  moveright();
  moveDivsConditional("down", "mediumScreen");
});
// console.log("working");
let wait;
$("#box3").addClass("addclickevent");

$("#mainviewer1").addClass("top");
$("#mainviewer2").addClass("top");
$("#mainviewer3").addClass("center");
$("#mainviewer4").addClass("bottom");
$("#mainviewer5").addClass("bottom");
const mainViewerIdArray = [
  "#mainviewer1",
  "#mainviewer2",
  "#mainviewer3",
  "#mainviewer4",
  "#mainviewer5",
];

const elementarray = [
  { id: "#box1", position: "p1" },
  { id: "#box2", position: "p2" },
  { id: "#box3", position: "p3" },
  { id: "#box4", position: "p4" },
  { id: "#box5", position: "p5" },
];
const postitionOne = ["p1", "p2", "p3", "p4", "p5"];
$(".boxdiv").click(function (event) {
  let clicked = event.target;
  let clickedid = clicked.id;
  // console.log(clicked);
  $("#showDiv").html(clickedid);
});
function showdivs(locator) {
  if (locator === "middle") {
    function findP1(box) {
      return box.position === "p1";
    }
    function findP2(box) {
      return box.position === "p2";
    }
    function findP3(box) {
      return box.position === "p3";
    }
    function findP4(box) {
      return box.position === "p4";
    }
    function findP5(box) {
      return box.position === "p5";
    }
    const chosenBoxelement1 = elementarray.find(findP3);
    let chosenBoxId1 = chosenBoxelement1.id;
    $(chosenBoxId1).css("display", "block");
    const chosenBoxelement2 = elementarray.find(findP2);
    let chosenBoxId2 = chosenBoxelement2.id;
    $(chosenBoxId2).css("display", "block");
    const chosenBoxelement3 = elementarray.find(findP4);
    let chosenBoxId3 = chosenBoxelement3.id;
    $(chosenBoxId3).css("display", "block");
    const chosenBoxelement4 = elementarray.find(findP1);
    let chosenBoxId4 = chosenBoxelement4.id;
    $(chosenBoxId4).css("display", "none");
    const chosenBoxelement5 = elementarray.find(findP5);
    let chosenBoxId5 = chosenBoxelement5.id;
    $(chosenBoxId5).css("display", "none");
  }
}
showdivs("middle");
function moveMainViewer(location, direction) {
  let mainViewerID = mainViewerIdArray[location];
  if (direction === "down") {
    if (location === 4) {
    } else {
      // console.log("upbottonclicked");
      let moveUp = location + 1;
      // console.log(moveUp);
      let newMainViewerID = mainViewerIdArray[moveUp];
      // console.log(newMainViewerID);
      $(".fullscreendiv").css("z-index", "-10");
      $(mainViewerID).removeClass("center");
      $(mainViewerID).addClass("top");
      $(newMainViewerID).removeClass("bottom");
      $(newMainViewerID).addClass("center");
      setTimeout(function () {
        $(".fullscreendiv").css("z-index", "0");
      }, 1000);
      locationIndex++;
    }
  }
  if (direction === "up") {
    if (location === 0) {
    } else {
      // console.log("downbottonclicked");
      let moveDown = location - 1;
      let newMainViewerID = mainViewerIdArray[moveDown];
      $(".fullscreendiv").css("z-index", "-10");
      $(mainViewerID).removeClass("center");
      $(mainViewerID).addClass("bottom");
      $(newMainViewerID).removeClass("top");
      $(newMainViewerID).addClass("center");
      setTimeout(function () {
        $(".fullscreendiv").css("z-index", "0");
      }, 1000);
      locationIndex--;
    }
  }
}

$("#arrowbuttondiv2").click(function () {
  if (locationIndex === 4) {
  } else {
    moveUpButton();
    // console.log("your location right now:" + locationIndex);
    moveleft();
  }
});
$("#arrowbuttondiv").click(function () {
  if (locationIndex === 0) {
  } else {
    moveDownButton();
    // console.log("your location right now:" + locationIndex);
    moveright();
  }
});

function moveDivsConditional(direction, screesize) {
  // console.log(screesize);
  if (screesize === "mediumScreen") {
    // console.log("your inside mediumscreen");
    if (direction === "up") {
      // console.log("location: " + locationIndex + " direction: " + direction);
      if (locationIndex === 4) {
        // console.log("you just ran the loop");
        for (let index = 0; index < 4; index++) {
          moveDownButton();
        }
        // console.log("your location after loop:" + locationIndex);
      } else {
        moveUpButton();
      }
    }
    if (direction === "down") {
      // console.log("location: " + locationIndex + " direction: " + direction);
      if (locationIndex === 0) {
        // console.log("you just ran the loop");
        for (let index = 0; index < 4; index++) {
          moveUpButton();
        }
        // console.log("your location after loop:" + locationIndex);
      } else {
        moveDownButton();
      }
    }
  }
}

function moveUpButton() {
  let divheight = $(".inner").height();
  let leftoverspace = divheight - 351;
  let divspaceing = leftoverspace / 4;
  let transitionheight = divspaceing + 117;
  let transitionstring = transitionheight.toString();
  let transitionpx = transitionstring + "px";
  // console.log("in");
  clearTimeout(wait);
  moveMainViewer(locationIndex, "down");
  $("#box3").removeClass("addclickevent");
  if (postitionOne[0] === "p4") {
    function findp3(box) {
      return box.position === "p3";
    }
    function findP2(box) {
      return box.position === "p4";
    }
    const chosenBoxelement = elementarray.find(findp3);
    const chosenBoxelement2 = elementarray.find(findP2);

    let chosenBoxId = chosenBoxelement.id;
    let chosenBoxId2 = chosenBoxelement2.id;

    $(chosenBoxId2).removeClass("addclickevent");
    function myFunction() {
      wait = setTimeout(function () {
        $(chosenBoxId).addClass("addclickevent");
      }, 500);
    }
    myFunction();
  } else {
    elementarray.forEach((element, index) => {
      let newpostion = index - 1;
      if (newpostion === -1) {
        newpostion = 4;
      }

      element.position = postitionOne[newpostion];
      postitionOne.push(element.position);
      var indexToRemove = 0;

      $(element.id).animate({ top: "-=" + transitionpx }, "normal");
    });
    postitionOne.splice(0, 5);
    function findP4(box) {
      return box.position === "p4";
    }
    function findp3(box) {
      return box.position === "p3";
    }
    function findP2(box) {
      return box.position === "p2";
    }

    const chosenBoxelement = elementarray.find(findp3);
    const chosenBoxelement2 = elementarray.find(findP2);
    const chosenBoxelement4 = elementarray.find(findP4);

    let chosenBoxId = chosenBoxelement.id;
    let chosenBoxId2 = chosenBoxelement2.id;
    let chosenBoxId4 = chosenBoxelement4.id;
    showdivs("middle");
    if (chosenBoxId === "#box5") {
      $(chosenBoxId4).css("display", "none");
    }

    $(chosenBoxId2).removeClass("addclickevent");

    function myFunction() {
      wait = setTimeout(function () {
        $(chosenBoxId).addClass("addclickevent");
      }, 500);
    }
    myFunction();
  }
}
function moveDownButton() {
  let divheight = $(".inner").height();
  let leftoverspace = divheight - 351;
  let divspaceing = leftoverspace / 4;
  let transitionheight = divspaceing + 117;
  let transitionstring = transitionheight.toString();
  let transitionpx = transitionstring + "px";
  // console.log("in");
  clearTimeout(wait);
  moveMainViewer(locationIndex, "up");
  $("#box3").removeClass("addclickevent");
  // console.log("in");
  if (postitionOne[0] === "p3") {
    function findp3(box) {
      return box.position === "p3";
    }
    function findP2(box) {
      return box.position === "p4";
    }
    const chosenBoxelement = elementarray.find(findp3);
    const chosenBoxelement2 = elementarray.find(findP2);

    let chosenBoxId = chosenBoxelement.id;
    let chosenBoxId2 = chosenBoxelement2.id;

    $(chosenBoxId2).removeClass("addclickevent");
    function myFunction() {
      wait = setTimeout(function () {
        $(chosenBoxId).addClass("addclickevent");
      }, 500);
    }
    myFunction();
  } else {
    elementarray.forEach((element, index) => {
      let newpostion = index + 1;
      if (newpostion === 5) {
        newpostion = 0;
      }

      element.position = postitionOne[newpostion];
      postitionOne.push(element.position);
      var indexToRemove = 0;

      $(element.id).animate({ top: "+=" + transitionpx }, "normal");
    });
    postitionOne.splice(0, 5);

    function findP2(box) {
      return box.position === "p2";
    }
    function findp3(box) {
      return box.position === "p3";
    }
    function findP4(box) {
      return box.position === "p4";
    }

    const chosenBoxelement = elementarray.find(findp3);
    const chosenBoxelement4 = elementarray.find(findP4);

    let chosenBoxId = chosenBoxelement.id;
    let chosenBoxId4 = chosenBoxelement4.id;

    $(chosenBoxId4).removeClass("addclickevent");
    showdivs("middle");
    if (chosenBoxId === "#box1") {
      const chosenBoxelement2 = elementarray.find(findP2);
      let chosenBoxId2 = chosenBoxelement2.id;
      $(chosenBoxId2).css("display", "none");
    }
    function myFunction() {
      wait = setTimeout(function () {
        $(chosenBoxId).addClass("addclickevent");
      }, 500);
    }
    myFunction();
  }
}
$(document).ready(function () {
  appPlaceHolder = $(".appPlaceHolder").html();
  appPlaceHolder2 = $(".appPlaceHolder2").html();
  appPlaceHolder3 = $(".appPlaceHolder3").html();
  appPlaceHolder4 = $(".appPlaceHolder4").html();
  $("#players2").append(appPlaceHolder);
  $("#players3").append(appPlaceHolder2);
  $("#players4").append(appPlaceHolder3);
  $("#players5").append(appPlaceHolder4);
  $("#mainviewer2").append(appPlaceHolder);
  $("#mainviewer3").append(appPlaceHolder2);
  $("#mainviewer4").append(appPlaceHolder3);
  $("#mainviewer5").append(appPlaceHolder4);

  mainviewer2;
  console.log("ready!");
  var url = window.location.pathname;
  id = url.substring(url.lastIndexOf("/") + 1);
  console.log(id);

  getlargescreenAPPPLayers();
  $(".largeScreenAppViewer").css("display", "block");

  $("youtubevideos").on("click", function () {
    getHighlightvideos();
  });

  $.ajax("/api/home/" + id, {
    type: "GET",
  }).then(function (data) {
    outsideData = data;
    logourl = data.color.url;
    color124 = data.color.colors1[1];
    color123 = data.color.colors1[2];
    color125 = data.color.colors1[3];
    let color1 = data.color.colors1[0];
    let color2 = data.color.colors1[1];
    let color3 = data.color.colors1[2];
    let color4 = data.color.colors1[3];
    let color5 = data.color.colors1[4];
    let teamname = data.db.FavTeam;
    myFunction(x);
    playerinformation(id, windowSize);
    getimageandsize(data, windowSize);
    getteamarticles(data);
    console.log(data.color.colors1[2]);

    let blueborder2string =
      data.color.colors1[3] + " transparent transparent transparent";

    $("body").css("background-image", "url(" + logourl + ")");

    $(".redback").css("background-color", data.color.colors1[1]);
    $(".redborder").css("border-color", data.color.colors1[1]);
    $("#theImg").css("border-color", color123);
    $(".blueborder").css("border-color", data.color.colors1[3]);
    $(".blueborder3").css(
      "border-color",
      "transparent transparent " + data.color.colors1[3] + " transparent"
    );
    $("#arrowbuttondiv").css(
      "border-color",
      "transparent transparent " + data.color.colors1[3] + " transparent"
    );
    $(".buttonright").css(
      "background",
      "radial-gradient(circle at 55px 10px," + color125 + ", rgb(63, 63, 63))"
    );
    $(".buttonleft").css(
      "background",
      "radial-gradient(circle at 15px 10px," + color125 + ", rgb(63, 63, 63)"
    );
    $("#arrowbuttondiv2").css("border-color", blueborder2string);
    $("#leftbutton").css(
      "border-color",
      "transparent " + color125 + " transparent transparent"
    );
    $("#rightbutton").css(
      "border-color",
      "transparent transparent transparent " + color125
    );
    $(".blueborder2").css("border-color", blueborder2string);
    $(".blueborder1").css(
      "border-color",
      "transparent " + data.color.colors1[3] + " transparent transparent"
    );
    $(".blueback").css("background-color", data.color.colors1[3]);

    $(".shadowright")
      .mouseup(function () {
        $(".innerarrowrightTri").css("border-color", "white");
        $(".shadowright1").css("display", "none");
        $(".shadowright2").css("display", "none");
        $(".shadowright3").css("display", "none");
      })
      .mousedown(function () {
        $(".innerarrowrightTri").css("border-color", "grey");
        $(".shadowright1").css("display", "block");
        $(".shadowright2").css("display", "block");
        $(".shadowright3").css("display", "block");
      });
    $(".shadowleft")
      .mouseup(function () {
        $(".innerarrowleftTri").css("border-color", "white");
        $(".shadowleft1").css("display", "none");
        $(".shadowleft2").css("display", "none");
        $(".shadowleft3").css("display", "none");
      })
      .mousedown(function () {
        $(".innerarrowleftTri").css("border-color", "grey");
        $(".shadowleft1").css("display", "block");
        $(".shadowleft2").css("display", "block");
        $(".shadowleft3").css("display", "block");
      });
    $(".shadowbottom")
      .mouseup(function () {
        $(".shadowbottom1").css("display", "none");
        $(".shadowbottom2").css("display", "none");
        $(".shadowbottom3").css("display", "none");
        $(".innerarrowdownTri").css("border-color", "white");
      })
      .mousedown(function () {
        $(".innerarrowdownTri").css("border-color", "grey");
        $(".shadowbottom1").css("display", "block");
        $(".shadowbottom2").css("display", "block");
        $(".shadowbottom3").css("display", "block");
      });

    $(".header").css("background-color", color2);
    $(".header").css("color", color4);
    $(".smallimage").attr("src", logourl);
    $(".header").css("background-color", color2);
    $(".smallcolor1").css("background-color", color1);
    $(".appPlaceHolderinside").css("border-color", color4);
    $(".smallcolor2").css("background-color", color2);
    $(".smallcolor3").css("background-color", color3);
    $(".smallcolor4").css("background-color", color4);
    $(".smallcolor5").css("background-color", color5);
    $(".leftBoxArrow").css("background-color", color3);
    $(".leftBoxArrow").css("border-right-color", color2);
    $(".rightBoxArrow").css("background-color", color3);
    $(".rightBoxArrow").css("border-left-color", color2);
    $(".downmenu").css("background-color", color3);
    $(".downmenu").css("border-top-color", color2);
    $(".downmenu").css("border-bottom-color", color3);
    $(".smallimage").css("border-color", color3);
    $(".outsideimagemargin").css("background-color", color2);
    $(".backgroundifuser").css(
      "background",
      "linear-gradient(180deg, rgba(255, 255, 255, .6) 0%, " + color2 + " 100%)"
    );
    $(".shadowleft2").css(
      "border-color",
      "transparent " + color3 + " transparent transparent"
    );
    $(".blueoverlay1R").css(
      "border-color",
      "transparent transparent " + color2 + " transparent"
    );
    $(".blueoverlay1L").css(
      "border-color",
      "transparent transparent transparent " + color2
    );
    $(".blueoverlay2L").css("background-color", color2);
    $(".blueoverlay2R").css("background-color", color2);
    $(".brownoverlay1R").css(
      "border-color",
      "transparent transparent transparent " + color3
    );
    $(".brownoverlay1L").css(
      "border-color",
      "transparent " + color3 + " transparent transparent"
    );
    $(".blueoverlay3L").css("border-bottom-color", color2);
    $(".blueoverlay3R").css("border-bottom-color", color2);
    $(".blueoverlay4R").css(
      "border-color",
      "transparent transparent " + color2 + " transparent"
    );
    $(".blueoverlay4L").css(
      "border-color",
      "transparent transparent transparent " + color2
    );
    $(".redoverlay1R").css(
      "border-color",
      "transparent transparent " + color4 + " transparent"
    );
    $(".redoverlay1L").css(
      "border-color",
      "transparent transparent transparent " + color4
    );
    $(".redoverlay2L").css("border-bottom-color", color4);
    $(".redoverlay2R").css("border-bottom-color", color4);
    $(".redoverlay3R").css(
      "border-color",
      "transparent transparent " + color4 + " transparent"
    );
    $(".redoverlay3L").css(
      "border-color",
      "transparent transparent transparent " + color4
    );
    getclicks();
    // console.log(data.db.gamestats)
    // if (data.db.gamestats === false){
    //   $("#gamestats").empty()}
    // if (data.db.FavPlayer === null){
    //   $("player").empty();
    // }
    // $("#welcomeid").html("Welcome: "+ data.db.UserID)
    // $("#favteam").html("Your favorite Team is: " + data.db.FavTeam);
    // $("#favplayer").html("Your favorite Player is: " + data.db.FavPlayer);
    adjustleftsidevisualizer();

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
