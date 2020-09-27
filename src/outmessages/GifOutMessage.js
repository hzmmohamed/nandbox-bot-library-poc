const OutMessage = require("./OutMessage");
/**
 * This class represents Output Message used to send this.Gif file either its in this.Gif
 * image format or this.Gif video format .
 *
 * @author Ahmed A. El-Malatawy, Amir
 *
 */
module.exports = class GifOutMessage extends OutMessage {


    /**
     * @param gifType
     *            it should be photo or video based on the type of this.Gif need to be
     *            send , its default is photo
     *  
     */
    constructor(gifType, gif) {
        super();
        if (gif) {
            switch (gifType) {
                case "Photo":
                    this.method = "sendPhoto";
                    this.photo = gif;
                    break;
                case "Video":
                    this.method = "sendVideo";
                    this.video = gif;
                    break;
                default:
                    this.method = "sendPhoto";
                    this.photo = gif;
            }
        }

    }
}