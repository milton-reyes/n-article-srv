import { db } from './db';
import { Article, ArticleRow } from './../models/Article';


export async function getAllArticles(): Promise<Article[]> {
    const sql = 'SELECT * FROM article ORDER BY id';

    return await db.query<ArticleRow>(sql, []).then(result => {
        const rows: ArticleRow[] = result.rows;

        console.log(rows);

        const article: Article[] = rows.map(row => Article.from(row));
        return article;
    })
}

interface Exists {
    exists: boolean;
}