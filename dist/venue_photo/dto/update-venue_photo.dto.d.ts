import { CreateVenuePhotoDto } from './create-venue_photo.dto';
declare const UpdateVenuePhotoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVenuePhotoDto>>;
export declare class UpdateVenuePhotoDto extends UpdateVenuePhotoDto_base {
    venue_id?: number;
    url?: string;
}
export {};