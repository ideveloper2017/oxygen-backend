import { BaseEntity } from 'typeorm';
export default abstract class Model extends BaseEntity {
    id: number;
    created_at: Date;
    updated_at: Date;
}
