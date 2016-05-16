/*//////////////////////////////////////////////////////////
//Apple lost almost nobody
//////////////////////////////////////////////////////////*/
function Draw13(){

	/*First disable click event on clicker button*/
	stopClicker();

	
	changeTopText(newText = "The yellow hill represents players retained by CSK in the new season.",
		loc = 3/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=-80, w=200);

	changeTopText(newText = "The yellow chords represent players who moved from CSK to other franchisees in 2014.",
		loc = 3/2, delayDisappear = 7, delayAppear = 8, finalText = true, xloc=-80, w=200);
	
	/*Repeatedly let specific chords change colour*/
	repeat();
	
	function repeat() {
		chords
			.transition().duration(1000)
			.style("opacity",function (d){
				if(d.source.index == 0) {
					if(d.target.index == 0 || d.target.index == 5) {return opacityValueBase;}
					else {return 0.2;}
				} else {return 0;}
			})
			.transition().duration(1000)
			.style("opacity",function (d){
				if(d.source.index == 0) {return opacityValueBase;}
				else {return 0;}
			})
			.each("end", repeat);
	};	
};/*Draw13*/