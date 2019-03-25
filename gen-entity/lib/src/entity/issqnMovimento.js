import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class issqn_movimento {
 
	@PrimaryGeneratedColumn()
	idMovimento : number;
	@Column({ type : 'int4'})
	canceladoMovimento : number;
	@Column({ type : 'float8'})
	compensacao : float;
	@Column({ type : 'date'})
	dtCalculo : date;
	@Column({ type : 'date'})
	dtCancelado : date;
	@Column({ type : 'int4'})
	idExercicio : number;
	@Column({ type : 'int4'})
	idExercicioBase : number;
	@Column({ type : 'varchar', length : 5})
	isento : string;
	@Column({ type : 'varchar', length : 80})
	motivo : string;
	@Column({ type : 'varchar', length : 20})
	numeroProcesso : string;
	@Column({ type : 'int4'})
	tpMovimento : number;
	@Column({ type : 'varchar', length : 25})
	usuario : string;
	@Column({ type : 'varchar', length : 25})
	usuarioCancelamento : string;
	@Column({ type : 'float8'})
	vlDesconto : float;
	@Column({ type : 'float8'})
	vlTotal : float;
	@Column({ type : 'int4'})
	idIss : number;
}