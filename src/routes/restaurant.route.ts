import { Router } from 'express';
import { RestaurantController } from '@controllers/restaurant.controller';
import { Routes } from '@interfaces/routes.interface';

export class RestaurantRoute implements Routes {
  public path = '/restaurants';
  public router = Router();
  public restaurant = new RestaurantController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.restaurant.getRestaurants);
    this.router.get(`${this.path}/search`, this.restaurant.findRestaurant);
    this.router.get(`${this.path}/sortby`, this.restaurant.sortRestaurants);
  }
}
