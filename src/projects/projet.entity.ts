import { Column, Entity } from "typeorm";

@Entity()
class Project{
  @Column()
  public id!: string;//au format uuidv4

  @Column()
  public name!: string;

  @Column()
  public referringEmployeeId!: string; //au format uuidv4
}
