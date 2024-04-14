import { Router } from 'express';
import { TagController } from '@controllers/tag.controller';
import { Routes } from '@interfaces/routes.interface';

export class TagRoute implements Routes {
  public path = '/tags';
  public router = Router();
  public tag = new TagController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.tag.getTags);
  }
}
