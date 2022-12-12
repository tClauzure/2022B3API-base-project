import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto } from '../dto/users.dto';
import {User} from '../user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){}

  async Create(usersDto: UsersDto) :Promise<User>{
    return this.usersRepository.save(usersDto)
  }

  async findOne(email :string): Promise<User | undefined>{
    return this.usersRepository.findOneBy({ email: email});
  }

}


