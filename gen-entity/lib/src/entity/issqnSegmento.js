import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_segmento {
 
	@PrimaryGeneratedColumn()
	idSegmento : number;
	@Column({ type : 'varchar', length : 5000})
	caracteristica : string;
	@Column({ type : 'varchar', length : 255})
	nome : string;
}