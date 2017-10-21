'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allLocations = [];
var netTotal = [];

function MakeLocation(name, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.randCustPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.getCustPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() *
      (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  };
  this.getCookiesPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.round(this.avgSale * this.randCustPerHour[i]));
    }
  };
  this.getTotal = function() {
    for(var i = 0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
  };
  this.makeRow = function() {
    var tableEl = document.getElementById('cookie-stands');
    var trEl = document.createElement('tr');
    var nameTdEl = document.createElement('td');
    var totalTd = document.createElement('td');

    totalTd.textContent = this.totalCookies;
    nameTdEl.textContent = this.name;

    if(!document.getElementById('table-body')) {
      var tbodyEl = document.createElement('tbody');
      tbodyEl.id = 'table-body';
    } else {
      var tbodyEl = document.getElementById('table-body');
    }

    tableEl.appendChild(tbodyEl);
    trEl.appendChild(nameTdEl);

    for(var i = 0; i < this.cookiesPerHour.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesPerHour[i];
      trEl.appendChild(tdEl);
    }
    trEl.appendChild(totalTd);
    tbodyEl.appendChild(trEl);
  };
  this.getCustPerHour();
  this.getCookiesPerHour();
  this.getTotal();
  this.makeRow();
  allLocations.push(this);
}

function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
};
makeStands();

function makeHeaderRow(inputArray) {
  var tableEl = document.getElementById('cookie-stands');
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var thEmpty = document.createElement('th');
  var totalsTh = document.createElement('th');

  theadEl.id = 'table-head';
  tableEl.appendChild(theadEl);
  trEl.appendChild(thEmpty);

  for(var i = 0; i < inputArray.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = inputArray[i];
    trEl.appendChild(thEl);
  }
  totalsTh.textContent = 'Daily Location Total';
  trEl.appendChild(totalsTh);
  theadEl.appendChild(trEl);
}
makeHeaderRow(hours);

function makeTotalsRow(inputArray) {
  var tableFoot = document.createElement('tfoot');
  var tableEl = document.getElementById('cookie-stands');
  var trEl = document.createElement('tr');
  var totalTd = document.createElement('td');
  var totalsTd = document.createElement('td');
  var rowTotal = 0;

  tableFoot.id = 'table-foot';
  tableEl.appendChild(tableFoot);

  totalTd.textContent = 'Totals';
  trEl.appendChild(totalTd);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    var total = 0;

    for (var j = 0; j < inputArray.length; j++) {
      total += inputArray[j].cookiesPerHour[i];
    }

    rowTotal += total;
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
  }
  netTotal.push(rowTotal);
  totalsTd.textContent = netTotalTd(netTotal);
  trEl.appendChild(totalsTd);
  tableFoot.appendChild(trEl);
}
makeTotalsRow(allLocations);

function netTotalTd(array){
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

//get the form
var cookieForm = document.getElementById('cookie-form');

//handle new store submission
function handleStoreSubmit(event) {
  var tableBodyEl = document.getElementById('table-body');
  event.preventDefault(event);
  //Check empty fields
  if (!event.target.storename.value || !event.target.mincust.value
    || !event.target.maxcust.value || !event.target.avgcook.value) {
    return alert('Fields cannot be empty!');
  }

  if (isNaN(event.target.maxcust.value) || isNaN(event.target.mincust.value)
   || isNaN(event.target.avgcook.value)) {
    return alert('Please enter a number on the appropriate fields!');
  }

  var storeName = event.target.storename.value;
  var minCust = event.target.mincust.value;
  var maxCust = event.target.maxcust.value;
  var avgSale = event.target.avgcook.value;

  //Create the new store
  var newStore = new MakeLocation(storeName, minCust, maxCust, avgSale);

  event.target.storename.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcook.value = null;
}
cookieForm.addEventListener('submit', handleStoreSubmit);
