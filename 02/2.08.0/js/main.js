/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(function(data){
    data.forEach(function(d){
        console.log(d);
        d.height = +d.height;
    });

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 1000)
        .attr("height", 400);

    var rectangles = svg.selectAll("rect")
        .data(data);

    rectangles.enter()
        .append("rect")
            .attr("x", function(d, i){
                return (i * 50) + 25;
            })
            .attr("y", 25)
            .attr("height", function(d){
                return d.height;
            })
            .attr("width", 25)
            .attr("fill", "blue");
}).catch(function(error){
    console.log(error);
});
