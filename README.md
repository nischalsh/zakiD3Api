# zakiD3Api
Node Svg Generation Service
This is a node js based service, which receives the data and converts it to its respective svg image.
This svg image now can be generated at runtime which is then used for our application graphs as well as export feature. This runtime image generation can assist in template wise export creation and thus one template can be saved and used later for the real time export of graphs.

We are currently using node ver 4.2.6. In addition this service uses D3 js version 3.5 and express 4.16.

Demo:
1.Call node service from zakipoint app
	nodeService.generateSvg(data,”name of graph to be generated”);
2. This service makes a call to localhost:3000 where node service is hosted.
3. The data received by node app is then used to convert to svg.
4. The svg is passed to out app in json.

Eg:
"reporting": {
        "memberMonths": {
            "2016-01": 10730,
            "2015-11": 10725,
            "2015-10": 10743,
            "2016-05": 10580,
            "2016-04": 10577,....
        },
        "medicalClaims": {
            "2015-11": 3260138,
            "2016-01": 3930449,
            "2015-10": 3601131,
            "2016-05": 2830580,
            "2016-04": 3229002,.........
        }
    },
    "benchmark": {
        "Medical": "$xxx",
        "D S": "xxx",
        "C-Sec": "xxx",
        "Healthplan PEPM": "xxx",..............
        "Urgent Care": "xxx",   
    }
}


Generated svg:
<svg>
//generated graph
</svg>
