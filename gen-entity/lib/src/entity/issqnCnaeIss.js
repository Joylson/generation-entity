import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnCnae from './issqnCnae'
import issqn from './issqn'

@Entity()
export class issqn_cnae_iss {
 
	@PrimaryGeneratedColumn()
	idCnaeIss : number;
	@Column({ type : 'bool'})
	atividadePrimaria : boolean;
	@Column({ type : 'bool'})
	atividadeSecundaria : boolean;
	@Column({ type : 'int4'})
	idCnae : number;
	@Column({ type : 'int4'})
	idIss : number;
}