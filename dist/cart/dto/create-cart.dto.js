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
exports.CreateCartDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCartDto {
}
exports.CreateCartDto = CreateCartDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "ticket_id example",
        description: "ticked_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCartDto.prototype, "ticket_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "customer_id example",
        description: "customer_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCartDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "createdAt example",
        description: "createdAt describtion",
    }),
    __metadata("design:type", Date)
], CreateCartDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "finishedAt example",
        description: "finishedAt describtion",
    }),
    __metadata("design:type", Date)
], CreateCartDto.prototype, "finishedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "status_id example",
        description: "status_id describtion",
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCartDto.prototype, "status_id", void 0);
//# sourceMappingURL=create-cart.dto.js.map