import { NextFunction, Request, Response } from 'express';
import { RestaurantService } from '@/services/restaurant.service';
import { Restaurant } from '@/interfaces/restaurant.interface';

export class RestaurantController {
  public restaurant = new RestaurantService();

  public getRestaurants = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllRestaurantsData: Restaurant[] = await this.restaurant.findAllRestaurant();
      res.status(200).json({ data: findAllRestaurantsData, message: 'found all restaurants' });
    } catch (error) {
      next(error);
    }
  };

  public sortRestaurants = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const option = req.query.option as string;
      const findAllRestaurantsData: Restaurant[] = await this.restaurant.sortAllRestaurant(option);
      res.status(200).json({ data: findAllRestaurantsData, message: 'Restaurants sorted' });
    } catch (error) {
      next(error);
    }
  };

  public findRestaurant = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const name = req.query.name as string;
      const findRestaurantData: Restaurant[] = await this.restaurant.findRestaurant(name);
      res.status(200).json({ data: findRestaurantData, message: 'found restaurant' });
    } catch (error) {
      next(error);
    }
  };
}
