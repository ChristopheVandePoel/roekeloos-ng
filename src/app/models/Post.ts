import { Author } from './Author'
export class Post {
    title: string;
    excerpt: string; 
    content: string; 
    authorId: number;
    author: Author;

    constructor(obj?: any
    ) {
        this.title =    obj && obj.title && obj.title.rendered || null;
        this.excerpt =  obj && obj.excerpt && obj.excerpt.rendered || null;
        this.content =  obj && obj.content && obj.content.rendered || null;
        this.authorId =   obj && obj.author || null;
    }

    setPostAuthor(author: Author) {
        this.author = author;
    }
}
