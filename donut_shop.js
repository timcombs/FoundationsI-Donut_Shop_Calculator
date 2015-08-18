// donut shop rock


	// object constructor to set up each donut franchise
	var DonutShop = function (storeLocation, minCustomers, maxCustomers, avgDonuts, hoursOperation){
		
		this.storeLocation = storeLocation;
		this.minCustomers = minCustomers;
		this.maxCustomers = maxCustomers;
		this.avgDonuts = avgDonuts;
		this.hoursOperation = hoursOperation;

		// an array to hold customers and donuts per hour
		this.hourlyCustomerData = [];
		this.hourlyDonutData = [];
		this.dailyDonutData = [];

		
		// method to calculate and display number of donuts each shop needs to bake per hour and per day
		this.donutsNeeded = function () {

			var totalDailyDonuts = 0;
			var currentHour = 0;
			var hourlyCustomers = 0;
			var hourlyDonutsBaked = 0;


			// loop generates amount of donuts baked per each hour of operation and totals them
			while (currentHour < this.hoursOperation) {

				var hourlyCustomers = (Math.floor(Math.random() * 
					(this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)
				var hourlyDonutsBaked = Math.ceil(this.avgDonuts * hourlyCustomers);
				var totalDailyDonuts = totalDailyDonuts + hourlyDonutsBaked;
				this.hourlyCustomerData.push(hourlyCustomers);
				this.hourlyDonutData.push(hourlyDonutsBaked);
				currentHour++;

				// when loop runs course then print total amount of donuts baked
				if (currentHour === this.hoursOperation) {
					this.dailyDonutData.push([totalDailyDonuts]);
				}

			}
			// do i even need these returns???
			return this.storeLocation;
			return this.avgDonuts;
			return this.hoursOperation;
			return this.hourlyCustomerData;
			return this.hourlyDonutData;
			return this.dailyDonutData;
		}	
	}



// creating the 5 donut shops
var downtownShop = new DonutShop ('Downtown', 8, 43, 4.50, 8);
var capitolHillShop = new DonutShop ('Capitol Hill', 4, 37, 2.00, 24);
var southLakeUnionShop = new DonutShop ('South Lake Union', 9, 23, 6.33, 10);
var wedgewoodShop = new DonutShop ('Wedgewood', 2, 28, 1.25, 7);
var ballardShop = new DonutShop ('Ballard', 8, 58, 3.75, 10);

// these call the donutsNeeded method the data goes into an array that stores it for as long as 
// the website is open. once closed the website will generate new data. 
downtownShop.donutsNeeded();
capitolHillShop.donutsNeeded();
southLakeUnionShop.donutsNeeded();
wedgewoodShop.donutsNeeded();
ballardShop.donutsNeeded();



//						ONE
// make it so the user can update the avg donut purchase
// this should recalculate the hourly donuts baked & total donuts baked
// but should not refigure the hourly customers

//						&

//						TWO
// make it so the user can update the hourly customers
// this should recalculate the hourly donuts baked & total donuts baked
// but should not refigure the other hourly customers

// #2 should be easier than #1, any iterations should be done thru .each
// have to find code for an editable table


// jQuery to create and style the table
// and to make a few animations on the page

$(document).ready(function(){
	$('li').on("click", function(){

		// adding & removing classes to make an animation that highlights the selected shop
		$('li').animate({opacity: 0.25}, 100, "swing");
		$(this).animate({opacity: 1.0}, 700, "swing");

		//$('li').removeClass('selected').addClass('faded');
		//$(this).addClass('selected').removeClass('faded');

		// removes old table
		$('table tr').remove();

		var $shopExamined = $(this).attr("id"); // gets shop id from <li> as string
		var shopHolder = {						// holds shop objects so $shopExamined
			"downtownShop": downtownShop, 		// can refer to the objects as variable
			"capitolHillShop": capitolHillShop,
			"southLakeUnionShop": southLakeUnionShop,
			"wedgewoodShop": wedgewoodShop,
			"ballardShop": ballardShop
		}
		shopToUse = shopHolder[$shopExamined];		// variable that is the object the id refers to

		// constructing the top half of the table - before iterated rows
		var $tableTitle = $("<tr><th colspan='2' class='title'>Donut Baking Calculator</th></tr>");
		var $shopName = $("<tr><th colspan='2' class='shopName'>" + shopToUse.storeLocation + " Shop</th></tr>");
		var $avgDonutPurchase = $("<tr><th>Average Donut per Purchase</th><td>" + shopToUse.avgDonuts + "</td></tr>");
		var $tableHeadings = $("<tr><th class='columnHeadings'>Hour of Operation</th><th class='columnHeadings'>Hourly Customers</th><th class='columnHeadings'>Amount to Bake</th></tr>");

		$("table#theTable").append($tableTitle);    // places title row in table
		$("tr:last").after($shopName);    // places the shop name in table
		$("tr:last").after($avgDonutPurchase);    // places the average donuts purchased in table
		$("tr:last").after($tableHeadings); // places the table headings in the table

		// the loop that iterates through the data array to build the table rows for each hour
		// of operation
		for (i=0; i<shopToUse.hoursOperation; i++) {
			// if statement adds a light green color to every other row
			if ((i+1)%2 === 0) {
			var $hourlyData = $("<tr class='even'><td>" + (i+1) + "</td><td>" + shopToUse.hourlyCustomerData[i] + "</td><td>" + shopToUse.hourlyDonutData[i] + "</td></tr>");
			} else {
				var $hourlyData = $("<tr><td>" + (i+1) + "</td><td>" + shopToUse.hourlyCustomerData[i] + "</td><td>" + shopToUse.hourlyDonutData[i] + "</td></tr>");
			}
			$("tr:last").after($hourlyData); 
		}
		// creates last row of table which is the total donuts needed to bake today
		var $totalDonuts = $("<tr><td></td><th>total donuts to bake today</th><td>"+ shopToUse.dailyDonutData[0] + "</td></tr>");
		$("tr:last").after($totalDonuts);
	});
});





