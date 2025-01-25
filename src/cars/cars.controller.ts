import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {
  
  //private cars = ['car1', 'car2', 'car3'];
  constructor(
    private readonly carsService: CarsService
  ){}


  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getCarsById( @Param('id', ParseUUIDPipe) id) {
    console.log({id})
    return this.carsService.getCarbyId(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    //return this.carsService.createCar(createCarDto);
    return this.carsService.createCar(createCarDto);
  }
  
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id : string,
    @Body() updateCarDto: UpdateCarDto)
    {
      return updateCarDto;
    }
  
  @Delete(':id')
  deleteCar(
    @Param('id', ParseUUIDPipe) id : string,
  ){
    return  this.carsService.deleteCar(id);
  }
}
