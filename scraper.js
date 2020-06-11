var cheerio = require("cheerio");

var axios = require("axios");



axios
  .get("https://data.nba.net/prod/v1/2019/players/204038_profile.json")
  .then(function (response) {
    console.log(response.data.league);
    // var $ = cheerio.load(response.data);
    // $("div.table-highlighter abbr").each(function (i, element) {
    // let brain1 = [];
    // console.log(
    //   $(
        // "span.blockInner > span:nth-child(2) > span.blockInner > span > span.blockInner > span:nth-child(2) > span.blockInner > span:nth-child(1) > span.blockInner > span:nth-child(1) > span.n"
    //   ).text()
      //   $("span.blockinner").find("span.kvov").find("span.k").text()
      //   //   $("player-detail")
      //     .find("player-snapshot-career")[0]
      //     .find("section.")[0]
      //     .find("td")
      //     .data()
  });

    // .find("table");

    //   .find("section.nba-player-season-career-stats")
    //   .attr("class")
    //   .find("table")
    //   .find("thead")
    //   .find("tr > td:nth-child(5)")
    //   .text()
  });

//   $("section.nba-player-index__trending-item").each(function (i, element) {
//     var name = $(element).find("a").attr("title");

//     var position = $(element)
//       .find("div.nba-player-index__details")
//       .children()
//       .first()
//       .text();
//     var height = $(element)
//       .find("div.nba-player-index__details")
//       .find("span:nth-child(2)")
//       .text();
//     var heightandweight = height.split("|");

//     let number = $(element)
//       .find("span.nba-player-trending-item__number")
//       .text();

//     let picture = $(element)
//       .find("a")
//       .find("div.nba-player-index__image")
//       .find("div.nba-player-index__headshot_wrapper  ")
//       .find("img")
//       .attr("data-src");

//     let url = $(element).find("a").attr("href");

//     results.push({
//       player: {
//         name,
//         position,
//         height: heightandweight[0],
//         weight: heightandweight[1],
//         number: number,
//         image: picture,
//         url: url,
//       },
//     });
//   });

//   console.log(results);
// });
