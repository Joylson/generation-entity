import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnAtividade from './issqnAtividade'

@Entity()
export class issqn_atividade_taxa {
 
	@PrimaryGeneratedColumn()
	idAtividadeTaxa : number;
	@Column({ type : 'int4'})
	idParente : number;
	@Column({ type : 'int4'})
	idAtividade : number;
	@Column({ type : 'int4'})
	idTaxa : number;
}