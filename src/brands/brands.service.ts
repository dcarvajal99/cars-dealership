import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[]=[
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime()
    }
  ]


  create(createBrandDto: CreateBrandDto) {
    const {name} = CreateBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
    }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id ===id)
    if (!brand)throw new NotFoundException( `Brand ${id} not Found`) 
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
         brandDB.updatedAt = new Date().getTime();
          return {
            ...brand,
            ...brandDB
        }
      }
      return brand;
    });
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
    return `This action removes a #${id} brand`;
  }
}
