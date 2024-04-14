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
}
