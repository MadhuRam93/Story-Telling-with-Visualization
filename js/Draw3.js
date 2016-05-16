/*///////////////////////////////////////////////////////////  
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3(){

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0,3,6,9,12,15,18,21,24,27,30];
	/*Show and run the progressBar*/
		
	g.append("svg:path")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .transition().duration(700)
	  .attr("d", arc)
	  .attrTween("d", function(d) {
		if(d.index == 0) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
	  });
		
		
		
   /*Fill in the other arcs*/
   svg.selectAll("g.group").select("path")
	.transition().delay(function(d, i) { return 500*arcDelay[i];}).duration(1000)
	.attrTween("d", function(d) {
		/*if(d.index != 0) {*/
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		/*}*/
    });
 
  /*Make the other strokes black as well*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 500*arcDelay[i]; }).duration(70)
	.selectAll("g").selectAll("line").style("stroke", "#000");
  /*Same for the %'s*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 500*arcDelay[i]; }).duration(70)
	.selectAll("g").selectAll("text").style("opacity", 1);
  /*And the Names of each Arc*/	
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 500*arcDelay[i]; }).duration(70)
	.selectAll("text").style("opacity", 1);

	/*Change the text of the top section inside the circle accordingly*/
	 changeTopText(newText = "There are 7 teams with 25 players in each team and players to be auctioned",
		loc = 6/2, delayDisappear = 0, delayAppear = arcDelay[1], finalText=true);
};/*Draw3*/