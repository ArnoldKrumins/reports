/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.factory('fakeDataService',function(){

    return{

        getComponents: function(){
              return [
                  {name:'Turn', settingone:'100',settingtwo:'80',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Sociomantic', settingone:'35',settingtwo:'60',settingthree:'Second Higest Bid',settingfour:'Lund'},
                  {name:'Digilant', settingone:'80',settingtwo:'70',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Delta Projects', settingone:'86',settingtwo:'86',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'BidTheatre', settingone:'55',settingtwo:'78',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Appnexus', settingone:'22',settingtwo:'66',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Adform', settingone:'88',settingtwo:'27',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'BidSwitch', settingone:'54',settingtwo:'89',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'MediaMath', settingone:'54',settingtwo:'89',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Index (by Casale Media)', settingone:'54',settingtwo:'89',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'BidSwitch US', settingone:'54',settingtwo:'89',settingthree:'Second Higest Bid',settingfour:'Stockholm'},
                  {name:'MediaMath US', settingone:'54',settingtwo:'89',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'DoubleClick Bid Manager US', settingone:'54',settingtwo:'89',settingthree:'Second Higest Bid',settingfour:'Stockholm'},
                  {name:'BidTheatre - Blind', settingone:'54',settingtwo:'89',settingthree:'Second Higest Bid',settingfour:'Stockholm'}
              ];
        },


        getAdvertiserCategories: function(){

            return [
                {value:'0', name:'Adult'},
                {value:'1', name:'Arts and Entertainment/Architecture'},
                {value:'2', name:'Arts and Entertainment/Awards'},
                {value:'3', name:'Arts and Entertainment/Celebrities and Entertainment News'},
                {value:'4', name:'Arts and Entertainment/Animation and Comics'},
                {value:'5', name:'Arts and Entertainment/Fashion and Modeling'},
                {value:'6', name:'Arts and Entertainment/Humor'},
                {value:'7', name:'Arts and Entertainment/Movies'},
                {value:'8', name:'Arts and Entertainment/Music and Audio'},
                {value:'9', name:'Arts and Entertainment/Performing Arts'},
                {value:'10', name:'Arts and Entertainment/Photography'},

            ]

        },

        getPublishers: function(){

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


        getCategories: function(){

               return {
                data: [
                {
                    "Id": 1,
                    "Category": "Arts and Entertainment"
                },
                {
                    "Id": 2,
                    "Category": "Arts and Entertainment/Animation and Comics"
                },
                {
                    "Id": 3,
                    "Category": "Arts and Entertainment/Architecture"
                },
                {
                    "Id": 4,
                    "Category": "Arts and Entertainment/Awards"
                },
                {
                    "Id": 5,
                    "Category": "Arts and Entertainment/Celebrities and Entertainment News"
                },
                {
                    "Id": 6,
                    "Category": "Arts and Entertainment/Fashion and Modeling"
                },
                {
                    "Id": 7,
                    "Category": "Arts and Entertainment/Humor"
                },
                {
                    "Id": 8,
                    "Category": "Arts and Entertainment/Movies"
                },
                {
                    "Id": 9,
                    "Category": "Arts and Entertainment/Music and Audio"
                },
                {
                    "Id": 10,
                    "Category": "Arts and Entertainment/Performing Arts"
                },
                {
                    "Id": 11,
                    "Category": "Arts and Entertainment/Photography"
                },
                {
                    "Id": 12,
                    "Category": "Arts and Entertainment/TV and Video"
                },
                {
                    "Id": 13,
                    "Category": "Arts and Entertainment/Visual Arts and Design"
                },
                {
                    "Id": 14,
                    "Category": "Arts and Entertainment/Web Design"
                },
                {
                    "Id": 15,
                    "Category": "Autos and Vehicles"
                },
                {
                    "Id": 16,
                    "Category": "Autos and Vehicles/Automotive Industry"
                },
                {
                    "Id": 17,
                    "Category": "Autos and Vehicles/Automotive News"
                },
                {
                    "Id": 18,
                    "Category": "Autos and Vehicles/Aviation"
                },
                {
                    "Id": 19,
                    "Category": "Autos and Vehicles/Boating"
                },
                {
                    "Id": 20,
                    "Category": "Autos and Vehicles/Car Buying"
                },
                {
                    "Id": 21,
                    "Category": "Autos and Vehicles/Car Rentals"
                },
                {
                    "Id": 22,
                    "Category": "Autos and Vehicles/Makes and Models"
                },
                {
                    "Id": 23,
                    "Category": "Autos and Vehicles/Motorcycles"
                },
                {
                    "Id": 24,
                    "Category": "Autos and Vehicles/Motorsports"
                },
                {
                    "Id": 25,
                    "Category": "Autos and Vehicles/Trains and Railroads"
                },
                {
                    "Id": 26,
                    "Category": "Beauty and Fitness"
                },
                {
                    "Id": 27,
                    "Category": "Beauty and Fitness/Beauty"
                },
                {
                    "Id": 28,
                    "Category": "Beauty and Fitness/Bodyart"
                },
                {
                    "Id": 29,
                    "Category": "Beauty and Fitness/Cosmetics"
                },
                {
                    "Id": 30,
                    "Category": "Beauty and Fitness/Fitness"
                },
                {
                    "Id": 31,
                    "Category": "Beauty and Fitness/Hair"
                },
                {
                    "Id": 32,
                    "Category": "Beauty and Fitness/Skin Care"
                },
                {
                    "Id": 33,
                    "Category": "Beauty and Fitness/Weight Loss"
                },
                {
                    "Id": 34,
                    "Category": "Books and Literature"
                },
                {
                    "Id": 35,
                    "Category": "Books and Literature/Book Retailers"
                },
                {
                    "Id": 36,
                    "Category": "Books and Literature/E Books"
                },
                {
                    "Id": 37,
                    "Category": "Books and Literature/Folklore"
                },
                {
                    "Id": 38,
                    "Category": "Books and Literature/Guides and Reviews"
                },
                {
                    "Id": 39,
                    "Category": "Business and Industry"
                },
                {
                    "Id": 40,
                    "Category": "Business and Industry/Accounting"
                },
                {
                    "Id": 41,
                    "Category": "Business and Industry/Aerospace and Defence"
                },
                {
                    "Id": 42,
                    "Category": "Business and Industry/Agriculture and Forestry"
                },
                {
                    "Id": 43,
                    "Category": "Business and Industry/Associations"
                },
                {
                    "Id": 44,
                    "Category": "Business and Industry/Biotechnology and Pharmaceuticals"
                },
                {
                    "Id": 45,
                    "Category": "Business and Industry/Business Services"
                },
                {
                    "Id": 46,
                    "Category": "Business and Industry/Chemicals"
                },
                {
                    "Id": 47,
                    "Category": "Business and Industry/Construction and Maintenance"
                },
                {
                    "Id": 48,
                    "Category": "Business and Industry/Customer Service"
                },
                {
                    "Id": 49,
                    "Category": "Business and Industry/E-Commerce"
                },
                {
                    "Id": 50,
                    "Category": "Business and Industry/Energy"
                },
                {
                    "Id": 51,
                    "Category": "Business and Industry/Industrial Goods and Services"
                },
                {
                    "Id": 52,
                    "Category": "Business and Industry/Marketing and Advertising"
                },
                {
                    "Id": 53,
                    "Category": "Business and Industry/Metals and Mining"
                },
                {
                    "Id": 54,
                    "Category": "Business and Industry/Publishing and Printing"
                },
                {
                    "Id": 55,
                    "Category": "Business and Industry/Real Estate"
                },
                {
                    "Id": 56,
                    "Category": "Business and Industry/Textiles and Nonwovens"
                },
                {
                    "Id": 57,
                    "Category": "Business and Industry/Transportation and Logistics"
                },
                {
                    "Id": 58,
                    "Category": "Business and Industry/Wholesale Trade"
                },
                {
                    "Id": 59,
                    "Category": "Career and Education"
                },
                {
                    "Id": 60,
                    "Category": "Career and Education/Business Training"
                },
                {
                    "Id": 61,
                    "Category": "Career and Education/Education"
                },
                {
                    "Id": 62,
                    "Category": "Career and Education/Human Resources"
                },
                {
                    "Id": 63,
                    "Category": "Career and Education/Jobs and Employment"
                },
                {
                    "Id": 64,
                    "Category": "Career and Education/Universities and Colleges"
                },
                {
                    "Id": 65,
                    "Category": "Computer and Electronics"
                },
                {
                    "Id": 66,
                    "Category": "Computer and Electronics/Computer Hardware"
                },
                {
                    "Id": 67,
                    "Category": "Computer and Electronics/Computer Security"
                },
                {
                    "Id": 68,
                    "Category": "Computer and Electronics/Consumer Electronics"
                },
                {
                    "Id": 69,
                    "Category": "Computer and Electronics/Graphics and Multimedia Tools"
                },
                {
                    "Id": 70,
                    "Category": "Computer and Electronics/Mobile Computing"
                },
                {
                    "Id": 71,
                    "Category": "Computer and Electronics/Networking"
                },
                {
                    "Id": 72,
                    "Category": "Computer and Electronics/Programming"
                },
                {
                    "Id": 73,
                    "Category": "Computer and Electronics/Software"
                },
                {
                    "Id": 74,
                    "Category": "Finance"
                },
                {
                    "Id": 75,
                    "Category": "Finance/Banking"
                },
                {
                    "Id": 76,
                    "Category": "Finance/Credit, Loans and Mortgages"
                },
                {
                    "Id": 77,
                    "Category": "Finance/Financial Management"
                },
                {
                    "Id": 78,
                    "Category": "Finance/Grants and Scholarships"
                },
                {
                    "Id": 79,
                    "Category": "Finance/Insurance"
                },
                {
                    "Id": 80,
                    "Category": "Finance/Investing"
                },
                {
                    "Id": 81,
                    "Category": "Food and Drink"
                },
                {
                    "Id": 82,
                    "Category": "Food and Drink/Beverages"
                },
                {
                    "Id": 83,
                    "Category": "Food and Drink/Catering"
                },
                {
                    "Id": 84,
                    "Category": "Food and Drink/Cooking and Recipes"
                },
                {
                    "Id": 85,
                    "Category": "Food and Drink/Food and Grocery Retailers"
                },
                {
                    "Id": 86,
                    "Category": "Food and Drink/Restaurants and Delivery"
                },
                {
                    "Id": 87,
                    "Category": "Food and Drink/Vegetarian and Vegan"
                },
                {
                    "Id": 88,
                    "Category": "Gambling"
                },
                {
                    "Id": 89,
                    "Category": "Gambling/Bingo"
                },
                {
                    "Id": 90,
                    "Category": "Gambling/Casinos"
                },
                {
                    "Id": 91,
                    "Category": "Gambling/Lottery"
                },
                {
                    "Id": 92,
                    "Category": "Gambling/Poker"
                },
                {
                    "Id": 93,
                    "Category": "Gambling/Regulation and Organizations"
                },
                {
                    "Id": 94,
                    "Category": "Gambling/Sports"
                },
                {
                    "Id": 95,
                    "Category": "Games"
                },
                {
                    "Id": 96,
                    "Category": "Games/Board and Card Games"
                },
                {
                    "Id": 97,
                    "Category": "Games/Miniatures"
                },
                {
                    "Id": 98,
                    "Category": "Games/Online"
                },
                {
                    "Id": 99,
                    "Category": "Games/Puzzles and Brainteasers"
                },
                {
                    "Id": 100,
                    "Category": "Games/Roleplaying"
                },
                {
                    "Id": 101,
                    "Category": "Games/Video Games"
                },
                {
                    "Id": 102,
                    "Category": "Health"
                },
                {
                    "Id": 103,
                    "Category": "Health/Addictions"
                },
                {
                    "Id": 104,
                    "Category": "Health/Alternative and Natural Medicine"
                },
                {
                    "Id": 105,
                    "Category": "Health/Child Health"
                },
                {
                    "Id": 106,
                    "Category": "Health/Conditions and Diseases"
                },
                {
                    "Id": 107,
                    "Category": "Health/Dentistry"
                },
                {
                    "Id": 108,
                    "Category": "Health/Education and Resources"
                },
                {
                    "Id": 109,
                    "Category": "Health/Healthcare Industry"
                },
                {
                    "Id": 110,
                    "Category": "Health/Medicine"
                },
                {
                    "Id": 111,
                    "Category": "Health/Mens Health"
                },
                {
                    "Id": 112,
                    "Category": "Health/Mental Health"
                },
                {
                    "Id": 113,
                    "Category": "Health/Nutrition"
                },
                {
                    "Id": 114,
                    "Category": "Health/Pharmacy"
                },
                {
                    "Id": 115,
                    "Category": "Health/Products and Shopping"
                },
                {
                    "Id": 116,
                    "Category": "Health/Public Health and Safety"
                },
                {
                    "Id": 117,
                    "Category": "Health/Reproductive Health"
                },
                {
                    "Id": 118,
                    "Category": "Health/Senior Health"
                },
                {
                    "Id": 119,
                    "Category": "Health/Womens Health"
                },
                {
                    "Id": 120,
                    "Category": "Home and Garden"
                },
                {
                    "Id": 121,
                    "Category": "Home and Garden/Gardening"
                },
                {
                    "Id": 122,
                    "Category": "Home and Garden/Home Improvement"
                },
                {
                    "Id": 123,
                    "Category": "Home and Garden/Interior Decor"
                },
                {
                    "Id": 124,
                    "Category": "Home and Garden/Moving and Relocating"
                },
                {
                    "Id": 125,
                    "Category": "Home and Garden/Nursery and Playroom"
                },
                {
                    "Id": 126,
                    "Category": "Internet and Telecom"
                },
                {
                    "Id": 127,
                    "Category": "Internet and Telecom/Ad Network"
                },
                {
                    "Id": 128,
                    "Category": "Internet and Telecom/Chats and Forums"
                },
                {
                    "Id": 129,
                    "Category": "Internet and Telecom/Domain Names and Register"
                },
                {
                    "Id": 130,
                    "Category": "Internet and Telecom/Email"
                },
                {
                    "Id": 131,
                    "Category": "Internet and Telecom/File Sharing"
                },
                {
                    "Id": 132,
                    "Category": "Internet and Telecom/Search Engine"
                },
                {
                    "Id": 133,
                    "Category": "Internet and Telecom/Social Network"
                },
                {
                    "Id": 134,
                    "Category": "Internet and Telecom/Telecommunications"
                },
                {
                    "Id": 135,
                    "Category": "Internet and Telecom/Web Hosting"
                },
                {
                    "Id": 136,
                    "Category": "Law and Government"
                },
                {
                    "Id": 137,
                    "Category": "Law and Government/Government"
                },
                {
                    "Id": 138,
                    "Category": "Law and Government/Immigration and Visas"
                },
                {
                    "Id": 139,
                    "Category": "Law and Government/Law"
                },
                {
                    "Id": 140,
                    "Category": "Law and Government/Military and Defense"
                },
                {
                    "Id": 141,
                    "Category": "News and Media"
                },
                {
                    "Id": 142,
                    "Category": "News and Media/Business News"
                },
                {
                    "Id": 143,
                    "Category": "News and Media/College and University Press"
                },
                {
                    "Id": 144,
                    "Category": "News and Media/Magazines and E-Zines"
                },
                {
                    "Id": 145,
                    "Category": "News and Media/Newspapers"
                },
                {
                    "Id": 146,
                    "Category": "News and Media/Sports News"
                },
                {
                    "Id": 147,
                    "Category": "News and Media/Technology News"
                },
                {
                    "Id": 148,
                    "Category": "News and Media/Weather"
                },
                {
                    "Id": 149,
                    "Category": "People and Society"
                },
                {
                    "Id": 150,
                    "Category": "People and Society/Crime and Prosecution"
                },
                {
                    "Id": 151,
                    "Category": "People and Society/Death"
                },
                {
                    "Id": 152,
                    "Category": "People and Society/Disabled and Special Needs"
                },
                {
                    "Id": 153,
                    "Category": "People and Society/Gay, Lesbian, and Bisexual"
                },
                {
                    "Id": 154,
                    "Category": "People and Society/Genealogy"
                },
                {
                    "Id": 155,
                    "Category": "People and Society/History"
                },
                {
                    "Id": 156,
                    "Category": "People and Society/Holidays"
                },
                {
                    "Id": 157,
                    "Category": "People and Society/Philanthropy"
                },
                {
                    "Id": 158,
                    "Category": "People and Society/Philosophy"
                },
                {
                    "Id": 159,
                    "Category": "People and Society/Relationships and Dating"
                },
                {
                    "Id": 160,
                    "Category": "People and Society/Religion and Spirituality"
                },
                {
                    "Id": 161,
                    "Category": "People and Society/Womens Interests"
                },
                {
                    "Id": 162,
                    "Category": "Pets and Animals"
                },
                {
                    "Id": 163,
                    "Category": "Pets and Animals/Animal Products and Service"
                },
                {
                    "Id": 164,
                    "Category": "Pets and Animals/Birds"
                },
                {
                    "Id": 165,
                    "Category": "Pets and Animals/Fish and Aquaria"
                },
                {
                    "Id": 166,
                    "Category": "Pets and Animals/Horses"
                },
                {
                    "Id": 167,
                    "Category": "Pets and Animals/Pets"
                },
                {
                    "Id": 168,
                    "Category": "Recreation and Hobbies"
                },
                {
                    "Id": 169,
                    "Category": "Recreation and Hobbies/Antiques"
                },
                {
                    "Id": 170,
                    "Category": "Recreation and Hobbies/Camps"
                },
                {
                    "Id": 171,
                    "Category": "Recreation and Hobbies/Climbing"
                },
                {
                    "Id": 172,
                    "Category": "Recreation and Hobbies/Collecting"
                },
                {
                    "Id": 173,
                    "Category": "Recreation and Hobbies/Crafts"
                },
                {
                    "Id": 174,
                    "Category": "Recreation and Hobbies/Models"
                },
                {
                    "Id": 175,
                    "Category": "Recreation and Hobbies/Nudism"
                },
                {
                    "Id": 176,
                    "Category": "Recreation and Hobbies/Outdoors"
                },
                {
                    "Id": 177,
                    "Category": "Recreation and Hobbies/Scouting"
                },
                {
                    "Id": 178,
                    "Category": "Recreation and Hobbies/Theme Parks"
                },
                {
                    "Id": 179,
                    "Category": "Recreation and Hobbies/Tobacco"
                },
                {
                    "Id": 180,
                    "Category": "Recreation and Hobbies/Weapons"
                },
                {
                    "Id": 181,
                    "Category": "Reference"
                },
                {
                    "Id": 182,
                    "Category": "Reference/Archives"
                },
                {
                    "Id": 183,
                    "Category": "Reference/Ask An Expert"
                },
                {
                    "Id": 184,
                    "Category": "Reference/Dictionaries and Encyclopedias"
                },
                {
                    "Id": 185,
                    "Category": "Reference/Directories"
                },
                {
                    "Id": 186,
                    "Category": "Reference/Libraries and Museums"
                },
                {
                    "Id": 187,
                    "Category": "Reference/Maps"
                },
                {
                    "Id": 188,
                    "Category": "Science"
                },
                {
                    "Id": 189,
                    "Category": "Science/Agriculture"
                },
                {
                    "Id": 190,
                    "Category": "Science/Astronomy"
                },
                {
                    "Id": 191,
                    "Category": "Science/Biology"
                },
                {
                    "Id": 192,
                    "Category": "Science/Chemistry"
                },
                {
                    "Id": 193,
                    "Category": "Science/Earth"
                },
                {
                    "Id": 194,
                    "Category": "Sciences"
                },
                {
                    "Id": 195,
                    "Category": "Science/Educational Resources"
                },
                {
                    "Id": 196,
                    "Category": "Science/Engineering and Technology"
                },
                {
                    "Id": 197,
                    "Category": "Science/Environment"
                },
                {
                    "Id": 198,
                    "Category": "Science/Instruments and Supplies"
                },
                {
                    "Id": 199,
                    "Category": "Science/Math"
                },
                {
                    "Id": 200,
                    "Category": "Science/Physics"
                },
                {
                    "Id": 201,
                    "Category": "Science/Social Sciences"
                },
                {
                    "Id": 202,
                    "Category": "Shopping"
                },
                {
                    "Id": 203,
                    "Category": "Shopping/Antiques and Collectibles"
                },
                {
                    "Id": 204,
                    "Category": "Shopping/Auctions"
                },
                {
                    "Id": 205,
                    "Category": "Shopping/Children"
                },
                {
                    "Id": 206,
                    "Category": "Shopping/Classifieds"
                },
                {
                    "Id": 207,
                    "Category": "Shopping/Clothing"
                },
                {
                    "Id": 208,
                    "Category": "Shopping/Consumer Electronics"
                },
                {
                    "Id": 209,
                    "Category": "Shopping/Coupons"
                },
                {
                    "Id": 210,
                    "Category": "Shopping/Ethnic and Regional"
                },
                {
                    "Id": 211,
                    "Category": "Shopping/Flowers"
                },
                {
                    "Id": 212,
                    "Category": "Shopping/Furniture"
                },
                {
                    "Id": 213,
                    "Category": "Shopping/General Merchandise"
                },
                {
                    "Id": 214,
                    "Category": "Shopping/Gifts"
                },
                {
                    "Id": 215,
                    "Category": "Shopping/Home and Garden"
                },
                {
                    "Id": 216,
                    "Category": "Shopping/Jewelry"
                },
                {
                    "Id": 217,
                    "Category": "Shopping/Music"
                },
                {
                    "Id": 218,
                    "Category": "Shopping/Office Products"
                },
                {
                    "Id": 219,
                    "Category": "Shopping/Publications"
                },
                {
                    "Id": 220,
                    "Category": "Shopping/Sports"
                },
                {
                    "Id": 221,
                    "Category": "Shopping/Weddings"
                },
                {
                    "Id": 222,
                    "Category": "Sports"
                },
                {
                    "Id": 223,
                    "Category": "Sports/Baseball"
                },
                {
                    "Id": 224,
                    "Category": "Sports/Basketball"
                },
                {
                    "Id": 225,
                    "Category": "Sports/Boxing"
                },
                {
                    "Id": 226,
                    "Category": "Sports/Cycling and Biking"
                },
                {
                    "Id": 227,
                    "Category": "Sports/Equestrian"
                },
                {
                    "Id": 228,
                    "Category": "Sports/Extreme Sports"
                },
                {
                    "Id": 229,
                    "Category": "Sports/Fantasy Sports"
                },
                {
                    "Id": 230,
                    "Category": "Sports/Fishing"
                },
                {
                    "Id": 231,
                    "Category": "Sports/Football"
                },
                {
                    "Id": 232,
                    "Category": "Sports/Golf"
                },
                {
                    "Id": 233,
                    "Category": "Sports/Martial Arts"
                },
                {
                    "Id": 234,
                    "Category": "Sports/Rugby"
                },
                {
                    "Id": 235,
                    "Category": "Sports/Running"
                },
                {
                    "Id": 236,
                    "Category": "Sports/Soccer"
                },
                {
                    "Id": 237,
                    "Category": "Sports/Tennis"
                },
                {
                    "Id": 238,
                    "Category": "Sports/Volleyball"
                },
                {
                    "Id": 239,
                    "Category": "Sports/Water Sports"
                },
                {
                    "Id": 240,
                    "Category": "Sports/Winter Sports"
                },
                {
                    "Id": 241,
                    "Category": "Travel"
                },
                {
                    "Id": 242,
                    "Category": "Travel/Accommodation and Hotels"
                },
                {
                    "Id": 243,
                    "Category": "Travel/Airlines and Airports"
                },
                {
                    "Id": 244,
                    "Category": "Travel/Roads and Highways"
                },
                {
                    "Id": 245,
                    "Category": "Travel/Tourism"
                },
                {
                    "Id": 246,
                    "Category": "Adult"
                },
                {
                    "Id": 253,
                    "Category": "Unknown Category"
                },
                {
                    "Id": 254,
                    "Category": "Blocked"
                },
                {
                    "Id": 255,
                    "Category": "Science/Earth Sciences"
                },
                {
                    "Id": 256,
                    "Category": "Books and Literature/E-Books"
                }
            ]}

            }



        }


})


