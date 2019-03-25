import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class religiao {
 
	@PrimaryGeneratedColumn()
	idReligiao : number;
	@Column({ type : 'varchar', length : 150})
	nome : string;
}