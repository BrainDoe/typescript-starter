import { Request, Response } from 'express';
import fs from 'fs';
import { parse } from 'csv-parse';
let planets: any = [];

function isHabitable(planet: any) {
  return planet['koi_dispositon'] === 'CONFIRMED' 
  && planet['koi_insol'] > 50 && planet['koi_prad'] > 3;
}

export const getPlanets = (req: Request, res: Response) => {
  try {
    fs.createReadStream('./src/kepler_data.csv')
    .pipe(parse({ comment: '#', columns: true}))
    .on('data', (data) => {
      if(isHabitable(data)) {
        planets.push(data)
      }
    })
    .on('error', (err) => {
      console.log(err);
    })
    .on('end', () => {
      console.log(planets);
      console.log('Done');
    });
    
    return res.status(200).json(planets.length);
  } catch (error) {
    console.log(error);
  }
}