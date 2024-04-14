import { model, Schema, Document } from 'mongoose';
import { Restaurant } from '@/interfaces/restaurant.interface';

const RestaurantSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const RestaurantModel = model<Restaurant & Document>('Restaurant', RestaurantSchema);
