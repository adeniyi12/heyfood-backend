import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { RestaurantRoute } from './routes/restaurant.route';
import { TagRoute } from './routes/tag.route';

ValidateEnv();

const app = new App([new RestaurantRoute(), new TagRoute()]);

app.listen();
