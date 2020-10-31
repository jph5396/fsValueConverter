
//value types defined for cloud firestore
// see https://cloud.google.com/firestore/docs/reference/rest/v1/Value 
// for more details. 

//keeping const vars here until all types are supported. 
const complexTypes = [
    "mapValue",
    "arrayValue",
    "geoPointValue"
]

const valueTypes = [
    "nullValue",
    "booleanValue",
    "integerValue",
    "doubleValue",
    "timestampValue",
    "stringValue",
    "bytesValue",
    "referenceValue"
]
function fsValueConverter (value) {
    let obj = {}
    let keys = Reflect.ownKeys(value);
    
    // all top level properties should be objects. 
    keys.forEach( key => {
        let prop = value[key]
        let propKeys = Reflect.ownKeys(prop);
        if (propKeys.length == 1){
            let propKey = propKeys[0]
            //switch case to handle properties that need to be converted
            // into the appropriate js primitive. 
            switch (propKey) {
                case "nullValue": 
                    obj[key]= null;
                    break;
                case "integerValue":
                    obj[key] = parseInt(prop[propKey]);
                    break;
                case "mapValue": 
                    obj[key] = fsValueConverter(prop.mapValue.fields);
                    break; 
                default: 
                    obj[key] = prop[propKey]
            }
        }
    });

    return obj; 
}

//convert value handles identfying the type and 
function convertValue(obj, key) {
    switch (key) {

    }
}
exports.fsValueConverter = fsValueConverter


