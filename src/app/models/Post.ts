import { Author } from './Author';
import sanitizeHtml from 'sanitize-html';

export class Post {
    id: number
    title: string;
    excerpt: string; 
    content: string; 
    authorId: number;
    author: Author;
    trimPost: string;

    constructor(obj?: any
    ) {
        this.id = obj && obj.id;
        this.title =    obj && obj.title && obj.title.rendered || null;
        this.excerpt =  obj && obj.excerpt && obj.excerpt.rendered || null;
        this.content =  obj && obj.content && obj.content.rendered || null;
        this.authorId =   obj && obj.author || null;
        this.trimPost = sanitizeHtml(this.content.substr(0,200));
    }

    setPostAuthor(author: Author) {
        this.author = author;
    }
}
