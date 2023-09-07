"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clients_entity_1 = require("../entity/clients.entity");
const typeorm_2 = require("typeorm");
let ClientsService = class ClientsService {
    constructor(clientRepo) {
        this.clientRepo = clientRepo;
    }
    async createClient(createClientDto) {
        const client = await this.clientRepo.findBy({
            passport_seria: createClientDto.passport_seria,
        });
        if (client.length != 0) {
            return { status: 409, data: [], message: 'Mijoz allaqachon mavjud!' };
        }
        let newClient = new clients_entity_1.Clients();
        newClient.first_name = createClientDto.first_name;
        newClient.last_name = createClientDto.last_name;
        newClient.middle_name = createClientDto.middle_name;
        newClient.gender = createClientDto.gender;
        newClient.type = createClientDto.type;
        newClient.address = createClientDto.address;
        newClient.contact_number = createClientDto.contact_number;
        newClient.date_of_birth = createClientDto.date_of_birth;
        newClient.passport_seria = createClientDto.passport_seria;
        newClient.given_from = createClientDto.given_from;
        newClient.given_date = createClientDto.given_date;
        newClient.untill_date = createClientDto.untill_date;
        newClient.legal_address = createClientDto.legal_address;
        newClient.registered_address = createClientDto.registered_address;
        newClient.description = createClientDto.description;
        newClient = await this.clientRepo.save(newClient);
        return {
            status: 201,
            data: newClient,
            message: "Mijoz ro'yxatga qo'shildi",
        };
    }
    async findAllClients() {
        const clients = await this.clientRepo.find({});
        return { status: 200, data: clients, message: "Mijozlar ro'yxati" };
    }
    async findOneClient(id) {
        const client = await this.clientRepo.findBy({ id: id });
        return { status: 200, data: client, message: 'success' };
    }
    async editClientInfo(id, updateClientDto) {
        const updatedClient = await this.clientRepo.update({ id: id }, updateClientDto);
        if (updatedClient.affected == 0) {
            return { status: 400, data: [], message: 'Mijoz topilmadi!' };
        }
        return { status: 200, data: [], message: "Mijoz ma'lumotalri tahrirlandi" };
    }
};
ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clients_entity_1.Clients)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientsService);
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map