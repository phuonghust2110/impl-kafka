import { Controller, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(@Inject(UsersService) private userService: UsersService) {}

  @Post()
  async create() {
    await this.userService.create();
  }
}
