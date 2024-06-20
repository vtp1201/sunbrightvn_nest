import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_PATH } from '@utilities';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV_PATH,
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
