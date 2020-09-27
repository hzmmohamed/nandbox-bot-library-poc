/**
 * This class represents incoming Message used to get Contact Message .
 *
 * @author Hossam @author Amir
 * 
 */
module.exports = class Contact {

    constructor(obj) {
        this.name = obj.name;
        this.phone_number = obj.phone_number;
    }

    toString(){
        let outStrBuf = new String();
        outStrBuf += "{\n";

        if (this.name) outStrBuf += "\"" + "name" + "\":\"" + this.name + "\n";
        if (this.phone_number) outStrBuf += "\"" + "phone_number" + "\":\"" + this.phone_number + "\n";

        outStrBuf += "}";
        return outStrBuf.toString();
    }
}