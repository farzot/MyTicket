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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const cart_models_1 = require("../../cart/models/cart.models");
let Booking = class Booking extends sequelize_typescript_1.Model {
};
exports.Booking = Booking;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "booking unikal Id raqami " }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => cart_models_1.Cart),
    (0, swagger_1.ApiProperty)({
        example: "cart_id example",
        description: "cart_id  describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "cart_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "createAt example",
        description: "createAt describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Booking.prototype, "createAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "finished example",
        description: "finished describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Booking.prototype, "finished", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "payment_method_id example",
        description: "payment_method_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "payment_method_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "delevery_method_id example",
        description: "delevery_method_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "delevery_method_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "discount_coupon_id example",
        description: "discount_coupon_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "discount_coupon_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "status_id example",
        description: "status_id describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "status_id", void 0);
exports.Booking = Booking = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "booking" })
], Booking);
//# sourceMappingURL=booking.models.js.map