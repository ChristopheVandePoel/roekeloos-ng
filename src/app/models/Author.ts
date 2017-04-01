export class Author {
    id: number;
    name: string;  

    constructor(obj?: any
    ) {
        this.id =    obj && obj.title || null;
        this.name =  obj && obj.excerpt || null;
    }
}
