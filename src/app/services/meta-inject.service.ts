import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface Tags {
    title?: string
    description?: string
    image?: string
    type?: string,
    creator?: string
}

@Injectable()
export class MetaInjectService {

    constructor(
        private title: Title,
        private meta: Meta) {
    }

    setMetaTagsForHomePage() {
        this._removeAllTags()
        this._setMetaTags();
    }

    setMetaTagsForPost(tags:Tags = {}) {
        for(let tag in tags) {
            switch (tag) {
                case "description": 
                    let description = tags.description ? tags.description : "For the love of Code and Proze"
                    this.meta.updateTag({
                        content: description
                    }, "name='description'");
                    this.meta.updateTag({
                        content: description
                    }, "itemprop='description'");
                    this.meta.updateTag({
                        content: description
                    }, "name='twitter:description'");
                    this.meta.updateTag({
                        content: description
                    }, "property='og:description'");
                    break;
                case "title": 
                    let title = tags.title ? tags.title : "Roekeloos.be";
                    this.title.setTitle(tags.title ? "Roekeloos.be | " + tags.title : "Roekeloos.be");
                    this.meta.updateTag({
                        content: title
                    }, "itemprop='name'");
                    this.meta.updateTag({
                        content: title
                    }, "name='twitter:title'");
                    this.meta.updateTag({
                        content: title
                    }, "property='og:title'");
                    break;
                case "image":
                    let image = tags.image ? tags.image : "http://roekeloos.be/assets/logo.png";
                    this.meta.updateTag({
                        content: image
                    }, "itemprop='image'");
                    this.meta.updateTag({
                        content: image
                    }, "name='twitter:image:src'");
                    this.meta.updateTag({
                        content: image
                    }, "property='og:image'");
                    break;
            }
        }
    }

    private _setMetaTags( tags:Tags = {} ) {
        let tit = tags.title ? "Roekeloos.be | " + tags.title : "Roekeloos.be";
        let featureImage = tags.image ? tags.image : "http://roekeloos.be/assets/logo.png";

        this.title.setTitle(tit);
        this.meta.addTags([
            {name: "description", content: tags.description || "For the love of Code and Proze"},
            {itemprop: "name", content: tags.title || "Roekeloos.be"},
            {itemprop: "description", content: tags.description || "For the love of Code and Proze"},
            {itemprop: "image", content: featureImage},
            {name: "twitter:card", content:"summary"},
            {name: "twitter:site", content:"@ChristopheVdP"},
            {name: "twitter:title", content: tags.title || "Roekeloos.be"},
            {name: "twitter:description", content: tags.description || "For the love of Code and Proze"},
            {name: "twitter:creator", content: tags.creator || "@ChristopheVdP"},
            {name: "twitter:image:src", content:featureImage},
            {property: "og:title", content: tags.title || "Roekeloos.be"},
            {property: "og:type", content: "Homepage"},
            {property: "og:url", content: "http://roekeloos.be"},
            {property: "og:image", content: featureImage},
            {property: "og:description", content: tags.description || "For the love of Code and Proze"},
            {property: "og:site_name", content: tags.title || "Roekeloos.be"}
        ])
    }

    private _removeAllTags() {
        this.meta.removeTag("name='description'");
        this.meta.removeTag("itemprop='name'");
        this.meta.removeTag("itemprop='description'");
        this.meta.removeTag("itemprop='image'");
        this.meta.removeTag("name='twitter:card'");
        this.meta.removeTag("name='twitter:site'");
        this.meta.removeTag("name='twitter:title'");
        this.meta.removeTag("name='twitter:description'");
        this.meta.removeTag("name='twitter:creator'");
        this.meta.removeTag("name='twitter:image:src'");
        this.meta.removeTag("property='og:title'");
        this.meta.removeTag("property='og:type'");
        this.meta.removeTag("property='og:url'");
        this.meta.removeTag("property='og:image'");
        this.meta.removeTag("property='og:description'");
        this.meta.removeTag("property='og:site_name'");
    }
}