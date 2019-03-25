import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnAtividade from './issqnAtividade'
import issqn from './issqn'

@Entity()
export class issqn_contribuinte_atividade {
 
	@PrimaryGeneratedColumn()
	idContribuinteAtividade : number;
	@Column({ type : 'int4'})
	atividadePrimaria : number;
	@Column({ type : 'int4'})
	idAtividade : number;
	@Column({ type : 'int4'})
	idIss : number;
}