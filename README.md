# Frontend-Applications
_Wessel Smit 500780694_ 
 
## Description
In this course I created an frontend-application using **NodeJS** & **VueJS**. The goal was to create an application for the NMVW institute and it's users, it has to be beneficial for both parties. Along the way I will be learning about **NodeJS**, **npm**, **frameworks**, **API**, reading **documentations** & **Javascript** in general.
 
## Concept
<img width="100%" alt="Concept Sketch" src="https://user-images.githubusercontent.com/45405413/67605103-af910400-f77d-11e9-8098-feeab14efc89.png">

The goal of my ‘**history comparison**’ application is to offer users **unique insights** through a side-by-side timeline view within a specified category. After choosing a category, the user has to specify two of each variable:
* Place (continent, country, region, city etc.)
* Timeframe (years - years)

This will customize the SPARQL queries, the results will be bundled together in two seperate objects; one for each ‘comparison object’.

Both ‘**comparison objects**’ will be served in the same view, separated by a timeline _(vertical line in the center of the screen which will show the time in either: years, periods, decennia or millenia)_. For Each ‘comparison object’ an object list will be dynamically created, which contains some **general information**. _(Image, Title, Time, Description)_

When the user clicks an object; the (parent) comparison object wil serve a view of this particular object, which contains the **details**. _(Image, Title, Time, Description, origin [specific], culture, size, materials etc.)_

For the **user** this application could be a good **comparison tool** between multiple cultures in different times/regions of the world. _(Eg. The Mayans and Old Egypt while many years and miles apart had very similar cultures! With this application users can compare weapons, household-items, clothes etc. from both empires.)_

For the **client (NMVW)** this application can be used as an **interest-indicator** of specific items; all **clicks & views will be tracked**. This information will be accessible for the client in a dashboard. This can give the client useful insights of which items people think are interesting, and might lead to ideas for new exhibitions! The data is especially valuable for the client because it requires the user to specify what content they want to see/compare before it shows any items; by removing good-default/standard items you won’t have to deal with the ‘good defaults false information’ problem where users only view the information found on the first page and thus removes a bias from the data.

## Installation
**Clone the github repository**
```
git clone https://github.com/WesselSmit/frontend-applications.git
```

Navigate to the repository in the terminal (using the 'cd' and 'ls' commands)

**Create a package.json**
```
npm install
```

**Install Vue-cli**
```
npm install -g @vue/cli

```


**Install Axios**
```
npm install axios
```


## Usage
Navigate to the repository in the terminal (using the 'cd' and 'ls' commands)


**Start the server in the terminal**
```
npm run serve
```


**You can now find the application with the following URL**
```
localhost:8080
```

## Data
**API**

This application uses the **NMVW database**, which is accessed with **fetch()** calls at the following endpoint:
```
https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-23/sparql
```
 
**SPARQL** 

SPARQL is used to query, I use the following SPARQL query:
```
```

## Credits
**API call**

To create my fetch call I've used **Laurens**' example:
```
https://codepen.io/Razpudding/pen/LKMbwZ
```

Then I rewrote it using the **Axios** library. My final call still uses the URL & Query variables of **Laurens**' example.


