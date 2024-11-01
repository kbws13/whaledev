import { MiddlewareConsumer, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './api/auth/auth.module'
import { CustomResponseMiddleware } from './middleware/custom-response.middleware'
import { PrismaModule } from '@/global/prisma.module'
import { RedisModule } from '@/global/redis.module'

@Module({
  imports: [PrismaModule, RedisModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomResponseMiddleware).forRoutes('*') // 应用于所有路由
  }
}
