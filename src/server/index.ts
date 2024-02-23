import express, { Express, Request, Response } from 'express'
import { config } from './config';
import { render } from './render';
import axios from 'axios';

const app: Express = express();

app.use(express.static('dist'))

app.get('*', async (req: Request, res: Response) => {
  const { data } = await axios.get("https://images-api.nasa.gov/search?q=galaxies")
  const initialProps = {
    galaxies: data?.collection?.items
  }

  res.send(render(req.url, initialProps))
})

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`)
})