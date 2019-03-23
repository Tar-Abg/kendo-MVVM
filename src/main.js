$ = require("jquery");
require ("@progress/kendo-ui/js/kendo.web");

var dataArray = new kendo.data.ObservableArray([]);
var viewObject = new kendo.data.ObservableObject({
    model:dataArray,

    carModel:[
    {name:"Bmw", value:"bmw"},
    {name:"Opel", value:"opel"},
    {name:"Audy", value:"audy"},
    {name:"Ford", value:"ford"},
    {name:"Vaz", value:"vaz"},
    {name:"Mitsubishi", value:"mitsubishi"}
    ],

    country:[
    {name:"Armenia"},
    {name:"Georgia"},
    {name:"Russia"},
    {name:"Geraman"},
    {name:"English"},
    ],        

    localCar: "",    
    carPrice: "", 
    carImg: "",
    localCountry: "Armenia",
    carYear:"2000",
           
    addCar: function (e){
      dataArray.push({
          Model: this.get("localCar"),
          Price: this.get("carPrice") + "$",
          Country: this.get("localCountry"),
          Year: this.get("carYear")+" Year"
      });
    }          
})

kendo.bind($("body"), viewObject);