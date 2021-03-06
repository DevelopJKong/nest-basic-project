import { UserService } from './users.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './users.resolver';
import { Module } from '@nestjs/common';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[UserResolver,UserService]
})
export class UsersModule {}
