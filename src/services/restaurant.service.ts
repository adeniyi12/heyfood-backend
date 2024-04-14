import { RestaurantModel } from '@/models/restaurant.model';
import { Restaurant } from '@/interfaces/restaurant.interface';

export class RestaurantService {
  public restaurantModel = RestaurantModel;
  
  public async findAllRestaurant(): Promise<Restaurant[]> {
    const restaurants: Restaurant[] = await this.restaurantModel.find();
    return restaurants;
  }
}
