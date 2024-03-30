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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const byscypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const admin_service_1 = require("../admin/admin.service");
let AuthService = class AuthService {
    constructor(jwtService, adminService) {
        this.jwtService = jwtService;
        this.adminService = adminService;
    }
    async AdminsignUp(createAdminDto) {
        const admin = await this.adminService.getADminByEmail(createAdminDto.email);
        if (admin) {
            throw new common_1.HttpException("Bunday admin mavjud", common_1.HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await byscypt.hash(createAdminDto.password, 7);
        createAdminDto.password = hashedPassword;
        const newAdmin = await this.adminService.create(createAdminDto);
        console.log("newAdmin", newAdmin);
        const data = await this.AdmingenerateToken(newAdmin);
        newAdmin.hashed_refresh_token = data.token;
        newAdmin.save();
        return data;
    }
    async AdmingenerateToken(admin) {
        const payload = {
            sub: admin.id,
            email: admin.email,
            is_active: admin.is_active,
            is_creator: admin.is_creator,
        };
        return { token: this.jwtService.sign(payload) };
    }
    async AdminLogin(loginDto) {
        const admin = await this.adminService.getADminByEmail(loginDto.email);
        console.log("admin", admin);
        if (!admin) {
            console.log("!admin if ishladi ");
            throw new common_1.UnauthorizedException("email yoki password notogri ");
        }
        const validPassword = await byscypt.compare(loginDto.password, admin.password);
        if (!validPassword) {
            console.log(loginDto.password, "   ", admin.password);
            console.log("!validPassword if ishladi ");
            throw new common_1.UnauthorizedException("email yoki password notogri ");
        }
        return this.AdmingenerateToken(admin);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        admin_service_1.AdminService])
], AuthService);
//# sourceMappingURL=auth.service.js.map