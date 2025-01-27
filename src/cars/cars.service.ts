import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
    //     {
    //     id: uuid(),
    //     marca: 'Fiat',
    //     modelo: 'Uno',
    // },
    ]

    getAllCars() {
        return this.cars;
    }

    getCarbyId(id: string){
        return this.cars.find(car => car.id === id);
    }

    createCar(createCarDto: CreateCarDto){
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }

    updateCar(id: string, updateCarDto: UpdateCarDto){
        let carDB = this.getCarbyId(id);
        this.cars = this.cars.map( car=>{
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }
                return car;
            }
        })
        }
    
    deleteCar(id: string){
        this.cars = this.cars.filter(car => car.id !== id);
        return {
            method: 'Delete',
            id
        }
    }


    fillCarsWithSeedData( cars: Car[]){
        this.cars = cars;
    }
}
