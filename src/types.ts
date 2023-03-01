
// Project Type
export interface Project {
	slug        : string;
	templateVer : number;
	author      : string;
	layout      : string;
	title       : string;
	client      : string;
	publishDate : string;
	editedDate  : string;
	img         : string;
	description : string;
	tags        : Array<string>;
}