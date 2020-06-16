$(document).ready(function () {
  console.log("working");
  let wait;
  $("#box3").addClass("addclickevent");

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
    console.log(clicked);
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

  $("#arrowbuttondiv2").click(function () {
    console.log("in");
    clearTimeout(wait);
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
  });
  $("#arrowbuttondiv").click(function () {
    console.log("in");
    clearTimeout(wait);
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
  });
});
