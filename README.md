# NBASportsCenter Desktop(mobile friendly) Dashboard NBA Fan Experience

## Table of Contents

* Application Use
* Technology Used
* Details of the Applicaiton and Challenges
* List of future developments/features
* Link to the Live Project on Heroku
* Screenshots

## Application Use
The intention here was to create a sports-center onestop dashboard for following you favorite NBA team. Users enter their favorite team and favorite player which are saved to a mySQL data base using sequalize. The user is then directed to the login in page where they can login user there new name and password. The strength of the site is it's versatility. I envisioned this being used by someone at work open in a extra tab, often the largre screens we utalize in the office destroy the design experience of a website, because it was not design for the giant screens that are so common place now days. The site works on mobile devices as well, though it is simplified for better user experience.

## Technology Used

* [Node js](https://nodejs.org/en/)
* [Express js](https://expressjs.com/)
* [mySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [jpeg-js](https://www.npmjs.com/package/jpeg-js)


## Details of the Application and Challenges
 NBA logos are not all the same size nor are they the same color. In order for the design to be pleasing visually to the user, color matching software was utalized as well as an image measuring system I designed that adjusts the size and placement of the websites elements to work with different size ratios for team logos.  The site is also highly mobile responsive. 
 <br>
 The site utalizes several api's to gather its information. When I first began the my API search I wanted an API that would give me all the players on a given team as well as their stats. This does not exist at least not for free. So I built one using Cherrio. When the site loads I scrap NBA.com for all the players names, numbers, mugshot, heights, weights and a player ID number that is used by there site. These are then displayed to the user in a table. If you click a players name the id number is used to access current stats information for each player. This scraping system can give you current stats and images for every player from every team in the NBA. It is important to me that this site only be used for academic purposes for this reason. 
 I am also Ultalizing A free balldontlie API. This particular API will get you the most recent played games from a specified team and their scores. this is good information but it is also sort of simple and lack luster, which is why I combined this Information with the Youtube API. When you open the site(not up quite yet) the balldontlie API is called and the recent games are then put through the youtube API which pulls up those particular highlight videos.   

## List of future developments/features
There will be a home page with user name displayed(thinking it will look similar to the players stat app)
Currently testing out different free news API's so you can read up on your faovrite team and Player. Bothe of these will get there own application box.



### Link to the Live Project on Heroku: https://not-reddit-seenit.herokuapp.com/

 
