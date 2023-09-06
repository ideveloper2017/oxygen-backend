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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_order_dto_1 = require("../dtos/order-dto/create-order.dto");
const update_order_dto_1 = require("../dtos/order-dto/update-order.dto");
const orders_service_1 = require("../service/orders.service");
let OrdersController = class OrdersController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    createOrder(createOrderDto, res) {
        return this.orderService.createOrder(createOrderDto).then(response => {
            res.send({ data: response, message: "Order created successfully" });
        });
    }
    getOrder(id) {
        return this.orderService.getOrderList(id).then(response => {
            if (response.length != 0) {
                return { data: response, message: "Fetched data" };
            }
            else {
                return { success: true, message: "Not found!" };
            }
        });
    }
    editOpder(id, editOrderDto) {
        return this.orderService.updateOrder(id, editOrderDto).then(response => {
            if (response.affected != 0) {
                return { success: true, message: "order updated" };
            }
            else {
                return { success: false, message: "order not found" };
            }
        });
    }
    deleteOrder(arrayOfId) {
        return this.orderService.deleteOrder(arrayOfId).then(response => {
            if (response > 1) {
                return { success: true, message: `${response} Orders deleted successfully` };
            }
            else {
                return { success: true, message: "order deleted successfully" };
            }
        });
    }
    acceptOrRejectOrder(id) {
        return this.orderService.chooseOrder(id).then(response => {
            return response;
        });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Order qo'shishi" }),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "createOrder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Order/Orderlar ro'yxatini ko'rish" }),
    (0, common_1.Get)('/order-list/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Order ni tahrirlash" }),
    (0, common_1.Patch)('/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "editOpder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Order ni o'chirish" }),
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "deleteOrder", null);
__decorate([
    (0, common_1.Patch)('/option/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "acceptOrRejectOrder", null);
OrdersController = __decorate([
    (0, swagger_1.ApiTags)('Orders'),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map