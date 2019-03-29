import $ from "jquery";
import "@progress/kendo-ui/js/kendo.grid";
import { bind } from "@progress/kendo-ui/js/kendo.binder";

export function credeKendoGrid(rootElement){
    var dataArray = new kendo.data.ObservableArray([]);
    var viewObject = new kendo.data.ObservableObject({
        model: dataArray,

        carModel: [
            { name: "Bmw", value: "bmw" },
            { name: "Opel", value: "opel" },
            { name: "Audy", value: "audy" },
            { name: "Ford", value: "ford" },
            { name: "Vaz", value: "vaz" },
            { name: "Mitsubishi", value: "mitsubishi" }
        ],

        country: [
            { name: "Armenia" },
            { name: "Georgia" },
            { name: "Russia" },
            { name: "Geraman" },
            { name: "English" },
        ],

        localCar: "",
        carPrice: "",
        carImg: "",
        localCountry: "Armenia",
        carYear: "2000",

        addCar: function (e) {
            dataArray.push({
                Model: this.get("localCar"),
                Price: this.get("carPrice") + "$",
                Country: this.get("localCountry"),
                Year: this.get("carYear") + " Year"
            });
        }
    });

    var templete = kendo.template("<form  class='demo-section k-content'> <dt>model</dt >" +
    "<dd>" +
        "<select data-role='dropdownlist' data-bind='source:carModel, value:localCar'"+
        "data-text-field='name' data-value-field='value'></select>" +
    "</dd>" +

    "<dt>Price</dt> " +
    "<dd>" +
        "<input type='number' class='k-textbox' data-bind='value:carPrice' placeholder='500$'>" +
    "</dd>" +

    "<dt>Country</dt>" +  
    "<dd>" +
        "<select data-role='dropdownlist' data-bind='source:country,  value:localCountry' " + 
        "data-text-field='name' data-value-field='name' ></select> " + 
    "</dd>" +
    
    "<dt>Year</dt>" +
    "<dd>"+
        "<input type='number'  class='k-textbox' data-bind='value:carYear'>" +
    "</dd>" + 

    "<div data-role='grid' data-bind='source:model'" + 
        "data-columns = \" ['Model', 'Price', 'Country', 'Year'] \" " +
        "data-selectable = 'true'  data-filterable= 'true' " +
        "data-editable = 'true'></div> " +
    "</form> " +
    "<button class='k-button' data-bind='click:addCar, enabled: localCar'>Add Car</button>" );

    rootElement.html(templete);
    bind(rootElement, viewObject);
};
