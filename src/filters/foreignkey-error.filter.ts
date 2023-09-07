import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm/error/QueryFailedError';

@Catch(QueryFailedError)
export class ForeignKeyConstraintErrorFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    if (exception.message.includes('foreign key constraint')) {
      response.status(HttpStatus.BAD_REQUEST).json({
        message: 'Foreign key constraint violation',
        problem: exception.message
      });
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error occurred',
      });
    }
  }
}