import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseIntPipe implements PipeTransform<string> {
    transform(value: string, metadata: ArgumentMetadata): Promise<any>;
}
