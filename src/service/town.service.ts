import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { UpdateTownDto } from 'src/dtos/town-dto/update-town.dto';
import { Towns } from 'src/entity/town.entity';
import { Repository } from 'typeorm';
import { RegionsService } from './regions.service';
import { DistrictsService } from './districts.service';
import { RolesService } from './roles.service';
import { PermissionsService } from './permissions.service';
import { Buildings } from 'src/entity/buildings.entity';
import { Clients } from 'src/entity/clients.entity';
import { Orders } from 'src/entity/orders.entity';
import { Payments } from 'src/entity/payments.entity';
import { Apartments } from 'src/entity/apartments.entity';
import { Users } from 'src/entity/users.entity';
import { Roles } from 'src/entity/roles.entity';

@Injectable()
export class TownService {
  constructor(
    @InjectRepository(Towns) private readonly townRepository: Repository<Towns>,
    private readonly regionService: RegionsService,
    private readonly districtService: DistrictsService,
    private readonly roleService: RolesService,
    private readonly permissionService: PermissionsService
  ) {}

  async createTown(createTownDto: CreateTownDto) {
    const town = await this.townRepository.findOne({
      where: { name: createTownDto.name },
    });

    if (!town) {
      const newTown = await this.townRepository.save(createTownDto);
      return {
        status: 201,
        data: newTown,
        message: 'Town created successfully',
      };
    } else {
      return { status: 400, message: 'Bu nomdagi turar-joy mavjud' };
    }
  }

  async findAllTowns(id:number) {
    let towns
    if(id != 0){
      towns = await this.townRepository.findOne({where: {id:id}, relations: ['buildings'] });
    }else {
      towns = await this.townRepository.find({relations: ['buildings'] });
    }
    return towns;
  }

  async updateTown(id: number, updateTownDto: UpdateTownDto) {
    const updatedTown = await this.townRepository.update(id, updateTownDto);
    return updatedTown;
  }

  async deleteTown(id: number) {
    const deletedTown = await this.townRepository.delete(id);
    return deletedTown;
    }

  async getCountOfBuildingsAndApartmentsInTown(){
    const result = this.townRepository
    .createQueryBuilder()
    .select('town.id, town.name, town.created_at')
    .addSelect('COUNT(DISTINCT buildings.id)', 'buildingCount')
    .addSelect('COUNT(DISTINCT apartments.id)', 'apartmentCount')
    .from(Towns, 'town')
    .leftJoin('town.buildings', 'buildings')
    .leftJoin('buildings.entrances', 'entrances')
    .leftJoin('entrances.floors', 'floors')
    .leftJoin('floors.apartments', 'apartments')
    .groupBy('town.id');

    const res = await result.getRawMany();

    return res
  
  }
  async homePageDatas() {

    const towns = await this.townRepository.count()
    const buildings = await this.townRepository.manager.getRepository(Buildings).count()
    const orders = await this.townRepository.manager.getRepository(Orders).count()
    const clients = await this.townRepository.manager.getRepository(Clients).count()
    const payments = await this.townRepository.manager.getRepository(Payments).count()
    const roles = await this.townRepository.manager.getRepository(Roles).count()
    const users = await this.townRepository.manager.getRepository(Users).count()
    const apartments = await this.townRepository.manager.getRepository(Apartments).count()
    const bookedApartments = await this.townRepository.manager.getRepository(Apartments).count({where: {status: 'bron'}})

    return {
      towns, buildings, apartments, orders, users, roles, clients, payments, bookedApartments
    }
  }


  async clearDatabase() {
    const connection =  this.townRepository.manager.connection
    let queryRunner = connection.createQueryRunner()

    const table_names = connection.entityMetadatas.map(entity => entity.tableName)
    const check=[]

    for await (const table_name of table_names) {
      // ============================== 2 usul ============================
      let res = await queryRunner.query(`TRUNCATE TABLE "${table_name}" RESTART IDENTITY CASCADE`);
      check.push(res)
    }
    await this.regionService.fillDataRegion()
    await this.districtService.fillDataDistrict()
    await this.roleService.filldata();
    await this.permissionService.filldata();

    return table_names.length == check.length ? true : false; 
    
}

  
}
