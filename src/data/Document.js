/**
 * This class represents incoming Message used to get Document Message .
 *
 * @author Hossam @author Amir
 *
 */
module.exports = class Doc {

    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.size = obj.size;
    }


    toString(){
        let outStrBuf = new String();
        outStrBuf += "{\n";

        if (this.id) outStrBuf += "\"" + "id" + "\":\"" + this.id + "\n";
        if (this.name) outStrBuf += "\"" + "name" + "\":\"" + this.name + "\n";
        if (this.size) outStrBuf += "\"" + "size" + "\":\"" + size + "\n";

        outStrBuf += "}";
        return outStrBuf.toString();
    }
}