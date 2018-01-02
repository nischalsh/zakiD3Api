var d3 = d3 || require('d3');
var $ = require('jquery')(require('jsdom-no-contextify').jsdom().parentWindow);
var express = require('express');
var dishRouter  = express.Router();

dishRouter.route('/')
.get(function(req,res,next){

 
      res.json({"hey":"this is get request"});
  

})

.post(function (req, res, next) {
    Dishes.create(req.body, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        var id = dish._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the dish with id: ' + id);
    });
})



module.exports = dishRouter;




var element =  'body';

var data = [3, 5, 8, 4, 7];


var type="PMPM";
var medicalClaimsdata={
	"reporting": {
		"memberMonths": {
			"2016-01": 10730,
			"2015-11": 10725,
			"2015-10": 10743,
			"2016-05": 10580,
			"2016-04": 10577,
			"2016-03": 10617,
			"2016-02": 10666,
			"2015-12": 10702,
			"2016-09": 10515,
			"2016-08": 10433,
			"2016-07": 10738,
			"2016-06": 10644,
			"2014-09": 10692,
			"2016-12": 10380,
			"2017-03": 10168,
			"2014-10": 10697,
			"2017-04": 10078,
			"2016-11": 10387,
			"2016-10": 10541,
			"2017-05": 10087,
			"2017-06": 10095,
			"2015-04": 10893,
			"2015-03": 10906,
			"2014-12": 10766,
			"2017-01": 10372,
			"2015-02": 10878,
			"2015-01": 10864,
			"2017-02": 10088,
			"2014-11": 10719,
			"2015-08": 10786,
			"2015-07": 10901,
			"2015-06": 10913,
			"2015-05": 10887,
			"2017-07": 10062,
			"2017-08": 10064,
			"2015-09": 10740
		},
		"medicalClaims": {
			"2015-11": 3260138,
			"2016-01": 3930449,
			"2015-10": 3601131,
			"2016-05": 2830580,
			"2016-04": 3229002,
			"2016-03": 2258840,
			"2015-12": 3361225,
			"2016-02": 3235408,
			"2016-09": 3826055,
			"2016-08": 3110369,
			"2016-07": 3239734,
			"2016-06": 2506145,
			"2014-09": 2395191,
			"2014-10": 4087155,
			"2016-12": 4224994,
			"2017-03": 3315358,
			"2016-11": 3298836,
			"2017-04": 3337078,
			"2016-10": 3274122,
			"2017-05": 3414514,
			"2017-06": 4028904,
			"2015-04": 2346236,
			"2015-03": 2379069,
			"2014-12": 3157836,
			"2015-02": 2341934,
			"2017-01": 3226203,
			"2014-11": 3352303,
			"2015-01": 3195951,
			"2017-02": 2779524,
			"2015-08": 3202515,
			"2015-07": 3188106,
			"2015-06": 2674989,
			"2015-05": 3121572,
			"2017-07": 2563778,
			"2017-08": 3289114,
			"2015-09": 2931835
		}
	},
	"benchmark": {
		"Medical Inpatient Days_truven": "$4,342.23",
		"Dialysis Services": "28.84",
		"C-Section Deliveries": "3.54",
		"Total Healthplan Claims PEPM": "749.17",
		"Urgent Care Visits": "93.73",
		"Medical Claims PEPM": "593.44",
		"Pharmacy Scripts Generic Drugs_truven": "--",
		"Member Months": "--",
		"Preventive Office Visits_truven": "$223.94",
		"NICU Admissions_truven": "$89,658.19",
		"Routine Office Visits_truven": "$148.16",
		"Total Office Visits": "3,960.75",
		"Admissions from ER_truven": "$24,327.88",
		"Newborn Deliveries_truven": "$12,715.01",
		"Mental Health Office Visits": "375.59",
		"MRI Scan": "68.7",
		"SNF/SNU Days_truven": "$460.65",
		"Maternity Inpatient Days": "31.61",
		"Maternity Admissions_truven": "$12,641.08",
		"Mammograms_truven": "$190.88",
		"Preventive Office Visits": "544.66",
		"Average Length of Stay_truven": "--",
		"Mental Health or Substance Abuse Admissions_truven": "$11,287.77",
		"Member Months_truven": "--",
		"Medical Claims PMPM": "267.57",
		"Office Visit PMPM": "60.84",
		"Pharmacy Claims PEPM": "155.72",
		"Inpatient Days": "198.2",
		"30 Day ReAdmissions_truven": "$31,616.63",
		"Chiropractic Visits": "421.08",
		"Newborn Deliveries": "10.06",
		"Urgent Care Visits_truven": "$151.95",
		"Maternity Inpatient Days_truven": "$4,508.2",
		"Mental Health or Substance Abuse Inpatient Days": "35.39",
		"Office Visit PEPM": "134.93",
		"NICU Inpatient Days": "13.22",
		"MRI Scan_truven": "$702.77",
		"Pharmacy Scripts Mail Order_truven": "--",
		"Total Admissions": "42.5",
		"Total Healthplan Claims PMPM": "337.79",
		"Average Family Size": "2.22",
		"Pharmacy Scripts Generic Drugs": "76.35",
		"Average Length of Stay": "4.66",
		"Pharmacy Claims PMPM": "70.21",
		"Mental Health Office Visits_truven": "$99.99",
		"SNF/SNU Days": "9.67",
		"Surgical Admissions_truven": "$42,712.73",
		"Surgical Inpatient Days_truven": "$8,202.3",
		"Pharmacy Scripts": "8,659.72",
		"Medical Inpatient Days": "40.65",
		"Pharmacy Scripts_truven": "--",
		"Inpatient PEPM": "181.42",
		"Vaginal Deliveries": "6.52",
		"Outpatient PEPM": "277.09",
		"Maternity Admissions": "11.27",
		"Vaginal Deliveries_truven": "$10,914.93",
		"NICU Admissions": "0.74",
		"Total Office Visits_truven": "$154.24",
		"Inpatient PMPM": "81.8",
		"Colonscopies": "31.24",
		"Other_truven": "$237.82",
		"Mental Health or Substance Abuse Inpatient Days_truven": "$1,359.34",
		"ER Visits_truven": "$1,669.84",
		"Routine Office Visits": "3,030.38",
		"CT Scan_truven": "$408.61",
		"NICU Inpatient Days_truven": "$5,013.98",
		"Outpatient / Ambulatory Surgeries_truven": "$4,747.73",
		"Outpatient PMPM": "124.94",
		"Dialysis Services_truven": "$1,940.08",
		"Admissions from ER": "43.89",
		"ER Visits": "196.07",
		"Surgical Admissions": "14.85",
		"CT Scan": "83.34",
		"PET_truven": "$1,023.91",
		"C-Section Deliveries_truven": "$16,025.24",
		"Surgical Inpatient Days": "77.32",
		"Colonscopies_truven": "$550.99",
		"Physical Therapy_truven": "$85.62",
		"Pharmacy Scripts Mail Order": "8.76",
		"Mammograms": "114.62",
		"Physical Therapy": "741.91",
		"30 Day ReAdmissions": "2.88",
		"Chiropractic Visits_truven": "$45.77",
		"Inpatient Days_truven": "$5,386.8",
		"Outpatient / Ambulatory Surgeries": "94.35",
		"Medical Admissions": "11.37",
		"Mental Health or Substance Abuse Admissions": "4.26",
		"PET": "2.14",
		"Medical Admissions_truven": "$15,518.84",
		"Total Admissions_truven": "$25,122.18",
		"Other": "10.12"
	}
}

function custom_sort(a, b) {
    return a.date - b.date;
}

function getLineGraph1Data(){
var svg;

// Set the dimensions of the canvas / graph
var margin = {top: 8, right: 8, bottom: 28, left: 48},
width = 280 - margin.left - margin.right,
height = 80 - margin.top - margin.bottom;
var xColumn, yColumn;
var transitionDuration = 800;
var nationalBenchmargin=4;
var textDuration = 30;
var dFormat=d3.time.format("%B %Y")

// Parse the date / time
var parseDate = d3.time.format("%d-%b-%y").parse;
var path1, path2;
// Set the ranges
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5).tickSubdivide(true);

var yAxis = d3.svg.axis().scale(y)
    .orient("left")

// Define the line
var valueline = d3.svg.line()
    .x(function (d) {
        return x(d.date);
    })
    .y(function (d) {
        return y(d.close);
    });


var valuelinePaid = d3.svg.line()
    .x(function (d) {
        return x(d.date);
    })
    .y(function (d) {
        return y(d.medicalClaims);
    });

var valuelinePhPaid = d3.svg.line()
    .x(function (d) {
        return x(d.date);
    })
    .y(function (d) {
        return y(d.pharmacy);
    });


var valueline1a = d3.svg.line()
    .x(function (d) {
        return x(d.date);
    })
    .y(function (d) {
        return y(d.benchmark);
    });

var line = d3.svg.line()
    .x(function (d) {
        return x(d[xColumn]);
    })
    .y(function (d) {
        return y(d[yColumn]);
    });

// Adds the svg canvas

var threshold = (height / 2);







        
            var parseDate4 = d3.time.format("%Y-%m").parse;
            var parseYear = d3.time.format("%Y").parse;
            var pharmacyClaims = medicalClaimsdata.reporting.medicalClaims;
            var memberMonths = medicalClaimsdata.reporting.memberMonths;
            var benchMark = medicalClaimsdata.reporting.benchmark;
            var newVal;
            var data = [];

            for(var key in pharmacyClaims){
                var val=pharmacyClaims[key];
                newVal = new Object();
                newVal.date=parseDate4(key);
                newVal.close=$.isNumeric( (pharmacyClaims[key]/memberMonths[key]))?(pharmacyClaims[key]/memberMonths[key]):0;
                //newVal.close=40;
                newVal.pharmacy=pharmacyClaims[key]|| 0;
                newVal.memberMonths=memberMonths[key]|| 0;
                newVal.benchmark=Math.round(benchMark)|| 0;
                data.push(newVal);

            }
        
            data.sort(custom_sort);
        
            var lastData=data.slice(-12);
            var initialValue=new Object();
            initialValue.memberMonths=0;
            initialValue.pharmacy=0;
        
            var pmpmValue=lastData.reduce(function(acc,obj){
                    acc.memberMonths+=obj.memberMonths;
                    acc.pharmacy+=obj.pharmacy;
                return acc;
            },initialValue);
        
            var pmpmYearly=$.isNumeric( (initialValue.pharmacy/initialValue.memberMonths) )?(initialValue.pharmacy/initialValue.memberMonths):0;
            //var pmpmYearly=20;
        
            var formatDate =d3.time.format("%d-%b-%y"),
                parseDate = formatDate.parse,
                bisectDate = d3.bisector(function(d) { return d.date; }).left,
                formatOutput2 = function(d) { return "Time"+parseDate(d.date) +"/PMPM actual"; },
                formatOutput0 = function(d) { return "$"+Math.round(d.close) +" PAID actual"; },
                formatOutput3 = function(d) { return d3.format("$,")(Math.round(d.pharmacy)) +" Paid actual"; },
                formatOutput1 = function(d) { return "$"+Math.round(d.benchmark) +" PAID benchmark"; };
        
        
            svg2 = d3.select(element).append("svg")
                .attr("width", 350)
                .attr("height", 400);
            var g2 = svg2.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            x.domain(d3.extent(data, function (d) {
                return d.date;
            }));
        
            var array_y0;           
                array_y0=d3.extent(data, function(d) { return d.close; });
                var array_y1=d3.extent(data, function(d) { return d.benchmark; });
                array_y0=array_y0.concat(array_y1);
            
        
            y.domain([d3.min(array_y0),d3.max(array_y0)]);
        
            var value1=d3.format("$,")(Math.round(pmpmYearly))
            var value2=Math.round(data[data.length-1].date)
            var value3=Math.round(data[data.length-1].benchmark)
        
        
            var totalLength;
        
            if(type=="PMPM") {
                var path2b = g2.append("path")
                    .attr("d", valueline1a(data))
                    .style("fill", "none")
                    .style("stroke", "gray")
                    .attr('shape-rendering', ' crispEdges')
                    .attr("stroke-dashoffset", 1)
            }
        
            path2 = g2.append("path");
        
            if(type=="PMPM") {
                path2.attr("d", valueline(data))
                    .style("fill", "none")
                    .style("stroke", "red")
                    .attr('shape-rendering', 'crispEdges');
            }else{
                path2.attr("d", valuelinePhPaid(data))
                    .style("fill", "none")
                    .style("stroke", "#01A46D")
                    .attr('shape-rendering', 'crispEdges');
            }
        
                
            if(type=="PMPM") {
                var textLabel = g2.append('g')
                    .classed('labels-group', true);
        
                textLabel
                    .append('text')
                    .classed('actualLabel', true)
                    .attr({
                        'x': function () {
                            return x(value2) + nationalBenchmargin;
                        },
                        'y': function () {
                            return y(value3) + 3;
                        }
                    })
                    .text(function (d, i) {
                        return "National"
                    })
        
                textLabel
                    .append('text')
                    .classed('actualLabel', true)
                    .attr({
                        'x': function () {
                            return x(value2) + nationalBenchmargin;
                        },
                        'y': function () {
                            return y(value3) + 15;
                        }
                    })
                    .text(function (d, i) {
                        return "Benchmark"
                    })
            }
              
        
            var focus = g2.append("g")
                .attr("class", "focus")
                .style("display", "block");
        
        
            g2.append("rect")
                .attr("class", "overlay")
                .attr("fill","none")
                .attr("pointer-events","all")
                .attr("width", width)
                .attr("height", height)
        
        
        
        
        
            var formatDate =d3.time.format("%y");
            var dupVal=[];
            var abc= data.reduce(function(newVal,item){
                    if(dupVal.indexOf(formatDate(item.date))<0){
                        dupVal.push(formatDate(item.date))
                        newVal.push(item.date)
        
                    }
        
                    return newVal;
        
            },[]);
        
            var main_xAxis2 = d3.svg.axis()
                .scale(x)
                //.ticks(d3.time.months, 12)//should display 1 year intervals
                .tickFormat(d3.time.format('%Y'))//%Y-for year boundaries, such as 2011
                .tickValues(abc)
                .outerTickSize(0)
                .orient("bottom");
        
        
        
            var xpath=g2.append("g")
                .attr("class", "x axiss xaxisLeft")
                .attr("transform", "translate(0," + (height) + ")")
                .call(main_xAxis2)
        
            xpath.selectAll("path")
                .attr("stroke", "#fff");
        
            xpath.selectAll('.tick')
                .style({'font-size':'9px'});
        
            var main_yAxisLeft = d3.svg.axis()
                .scale(y)
                .ticks(3)
                .tickSize(2)
                .outerTickSize(0)
                .orient("left");
        
            var yPath=g2.append("g")
                .attr("class", "y axiss yaxisLeft")
                .call(main_yAxisLeft)
                .selectAll("text")
                .attr("x", -5)
        
            yPath
                .style({'font-size':'9px'});

               
        
        return svg;
        }        
        





