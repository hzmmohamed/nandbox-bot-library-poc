
module.exports = class TagDefination {

	constructor(obj) {
		this.id = obj.id;
		this.name = obj.name;
		this.description = obj.description;
		this.isPrivate = Utils.getInteger(obj.isPrivate);

	}


}
