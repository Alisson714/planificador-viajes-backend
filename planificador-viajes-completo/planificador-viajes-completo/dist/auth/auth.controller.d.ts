import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginData: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            name: string;
            bio?: string;
            avatar?: string;
            phone?: string;
            birthDate?: string;
            country?: string;
            city?: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            routes: import("../routes/entities/route.entity").RouteEntity[];
        } | null;
    }>;
    register(registerData: {
        email: string;
        password: string;
        name: string;
    }): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            name: string;
            bio?: string;
            avatar?: string;
            phone?: string;
            birthDate?: string;
            country?: string;
            city?: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            routes: import("../routes/entities/route.entity").RouteEntity[];
        } | null;
    }>;
}
