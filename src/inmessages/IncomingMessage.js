"use strict";
const User = require("../data/User");
const Chat = require("../data/Chat");
const Photo = require("../data/Photo");
const Contact = require("../data/Contact");
const Location = require("../data/Location");
const Document = require("../data/Document");
const Gif = require("../data/Gif");
const Video = require("../data/Video");
const Voice = require("../data/Voice");
const Audio = require("../data/Audio");
const TextFile = require("../data/TextFile");
const Article = require("../data/Article");
const WhiteListUser = require("../data/WhiteListUser");
const TagDefinition = require("../data/TagDefinition");
/** 
 * it represents Incoming message Object , the incoming message Object is
 * representing Server Messages with method : message
 * 
 * @author Ahmed A. El-Malatawy @author Amir
 * 
*/
module.exports = class IncomingMessage {

    constructor(jsonObj) {
        let obj = {};

        obj = jsonObj.message;

        this.chat = obj.chat == null ? null : new Chat(obj.chat);
        this.location = obj.location ? new Location(obj.location) : null;
        this.contact = obj.contact ? new Contact(obj.contact) : null;
        this.document = obj.document ? new Document(obj.document) : null;
        this.photo = obj.photo ? new Photo(obj.photo) : null;
        this.gif = obj.gif ? new Gif(obj.gif) : null;
        this.voice = obj.voice ? new Voice(obj.voice) : null;
        this.video = obj.video ? new Video(obj.video) : null;
        this.audio = obj.audio ? new Audio(obj.audio) : null;
        this.sticker = obj.sticker ? new Sticker(obj.sticker) : null;
        this.text_file = obj.text_file ? new TextFile(obj.text_file) : null;
        this.text = obj.text;
        this.message_id = obj.message_id;
        this.date = obj.date;
        this.reference = obj.reference;
        this.from = obj.from;
        this.sent_to = obj.sent_to_user;
        this.from_admin = obj.from_admin;
        this.type = obj.type;
        this.caption = obj.caption;
        this.reply_to_message_id = obj.reply_to_message_id;
        this.status = obj.status;
        this.chat_settings = obj.chat_settings;
        this.bg_color = obj.bg_color;
        this.article = obj.article ? new Article(obj.article) : null;
        this.url = obj.url;
        this.users = obj.users ? new WhiteListUser(obj.users) : null;
        this.tagsDefinition = obj.tagsDefinition ? new TagDefinition(obj.tagsDefinition) : null;
    }
    isMsgWithType(msgType) { return msgType == this.type; }

    isVideoMsg() { return this.isMsgWithType("video");}
    isTextMsg() { return this.isMsgWithType("text");}
    isPhotoMsg() { return this.isMsgWithType("photo");}
    isAudioMsg() { return this.isMsgWithType("audio");}
    isLocationMsg() {return this.isMsgWithType("location");}
    isVoiceMsg() { return this.isMsgWithType("voice");}
    isGifMsg() { return this.isMsgWithType("gif");}
    isStickerMsg() { return this.isMsgWithType("sticker");}
    isTextFileMsg() { return this.isMsgWithType("text_file");}
    isDocumentMsg() { return this.isMsgWithType("document");}
    isContactMsg() {return  this.isMsgWithType("contact")};
    isArticleMsg() {return  this.isMsgWithType("article")};

}