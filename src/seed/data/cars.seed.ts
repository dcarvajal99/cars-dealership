import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED : Car[] = [

    {
       id: uuid(),
       marca: 'Toyota',
       modelo: 'Corolla'
    },
    {
        id: uuid(),
        marca: 'Honda',
        modelo: 'Civic'
    },
    {
        id: uuid(),
        marca: 'Ford',
        modelo: 'Fiesta'
    },
    {
        id: uuid(),
        marca: 'Chevrolet',
        modelo: 'Corsa'
    },
    {
        id: uuid(),
        marca: 'Renault',
        modelo: 'Clio'
    }]
