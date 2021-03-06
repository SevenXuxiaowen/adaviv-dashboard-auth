### Request

`GET api/dashboard?harvestFrom={startId}&harvestTo={endId}&room={roomId}&strain={strainId}`

Data of **all** rooms and **all** strains from harvest#**78~82**

`GET api/dashboard?harvestFrom=78&harvestTo=82&room=all&strain=all`

Data of room **F3** and **all** strains from harvest#**78~82**

`GET api/dashboard?harvestFrom=78&harvestTo=82&room=f3&strain=all`

Data of **all** room and strain **CAD** from harvest#**78~82**

`GET api/dashboard?harvestFrom=78&harvestTo=82&room=f3&strain=CAD`

### Response
```json
{
    "trend-sum-feild":[
        "Harvest Weight (current)", "Harvest Weight (goal)", "Yield Performance (current)", "Yield Performance (goal)"
    ],
    "trend-sum":[110, 140, 100, 120],

    "trend-feild":[
        "harvestId", "roomId", "harvest yield", "yield goal", "infected plants", "killed plants"
    ],
    "trend":[
        ["#76", "F8", 82, 100, 10, 2],
        ["#77", "F4", 83, 100, 15, 5],
        ["#78", "F5", 84, 100, 18, 10],
        ["#79", "F7", 95, 100, 20, 6],
        ["#80", "F3", 76, 100, 20, 12],
        ["#81", "F2", 66, 100, 22, 10]
    ],
    "performance-feild":[
        "name",  "full-name", "yield",  "harvest",  "average",  "top-quintile",  "infected",  "killed", 
        "Efficiency factor", "Harvest weight", "Yield Performance"
    ],
    "performance": [
        ["AJSD", "AJ Sour Diesel",  50, 80,  125, 50, 20, [[35, 65],[80,20],[30,70]], [120, 80, 34], [38, 13, 4]],
        ["AGO", "Acapulco Gold OG", 48, 130, 140, 40, 11, [[85, 15],[33,67],[45,55]], [90,  75, 52], [34, 15,5]],
        ["AMC", "Animal Cookies",   46, 20,  90,  55, 6,  [[85, 15],[65,35],[90,10]], [134, 67, 16], [30, 18, 6]],
        ["APH", "Apollo Haze",      39, 45,  80,  45, 9,  [[35, 65],[80,20],[30,70]], [120, 80, 34], [20, 14, 7]],
        ["BDC", "Blue Dream CBD",   26, 98,  76,  32, 20, [[85, 15],[33,67],[45,55]], [90,  75, 52], [26, 16, 3]],
        ["BDTHC", "Blue Dream THC", 50, 80,  125, 50, 20, [[85, 15],[65,35],[90,10]], [134, 67, 16], [26, 17, 6]],
        ["BMR", "Blue Moon Rocks",  48, 130, 140, 40, 11, [[35, 65],[80,20],[30,70]], [123, 58, 19], [25, 14, 9]],
        ["BB3", "Bruce Banner #3",  46, 20,  90,  55, 6,  [[85, 15],[33,67],[45,55]], [80,  43,  4], [22, 13, 10]],
        ["BK", "Bubba Kush",        39, 45,  80,  45, 9,  [[85, 15],[65,35],[90,10]], [118, 80, 26], [24, 19, 4]],
        ["CAD", "Cease And Decease",26, 98,  76,  32, 20, [[35, 65],[80,20],[30,70]], [150, 80, 34], [35, 20, 9]]
    ]
}
```
