export declare class PlaceEntity {
    id: string;
    name: string;
    province: string;
    city: string;
    category: string;
    description: string;
    latitude: number;
    longitude: number;
    address?: string;
    phone?: string;
    website?: string;
    imageUrl?: string;
    rating: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
