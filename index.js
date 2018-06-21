// Credits:
// http://www.efg2.com/Lab/ScienceAndEngineering/Spectra.htm
// https://stackoverflow.com/questions/1472514/convert-light-frequency-to-rgb
// https://github.com/cdhumphreys/TemperaturetoColour
// http://lsrtools.1apps.com/wavetorgb/index.asp?wavelength=499
// https://en.wikipedia.org/wiki/Wien%27s_displacement_law

class WiensColorTemp{
    constructor(){
        // Wiens displacement
        this.wDisp = 2.89776829 * Math.pow(10, 6)

        //convert celsius to kelvin
        this.celsiusToKelvin = (c)=>{
            return (c + 273.15)
        }
        
        //convert fahrenheit to kelvin
        this.fahrenheitToKelvin = (f)=>{
            return (
                (f + 459.67) * (5/9)
            )
        }

        this.getColor = (wavelength)=>{
            let red, green, blue;

            if (wavelength >= 380 && wavelength <= 439) {
  	
                red   = -(wavelength - 440) / (440 - 380);
                green = 0.0;
                blue = 1.0;
            
              }
              else if (wavelength >= 440 && wavelength <= 489){
            
                red   = 0.0;
                green = (wavelength - 440) / (490 - 440);
                blue  = 1.0;
              }
              else if(wavelength >= 490 && wavelength <= 509){
            
                  
                red   = 0.0;
                green = 1.0;
                blue  = -(wavelength - 510) / (510 - 490);
            
              }
            
              else if (wavelength >= 510 && wavelength <= 579){
            
                  
                red   = (wavelength - 510) / (580 - 510);
                green = 1.0;
                blue  = 0.0
            
              }
              else if (wavelength >= 580 && wavelength <= 644) {
            
                  
                red   = 1.0;
                green = -(wavelength - 645) / (645 - 580);
                blue  = 0.0
            
              }
              else if (wavelength >= 645 && wavelength <= 780) {   
                  
                red   = 1.0;
                green = 0.0;
                blue  = 0.0
            
              }
              else {
                  
                red   = 0.0;
                green = 0.0;
                blue  = 0.0
              }
            
              red *=  255;
              green *= 255;
              blue *= 255;
            
              
              return {
                  r: red,
                  g: green,
                  b: blue,
              }
        }

        //get wavelength of maximum intensity
        this.getWavelengthK = (kelvin)=>{
            return (
                (this.wDisp/kelvin)
            )
        }

        //returns wavelength only
        this.getWavelengthF = (f)=>{
            let kelvin = this.fahrenheitToKelvin(f)
            return this.getWavelengthK(kelvin)
        }
        this.getWavelengthC = (c)=>{
            let kelvin = this.celsiusToKelvin(f)
            return this.getWavelengthK(kelvin)
        }

        // returns rgb only
        this.getFromK = (k)=>{
            let wavelength = this.getWavelengthK(k)
            let rgb = this.getColor(wavelength)
            return rgb
        }

        this.getFromF = (f)=>{
            let kelvin = this.fahrenheitToKelvin(f)
            return this.getFromK(kelvin)
        }
        this.getFromC = (c)=>{
            let kelvin = this.celsiusToKelvin(c)
            return this.getFromK(kelvin)
        }
    }
}

module.exports = WiensColorTemp