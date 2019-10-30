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

## Features
**Interest-Tracking**
When users click on specific items the targeted item will be saved to the localStorage. All activity will be saved and is displayed in the console (table format). This console-table will show the item's: title, cho (URL to items detail page) & number of times clicked/viewed. This feature is meant to give the client (NMVW) an indication of what items people think are interesting. 

**Image Error Fallback**
Looking at a image that wouldn't load; I noticed the URL for almost every image is the same except for images that wouldn't load. Images that wouldn't load have "-Extra" added to their URLs. When you remove the "-Extra" from the URL you get an 'image not available' image. Since I'd rather display an "image not available" than a blank image I've added a function in my fetch call that evaluates the image.src. If the src contains "-Extra" it'll remove it from the src, and thus serves a fallback image.

## Data
**API**

This application uses the **NMVW database**, used data: 
* Category
* Images
* Titles
* Time 
* Origin

The data isn't reformatted and will be used in the same context as it's used now at the [NMVW-collectie](https://collectie.wereldculturen.nl/#/query/b825de9d-3dd8-4f45-9f7e-df6b2634fac3).


The data is accessed with **fetch()** calls at the following endpoint:
```
https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-23/sparql
```
 
**SPARQL** 

SPARQL is used to query, I use the following SPARQL query:
```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?cho ?img ?title ?cat ?time ?origin ?placeAltLabel ?placeAltLabel2 ?placeAltLabel4 
?placeAltLabel6 ?placeAltLabel8 ?placeAltLabel10 WHERE {
  #Category
  	<https://hdl.handle.net/20.500.11840/termmaster2815> skos:* ?catURI .
  	?cho edm:isRelatedTo ?catURI .
   ?catURI skos:prefLabel ?cat .
  #Image
    ?cho edm:isShownBy ?img .
  #Title
    ?cho dc:title ?title .
  #Time
    ?cho dct:created ?time .

  #Origin
    ?cho dct:spatial ?place . #Place  
    ?place skos:prefLabel ?placeSpecific . 

    ?place skos:broader ?placeAlt . 
    ?placeAlt skos:prefLabel ?placeAltLabel .

    ?placeAlt skos:broader ?placeAltLabel1 .
    ?placeAltLabel1 skos:prefLabel ?placeAltLabel2 .

    ?placeAltLabel1 skos:broader ?placeAltLabel3 .
    ?placeAltLabel3 skos:prefLabel ?placeAltLabel4 .

    ?placeAltLabel3 skos:broader ?placeAltLabel5 .
    ?placeAltLabel5 skos:prefLabel ?placeAltLabel6 .

    ?placeAltLabel5 skos:broader ?placeAltLabel7 .
    ?placeAltLabel7 skos:prefLabel ?placeAltLabel8 .

    ?placeAltLabel7 skos:broader ?placeAltLabel9 .
    ?placeAltLabel9 skos:prefLabel ?placeAltLabel10 .

  BIND(concat(?placeSpecific," > ",?placeAltLabel," > ",?placeAltLabel2," > ",?placeAltLabel4," 
  > ",?placeAltLabel6," > ",?placeAltLabel8," > ",?placeAltLabel10) AS?origin)
  FILTER langMatches(lang(?title), "eng")
} LIMIT 15
```

This SPARQL query returns items with: URI, img, tite, time, category, origin (all locations)

## Credits
**API call**

To create my fetch call I've used **Laurens**' example:
```
https://codepen.io/Razpudding/pen/LKMbwZ
```

Then I rewrote it using the **Axios** library. My final call still uses the URL & Query variables of **Laurens**' example.

**SPARQL Query**

Kim Gerrard showed me how to create **optional** variables in SPARQL.
```
OPTIONAL { ?cho dct:spatial ?place } .
```
instead of:
```
?cho dct:spatial ?place .
```

**Concept**

My Vue group helped me with my concept through feedback and brainstoming.
