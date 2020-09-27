/**
 * This class represents incoming Message used to get Location Message .
 *
 * @author Hossam @author Amir
 *
 */
module.exports = class Location {

    constructor(obj) {
        this.name = obj.name;
        this.details = obj.details;
        this.longitude = obj.longitude;
        this.latitude = obj.latitude;
    }


    toString(){
        let outStrBuf = new String();
        outStrBuf += "{\n";

        if (this.name) outStrBuf += "\"" + "name" + "\":\"" + this.name + "\n";
        if (this.details) outStrBuf += "\"" + "details" + "\":\"" + this.details + "\n";
        if (this.longitude) outStrBuf += "\"" + "longitude" + "\":\"" + this.longitude + "\n";
        if (this.latitude) outStrBuf += "\"" + "latitude" + "\":\"" + latitude + "\n";

        outStrBuf += "}";
        return outStrBuf.toString();
    }
}