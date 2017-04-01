export class Post {
    title: string;
    excerpt: string; 

    constructor(obj?: any
    ) {
        this.title =    obj && obj.title || null;
        this.excerpt =  obj && obj.excerpt || null;
    }
}
