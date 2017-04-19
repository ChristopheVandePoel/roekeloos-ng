export class Media {
    id: number;
    name: string;  
    type: string;
    url: string;

    constructor(obj?: any
    ) {
        this.id =    obj && obj.id || null;
        this.name =  obj && obj.name || null;
        this.type = obj && obj.media_type || null;
        this.url = obj && obj.source_url || null;
    }
}
