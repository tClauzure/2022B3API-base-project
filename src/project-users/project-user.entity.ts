import { Column,Entity } from "typeorm";

@Entity()
class ProjectUser{
  @Column()
  public id!: string;//au format uuidv4

  @Column()
  public startDate!: Date;

  @Column()
  public endDate!: Date;

  @Column()
  public projectId!: string; //au format uuidv4

  @Column()
  public userId!: string; //au format uuidv4
}