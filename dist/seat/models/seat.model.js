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
exports.Seat = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const venue_model_1 = require("../../venue/models/venue.model");
const seat_type_model_1 = require("../../seat_type/models/seat_type.model");
const swagger_1 = require("@nestjs/swagger");
let Seat = class Seat extends sequelize_typescript_1.Model {
};
exports.Seat = Seat;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "seat unikal Id raqami " }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Seat.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "sektor about ichida",
        description: "sektor describtion",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Seat.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "raqami about ichida",
        description: "raqami  describtion ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Seat.prototype, "row_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "number about ichida",
        description: "number  describtion ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Seat.prototype, "number", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => venue_model_1.Venue),
    __metadata("design:type", venue_model_1.Venue)
], Seat.prototype, "venue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "tashqi kalit  about ichida",
        description: "tashqi kalit   describtion ",
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => venue_model_1.Venue),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    __metadata("design:type", Number)
], Seat.prototype, "venueId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "tashqi kalit  seat_type_id  about ichida",
        description: "tashqi kalit   describtion ",
    }),
    (0, sequelize_typescript_1.ForeignKey)(() => seat_type_model_1.Seat_type),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    }),
    __metadata("design:type", Number)
], Seat.prototype, "seat_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "location   about ichida",
        description: "location   describtion ",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
    }),
    __metadata("design:type", String)
], Seat.prototype, "location_in_schema", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => seat_type_model_1.Seat_type),
    __metadata("design:type", seat_type_model_1.Seat_type)
], Seat.prototype, "seat_type", void 0);
exports.Seat = Seat = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "seat" })
], Seat);
//# sourceMappingURL=seat.model.js.map