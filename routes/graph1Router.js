var d3 = d3 || require('d3');
var $ = require('jquery')(require('jsdom-no-contextify').jsdom().parentWindow);
var express = require('express');
var graph1Router  = express.Router();
var bodyParser = require('body-parser');
graph1Router.use(bodyParser.urlencoded({ extended: true }));
graph1Router.use(bodyParser.json());

graph1Router.route('/')
.get(function(req,res,next){    
      res.json({"note":"This is get request! Please post."});
  
})
.post(function (req, res, next) {
        var graph=generateSvg(req.body);       
        res.json({"data":graph.node().outerHTML});
   
})



var element ='body';

var type="PMPM";

function generateSvg(medicalClaimsdata){
    console.log("Graph Number 1 generation started!1");
var svg2;

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






function custom_sort(a, b) {
    return a.date - b.date;
}
        
            var parseDate4 = d3.time.format("%Y-%m").parse;
            var parseYear = d3.time.format("%Y").parse;
            var pharmacyClaims = medicalClaimsdata.medicalClaims;
            var memberMonths = medicalClaimsdata.memberMonths;
            var benchMark = medicalClaimsdata.benchmark;
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


                return svg2;

        }

module.exports = graph1Router;

