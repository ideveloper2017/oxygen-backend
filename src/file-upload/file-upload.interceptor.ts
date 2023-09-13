import { FileInterceptor } from '@nestjs/platform-express';
import { Injectable, mixin, NestInterceptor, Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';

export function FileUploadInterceptor(options: {
    
    path: string;
    
    fileFilter: (request, file, callback) => any;
    
    fieldName: string;
    
    limits: { fileSize: number }

}): Type<NestInterceptor> {

    @Injectable()
    
    class Interceptor implements NestInterceptor {
        
        fileInterceptor: NestInterceptor;
       
        constructor(configService: ConfigService) {
       
            const filesDestination = configService.get('UPLOADED_FILES_DESTINATION');
       
            const destination = `${filesDestination}${options.path}`
       
            const multerOptions: MulterOptions = {
                storage: diskStorage( {destination }) 
            }
            
            this.fileInterceptor = new (FileInterceptor(options.fieldName, multerOptions));
        }
        
        intercept(...args: Parameters<NestInterceptor['intercept']>) {
            return this.fileInterceptor.intercept(...args);
        }
    }
    return mixin(Interceptor);
}
