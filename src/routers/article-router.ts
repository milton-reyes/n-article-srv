import { Article } from './../models/Article';
import express, { response } from 'express';
import * as articleService from './../services/article-service';

export const articleRouter = express.Router();

articleRouter.get('', (req, res, next) => {
    try {
        const articles = articleService.getAllArticles();
        res.json(articles);
    } catch (e) {
        console.error(e);
    }
});