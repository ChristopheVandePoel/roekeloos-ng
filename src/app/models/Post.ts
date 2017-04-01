import { Author } from './Author'
export class Post {
    title: string;
    excerpt: string; 
    content: string; 
    author: Author;

    constructor(obj?: any
    ) {
        this.title =    obj && obj.title || null;
        this.excerpt =  obj && obj.excerpt || null;
        this.content =  obj && obj.content || null;
        this.author = obj && obj.author || null;
    }
}
