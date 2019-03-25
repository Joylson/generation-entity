import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class issqn_unidade_calculo {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'varchar', length : 200})
	descricao : string;
	@Column({ type : 'date'})
	dtInicio : date;
	@Column({ type : 'date'})
	dtTermino : date;
	@Column({ type : 'float8'})
	quantidade : float;
	@Column({ type : 'int4'})
	idIss : number;
}