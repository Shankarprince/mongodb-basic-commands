// db.zen.insertMany();
// to insert database content for querying
const zen =
    [
        {
            "october-first-half": [
                {
                    "topics": [
                        "CSS",
                        "Responsive Web Design",
                        "Bootstrap",
                        "Document Object Model",
                        "Document vs Window",
                        "Callback",
                        "Promise"
                    ]
                },
                {
                    "tasks": [
                        "Responsive Web Design",
                        "Pagination",
                        "HTML Forms",
                        "Calculator",
                        "Callback Hell"
                    ]
                },
                {
                    "company-drives": [
                        "Accenture",
                        "Wipro",
                        "HCL",
                        "Google"
                    ]
                },
                {
                    "students-appeared": [
                        "Rajesh",
                        "Seetha",
                        "Kavin",
                        "Prakash",
                        "Shankar"
                    ]
                }
            ]
        },
        {
            "october-second-half": [
                {
                    "topics": [
                        "Fetch API",
                        "Promise, Fetch, Request"
                    ]
                },
                {
                    "tasks": [
                        "Implement the API to the mentioned constraints"
                    ]
                },
                {
                    "company-drives": [
                        "Microsoft",
                        "ZOHO",
                        "Twitter",
                        "Facebook"
                    ]
                },
                {
                    "students-appeared": [
                        "Rajiv",
                        "Simon",
                        "Jeeva",
                        "Sowmiya"
                    ]
                },
                {
                    "students-absent": [
                        "Prithivi",
                        "Suman",
                        "Girija"
                    ]
                },
                {
                    "task-not-submitted": [
                        "Sambath",
                        "Steve",
                        "Lakhsmi"
                    ]
                }
            ]
        }
    ];

const codekata =
    [
        { "Rajesh": 7 },
        { "Seetha": 21 },
        { "Kavin": 15 },
        { "Prakash": 17 },
        { "Shankar": 30 },
    ];

const mentors =
    [
        {
            "name": "krishna",
            "students-count": 15
        },
        {
            "name": "vijay",
            "students-count": 21
        },
        {
            "name": "Swetha",
            "students-count": 43
        }
    ];
            
            
Assignment :

Find all the topics and tasks which are thought in the month of October
db.zen.find( {}, { "october-first-half" : { "topics" : 1, "tasks" : 1 } , "october-second-half" : { "topics" : 1, "tasks" : 1 } } ).pretty()

Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zen.find( {}, { "october-second-half" : { "company-drives" : 1 } } )

Find all the company drives and students who are appeared for the placement.
db.zen.find ( {}, { "october-first-half" : {  "company-drives" : 1 , "students-appeared" : 1 } , "october-second-half" : { "company-drives" : 1 , "students-appeared" : 1 } }  ).pretty()

Find the number of problems solved by the user in codekata
db.codekata.find({})

Find all the mentors with who has the mentee's count more than 15
db.mentors.find( { "students-count" : { $gt : 15 } } )

Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zen.find( {}, { "october-second-half" : { "students-absent" : 1 , "task-not-submitted" : 1 } } ).pretty()