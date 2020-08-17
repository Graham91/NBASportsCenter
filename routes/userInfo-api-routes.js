var db = require("../models");
let handlebars = require("express-handlebars");
var express = require("express");
// var teamcolor = require('../NBATEAM/color1.js');
const teamlocations = require("../NBATEAM/findpng.js");
const path = require("path");
const getColors = require("get-image-colors");
var cheerio = require("cheerio");
var axios = require("axios");
let colorarray15 = [];

// let teamstring = require('./string.js');

//POST route for saving new user info
module.exports = function (app) {
  app.post("/api/userInfo", function (req, res) {
    console.log(req);
    db.UserInfo.create({
      UserID: req.body.UserID,
      Email: req.body.Email,
      UserPassword: req.body.UserPassword,
      FavTeam: req.body.FavTeam,
      gamestats: req.body.gamestats,
      FavPlayer: req.body.FavPlayer,
    }).then(function (dbuserInfo) {
      res.json(dbuserInfo);
    });
  });
  app.get("/api/login", function (req, res) {
    console.log(req.query.UserID);
    db.UserInfo.findOne({
      where: {
        UserID: req.query.UserID,
        UserPassword: req.query.UserPassword,
      },
    }).then(function (dbuserInfo) {
      // console.log(dbuserInfo);
      if (dbuserInfo == null) {
      } else {
        res.json(dbuserInfo.id);
        //  res.redirect("/sportscenter/"+ dbuserInfo.id);
        // res.render("index");
      }
    });
  });
  //   app.get("/api/getid/:id?", function(req, res){
  //     console.log(req.params)
  //     db.UserInfo.findOne({
  //       where: {
  //         id: req.query.id
  //       },
  //   }).then(function(dbuserinfo){
  //   res.json(dbuserinfo.id);
  //   });
  // });
  app.get("/api/home/:id?", function (req, res) {
    db.UserInfo.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (data) {
      let teamstring = data.FavTeam;
      let teamstring1 = teamlocations[teamstring];

      let getteaminfo = teamstring1[3];

      let currentteam = "../NBATEAM/NBAlogos/" + teamstring1[0] + ".png";
      // console.log(currentteam);
      let currentteamonlineurl = teamstring1[1];
      let currentteamConfernece = teamstring1[4];
      // console.log("2nd: " + colorarray15);

      getColors(path.join(__dirname, currentteam)).then((colors) => {
        colorarray = colors.map((color) => color.hex());
        // console.log(colorarray);
        colorarray15 = [];
        colorarray.forEach((element) => {
          colorarray15.push(element);
        });
        let teamobj = {
          colors1: colorarray15,
          url: currentteamonlineurl,
        };

        // console.log(infoobject);
        console.log("3rd: " + colorarray15);
        axios
          .get("https://data.nba.net/prod/v1/current/standings_all.json")
          .then(function (response1) {
            teamstatsinfo = response1.data.league.standard.teams.find(
              (x) => x.teamId === getteaminfo
            );
            console.log("these are the teamstats" + teamstatsinfo);
            let infoobject = {
              db: data,
              color: teamobj,
              teamstats: teamstatsinfo,
              Conference: currentteamConfernece,
            };
            // res.sendFile(teamcolor.url);
            // res.sendFile(teamcolor.url);
            res.send(infoobject);
          });
      });
    });
  });

  app.get("/api/getplayers/:id?", function (req, res) {
    db.UserInfo.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (data) {
      // console.log(data);
      let teamstring = data.FavTeam;
      let teamstring1 = teamlocations[teamstring];

      var results = [];

      let getplayers = teamstring1[2];
      let teamstatsinfo;
      axios.get(getplayers).then(function (response) {
        var $ = cheerio.load(response.data);
        // var teamstats = $("team_info_stats").find("team_info_stats_container");
        // console.log(teamstats);

        $("section.nba-player-index__trending-item").each(function (
          i,
          element
        ) {
          var name = $(element).find("a").attr("title");

          var position = $(element)
            .find("div.nba-player-index__details")
            .children()
            .first()
            .text();
          var height = $(element)
            .find("div.nba-player-index__details")
            .find("span:nth-child(2)")
            .text();
          var heightandweight = height.split("|");
          let number = $(element)
            .find("span.nba-player-trending-item__number")
            .text();

          let picture = $(element)
            .find("a")
            .find("div.nba-player-index__image")
            .find("div.nba-player-index__headshot_wrapper  ")
            .find("img")
            .attr("data-src");

          let url = $(element).find("a").attr("href");
          let url1 = "https://www.nba.com" + url;

          results.push({
            player: {
              name,
              position,
              height: heightandweight[0],
              weight: heightandweight[1],
              number: number,
              image: picture,
              url: url1,
            },
          });
        });
        res.send(results);
      });
    });
  });

  app.get("/api/individual/:id?", function (req, res) {
    let playerstatsurl = req.params.id;
    console.log(playerstatsurl);

    let playerstatjson =
      "https://data.nba.net/prod/v1/2019/players/" +
      playerstatsurl +
      "_profile.json";
    let playerstats;
    axios.get(playerstatjson).then(function (response) {
      playerstats = response.data.league.standard.stats;
      let allplayerinfo = {
        statistics: playerstats,
      };
      res.send(allplayerinfo);
    });
  });
};
// function getColorsnow(currentteam){
//   getColors(path.join(__dirname, currentteam)).then(colors => {

//   colorarray = colors.map(color => color.hex());
//    // console.log(colorarray);
//    colorarray15 =[];
//  colorarray.forEach(element => {
//      colorarray15.push(element);
//  });
//  console.log("infunction: "+colorarray15);

// });

// }
