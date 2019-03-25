import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_ramo_atuacao {
 
	@PrimaryGeneratedColumn()
	idRamoAtuacao : number;
	@Column({ type : 'varchar', length : 5000})
	caracteristica : string;
	@Column({ type : 'varchar', length : 255})
	nome : string;
}