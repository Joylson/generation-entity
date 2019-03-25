import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import exercicio from './exercicio'
import contabilOrgao from './contabilOrgao'

@Entity()
export class email_parametro {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'varchar', length : 255})
	addressEmail : string;
	@Column({ type : 'bool'})
	emailAuthenticated : boolean;
	@Column({ type : 'varchar', length : 255})
	emailEmail : string;
	@Column({ type : 'varchar', length : 255})
	emailHostname : string;
	@Column({ type : 'varchar', length : 255})
	emailPassword : string;
	@Column({ type : 'int4'})
	emailPort : number;
	@Column({ type : 'varchar', length : 255})
	emailSolicitacao : string;
	@Column({ type : 'bool'})
	emailStarttls : boolean;
	@Column({ type : 'int4'})
	exercicioIdExercicio : number;
	@Column({ type : 'varchar', length : 255})
	orgaoIdOrgao : string;
}