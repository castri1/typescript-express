import * as express from 'express';
import { HomeController, UsersController } from './routes'

// Import WelcomeController from controllers entry point

// Create a new express application instance
const app: express.Application = express();

// Mount the WelcomeController at the /welcome route
app.use('/', HomeController);
app.use('/users', UsersController);

export default app;