# Weather Informations

This application can help you find some informations about the current weather in your city !

- Consuming mapbox API to get latitude and longitude from the name of a city that we are to passing to the weatherstack API
- Consuming weatherstack API to retrieve data about the weather : from coordinates (latitude and longitude), we can have some nice informations about the weather on a particular city
- Using yargs node package to get the city of the user via the commande line


# Instructions to run the app

- Clone the github project
- run `npm i` to install the dependencies
- type `node app.js [your_city]` to get a directly response into your command line about the forecast in your city. 

If you don't provide the flag [your_city], the app is going to to send you back an error.

Enjoy !
