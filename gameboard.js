

var regions = [

  ["002", "Africa", africanSubRegions],
   ["150", "Europe", europeanSubRegions],
  ["019", "Americas", americanSubRegions],
  ["142", "Asia", asianSubRegions],
  ["009", "Oceania", oceaniaSubRegions]
];

var africanSubRegions = [
  ["015", "Northern Africa", ["DZ", "EG", "EH", "LY", "MA", "SD", "SS", "TN"]],
  ["011", "Western Africa", ["BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", /*"SH",*/ "SL", "SN", "TG"]],
  ["017", "Middle Africa",["AO", "CD", "CF", /*"CG",*/ "CM", "GA", "GQ", "ST", "TD"]],
  ["014", "Eastern Africa",["BI", "DJ", "ER", "ET", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "TZ", "UG", "YT", "ZM", "ZW"]],
  ["018", "Southern Africa",["BW", "LS", "NA", "SZ", "ZA"]]
];

var europeanSubRegions = [
  ["154", "Northern Europe",["GG", "JE", "AX", "DK", "EE", "FI", "FO", "GB", "IE", "IM", "IS", "LT", "LV", "NO", "SE", "SJ"]],
  ["155", "Western Europe", [ 'AT', 'BE', 'CH', 'DE', 'FR', 'LI', 'LU', /*'MC',*/ 'NL' ]],
  ["151", "Eastern Europe", [ 'BG', 'BY', 'CZ', 'HU', 'MD', 'PL', 'RO', 'RU', 'SK', 'UA' ]],
   ["039", "Southern Europe", [ 'AD','AL','BA','ES',/*'GI',*/'GR','HR','IT','ME','MK','MT','RS','PT','SI','SM'/*,'VA','YU' ]*/]]
];

var americanSubRegions = [
  ["021", "Northern America",[/*"BM",*/ "CA", "GL", /*"PM",*/ "US", "MX"]],
  ["029", "the Caribbean",["AG", "AI", /*"AN",*/ "AW", "BB", "BL", "BS", "CU", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "TC", "TT", "VC", "VG", "VI"]],
  ["013", "Central America",["BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"]],
  ["005", "South America",["AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PE", "PY", "SR", "UY", "VE"]]
];

var asianSubRegions = [
  ["143", "Central Asia",["TM", "TJ", "KG", "KZ", "UZ"]],
  ["030", "Eastern Asia",["CN", "HK", "JP", "KP", "KR", "MN", /*"MO",*/ "TW"]],
  ["034", "Southern Asia",["AF", "BD", "BT", "IN", "IR", "LK", /*"MV",*/ "NP", "PK"]],
  ["035", "South-Eastern Asia",["BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"]],
  ["145", "Western Asia",["AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", /*"PS",*/ "QA", "SA", /*"NT",*/ "SY", "TR", "YE"/*, "YD"*/]]
];

var oceaniaSubRegions = [
  ["053", "Australia and New Zealand", ["AU", /*"NF",*/ "NZ"]],
  ["054", "Melanesia",["FJ", "NC", "PG", "SB", "VU"]],
  ["057", "Micronesia",["FM", "GU", "KI", "MH", "MP", /*"NR",*/ "PW"]],
  ["061", "Polynesia",["AS", "CK", "NU", "PF", /*"PN","TK",*/  "TO", /*"TV",*/ "WF", "WS"]],
  ["009", "Australia, New Zealand, and Melanesia", ["AU", /*"NF",*/ "NZ", "SB", "FJ", "NC", "PG", "VU", "ID"]]
];

var allSubRegions = [
  ["015", "Northern Africa", ["DZ", "EG", "EH", "LY", "MA", "SD", "SS", "TN"]],
  ["011", "Western Africa", ["BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", /*"SH",*/ "SL", "SN", "TG"]],
  ["017", "Middle Africa",["AO", "CD", "CF", /*"CG",*/ "CM", "GA", "GQ", "ST", "TD"]],
  ["014", "Eastern Africa",["BI", "DJ", "ER", "ET", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "TZ", "UG", "YT", "ZM", "ZW"]],
  ["018", "Southern Africa",["BW", "LS", "NA", "SZ", "ZA"]],
  ["154", "Northern Europe",["GG", "JE", "AX", "DK", "EE", "FI", "FO", "GB", "IE", "IM", "IS", "LT", "LV", "NO", "SE", "SJ"]],
  ["155", "Western Europe", [ 'AT', 'BE', 'CH', 'DE', 'FR', 'LI', 'LU', /*'MC',*/ 'NL' ]],
  ["151", "Eastern Europe", [ 'BG', 'BY', 'CZ', 'HU', 'MD', 'PL', 'RO', 'RU', 'SK', 'UA' ]],
  ["039", "Southern Europe", [ 'AD','AL','BA','ES',/*'GI',*/'GR','HR','IT','ME','MK','MT','RS','PT','SI','SM'/*,'VA','YU' ]*/]],
  ["021", "Northern America",[/*"BM",*/ "CA", "GL", /*"PM",*/ "US", "MX"]],
  ["029", "the Caribbean",["AG", "AI", /*"AN",*/ "AW", "BB", "BL", "BS", "CU", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "TC", "TT", "VC", "VG", "VI"]],
  ["013", "Central America",["BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"]],
  ["005", "South America",["AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PE", "PY", "SR", "UY", "VE"]],
  ["143", "Central Asia",["TM", "TJ", "KG", "KZ", "UZ"]],
  ["030", "Eastern Asia",["CN", "HK", "JP", "KP", "KR", "MN", /*"MO",*/ "TW"]],
  ["034", "Southern Asia",["AF", "BD", "BT", "IN", "IR", "LK", /*"MV",*/ "NP", "PK"]],
  ["035", "South-Eastern Asia",["BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"]],
  ["145", "Western Asia",["AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", /*"PS",*/ "QA", "SA", /*"NT",*/ "SY", "TR", "YE"/*, "YD"*/]],
  /*["054", "Melanesia",["FJ", "NC", "PG", "SB", "VU"]],*/
  ["057", "Micronesia",["FM", "GU", "KI", "MH", "MP", /*"NR",*/ "PW"]],
  ["061", "Polynesia",["AS", "CK", "NU", "PF", /*"PN","TK",*/  "TO", /*"TV",*/ "WF", "WS"]],
  ["009", "Australia, New Zealand, and Melanesia", ["AU", /*"NF",*/ "NZ", "SB", "FJ", "NC", "PG", "VU"]]
];



//shuffle code comes from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



var gameState = {
  "subRegion": null,
  "subRegionCode":null,
  "countryQueue":null,
  "subRegionName":null,
  "positionInCountryQueue":0,
  "positionInRegionQueue":0,
  "correctAnswer": null,
  "choices":null,
  "learnedRegions":[]
};

function setSubRegion(subRegion){
  gameState.subRegion = subRegion;
  gameState.subRegionCode = subRegion[0];
  gameState.countryQueue = shuffle(subRegion[2]);
  gameState.subRegionName = subRegion[1];
  gameState.positionInCountryQueue = -1;
  gameState.positionInRegionQueue = allSubRegions.indexOf(subRegion);
}

function rollNewSubRegion(){
  gameState.positionInRegionQueue = Math.floor(Math.random() * allSubRegions.length);
  var subRegion = allSubRegions[gameState.positionInRegionQueue];
  setSubRegion(subRegion);
}

function goToNextSubRegion(){
  gameState.positionInRegionQueue = (gameState.positionInRegionQueue + 1) % allSubRegions.length;
  var subRegion = allSubRegions[gameState.positionInRegionQueue];
  setSubRegion(subRegion);
}

function getIncorrectCountries(countryQueue, randomCountry){
  let correctCountryIdx = countryQueue.indexOf(randomCountry);
  let countryQueueMinusCorrectCountry = countryQueue.slice(0, correctCountryIdx).concat(countryQueue.slice(correctCountryIdx + 1));
  let offset = Math.floor(Math.random() * countryQueueMinusCorrectCountry.length);
  let incorrectCountries = [];

    for (let i = 0; i < 3; i++){
        incorrectCountries.push(countryQueueMinusCorrectCountry[(i + offset) % countryQueueMinusCorrectCountry.length]);
    }
  return incorrectCountries;
}

function setProgressBar(){
  var percentComplete = Math.floor((gameState.positionInCountryQueue / (gameState.countryQueue.length - 1)) * 100);
  document.getElementById("regionProgressBar").setAttribute("style", "width: " + percentComplete + "%");
  document.getElementById("regionProgressBar").setAttribute("aria-valuenow", percentComplete);
}

function setWorldProgressBar(){
  var percentComplete = Math.floor((gameState.learnedRegions.length / (allSubRegions.length - 1)) * 100);
  document.getElementById("worldProgressBar").setAttribute("style", "width: " + percentComplete + "%");
  document.getElementById("worldProgressBar").setAttribute("aria-valuenow", percentComplete);
}

function checkIfCorrect(guess){
    if (parseInt(guess) === gameState.correctAnswer){
      //go to the next country in the subRegion list and increment gold star counter
      document.getElementById("errorMessage").classList.remove("show");
      setProgressBar();
      setUpGameBoard();
    } else {
      //error statement
      document.getElementById("errorMessage").classList.add("show");
      document.getElementById("errorMessage").innerHTML = "You clicked " + nameCodeMap[gameState.choices[guess - 1]] + ". Try again.";
      console.log(gameState.choices);
    }
}

function resetProgressBar(){
  document.getElementById("regionProgressBar").setAttribute("style", "width: " + 1 + "%");
  document.getElementById("regionProgressBar").setAttribute("aria-valuenow", 1);
}

function setUpGameBoard(){

      var currentRegion = document.getElementById("regionStatement");
      currentRegion.innerHTML = gameState.subRegionName;
      gameState.positionInCountryQueue++;
      document.getElementById("regionProgressSentence").innerHTML = "You found " + gameState.positionInCountryQueue + " countries in the region of " + gameState.subRegionName + ".";
      document.getElementById("worldProgressSentence").innerHTML = "You learned " + gameState.learnedRegions.length + " regions.";
      /*document.getElementById("worldProgressSentence").innerHTML = "You found " + gameState.learnedRegions.length + " out of " + allSubRegions.length + " regions.";*/
      let correctCountry = gameState.countryQueue[gameState.positionInCountryQueue];

      if (correctCountry === undefined){
        document.getElementById("errorMessage").innerHTML = "";

        if (gameState.learnedRegions.indexOf(gameState.subRegionName) === -1){
          gameState.learnedRegions = gameState.learnedRegions.concat(gameState.subRegionName);
        }
        resetProgressBar();
        setWorldProgressBar();
        goToNextSubRegion();
        setUpGameBoard();
/*
        if (gameState.learnedRegions.indexOf(currentRegion[0]) === undefined){
          gameState.learnedRegions = gameState.learnedRegions.concat(currentRegion[0]);
        }
        */
        document.getElementById("errorMessage").classList.add("show");
        return;
      }

      //build a question
      question.innerHTML = "Can you find " + nameCodeMap[correctCountry] + "?";

      let incorrectCountries = getIncorrectCountries(gameState.countryQueue, correctCountry);

      var randomizedArray = shuffle(incorrectCountries.concat(correctCountry));
      var correctAnswer = randomizedArray.indexOf(correctCountry) + 1;
      gameState.correctAnswer = correctAnswer;
      gameState.choices = randomizedArray;

      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyCPxDtfQurjxgW1wBVeihv6mity7KgshIo'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      var dataForMap = (randomizedArray).map(function(ele, i){
        return [nameCodeMap[ele], i+1];
      });
      dataForMap.unshift(["Countries", "Color"]); //this adds a header to the table. If not included, the map skips the first country.

      var mapDisplayRegion;

      if (gameState.subRegionCode === "151"){//redirect Eastern Europe map to map of Europe
        mapDisplayRegion = "150";
      } else if (gameState.subRegionCode === "153"){//redirect Australia map to map of Polynesia
        mapDisplayRegion = "009";
      } else if (gameState.subRegionCode === "021"){//redirect from North America to Americas
        mapDisplayRegion = "019";
      } else {
        mapDisplayRegion = gameState.subRegionCode;
      }

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(dataForMap);

        var options = {
          region: mapDisplayRegion,
          colorAxis: {colors: ['dodgerblue', 'royalblue', 'mediumpurple', "mediumvioletred"]},
          //dodgerblue, royalblue, mediumpurple, mediumvioletred
          //alternate colors: '#ffcd00', 'lightgreen', 'pink', "mediumvioletred"
          magnifyingGlass: {enable: true, zoomFactor: 7.5},
          backgroundColor: 'paleturquoise'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
}


window.onload = function() {
  var buttonsArray = ["pick1", "pick2", "pick3", "pick4"];

  for (var m = 0; m < buttonsArray.length; m++){
    document.getElementById(buttonsArray[m]).addEventListener("click", function(val){
      val.preventDefault();
      checkIfCorrect(this.id[4]);
    });
  }

  document.getElementById("rollrandom").addEventListener("click", function(val){
    val.preventDefault();
    rollNewSubRegion();
    resetProgressBar();
    setUpGameBoard();
  });

  document.getElementById("nextregion").addEventListener("click", function(val){
    val.preventDefault();
    goToNextSubRegion();
    resetProgressBar();
    setUpGameBoard();
  });

  document.getElementById("replayregion").addEventListener("click", function(val){
    val.preventDefault();
    setSubRegion(gameState.subRegion);
    resetProgressBar();
    setUpGameBoard();
  });


  var buttonNames = [
  'region0',
  'region1',
  'region2',
  'region3',
  'region4',
  'region5',
  'region6',
  'region7',
  'region8',
  'region9',
  'region10',
  'region11',
  'region12',
  'region13',
  'region14',
  'region15',
  'region16',
  'region17',
  'region18',
  'region19',
  'region20',
  'region20' ];

  for (var n = 0; n < buttonNames.length; n++){
    var buttonName = buttonNames[n];
    document.getElementById(buttonName).addEventListener("click", function(val){
      val.preventDefault();
      setSubRegion(allSubRegions[this.id.slice(6)]);
      resetProgressBar();
      setUpGameBoard();
    });
  }


    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '49') {
            checkIfCorrect(1);
        }
        else if (e.keyCode == '50') {
            checkIfCorrect(2);
        }
        else if (e.keyCode == '51') {
           checkIfCorrect(3);
        }
        else if (e.keyCode == '52') {
           checkIfCorrect(4);
        }

    }

  rollNewSubRegion();
  setUpGameBoard();
};


  //add practice mode vs. test data
  //allow user to add checkboxes for which regions they want to study
  //make magnifying glass work
