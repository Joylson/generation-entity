import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import estado from './estado'

@Entity()
export class cidade {
 
	@PrimaryGeneratedColumn()
	idCidade : number;
	@Column({ type : 'int4'})
	codCidade : number;
	@Column({ type : 'varchar', length : 50})
	nome : string;
	@Column({ type : 'varchar', length : 10})
	siafi : string;
	@Column({ type : 'varchar', length : 255})
	uf : string;
	@Column({ type : 'varchar', length : 50})
	url : string;
	@Column({ type : 'int4'})
	estadoId : number;
}