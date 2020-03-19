/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 400);

var rect = svg.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", 70)
    .attr("height", 30)
	.attr("fill", "green");

var ellipse = svg.append("ellipse")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("rx", 70)
    .attr("ry", 30)
	.attr("fill", "red");

var line = svg.append("line")
	.attr("x1", 50)
	.attr("y1", 50)
	.attr("x2", 400)
    .attr("y2", 400)
	.attr("stroke", "blue")
	.attr("stroke-width", 10);
