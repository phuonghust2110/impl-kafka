import { Injectable } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer/producer.service';

@Injectable()
export class UsersService {
  constructor(private readonly producer: ProducerService) {}

  async create() {
    this.producer.produce({
      topic: 'create-users',
      messages: [{ value: 'this is user create' }],
    });
  }

  async update() {
    console.log('update call');
    this.producer.produce({
      topic: 'update-users',
      messages: [{ value: 'this is update user' }],
    });
  }
}
