import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm/error/QueryFailedError';

@Catch(QueryFailedError)
export class ForeignKeyConstraintErrorFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const request = host.switchToHttp().getRequest()

    if (exception.message.includes('violates foreign key constraint')) {
      response.status(HttpStatus.BAD_REQUEST).json({
        message: 'Foreign key constraint violation',
        problem: exception.message,
        url: request.url
      });
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error occurred',
      });
    }
  }
}