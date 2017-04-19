export class Author {
    id: number;
    name: string;  
    avatar: string;

    constructor(obj?: any
    ) {
        this.id =    obj && obj.id || null;
        this.name =  obj && obj.name || null;
        this.avatar = obj && obj.avatar_urls && obj.avatar_urls[96] || null;
    }
}
