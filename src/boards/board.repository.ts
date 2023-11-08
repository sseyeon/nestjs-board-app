import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

@EntityRepository(Board) // 저장소 라고 선언 함
export class BoardRepository extends Repository<Board> {}
