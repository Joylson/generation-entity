import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import dividaTipo from './dividaTipo'
import dividaTipo from './dividaTipo'

@Entity()
export class issqn_tipo_cobranca {
 
	@PrimaryGeneratedColumn()
	idTipoCobranca : number;
	@Column({ type : 'varchar', length : 50})
	descricao : string;
	@Column({ type : 'int4'})
	diaVencimento : number;
	@Column({ type : 'int4'})
	idExercicio : number;
	@Column({ type : 'int4'})
	idExercicioBase : number;
	@Column({ type : 'int4'})
	isBimestral : number;
	@Column({ type : 'int2'})
	isFixo : number;
	@Column({ type : 'varchar', length : 250})
	mensagem : string;
	@Column({ type : 'int4'})
	mesAtraso : number;
	@Column({ type : 'int4'})
	mesVencimento : number;
	@Column({ type : 'int4'})
	qtdParcela : number;
	@Column({ type : 'int2'})
	tipoDesconto : number;
	@Column({ type : 'int4'})
	tpCobranca : number;
	@Column({ type : 'float8'})
	vlDesconto : float;
	@Column({ type : 'int4'})
	idTipoDivida : number;
	@Column({ type : 'int4'})
	idTipoDividaEstimado : number;
	@Column({ type : 'bool'})
	bloqueio : boolean;
}