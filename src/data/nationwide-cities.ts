/**
 * Major metros per state for nationwide SEO landing pages (4+ cities each).
 * Slugs are derived in areas.ts via slugify(city) + state abbr.
 */
export type NationwideState = {
  abbr: string;
  name: string;
  cities: string[];
};

export const NATIONWIDE_STATES: NationwideState[] = [
  { abbr: "AL", name: "Alabama", cities: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"] },
  { abbr: "AK", name: "Alaska", cities: ["Anchorage", "Fairbanks", "Juneau", "Wasilla"] },
  {
    abbr: "AZ",
    name: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Gilbert"],
  },
  { abbr: "AR", name: "Arkansas", cities: ["Little Rock", "Fort Smith", "Fayetteville", "Jonesboro"] },
  {
    abbr: "CA",
    name: "California",
    cities: [
      "Los Angeles",
      "San Diego",
      "San Jose",
      "San Francisco",
      "Sacramento",
      "Fresno",
    ],
  },
  {
    abbr: "CO",
    name: "Colorado",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"],
  },
  {
    abbr: "CT",
    name: "Connecticut",
    cities: ["Bridgeport", "Hartford", "New Haven", "Stamford", "Waterbury"],
  },
  { abbr: "DE", name: "Delaware", cities: ["Wilmington", "Dover", "Newark", "Middletown"] },
  {
    abbr: "FL",
    name: "Florida",
    cities: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Fort Lauderdale"],
  },
  {
    abbr: "GA",
    name: "Georgia",
    cities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens"],
  },
  { abbr: "HI", name: "Hawaii", cities: ["Honolulu", "Hilo", "Kailua", "Kapolei"] },
  { abbr: "ID", name: "Idaho", cities: ["Boise", "Meridian", "Nampa", "Idaho Falls"] },
  {
    abbr: "IL",
    name: "Illinois",
    cities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford"],
  },
  {
    abbr: "IN",
    name: "Indiana",
    cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"],
  },
  { abbr: "IA", name: "Iowa", cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"] },
  {
    abbr: "KS",
    name: "Kansas",
    cities: ["Wichita", "Overland Park", "Kansas City", "Topeka", "Olathe"],
  },
  {
    abbr: "KY",
    name: "Kentucky",
    cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro"],
  },
  {
    abbr: "LA",
    name: "Louisiana",
    cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Metairie"],
  },
  {
    abbr: "ME",
    name: "Maine",
    cities: ["Portland", "Lewiston", "Bangor", "South Portland"],
  },
  {
    abbr: "MD",
    name: "Maryland",
    cities: ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Frederick"],
  },
  {
    abbr: "MA",
    name: "Massachusetts",
    cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"],
  },
  {
    abbr: "MI",
    name: "Michigan",
    cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor"],
  },
  {
    abbr: "MN",
    name: "Minnesota",
    cities: ["Minneapolis", "St. Paul", "Rochester", "Duluth", "Bloomington"],
  },
  {
    abbr: "MS",
    name: "Mississippi",
    cities: ["Jackson", "Gulfport", "Southaven", "Biloxi"],
  },
  {
    abbr: "MO",
    name: "Missouri",
    cities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence"],
  },
  {
    abbr: "MT",
    name: "Montana",
    cities: ["Billings", "Missoula", "Great Falls", "Bozeman"],
  },
  {
    abbr: "NE",
    name: "Nebraska",
    cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island"],
  },
  {
    abbr: "NV",
    name: "Nevada",
    cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"],
  },
  {
    abbr: "NH",
    name: "New Hampshire",
    cities: ["Manchester", "Nashua", "Concord", "Dover"],
  },
  {
    abbr: "NJ",
    name: "New Jersey",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"],
  },
  {
    abbr: "NM",
    name: "New Mexico",
    cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"],
  },
  {
    abbr: "NY",
    name: "New York",
    cities: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
  },
  {
    abbr: "NC",
    name: "North Carolina",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"],
  },
  { abbr: "ND", name: "North Dakota", cities: ["Fargo", "Bismarck", "Grand Forks", "Minot"] },
  {
    abbr: "OH",
    name: "Ohio",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton"],
  },
  {
    abbr: "OK",
    name: "Oklahoma",
    cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"],
  },
  {
    abbr: "OR",
    name: "Oregon",
    cities: ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro"],
  },
  {
    abbr: "PA",
    name: "Pennsylvania",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"],
  },
  { abbr: "RI", name: "Rhode Island", cities: ["Providence", "Warwick", "Cranston", "Pawtucket"] },
  {
    abbr: "SC",
    name: "South Carolina",
    cities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Greenville"],
  },
  {
    abbr: "SD",
    name: "South Dakota",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"],
  },
  {
    abbr: "TN",
    name: "Tennessee",
    cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"],
  },
  {
    abbr: "TX",
    name: "Texas",
    cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso"],
  },
  {
    abbr: "UT",
    name: "Utah",
    cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Ogden"],
  },
  {
    abbr: "VT",
    name: "Vermont",
    cities: ["Burlington", "Essex", "Rutland", "Colchester"],
  },
  {
    abbr: "VA",
    name: "Virginia",
    cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Arlington"],
  },
  {
    abbr: "WA",
    name: "Washington",
    cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"],
  },
  {
    abbr: "WV",
    name: "West Virginia",
    cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg"],
  },
  {
    abbr: "WI",
    name: "Wisconsin",
    cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"],
  },
  { abbr: "WY", name: "Wyoming", cities: ["Cheyenne", "Casper", "Gillette", "Laramie"] },
];
