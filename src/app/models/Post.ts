import { Author } from './Author';
import { Media } from './Media';
import * as sanitizeHtml from 'sanitize-html';
import { getSyntaxformatted } from '../utils/syntax';

import { Observable } from 'rxjs';

export class Post {
    id: number
    title: string;
    excerpt: string; 
    content: string; 
    authorId: number;
    author: Author;
    trimPost: string = "";
    mediaId: number;
    media: Media;
    contentWithCode: string = "";
    slug: string = "";
    description: string;

    constructor(private isPlatformBrowser: boolean, obj?: any 
    ) {
        this.id = obj && obj.id;
        this.title = obj && obj.title && obj.title.rendered || null;
        this.excerpt = obj && obj.excerpt && obj.excerpt.rendered || null;
        this.content = obj && obj.content && obj.content.rendered || null;
        this.authorId = obj && obj.author || null;
        this.mediaId = obj && obj.custom_meta && obj.custom_meta.imageID || null;
        this.trimPost = sanitizeHtml(this.content.substr(0,200)) || "";
        this.getTheRightContent(this.content) || "";
        this.setSlug(this.title);
        this.description = obj && obj.custom_meta && obj.custom_meta.description || null;
    }

    setPostAuthor(author: Author) {
        this.author = author;
    }

    setPostMedia(media: Media) {
        this.media = media;
    }

    setSlug(str: string) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";

        for (var i=0, l=from.length ; i<l ; i++)
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));


        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        this.slug = str;
    }

    getTheRightContent(input: string) {
        this.contentWithCode = this.isPlatformBrowser ?
            getSyntaxformatted(this.content) :
            this.contentWithCode = this.content;
    }
}
