// donut shop rock

// object constructor to set up each donut franchise
var DonutShop = function (storeLocation, minCustomers, maxCustomers, avgDonuts, hoursOperation) {
	this.storeLocation = storeLocation;
	this.minCustomers = minCustomers;
	this.maxCustomers = maxCustomers;
	this.avgDonuts = avgDonuts;
	this.hoursOperation = hoursOperation;

	// method to calculate and display number of donuts each shop needs to bake per hour and per day
	this.donutsNeeded = function () {
		var totalDailyDonuts = 0;
		var currentHour = 0;
		var hourlyCustomers = 0;
		console.log("Please bake this amount of donuts at " + this.storeLocation + ":");
		
		// loop generates amount of donuts baked per each hour of operation and totals them
		while (currentHour < this.hoursOperation) {

			// round hourlyDonutsBaked up to highest integer cuz can't bake a partial donut
			var hourlyCustomers = (Math.floor(Math.random() * 
				(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
			var hourlyDonutsBaked = Math.ceil(this.avgDonuts * hourlyCustomers);
			console.log(hourlyCustomers + " customers this hour");
			console.log("Hour " + (currentHour + 1) + ": " + hourlyDonutsBaked + " donuts");
			var totalDailyDonuts = totalDailyDonuts + hourlyDonutsBaked;
			currentHour++;

			// when loop runs course then print total amount of donuts baked
			if (currentHour === this.hoursOperation) {
				console.log("Total donuts baked today = " + totalDailyDonuts);
			}
		}
	}	
}

// creating the 5 donut shops
var downtownShop = new DonutShop ('Downtown', 8, 43, 4.50, 8);
var capitolHillShop = new DonutShop ('Capitol Hill', 4, 37, 2.00, 24);
var southLakeUnionShop = new DonutShop ('South Lake Union', 9, 23, 6.33, 10);
var wedgewoodShop = new DonutShop ('Wedgewood', 2, 28, 1.25, 7);
var ballardShop = new DonutShop ('Ballard', 8, 58, 3.75, 10);


// these call the donutsNeeded method 
downtownShop.donutsNeeded();
capitolHillShop.donutsNeeded();
southLakeUnionShop.donutsNeeded();
wedgewoodShop.donutsNeeded();
ballardShop.donutsNeeded();
