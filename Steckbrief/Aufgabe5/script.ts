var africa: string = "Afrika";
var asia: string = "Asien";
var australia: string= "Australien"
var europe: string = "Europa";
var northamerica: string ="Nordamerika";
var southamerica: string= "Südamerika";

var africa_2008: number= 1028;
var africa_2018: number= 1235.5;
var asia_2008: number= 12954.7;
var asia_2018: number= 16274.1;
var australia_2008: number= 1993;
var australia_2018: number= 2100.5;
var europe_2008: number= 4965.7;
var europe_2018: number= 4209.3;
var northamerica_2008: number= 6600.4;
var northamerica_2018: number= 6035.6;
var southamerica_2008: number= 1132.6;
var southamerica_2018: number= 1261.5;

var world_2018 = africa_2018 + asia_2018 + australia_2018 + europe_2018 + northamerica_2018 + southamerica_2018;

var worldafrica_2018 = Math.round(africa_2018 / world_2018 * 100 *100) / 100;
var worldasia_2018 = Math.round(asia_2018 / world_2018 * 100 * 100) / 100;
var worldaustralia_2018 = Math.round(australia_2018 / world_2018 * 100 *100) / 100;
var worldeurope_2018 = Math.round(europe_2018 / world_2018 * 100 *100)/100;
var worldnorthamerica_2018 = Math.round(northamerica_2018 / world_2018 *100 *100) /100;
var worldsouthamerica_2018 = Math.round(southamerica_2018 / world_2018 *100 *100)/100;

var africa2008_2018_pro = Math.round ((africa_2018 - africa_2008 ) / africa_2008 * 100 * 100) /100;
var asia2008_2018_pro = Math.round (( asia_2018 - asia_2008 ) / asia_2008 * 100 *100) /100;
var australia_2008_2018_pro = Math.round ((australia_2018 - australia_2008) / australia_2008 * 100 *100) / 100;
var europe_2008_2018_pro = Math.round (( europe_2018 - europe_2008 ) / europe_2008 *100 *100)/ 100;
var northamerica_2008_2018_pro = Math.round (( northamerica_2018 - northamerica_2008 ) / northamerica_2008 *100 *100) /100;
var southamerica_2008_2018_pro = Math.round (( southamerica_2018 - southamerica_2008 ) /southamerica_2008 *100 *100) /100;

var africa2008_2018_abs = africa_2018 - africa_2008;
var asia2008_2018_abs = Math.round ((asia_2018 - asia_2008) *100) /100;
var australia_2008_2018_abs = australia_2018 - australia_2008;
var europe_2008_2018_abs = Math.round ((europe_2018 - europe_2008)*100) /100;
var northamerica_2008_2018_abs = Math.round ((northamerica_2018 - northamerica_2008)*100)/100;
var southamerica_2008_2018_abs = Math.round ((southamerica_2018 - southamerica_2008)*100)/100;


console.log ("Die Emission von " + africa + " ist " + africa_2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht " + africa + " damit " + worldafrica_2018 + " %" )
console.log ("Für " + africa + " hat sich 2018 im Vergleich zu 2008 die Emission um " + africa2008_2018_pro + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + africa2008_2018_abs + " kg CO2")

console.log ("Die Emission von " + asia + " ist " + asia_2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht " + asia + " damit " + worldasia_2018 + " %" )
console.log ("Für " + asia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + asia2008_2018_pro + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + asia2008_2018_abs + " kg CO2")

console.log ("Die Emission von " + australia + " ist " + australia_2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht " + australia + " damit " + worldaustralia_2018 + " %" )
console.log ("Für " + australia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + australia_2008_2018_pro + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + australia_2008_2018_abs + " kg CO2")

console.log ("Die Emission von " + europe + " ist " + europe_2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht " + europe + " damit " + worldeurope_2018 + " %" )
console.log ("Für " + europe + " hat sich 2018 im Vergleich zu 2008 die Emission um " + europe_2008_2018_pro + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + europe_2008_2018_abs + " kg CO2")

console.log ("Die Emission von " + northamerica + " ist " + northamerica_2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht " + northamerica + " damit " + worldnorthamerica_2018 + " %" )
console.log ("Für " + northamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + northamerica_2008_2018_pro + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + northamerica_2008_2018_abs + " kg CO2")

console.log ("Die Emission von " + southamerica + " ist " + southamerica_2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht " + southamerica + " damit " + worldsouthamerica_2018 + " %" )
console.log ("Für " + southamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + southamerica_2008_2018_pro + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + southamerica_2008_2018_abs + " kg CO2")