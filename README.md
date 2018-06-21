#  Wiens Color Temp

Using Wiens displacement constant, this package will return the max wavelength of intensity (given in nm) or an rgb color representation based off of a temperature.
This was originally crafted to be a more scientific approach to my <a href="https://github.com/ZachJMoore/color-temp">Color-Temp</a> package, but due to the function of Wiens constant (or just my understanding of it), it seems to only works with very hot temperatures such as the sun (5800° Kelvin), otherwise the wavelength of radiation falls of into the infared realm and will have no visual color (RGB = 00, 00, 00).

## Usage
```javascript
let WiensColorTemp = require("./index")
let wiensColorTemp = new WiensColorTemp()

let kelvin = 5800
let rgb = wiensColorTemp.getFromK(kelvin)
let kelvinWavelength = wiensColorTemp.getWavelengthK(kelvin)

let fahrenheit = 8000
let rgbFromF = wiensColorTemp.getFromF(fahrenheit)
let fahrenheitWavelength = wiensColorTemp.getWavelengthF(fahrenheit)

console.log(
    rgb, // { r: 0, g: 255, b: 132.40591422413792 }
    kelvinWavelength, // 499.6152224137931

    rgbFromF, // { r: 255, g: 111.53113381127501, b: 0 }
    fahrenheitWavelength // 616.5704953030083
)
```

### Credits
http://www.efg2.com/Lab/ScienceAndEngineering/Spectra.htm
https://stackoverflow.com/questions/1472514/convert-light-frequency-to-rgb
https://github.com/cdhumphreys/TemperaturetoColour
http://lsrtools.1apps.com/wavetorgb/index.asp?wavelength=499
https://en.wikipedia.org/wiki/Wien%27s_displacement_law