import { Article } from './../models/Article';
import * as articleDao from './../daos/article-dao';

export function getAllArticles(): Promise<Article[]> {
    return articleDao.getAllArticles();
}