'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
  '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  name: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  getCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.round(this.avgSale * this.randCustPerHour[i]));
    }
  },
  render: function() {
    var firstAndPikeHead = document.getElementById('first-and-pike-heading');
    var firstAndPikeList = document.getElementById('first-and-pike-list');

    this.getCustomers();
    this.getCookiesPerHour();

    firstAndPikeHead.textContent = this.name;

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      firstAndPikeList.appendChild(liEl);
    }
  }
};
firstAndPike.render();

var alki = {
  name: 'Alki',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  getCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.round(this.avgSale * this.randCustPerHour[i]));
    }
  },
  render: function() {
    var alkiHead = document.getElementById('alki-heading');
    var alkiList = document.getElementById('alki-list');

    this.getCustomers();
    this.getCookiesPerHour();

    alkiHead.textContent = this.name;

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      alkiList.appendChild(liEl);
    }
  }
};
alki.render();

var seaTac = {
  name: 'SeaTac Airport',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  getCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.round(this.avgSale * this.randCustPerHour[i]));
    }
  },
  render: function() {
    var seatacHead = document.getElementById('seatac-heading');
    var seatacList = document.getElementById('seatac-list');

    this.getCustomers();
    this.getCookiesPerHour();

    seatacHead.textContent = this.name;

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      seatacList.appendChild(liEl);
    }
  }
};
seaTac.render();

var seaCenter = {
  name: 'Seattle Center',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  getCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.round(this.avgSale * this.randCustPerHour[i]));
    }
  },
  render: function() {
    var seacenterHead = document.getElementById('seacenter-heading');
    var seacenterList = document.getElementById('seacenter-list');

    this.getCustomers();
    this.getCookiesPerHour();

    seacenterHead.textContent = this.name;

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      seacenterList.appendChild(liEl);
    }
  }
};
seaCenter.render();

var capHill = {
  name: 'Capitol Hill',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  },
  getCookiesPerHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.round(this.avgSale * this.randCustPerHour[i]));
    }
  },
  render: function() {
    var capHillHead = document.getElementById('caphill-heading');
    var capHillList = document.getElementById('caphill-list');

    this.getCustomers();
    this.getCookiesPerHour();

    capHillHead.textContent = this.name;

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      capHillList.appendChild(liEl);
    }
  }
};
capHill.render();
