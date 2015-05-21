/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.factory('fakeDataService',function(){

    return{

        getComponents: function () {
            return [
                {name: 'Turn', settingone: '100', settingtwo: '80', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'Sociomantic', settingone: '35', settingtwo: '60', settingthree: 'Second Higest Bid', settingfour: 'Lund'},
                {name: 'Digilant', settingone: '80', settingtwo: '70', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'Delta Projects', settingone: '86', settingtwo: '86', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'BidTheatre', settingone: '55', settingtwo: '78', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'Appnexus', settingone: '22', settingtwo: '66', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'Adform', settingone: '88', settingtwo: '27', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'BidSwitch', settingone: '54', settingtwo: '89', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'MediaMath', settingone: '54', settingtwo: '89', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'Index (by Casale Media)', settingone: '54', settingtwo: '89', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'BidSwitch US', settingone: '54', settingtwo: '89', settingthree: 'Second Higest Bid', settingfour: 'Stockholm'},
                {name: 'MediaMath US', settingone: '54', settingtwo: '89', settingthree: 'English Auction', settingfour: 'Stockholm'},
                {name: 'DoubleClick Bid Manager US', settingone: '54', settingtwo: '89', settingthree: 'Second Higest Bid', settingfour: 'Stockholm'},
                {name: 'BidTheatre - Blind', settingone: '54', settingtwo: '89', settingthree: 'Second Higest Bid', settingfour: 'Stockholm'}
            ];
        },


        getAdvertiserCategories: function () {

            return [
                {value: '0', name: 'Adult'},
                {value: '1', name: 'Arts and Entertainment/Architecture'},
                {value: '2', name: 'Arts and Entertainment/Awards'},
                {value: '3', name: 'Arts and Entertainment/Celebrities and Entertainment News'},
                {value: '4', name: 'Arts and Entertainment/Animation and Comics'},
                {value: '5', name: 'Arts and Entertainment/Fashion and Modeling'},
                {value: '6', name: 'Arts and Entertainment/Humor'},
                {value: '7', name: 'Arts and Entertainment/Movies'},
                {value: '8', name: 'Arts and Entertainment/Music and Audio'},
                {value: '9', name: 'Arts and Entertainment/Performing Arts'},
                {value: '10', name: 'Arts and Entertainment/Photography'},

            ]

        },

        getPublishers: function () {

            return { data: {SelectList: [
                {
                    "Selected": false,
                    "Text": "All",
                    "Value": "-1"
                },
                {
                    "Selected": true,
                    "Text": "AdaptADX.com",
                    "Value": "-2"
                },
                {
                    "Selected": false,
                    "Text": "Sub Publishers",
                    "Value": "$$OPTGROUP$$OPTGROUP$$"
                },
                {
                    "Selected": false,
                    "Text": "Eskilstuna-Kuriren (EK)",
                    "Value": "1176"
                },
                {
                    "Selected": false,
                    "Text": "Familjeliv",
                    "Value": "1173"
                },
                {
                    "Selected": false,
                    "Text": "MittMedia Dev",
                    "Value": "1174"
                }
            ]}};


        },


        getCategories: function () {
            {
                return { success: true,
                    message: null,
                    data: [
                        {
                            "Id": 1,
                            "ParentId": null,
                            "Category": "Arts and Entertainment"
                        },
                        {
                            "Id": 2,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Animation and Comics"
                        },
                        {
                            "Id": 3,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Architecture"
                        },
                        {
                            "Id": 4,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Awards"
                        },
                        {
                            "Id": 5,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Celebrities and Entertainment News"
                        },
                        {
                            "Id": 6,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Fashion and Modeling"
                        },
                        {
                            "Id": 7,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Humor"
                        },
                        {
                            "Id": 8,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Movies"
                        },
                        {
                            "Id": 9,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Music and Audio"
                        },
                        {
                            "Id": 10,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Performing Arts"
                        },
                        {
                            "Id": 11,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Photography"
                        },
                        {
                            "Id": 12,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/TV and Video"
                        },
                        {
                            "Id": 13,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Visual Arts and Design"
                        },
                        {
                            "Id": 14,
                            "ParentId": 1,
                            "Category": "Arts and Entertainment/Web Design"
                        },
                        {
                            "Id": 15,
                            "ParentId": null,
                            "Category": "Autos and Vehicles"
                        },
                        {
                            "Id": 16,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Automotive Industry"
                        },
                        {
                            "Id": 17,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Automotive News"
                        },
                        {
                            "Id": 18,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Aviation"
                        },
                        {
                            "Id": 19,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Boating"
                        },
                        {
                            "Id": 20,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Car Buying"
                        },
                        {
                            "Id": 21,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Car Rentals"
                        },
                        {
                            "Id": 22,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Makes and Models"
                        },
                        {
                            "Id": 23,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Motorcycles"
                        },
                        {
                            "Id": 24,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Motorsports"
                        },
                        {
                            "Id": 25,
                            "ParentId": 15,
                            "Category": "Autos and Vehicles/Trains and Railroads"
                        },
                        {
                            "Id": 26,
                            "ParentId": null,
                            "Category": "Beauty and Fitness"
                        },
                        {
                            "Id": 27,
                            "ParentId": 26,
                            "Category": "Beauty and Fitness/Beauty"
                        },
                        {
                            "Id": 28,
                            "ParentId": 26,
                            "Category": "Beauty and Fitness/Bodyart"
                        },
                        {
                            "Id": 29,
                            "ParentId": 26,
                            "Category": "Beauty and Fitness/Cosmetics"
                        },
                        {
                            "Id": 30,
                            "ParentId": 26,
                            "Category": "Beauty and Fitness/Fitness"
                        },
                        {
                            "Id": 31,
                            "ParentId": 26,
                            "Category": "Beauty and Fitness/Hair"
                        },
                        {
                            "Id": 32,
                            "ParentId": 26,
                            "Category": "Beauty and Fitness/Skin Care"
                        },
                        {
                            "Id": 33,
                            "ParentId": 26,
                            "Category": "Beauty and Fitness/Weight Loss"
                        },
                        {
                            "Id": 34,
                            "ParentId": null,
                            "Category": "Books and Literature"
                        },
                        {
                            "Id": 35,
                            "ParentId": 34,
                            "Category": "Books and Literature/Book Retailers"
                        },
                        {
                            "Id": 36,
                            "ParentId": 34,
                            "Category": "Books and Literature/E Books"
                        },
                        {
                            "Id": 37,
                            "ParentId": 34,
                            "Category": "Books and Literature/Folklore"
                        },
                        {
                            "Id": 38,
                            "ParentId": 34,
                            "Category": "Books and Literature/Guides and Reviews"
                        },
                        {
                            "Id": 39,
                            "ParentId": null,
                            "Category": "Business and Industry"
                        },
                        {
                            "Id": 40,
                            "ParentId": 39,
                            "Category": "Business and Industry/Accounting"
                        },
                        {
                            "Id": 41,
                            "ParentId": 39,
                            "Category": "Business and Industry/Aerospace and Defence"
                        },
                        {
                            "Id": 42,
                            "ParentId": 39,
                            "Category": "Business and Industry/Agriculture and Forestry"
                        },
                        {
                            "Id": 43,
                            "ParentId": 39,
                            "Category": "Business and Industry/Associations"
                        },
                        {
                            "Id": 44,
                            "ParentId": 39,
                            "Category": "Business and Industry/Biotechnology and Pharmaceuticals"
                        },
                        {
                            "Id": 45,
                            "ParentId": 39,
                            "Category": "Business and Industry/Business Services"
                        },
                        {
                            "Id": 46,
                            "ParentId": 39,
                            "Category": "Business and Industry/Chemicals"
                        },
                        {
                            "Id": 47,
                            "ParentId": 39,
                            "Category": "Business and Industry/Construction and Maintenance"
                        },
                        {
                            "Id": 48,
                            "ParentId": 39,
                            "Category": "Business and Industry/Customer Service"
                        },
                        {
                            "Id": 49,
                            "ParentId": 39,
                            "Category": "Business and Industry/E-Commerce"
                        },
                        {
                            "Id": 50,
                            "ParentId": 39,
                            "Category": "Business and Industry/Energy"
                        },
                        {
                            "Id": 51,
                            "ParentId": 39,
                            "Category": "Business and Industry/Industrial Goods and Services"
                        },
                        {
                            "Id": 52,
                            "ParentId": 39,
                            "Category": "Business and Industry/Marketing and Advertising"
                        },
                        {
                            "Id": 53,
                            "ParentId": 39,
                            "Category": "Business and Industry/Metals and Mining"
                        },
                        {
                            "Id": 54,
                            "ParentId": 39,
                            "Category": "Business and Industry/Publishing and Printing"
                        },
                        {
                            "Id": 55,
                            "ParentId": 39,
                            "Category": "Business and Industry/Real Estate"
                        },
                        {
                            "Id": 56,
                            "ParentId": 39,
                            "Category": "Business and Industry/Textiles and Nonwovens"
                        },
                        {
                            "Id": 57,
                            "ParentId": 39,
                            "Category": "Business and Industry/Transportation and Logistics"
                        },
                        {
                            "Id": 58,
                            "ParentId": 39,
                            "Category": "Business and Industry/Wholesale Trade"
                        },
                        {
                            "Id": 59,
                            "ParentId": null,
                            "Category": "Career and Education"
                        },
                        {
                            "Id": 60,
                            "ParentId": 59,
                            "Category": "Career and Education/Business Training"
                        },
                        {
                            "Id": 61,
                            "ParentId": 59,
                            "Category": "Career and Education/Education"
                        },
                        {
                            "Id": 62,
                            "ParentId": 59,
                            "Category": "Career and Education/Human Resources"
                        },
                        {
                            "Id": 63,
                            "ParentId": 59,
                            "Category": "Career and Education/Jobs and Employment"
                        },
                        {
                            "Id": 64,
                            "ParentId": 59,
                            "Category": "Career and Education/Universities and Colleges"
                        },
                        {
                            "Id": 65,
                            "ParentId": null,
                            "Category": "Computer and Electronics"
                        },
                        {
                            "Id": 66,
                            "ParentId": 65,
                            "Category": "Computer and Electronics/Computer Hardware"
                        },
                        {
                            "Id": 67,
                            "ParentId": 65,
                            "Category": "Computer and Electronics/Computer Security"
                        },
                        {
                            "Id": 68,
                            "ParentId": 65,
                            "Category": "Computer and Electronics/Consumer Electronics"
                        },
                        {
                            "Id": 69,
                            "ParentId": 65,
                            "Category": "Computer and Electronics/Graphics and Multimedia Tools"
                        },
                        {
                            "Id": 70,
                            "ParentId": 65,
                            "Category": "Computer and Electronics/Mobile Computing"
                        },
                        {
                            "Id": 71,
                            "ParentId": 65,
                            "Category": "Computer and Electronics/Networking"
                        },
                        {
                            "Id": 72,
                            "ParentId": 65,
                            "Category": "Computer and Electronics/Programming"
                        },
                        {
                            "Id": 73,
                            "ParentId": 65,
                            "Category": "Computer and Electronics/Software"
                        },
                        {
                            "Id": 74,
                            "ParentId": null,
                            "Category": "Finance"
                        },
                        {
                            "Id": 75,
                            "ParentId": 74,
                            "Category": "Finance/Banking"
                        },
                        {
                            "Id": 76,
                            "ParentId": 74,
                            "Category": "Finance/Credit, Loans and Mortgages"
                        },
                        {
                            "Id": 77,
                            "ParentId": 74,
                            "Category": "Finance/Financial Management"
                        },
                        {
                            "Id": 78,
                            "ParentId": 74,
                            "Category": "Finance/Grants and Scholarships"
                        },
                        {
                            "Id": 79,
                            "ParentId": 74,
                            "Category": "Finance/Insurance"
                        },
                        {
                            "Id": 80,
                            "ParentId": 74,
                            "Category": "Finance/Investing"
                        },
                        {
                            "Id": 81,
                            "ParentId": null,
                            "Category": "Food and Drink"
                        },
                        {
                            "Id": 82,
                            "ParentId": 81,
                            "Category": "Food and Drink/Beverages"
                        },
                        {
                            "Id": 83,
                            "ParentId": 81,
                            "Category": "Food and Drink/Catering"
                        },
                        {
                            "Id": 84,
                            "ParentId": 81,
                            "Category": "Food and Drink/Cooking and Recipes"
                        },
                        {
                            "Id": 85,
                            "ParentId": 81,
                            "Category": "Food and Drink/Food and Grocery Retailers"
                        },
                        {
                            "Id": 86,
                            "ParentId": 81,
                            "Category": "Food and Drink/Restaurants and Delivery"
                        },
                        {
                            "Id": 87,
                            "ParentId": 81,
                            "Category": "Food and Drink/Vegetarian and Vegan"
                        },
                        {
                            "Id": 88,
                            "ParentId": null,
                            "Category": "Gambling"
                        },
                        {
                            "Id": 89,
                            "ParentId": 88,
                            "Category": "Gambling/Bingo"
                        },
                        {
                            "Id": 90,
                            "ParentId": 88,
                            "Category": "Gambling/Casinos"
                        },
                        {
                            "Id": 91,
                            "ParentId": 88,
                            "Category": "Gambling/Lottery"
                        },
                        {
                            "Id": 92,
                            "ParentId": 88,
                            "Category": "Gambling/Poker"
                        },
                        {
                            "Id": 93,
                            "ParentId": 88,
                            "Category": "Gambling/Regulation and Organizations"
                        },
                        {
                            "Id": 94,
                            "ParentId": 88,
                            "Category": "Gambling/Sports"
                        },
                        {
                            "Id": 95,
                            "ParentId": null,
                            "Category": "Games"
                        },
                        {
                            "Id": 96,
                            "ParentId": 95,
                            "Category": "Games/Board and Card Games"
                        },
                        {
                            "Id": 97,
                            "ParentId": 95,
                            "Category": "Games/Miniatures"
                        },
                        {
                            "Id": 98,
                            "ParentId": 95,
                            "Category": "Games/Online"
                        },
                        {
                            "Id": 99,
                            "ParentId": 95,
                            "Category": "Games/Puzzles and Brainteasers"
                        },
                        {
                            "Id": 100,
                            "ParentId": 95,
                            "Category": "Games/Roleplaying"
                        },
                        {
                            "Id": 101,
                            "ParentId": 95,
                            "Category": "Games/Video Games"
                        },
                        {
                            "Id": 102,
                            "ParentId": null,
                            "Category": "Health"
                        },
                        {
                            "Id": 103,
                            "ParentId": 102,
                            "Category": "Health/Addictions"
                        },
                        {
                            "Id": 104,
                            "ParentId": 102,
                            "Category": "Health/Alternative and Natural Medicine"
                        },
                        {
                            "Id": 105,
                            "ParentId": 102,
                            "Category": "Health/Child Health"
                        },
                        {
                            "Id": 106,
                            "ParentId": 102,
                            "Category": "Health/Conditions and Diseases"
                        },
                        {
                            "Id": 107,
                            "ParentId": 102,
                            "Category": "Health/Dentistry"
                        },
                        {
                            "Id": 108,
                            "ParentId": 102,
                            "Category": "Health/Education and Resources"
                        },
                        {
                            "Id": 109,
                            "ParentId": 102,
                            "Category": "Health/Healthcare Industry"
                        },
                        {
                            "Id": 110,
                            "ParentId": 102,
                            "Category": "Health/Medicine"
                        },
                        {
                            "Id": 111,
                            "ParentId": 102,
                            "Category": "Health/Mens Health"
                        },
                        {
                            "Id": 112,
                            "ParentId": 102,
                            "Category": "Health/Mental Health"
                        },
                        {
                            "Id": 113,
                            "ParentId": 102,
                            "Category": "Health/Nutrition"
                        },
                        {
                            "Id": 114,
                            "ParentId": 102,
                            "Category": "Health/Pharmacy"
                        },
                        {
                            "Id": 115,
                            "ParentId": 102,
                            "Category": "Health/Products and Shopping"
                        },
                        {
                            "Id": 116,
                            "ParentId": 102,
                            "Category": "Health/Public Health and Safety"
                        },
                        {
                            "Id": 117,
                            "ParentId": 102,
                            "Category": "Health/Reproductive Health"
                        },
                        {
                            "Id": 118,
                            "ParentId": 102,
                            "Category": "Health/Senior Health"
                        },
                        {
                            "Id": 119,
                            "ParentId": 102,
                            "Category": "Health/Womens Health"
                        },
                        {
                            "Id": 120,
                            "ParentId": null,
                            "Category": "Home and Garden"
                        },
                        {
                            "Id": 121,
                            "ParentId": 120,
                            "Category": "Home and Garden/Gardening"
                        },
                        {
                            "Id": 122,
                            "ParentId": 120,
                            "Category": "Home and Garden/Home Improvement"
                        },
                        {
                            "Id": 123,
                            "ParentId": 120,
                            "Category": "Home and Garden/Interior Decor"
                        },
                        {
                            "Id": 124,
                            "ParentId": 120,
                            "Category": "Home and Garden/Moving and Relocating"
                        },
                        {
                            "Id": 125,
                            "ParentId": 120,
                            "Category": "Home and Garden/Nursery and Playroom"
                        },
                        {
                            "Id": 126,
                            "ParentId": null,
                            "Category": "Internet and Telecom"
                        },
                        {
                            "Id": 127,
                            "ParentId": 126,
                            "Category": "Internet and Telecom/Ad Network"
                        },
                        {
                            "Id": 128,
                            "ParentId": 126,
                            "Category": "Internet and Telecom/Chats and Forums"
                        },
                        {
                            "Id": 129,
                            "ParentId": 126,
                            "Category": "Internet and Telecom/Domain Names and Register"
                        },
                        {
                            "Id": 130,
                            "ParentId": 126,
                            "Category": "Internet and Telecom/Email"
                        },
                        {
                            "Id": 131,
                            "ParentId": 126,
                            "Category": "Internet and Telecom/File Sharing"
                        },
                        {
                            "Id": 132,
                            "ParentId": 126,
                            "Category": "Internet and Telecom/Search Engine"
                        },
                        {
                            "Id": 133,
                            "ParentId": 126,
                            "Category": "Internet and Telecom/Social Network"
                        },
                        {
                            "Id": 134,
                            "ParentId": 126,
                            "Category": "Internet and Telecom/Telecommunications"
                        },
                        {
                            "Id": 135,
                            "ParentId": 126,
                            "Category": "Internet and Telecom/Web Hosting"
                        },
                        {
                            "Id": 136,
                            "ParentId": null,
                            "Category": "Law and Government"
                        },
                        {
                            "Id": 137,
                            "ParentId": 136,
                            "Category": "Law and Government/Government"
                        },
                        {
                            "Id": 138,
                            "ParentId": 136,
                            "Category": "Law and Government/Immigration and Visas"
                        },
                        {
                            "Id": 139,
                            "ParentId": 136,
                            "Category": "Law and Government/Law"
                        },
                        {
                            "Id": 140,
                            "ParentId": 136,
                            "Category": "Law and Government/Military and Defense"
                        },
                        {
                            "Id": 141,
                            "ParentId": null,
                            "Category": "News and Media"
                        },
                        {
                            "Id": 142,
                            "ParentId": 141,
                            "Category": "News and Media/Business News"
                        },
                        {
                            "Id": 143,
                            "ParentId": 141,
                            "Category": "News and Media/College and University Press"
                        },
                        {
                            "Id": 144,
                            "ParentId": 141,
                            "Category": "News and Media/Magazines and E-Zines"
                        },
                        {
                            "Id": 145,
                            "ParentId": 141,
                            "Category": "News and Media/Newspapers"
                        },
                        {
                            "Id": 146,
                            "ParentId": 141,
                            "Category": "News and Media/Sports News"
                        },
                        {
                            "Id": 147,
                            "ParentId": 141,
                            "Category": "News and Media/Technology News"
                        },
                        {
                            "Id": 148,
                            "ParentId": 141,
                            "Category": "News and Media/Weather"
                        },
                        {
                            "Id": 149,
                            "ParentId": null,
                            "Category": "People and Society"
                        },
                        {
                            "Id": 150,
                            "ParentId": 149,
                            "Category": "People and Society/Crime and Prosecution"
                        },
                        {
                            "Id": 151,
                            "ParentId": 149,
                            "Category": "People and Society/Death"
                        },
                        {
                            "Id": 152,
                            "ParentId": 149,
                            "Category": "People and Society/Disabled and Special Needs"
                        },
                        {
                            "Id": 153,
                            "ParentId": 149,
                            "Category": "People and Society/Gay, Lesbian, and Bisexual"
                        },
                        {
                            "Id": 154,
                            "ParentId": 149,
                            "Category": "People and Society/Genealogy"
                        },
                        {
                            "Id": 155,
                            "ParentId": 149,
                            "Category": "People and Society/History"
                        },
                        {
                            "Id": 156,
                            "ParentId": 149,
                            "Category": "People and Society/Holidays"
                        },
                        {
                            "Id": 157,
                            "ParentId": 149,
                            "Category": "People and Society/Philanthropy"
                        },
                        {
                            "Id": 158,
                            "ParentId": 149,
                            "Category": "People and Society/Philosophy"
                        },
                        {
                            "Id": 159,
                            "ParentId": 149,
                            "Category": "People and Society/Relationships and Dating"
                        },
                        {
                            "Id": 160,
                            "ParentId": 149,
                            "Category": "People and Society/Religion and Spirituality"
                        },
                        {
                            "Id": 161,
                            "ParentId": 149,
                            "Category": "People and Society/Womens Interests"
                        },
                        {
                            "Id": 162,
                            "ParentId": null,
                            "Category": "Pets and Animals"
                        },
                        {
                            "Id": 163,
                            "ParentId": 162,
                            "Category": "Pets and Animals/Animal Products and Service"
                        },
                        {
                            "Id": 164,
                            "ParentId": 162,
                            "Category": "Pets and Animals/Birds"
                        },
                        {
                            "Id": 165,
                            "ParentId": 162,
                            "Category": "Pets and Animals/Fish and Aquaria"
                        },
                        {
                            "Id": 166,
                            "ParentId": 162,
                            "Category": "Pets and Animals/Horses"
                        },
                        {
                            "Id": 167,
                            "ParentId": 162,
                            "Category": "Pets and Animals/Pets"
                        },
                        {
                            "Id": 168,
                            "ParentId": null,
                            "Category": "Recreation and Hobbies"
                        },
                        {
                            "Id": 169,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Antiques"
                        },
                        {
                            "Id": 170,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Camps"
                        },
                        {
                            "Id": 171,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Climbing"
                        },
                        {
                            "Id": 172,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Collecting"
                        },
                        {
                            "Id": 173,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Crafts"
                        },
                        {
                            "Id": 174,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Models"
                        },
                        {
                            "Id": 175,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Nudism"
                        },
                        {
                            "Id": 176,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Outdoors"
                        },
                        {
                            "Id": 177,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Scouting"
                        },
                        {
                            "Id": 178,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Theme Parks"
                        },
                        {
                            "Id": 179,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Tobacco"
                        },
                        {
                            "Id": 180,
                            "ParentId": 168,
                            "Category": "Recreation and Hobbies/Weapons"
                        },
                        {
                            "Id": 181,
                            "ParentId": null,
                            "Category": "Reference"
                        },
                        {
                            "Id": 182,
                            "ParentId": 181,
                            "Category": "Reference/Archives"
                        },
                        {
                            "Id": 183,
                            "ParentId": 181,
                            "Category": "Reference/Ask An Expert"
                        },
                        {
                            "Id": 184,
                            "ParentId": 181,
                            "Category": "Reference/Dictionaries and Encyclopedias"
                        },
                        {
                            "Id": 185,
                            "ParentId": 181,
                            "Category": "Reference/Directories"
                        },
                        {
                            "Id": 186,
                            "ParentId": 181,
                            "Category": "Reference/Libraries and Museums"
                        },
                        {
                            "Id": 187,
                            "ParentId": 181,
                            "Category": "Reference/Maps"
                        },
                        {
                            "Id": 188,
                            "ParentId": null,
                            "Category": "Science"
                        },
                        {
                            "Id": 189,
                            "ParentId": 188,
                            "Category": "Science/Agriculture"
                        },
                        {
                            "Id": 190,
                            "ParentId": 188,
                            "Category": "Science/Astronomy"
                        },
                        {
                            "Id": 191,
                            "ParentId": 188,
                            "Category": "Science/Biology"
                        },
                        {
                            "Id": 192,
                            "ParentId": 188,
                            "Category": "Science/Chemistry"
                        },
                        {
                            "Id": 193,
                            "ParentId": 188,
                            "Category": "Science/Earth"
                        },
                        {
                            "Id": 194,
                            "ParentId": 188,
                            "Category": "Sciences"
                        },
                        {
                            "Id": 195,
                            "ParentId": 188,
                            "Category": "Science/Educational Resources"
                        },
                        {
                            "Id": 196,
                            "ParentId": 188,
                            "Category": "Science/Engineering and Technology"
                        },
                        {
                            "Id": 197,
                            "ParentId": 188,
                            "Category": "Science/Environment"
                        },
                        {
                            "Id": 198,
                            "ParentId": 188,
                            "Category": "Science/Instruments and Supplies"
                        },
                        {
                            "Id": 199,
                            "ParentId": 188,
                            "Category": "Science/Math"
                        },
                        {
                            "Id": 200,
                            "ParentId": 188,
                            "Category": "Science/Physics"
                        },
                        {
                            "Id": 201,
                            "ParentId": 188,
                            "Category": "Science/Social Sciences"
                        },
                        {
                            "Id": 202,
                            "ParentId": null,
                            "Category": "Shopping"
                        },
                        {
                            "Id": 203,
                            "ParentId": 202,
                            "Category": "Shopping/Antiques and Collectibles"
                        },
                        {
                            "Id": 204,
                            "ParentId": 202,
                            "Category": "Shopping/Auctions"
                        },
                        {
                            "Id": 205,
                            "ParentId": 202,
                            "Category": "Shopping/Children"
                        },
                        {
                            "Id": 206,
                            "ParentId": 202,
                            "Category": "Shopping/Classifieds"
                        },
                        {
                            "Id": 207,
                            "ParentId": 202,
                            "Category": "Shopping/Clothing"
                        },
                        {
                            "Id": 208,
                            "ParentId": 202,
                            "Category": "Shopping/Consumer Electronics"
                        },
                        {
                            "Id": 209,
                            "ParentId": 202,
                            "Category": "Shopping/Coupons"
                        },
                        {
                            "Id": 210,
                            "ParentId": 202,
                            "Category": "Shopping/Ethnic and Regional"
                        },
                        {
                            "Id": 211,
                            "ParentId": 202,
                            "Category": "Shopping/Flowers"
                        },
                        {
                            "Id": 212,
                            "ParentId": 202,
                            "Category": "Shopping/Furniture"
                        },
                        {
                            "Id": 213,
                            "ParentId": 202,
                            "Category": "Shopping/General Merchandise"
                        },
                        {
                            "Id": 214,
                            "ParentId": 202,
                            "Category": "Shopping/Gifts"
                        },
                        {
                            "Id": 215,
                            "ParentId": 202,
                            "Category": "Shopping/Home and Garden"
                        },
                        {
                            "Id": 216,
                            "ParentId": 202,
                            "Category": "Shopping/Jewelry"
                        },
                        {
                            "Id": 217,
                            "ParentId": 202,
                            "Category": "Shopping/Music"
                        },
                        {
                            "Id": 218,
                            "ParentId": 202,
                            "Category": "Shopping/Office Products"
                        },
                        {
                            "Id": 219,
                            "ParentId": 202,
                            "Category": "Shopping/Publications"
                        },
                        {
                            "Id": 220,
                            "ParentId": 202,
                            "Category": "Shopping/Sports"
                        },
                        {
                            "Id": 221,
                            "ParentId": 202,
                            "Category": "Shopping/Weddings"
                        },
                        {
                            "Id": 222,
                            "ParentId": null,
                            "Category": "Sports"
                        },
                        {
                            "Id": 223,
                            "ParentId": 222,
                            "Category": "Sports/Baseball"
                        },
                        {
                            "Id": 224,
                            "ParentId": 222,
                            "Category": "Sports/Basketball"
                        },
                        {
                            "Id": 225,
                            "ParentId": 222,
                            "Category": "Sports/Boxing"
                        },
                        {
                            "Id": 226,
                            "ParentId": 222,
                            "Category": "Sports/Cycling and Biking"
                        },
                        {
                            "Id": 227,
                            "ParentId": 222,
                            "Category": "Sports/Equestrian"
                        },
                        {
                            "Id": 228,
                            "ParentId": 222,
                            "Category": "Sports/Extreme Sports"
                        },
                        {
                            "Id": 229,
                            "ParentId": 222,
                            "Category": "Sports/Fantasy Sports"
                        },
                        {
                            "Id": 230,
                            "ParentId": 222,
                            "Category": "Sports/Fishing"
                        },
                        {
                            "Id": 231,
                            "ParentId": 222,
                            "Category": "Sports/Football"
                        },
                        {
                            "Id": 232,
                            "ParentId": 222,
                            "Category": "Sports/Golf"
                        },
                        {
                            "Id": 233,
                            "ParentId": 222,
                            "Category": "Sports/Martial Arts"
                        },
                        {
                            "Id": 234,
                            "ParentId": 222,
                            "Category": "Sports/Rugby"
                        },
                        {
                            "Id": 235,
                            "ParentId": 222,
                            "Category": "Sports/Running"
                        },
                        {
                            "Id": 236,
                            "ParentId": 222,
                            "Category": "Sports/Soccer"
                        },
                        {
                            "Id": 237,
                            "ParentId": 222,
                            "Category": "Sports/Tennis"
                        },
                        {
                            "Id": 238,
                            "ParentId": 222,
                            "Category": "Sports/Volleyball"
                        },
                        {
                            "Id": 239,
                            "ParentId": 222,
                            "Category": "Sports/Water Sports"
                        },
                        {
                            "Id": 240,
                            "ParentId": 222,
                            "Category": "Sports/Winter Sports"
                        },
                        {
                            "Id": 241,
                            "ParentId": null,
                            "Category": "Travel"
                        },
                        {
                            "Id": 242,
                            "ParentId": 241,
                            "Category": "Travel/Accommodation and Hotels"
                        },
                        {
                            "Id": 243,
                            "ParentId": 241,
                            "Category": "Travel/Airlines and Airports"
                        },
                        {
                            "Id": 244,
                            "ParentId": 241,
                            "Category": "Travel/Roads and Highways"
                        },
                        {
                            "Id": 245,
                            "ParentId": 241,
                            "Category": "Travel/Tourism"
                        },
                        {
                            "Id": 246,
                            "ParentId": null,
                            "Category": "Adult"
                        },
                        {
                            "Id": 253,
                            "ParentId": null,
                            "Category": "Unknown Category"
                        },
                        {
                            "Id": 254,
                            "ParentId": null,
                            "Category": "Blocked"
                        },
                        {
                            "Id": 255,
                            "ParentId": 188,
                            "Category": "Science/Earth Sciences"
                        },
                        {
                            "Id": 256,
                            "ParentId": 34,
                            "Category": "Books and Literature/E-Books"
                        }
                    ]
                }
            }


        },

        getBuyer: function () {

            return{
                Id: 141,
                Name: "BidTheatre",
                NoUserMatchingThreshold: 76.3,
                UserMatchingThreshold: 100,
                AuctionType: 1,
                GeoFilterId: null,
                SiteProtection: null,
                OnlyRunPrivateDeals: false,
                ApprovedCategories: [
                    {
                        Id: 1,
                        ParentId: null,
                        Category: "Arts and Entertainment"
                    },
                    {
                        Id: 4,
                        ParentId: 1,
                        Category: "Arts and Entertainment/Awards"
                    }
                ],
                RejectedCategories: [
                    {
                        Id: 246,
                        ParentId: null,
                        Category: "Adult"
                    },
                    {
                        Id: 5,
                        ParentId: 1,
                        Category: "Arts and Entertainment/Celebrities and Entertainment News"
                    }
                ],
                BidRequestSettings: {
                    Id: 33,
                    IncludeSiteId: true,
                    IncludeSiteName: true,
                    IncludePublisherName: false,
                    IncludeSiteContentCategories: true,
                    IncludePageContentCategories: true,
                    IncludeIpAddress: false,
                    IncludeUserAgentString: false,
                    IncludeCountry: false,
                    FixedPageUrl: '',
                    IncludePageUrl: 0
                },
                RtbCreativeAttributeIds: []
            }
        }




    }

})


