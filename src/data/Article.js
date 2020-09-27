

/**
 * This class represents incoming Message used to get Article Message .
 * 
 * @author Hossam Mohamed
 *
 */
module.exports = class Article {


	constructor(obj) {

		this.id = obj.id;
		this.width = obj.width;
		this.height = obj.height;
		this.size = obj.size;
		this.thumbnail = obj.thumbnail != null ? new Thumbnail(obj.thumbnail) : null;

	}

}