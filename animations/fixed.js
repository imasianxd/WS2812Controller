/*******************************
	fixed animations
*******************************/
    var common = require("./common.js");

function fixed() {
		
    var name = "fixed.js";
    var RainbowOffset = 0;
    var refreshInterval = 1000;
	var loop;


    this.fixedLighting = function(args, strip){
		if (strip.Mode = name + "fixed"){
			strip.Stop();
			strip.Mode = null; 
			setTimeout(function(){ console.log(" "); }, refreshInterval + 50)
		}
		
		strip.Mode = name + "fixed";
		
        console.log("Going fixed mode.");
		this.refresh(args,strip);
    };
	
	this.refresh = function(args,strip){
		var _this = this;

		FixedColor1 = parseInt("0x" + args.Color1);
		Brightness = parseInt(args.Brightness);

		strip.SetStripColor(FixedColor1);
		strip.SetBrightness(Brightness);
        
        strip.Render();

        setTimeout(function () {
            if (strip.Mode == name + "fixed") {
                _this.refresh(args, strip);
            } else {
                strip.Stop();
				strip.Mode = null; 
            }
        }, refreshInterval);
	}

}

module.exports = new fixed();