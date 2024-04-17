import { RestaurantModel } from '@/models/restaurant.model';
import { Restaurant } from '@/interfaces/restaurant.interface';
import { HttpException } from '@/exceptions/httpException';

export class RestaurantService {
  public restaurantModel = RestaurantModel;

  public async findAllRestaurant(): Promise<Restaurant[]> {
    const restaurants: Restaurant[] = await this.restaurantModel.find();
    return restaurants;
  }

  public async sortAllRestaurant(option: string): Promise<Restaurant[]> {
    let sortField = '';
    if (option === 'newest') {
      sortField = 'createdAt';
    } else if (option === 'mostPopular' || option === 'mostRated') {
      sortField = 'ratings';
    } else if (option === 'highestRated') {
      sortField = 'rate';
    }

    const restaurants: Restaurant[] = await this.restaurantModel.find().sort({ [sortField]: -1 });
    return restaurants;
  }

  public async findRestaurant(name: string): Promise<Restaurant[]> {
    const foundRestaurant: Restaurant[] = await this.restaurantModel.find({
      $or: [{ name: { $regex: name, $options: 'i' } }, { tags: { $in: [new RegExp(name, 'i')] } }],
    });

    // if (!foundRestaurant.length) throw new HttpException(404, 'Restaurant not found');
    return foundRestaurant;
  }
}
