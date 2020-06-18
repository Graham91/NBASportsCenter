$(document).ready(function () {
  //possible solution:
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
  console.log("working");
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
    console.log("leftbuttonclicked");
    moveright();
  });
  $("#rightbutton").click(function (event) {
    console.log("rightbuttonclicked");
    moveleft();
  });
});
