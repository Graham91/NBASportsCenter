# NBASportsCenter Desktop(mobile friendly) Dashboard NBA Fan Experience

## Table of Contents

* Application Use
* Technology Used
* Details of the Applicaiton and Challenges
* List of future developments/features
* Link to the Live Project on Heroku
* Screenshots

## Application Use


## Technology Used

* [Node js](https://nodejs.org/en/)
* [Express js](https://expressjs.com/)


## Details of the Application and Challenges


#### Challenges


## List of future developments/features



### Link to the Live Project on Heroku: https://not-reddit-seenit.herokuapp.com/
# NewEGCBSportsCenter
This was a project I started working on with a few fellow boot camp class mates. We worked on it for about 2 weeks and presented to the class. At this point in time I had been tasked with setting up most of the backend and all the routes. Others in the group worked on user interface and one of the Api's that are currently being used. After presenting I was excited to continue working on this particular project. Since then I have completely redone the user interface. bascially everything you see on this site was designed and coded by me at this point. With the exception of the create user page HTML. I have spent well over a hundred maybe two hundred hours of my personal time working and reworking this site. 
The original intention was to create a sports-center onestop dashboard for following you favorite NBA team. Users enter their favorite team and favorite player which are saved to a mysequal data base using sequalize. The user is then directed to the login in page where they can login user there new name and password. The strengths of the site are its versatility. NBA logos are not all the same size nor are they the same color. In order for the design to be pleasing visually to the user, color matching software was utalized as well as an image measuring system I designed that adjust the size and placement of the websites elements to work with different size ratios for team logos.  The site is also highly mobile responsive. One thing I love to consider is the large computer screen. I envisioned this being used by someone at work open in a extra tab, often the largre screens we utalize in the office destroy the experience of a website, because it was not design for the giant screens that are so common place now days. The site works on mobile devices as well, though it is simplified for better user experience. To view these different versions of the site you can switch users by adjusting the number at the end of the address. This was done for convience and is something I would like to fix in latter version of the site. 
The site utalizes several api's to gather its information. When we first began our api search I wanted and api that would give me all the players on a given team as well as their stats. This does not exist at least not for free. We learned cheerio in the weeks following and I realized I could make one. So when the site load I scrap NBA.com for all the players names, numbers, mugshot, heights, weights and a player ID number that is used by there site. These are then displayed to the user in a table. If you click a players name the id number is used to access current stats information for each player. This scraping system can give you current stats and images for every player from every team in the NBA. It is important to me that this site only be used for academic purposes for this reason. 
The site also uses a new site pulling up recent new about your favorite team as well as player. 
the last functionality is really two apis stuck together. A member of my group put together an api using "" which would give you a list of all the most recent games with their scores and locations. I took these results and queried them against the youtube api so it goes and gets the most recent highlight videos so you can watch those within the app.  
