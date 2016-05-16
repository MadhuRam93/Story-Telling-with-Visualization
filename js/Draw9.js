/*///////////////////////////////////////////////////////////	
//Show Loyalty hills
//////////////////////////////////////////////////////////*/
function Draw9(){

	/*First disable click event on clicker button*/
	stopClicker();
	
	/*Bottom text disappear*/
	changeBottomText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);	

	
	/*Samsung Loyal text*/
	changeTopText(newText = "In every new season, players are auctioned.",
		loc = 0/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=-50, w=300);
	changeTopText(newText = "Franchisees can retain certain players from the previous season & buy new players",
		loc = 0/2, delayDisappear = 7, delayAppear = 8, finalText = false, xloc=-50, w=300);
	changeTopText(newText = "These are the proportion of players retained by each team",
		loc = 0/2, delayDisappear = 16, delayAppear = 17, finalText = true, xloc=-50, w=300);
	changeTopText(newText = "As we can see, RR has retained less number of players than MI",
		loc = 0/2, delayDisappear = 25, delayAppear = 26, finalText = true, xloc=-50, w=300);
	changeTopText(newText = "MI, RCB and KXIP have retained the maximum number of players",
		loc = 0/2, delayDisappear = 34, delayAppear = 35, finalText = true, xloc=-50, w=300);

		
	/*Remove the arcs*/
	d3.selectAll(".NokiaToSamsungArc")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".NokiaToSamsungArc").remove();});

	d3.selectAll(".SamsungToNokiaArc")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".SamsungToNokiaArc").remove();});
		
	/*Show only the loyal chords*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 0 && d.target.index == 0) {return opacityValueBase;}
			else if(d.source.index == 1 && d.target.index == 1) {return opacityValueBase;}
			else if(d.source.index == 2 && d.target.index == 2) {return opacityValueBase;}
			else if(d.source.index == 3 && d.target.index == 3) {return opacityValueBase;}
			else if(d.source.index == 4 && d.target.index == 4) {return opacityValueBase;}
			else if(d.source.index == 5 && d.target.index == 5) {return opacityValueBase;}
			else if(d.source.index == 6 && d.target.index == 6) {return opacityValueBase;}
			else if(d.source.index == 7 && d.target.index == 7) {return opacityValueBase;}
			else {return 0;}
		});
	
		
	/*Show all ticks and texts again*/
	/*Ticks*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke", "#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity", 1);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", 1);
				
};/*Draw9*/