import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string//au format uuidv4

  @Column()
  public username!: string;// cette propriété doit porter une contrainte d'unicité

  @Column()
  public email!: string;// cette propriété doit porter une contrainte d'unicité

  @Column()
  public password!: string;

  @Column({default: 'Employee'})
  public role!: 'Employee' | 'Admin' | 'ProjectManager'; // valeur par defaut : 'Employee'
}
