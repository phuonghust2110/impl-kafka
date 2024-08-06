import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CreateConsumer } from './create.consumer';
import { ProducerService } from 'src/kafka/producer/producer.service';
import { ConsumerService } from 'src/kafka/consumer/consumer.service';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [KafkaModule],
  providers: [UsersService, CreateConsumer],
  controllers: [UsersController],
})
export class UsersModule {}
