import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnTipoCobranca from './issqnTipoCobranca'

@Entity()
export class issqn_tipo_cobranca_item {
 
	@PrimaryGeneratedColumn()
	idTipoCobrancaItem : number;
	@Column({ type : 'date'})
	dtVencimento : date;
	@Column({ type : 'int4'})
	idExercicio : number;
	@Column({ type : 'int4'})
	parcela : number;
	@Column({ type : 'int4'})
	idTipoCobranca : number;
}