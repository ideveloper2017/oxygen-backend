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
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_client_dto_1 = require("../dtos/client-dto/create-client.dto");
const update_client_dto_1 = require("../dtos/client-dto/update-client.dto");
const clients_entity_1 = require("../entity/clients.entity");
const clients_service_1 = require("../service/clients.service");
let ClientsController = class ClientsController {
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    createClient(createClientDto) {
        return this.clientsService.createClient(createClientDto);
    }
    getAllClients() {
        return this.clientsService.findAllClients();
    }
    updateClient(id, updateClientDto) {
        return this.clientsService.editClientInfo(id, updateClientDto);
    }
    getClientById(id) {
        return this.clientsService.findOneClient(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Yangi mijoz qo'shish" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Mijoz qo'shildi!" }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "createClient", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Mavjud mijozlar ro'yxati" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: clients_entity_1.Clients }),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getAllClients", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Mijoz ma'lumotlarini tahrirlash" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Mijoz ma'lumotlari tahrirlandi." }),
    (0, common_1.Patch)('/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_client_dto_1.UpdateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "updateClient", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Mijoz ma'lumotlari" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: clients_entity_1.Clients }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getClientById", null);
ClientsController = __decorate([
    (0, swagger_1.ApiTags)('Clients'),
    (0, common_1.Controller)('clients'),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsController);
exports.ClientsController = ClientsController;
//# sourceMappingURL=clients.controller.js.map