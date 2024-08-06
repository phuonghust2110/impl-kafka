import { Module } from '@nestjs/common';
import { KafkaModule } from './kafka/kafka.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [KafkaModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
