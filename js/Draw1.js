/*//////////////////////////////////////////////////////////	
//Introduction
///////////////////////////////////////////////////////////*/
function Draw1(){

	/*First disable click event on clicker button*/
	stopClicker();
	
	changeTopText(newText = "The Indian Premier League (IPL) is a professional Twenty20 cricket league in India contested annually by franchise of teams", 
	loc = 4/2, delayDisappear = 0, delayAppear = 1);

	changeTopText(newText = "We will see the trends of teams based on retention of players in 2013-14.",
	loc = 8/2, delayDisappear = 9, delayAppear = 10, finalText = true);
	
	changeBottomText(newText = "",
	loc = 1/2, delayDisappear = 0, delayAppear = 10);
	
	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(9*70).duration(210)
		.style("opacity", 0)
		.each("end", function() {d3.selectAll(".arc").remove();});
		
};/*Draw1*/