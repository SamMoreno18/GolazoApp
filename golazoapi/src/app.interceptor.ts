import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomHeadersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map(data => {
        const response = context.switchToHttp().getResponse();
        response.setHeader('Access-Control-Allow-Origin', '*');
        return data;
      })
    );
  }
}