import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
import dotenv from 'dotenv'
dotenv.config({ silent: true })

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
