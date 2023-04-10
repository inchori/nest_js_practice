import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmExModule } from '../typeorm-ex.module';
import { BoardRepository } from './board.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository]), AuthModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
