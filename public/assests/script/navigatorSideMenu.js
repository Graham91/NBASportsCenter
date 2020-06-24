$(document).ready(function () {
  let locationIndex = 2;
  const playerselementarray = [
    { id: "#players1", position: "#navbox1" },
    { id: "#players2", position: "#navbox2" },
    { id: "#players3", position: "#navbox3" },
    { id: "#players4", position: "#navbox4" },
    { id: "#players5", position: "#navbox5" },
  ];
  // const postitionOne = ["p1", "p2", "p3", "p4", "p5"];

  //for each left push the central div gets push to the left
  //for each right click the first item in left is pull out and put in central div
  //if left side array is empty and right side is clicked the last item from rightsidearry gets put in central div and central div is push to right side
  //if array is empty
  let leftsidearray = ["#players1", "#players2"];
  let centraldiv = "#players3";
  let rightsidearray = ["#players4", "#players5"];
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

        $(element.id).animate({ top: "-=180px" }, "normal");
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

        $(element.id).animate({ top: "+=180px" }, "normal");
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
});
