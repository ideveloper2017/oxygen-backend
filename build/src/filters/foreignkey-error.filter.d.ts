import { ArgumentsHost } from '@nestjs/common';
import { QueryFailedError } from 'typeorm/error/QueryFailedError';
export declare class ForeignKeyConstraintErrorFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost): void;
}
