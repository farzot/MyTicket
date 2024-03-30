import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./models/cart.models";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): Promise<Cart>;
    findAll(): Promise<Cart[]>;
    findOne(id: string): Promise<Cart>;
    update(id: string, updateCartDto: UpdateCartDto): Promise<Cart>;
    remove(id: string): Promise<string>;
}
