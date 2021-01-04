export class Article {
    id: number;
    title: string;
    richtext: string;
    content: string;
    articleDate: Date;
    articleUpdated: Date;
    value: string;
    img: string;

    static from(obj: ArticleRow): Article {
        const article = new Article(
            obj.id,
            obj.title,
            obj.richtext,
            obj.content,
            obj.articleDate,
            obj.articleUpdated,
            obj.value,
            obj.img
        );
        return article;
    }

    constructor(
        id: number,
        title: string,
        richtext: string,
        content: string,
        articleDate: Date,
        articleUpdated: Date,
        value: string,
        img: string
    ) {
        this.id = id;
        this.title = title;
        this.richtext = richtext;
        this.content = content;
        this.articleDate = articleDate;
        this.articleUpdated = articleUpdated;
    }
}

export interface ArticleRow {
    id: number;
    title: string;
    richtext: string;
    content: string;
    articleDate: Date;
    articleUpdated: Date;
    value: string;
    img: string;
}