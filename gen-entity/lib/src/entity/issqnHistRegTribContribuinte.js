import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class issqn_hist_reg_trib_contribuinte {
 
	@PrimaryGeneratedColumn()
	id : number;
	@Column({ type : 'date'})
	dtInicio : date;
	@Column({ type : 'date'})
	dtTermino : date;
	@Column({ type : 'varchar', length : 5000})
	observacao : string;
	@Column({ type : 'varchar', length : 70})
	regime : string;
	@Column({ type : 'int4'})
	idIss : number;
}