import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_cnae {
 
	@PrimaryGeneratedColumn()
	idCnae : number;
	@Column({ type : 'varchar', length : 512})
	nome : string;
	@Column({ type : 'int4'})
	tpAtividade : number;
	@Column({ type : 'varchar', length : 255})
	codigoCnae : string;
}