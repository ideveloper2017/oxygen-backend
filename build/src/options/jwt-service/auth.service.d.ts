import { JwtService } from '@nestjs/jwt';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    hashedPassword(password: string): Promise<any>;
    comparePassword(newPassword: string, oldPassword: string): Promise<any>;
    generateToken(id: UUID): Promise<any>;
}
