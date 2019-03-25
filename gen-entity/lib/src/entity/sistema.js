import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class sistema {
 
	@PrimaryGeneratedColumn()
	idSistema : string;
	@Column({ type : 'varchar', length : 60})
	nome : string;
}