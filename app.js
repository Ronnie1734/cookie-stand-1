'use strict';

var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  getCustomers: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  getCustomers: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  getCustomers: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

var seaCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  getCustomers: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  getCustomers: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
