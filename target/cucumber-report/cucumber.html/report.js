$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("laptop.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop Test",
  "description": "",
  "id": "laptop-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 22621523700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LaptopSteps.userIsOnTheAmazonHomepage()"
});
formatter.result({
  "duration": 1127474400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to purchase laptop successfully",
  "description": "",
  "id": "laptop-test;user-should-be-able-to-purchase-laptop-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User search for \"Laptop\" laptop in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "finds the selection from the pages \"2020 Newest HP Stream 11.6 inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 64 GB eMMC, Webcam, HDMI, Windows 10\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "selects the quantity \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verifies the add to cart message \"Added to Cart\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 17
    }
  ],
  "location": "LaptopSteps.userSearchForLaptopInTheSearchBar(String)"
});
formatter.result({
  "duration": 686037200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clicksOnTheSearchButton()"
});
formatter.result({
  "duration": 5520071500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020 Newest HP Stream 11.6 inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 64 GB eMMC, Webcam, HDMI, Windows 10",
      "offset": 36
    }
  ],
  "location": "LaptopSteps.findsTheSelectionFromThePages(String)"
});
