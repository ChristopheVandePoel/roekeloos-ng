import { Author } from './Author';
import { Media } from './Media';
import * as sanitizeHtml from 'sanitize-html';
import { getSyntaxformatted } from '../utils/syntax';

export class Post {
    id: number
    title: string;
    excerpt: string; 
    content: string; 
    authorId: number;
    author: Author;
    trimPost: string = "";
    media: Media;
    contentWithCode: string = "";

    constructor(obj?: any
    ) {
        this.id = obj && obj.id;
        this.title =    obj && obj.title && obj.title.rendered || null;
        this.excerpt =  obj && obj.excerpt && obj.excerpt.rendered || null;
        this.content =  obj && obj.content && obj.content.rendered || null;
        this.authorId =   obj && obj.author || null;
        this.trimPost = sanitizeHtml(this.content.substr(0,200)) || "";
        this.getTheRightContent(this.content) || "";
    }

    setPostAuthor(author: Author) {
        this.author = author;
    }

    setPostMedia(media: Media) {
        this.media = media;
    }

    getTheRightContent(input: string) {
        this.contentWithCode = getSyntaxformatted(this.content);
        //console.log('getttt', this.contentWithCode);
    }
}
