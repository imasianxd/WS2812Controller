/*******************************
	experimental animations
*******************************/
	var common = require("./common.js");
	var name = "fixed.js";

/*******************************
	experimental methods
*******************************/
	
	function experimental() {
		this.StarryNight = function(args, strip){
			console.log("Starting starry night");
			
			var red = [];
			var green = [];
			var blue = [];
			var brightnessDelta = 0.05;
			var brightnessDirection = 1;
			var blinkDuration = 1000;
			var blinkMode = args.mode;
			var blinkColor = args.color;
			
			//init color values for the entire strip	
			for (x; x < strip.NUM_LEDS; x++) {
				if (blinkMode = "random"){
					red[x] = common.getRandomInt(0,255);
					green[x] = common.getRandomInt(0,255);
					blue[x] = common.getRandomInt(0,255);
				} else if (blinkMode = "setColor"){
					var multiplier =  Math.random()
					var rgbColors = common.hexToRgb(blinkColor).r;
					red[x] = Math.round(rgbColors.r * multiplier);
					green[x] = Math.round(rgbColors.g * multiplier);
					blue[x] = Math.round(rgbColors.b * multiplier);
				}
				strip.Lights[x] = common.rgbToHex(red[x],green[x],blue[x]);
			}
			console.log("initial strip colors:");
			console.log(strip.Lights);

			strip.Render();
			
			//update strip colors
			setTimeout(function () { 
				for (x; x < strip.NUM_LEDS; x++){
					//multiply the rgb value by 0.99 to decrease the brightness of it.
					var max = null;
					//find the biggest value
					if (red[x] > green[x]){ 
						if (red[x] > blue[x]){ max = red; }	else { max = blue; }
					} else {
						//green bigger
						if (green[x] > blue[x]){ max = green; } else { max = blue; }
					};
					
					//assign the direction of change for the colors
					if (max[x] < 10){
						brightnessDirection = 1;
					} else if (max[x] > 245){
						brightnessDirection = -1;
					}
					
					//assign new color and clampo the values
					red[x] = common.clampVariables(Math.round(red[x] * Math.abs(brightnessDirection + brightnessDelta)), 0, 255);
					green[x] = common.clampVariables(Math.round(green[x] * Math.abs(brightnessDirection + brightnessDelta)), 0, 255);
					blue[x] = common.clampVariables(Math.round(blue[x] * Math.abs(brightnessDirection + brightnessDelta)), 0, 255);
					strip.Lights[x] = common.rgbToHex(red[x],green[x],blue[x]);
				}
				
				console.log("modified strip colors:");
				console.log(strip.Lights);
				strip.Render(); 
			}, blinkDuration);
		};
		

	}
	
	
module.exports = new fixed();



	
