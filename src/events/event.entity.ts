import { Column, Entity } from "typeorm";

@Entity()
class Event{
  @Column()
  public id!: string;//au format uuidv4
  @Column()
  public date!: Date;
  @Column({default: 'Pending'})
  public eventStatus?: 'Pending' | 'Accepted' | 'Declined' // valeur par défaut : 'Pending';
  @Column()
  public eventType!: 'RemoteWork' | 'PaidLeave';
  @Column()
  public eventDescription?: string;
  @Column()
  public userId!: string; //au format uuidv4

}