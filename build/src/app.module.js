"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const users_controller_1 = require("./controller/users.controller");
const clients_controller_1 = require("./controller/clients.controller");
const apartments_controller_1 = require("./controller/apartments.controller");
const buildings_controller_1 = require("./controller/buildings.controller");
const roles_controller_1 = require("./controller/roles.controller");
const price_controller_1 = require("./controller/price.controller");
const sales_controller_1 = require("./controller/sales.controller");
const payment_details_controller_1 = require("./controller/payment_details.controller");
const payment_methods_controller_1 = require("./controller/payment_methods.controller");
const sale_details_controller_1 = require("./controller/sale_details.controller");
const user_roles_controller_1 = require("./controller/user_roles.controller");
const users_service_1 = require("./service/users.service");
const clients_service_1 = require("./service/clients.service");
const buildings_service_1 = require("./service/buildings.service");
const apartments_service_1 = require("./service/apartments.service");
const price_service_1 = require("./service/price.service");
const payment_details_service_1 = require("./service/payment_details.service");
const payment_methods_service_1 = require("./service/payment_methods.service");
const sale_details_service_1 = require("./service/sale_details.service");
const roles_service_1 = require("./service/roles.service");
const user_roles_service_1 = require("./service/user-roles.service");
const sales_service_1 = require("./service/sales.service");
const auth_module_1 = require("./options/jwt-service/auth.module");
const users_module_1 = require("./modules/users/users.module");
const buildings_module_1 = require("./modules/buildings/buildings.module");
const apartments_module_1 = require("./modules/apartments/apartments.module");
const clients_module_1 = require("./modules/clients/clients.module");
const payment_details_module_1 = require("./modules/payment_details/payment_details.module");
const sale_details_module_1 = require("./modules/sale_details/sale_details.module");
const sales_module_1 = require("./modules/sales/sales.module");
const roles_module_1 = require("./modules/roles/roles.module");
const payment_methods_module_1 = require("./modules/payment_methods/payment_methods.module");
const town_controller_1 = require("./controller/town.controller");
const town_service_1 = require("./service/town.service");
const town_module_1 = require("./modules/town/town.module");
const Joi = __importStar(require("@hapi/joi"));
const regions_module_1 = require("./modules/regions/regions.module");
const regions_controller_1 = require("./controller/regions.controller");
const regions_service_1 = require("./service/regions.service");
const districts_service_1 = require("./service/districts.service");
const currencies_controller_1 = require("./controller/currencies.controller");
const currencies_module_1 = require("./modules/currencies/currencies.module");
const currencies_service_1 = require("./service/currencies.service");
const auth_controller_1 = require("./controller/auth/auth.controller");
const auth_service_1 = require("./service/auth.service");
const jwt_1 = require("@nestjs/jwt");
const orders_module_1 = require("./modules/orders/orders.module");
const orders_service_1 = require("./service/orders.service");
const orders_controller_1 = require("./controller/orders.controller");
const entrances_controller_1 = require("./controller/entrances.controller");
const entrances_module_1 = require("./modules/entrances/entrances.module");
const entrances_service_1 = require("./service/entrances.service");
const floors_module_1 = require("./modules/floors/floors.module");
const floors_controller_1 = require("./controller/floors.controller");
const floors_service_1 = require("./service/floors.service");
const permissions_service_1 = require("./service/permissions.service");
const premissions_module_1 = require("./modules/premissions/premissions.module");
const core_module_1 = require("./core/core.module");
let AppModule = class AppModule {
    constructor(regionServ, distServ, roleServ, permissionserv) {
        this.regionServ = regionServ;
        this.distServ = distServ;
        this.roleServ = roleServ;
        this.permissionserv = permissionserv;
        regionServ.fillDataRegion();
        distServ.fillDataDistrict();
        roleServ.filldata();
        permissionserv.filldata();
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    POSTGRES_HOST: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required(),
                    POSTGRES_DATABASE: Joi.string().required(),
                    PORT: Joi.number(),
                }),
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            buildings_module_1.BuildingsModule,
            apartments_module_1.ApartmentsModule,
            clients_module_1.ClientsModule,
            payment_details_module_1.PaymentDetailsModule,
            sale_details_module_1.SaleDetailsModule,
            sales_module_1.SalesModule,
            roles_module_1.RolesModule,
            payment_methods_module_1.PaymentMethodsModule,
            town_module_1.TownModule,
            currencies_module_1.CurrenciesModule,
            regions_module_1.RegionsModule,
            premissions_module_1.PermissionsModule,
            orders_module_1.OrdersModule,
            entrances_module_1.EntrancesModule,
            floors_module_1.FloorsModule,
            core_module_1.CoreModule,
        ],
        controllers: [
            users_controller_1.UsersController,
            clients_controller_1.ClientsController,
            apartments_controller_1.ApartmentsController,
            buildings_controller_1.BuildingsController,
            roles_controller_1.RolesController,
            price_controller_1.PriceController,
            sales_controller_1.SalesController,
            payment_details_controller_1.PaymentDetailsController,
            payment_methods_controller_1.PaymentMethodsController,
            sale_details_controller_1.SaleDetailsController,
            user_roles_controller_1.UserRolesController,
            town_controller_1.TownController,
            currencies_controller_1.CurrenciesController,
            regions_controller_1.RegionsController,
            auth_controller_1.AuthController,
            orders_controller_1.OrdersController,
            entrances_controller_1.EntrancesController,
            floors_controller_1.FloorsController,
        ],
        providers: [
            users_service_1.UsersService,
            clients_service_1.ClientsService,
            buildings_service_1.BuildingsService,
            apartments_service_1.ApartmentsService,
            price_service_1.PriceService,
            payment_details_service_1.PaymentDetailsService,
            payment_methods_service_1.PaymentMethodsService,
            sale_details_service_1.SaleDetailsService,
            roles_service_1.RolesService,
            user_roles_service_1.UserRolesService,
            sales_service_1.SalesService,
            town_service_1.TownService,
            currencies_service_1.CurrenciesService,
            regions_service_1.RegionsService,
            districts_service_1.DistrictsService,
            auth_service_1.AuthService,
            jwt_1.JwtService,
            permissions_service_1.PermissionsService,
            orders_service_1.OrdersService,
            entrances_service_1.EntrancesService,
            floors_service_1.FloorsService,
        ],
    }),
    __metadata("design:paramtypes", [regions_service_1.RegionsService,
        districts_service_1.DistrictsService,
        roles_service_1.RolesService,
        permissions_service_1.PermissionsService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map