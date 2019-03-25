import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'

@Entity()
export class issqn_veiculo {
 
	@PrimaryGeneratedColumn()
	idVeiculo : number;
	@Column({ type : 'int4'})
	anoFabricacao : number;
	@Column({ type : 'int4'})
	anoModelo : number;
	@Column({ type : 'float8'})
	capacidadeTanque : float;
	@Column({ type : 'varchar', length : 50})
	chassi : string;
	@Column({ type : 'varchar', length : 100})
	combustivel : string;
	@Column({ type : 'varchar', length : 50})
	cor : string;
	@Column({ type : 'varchar', length : 100})
	marca : string;
	@Column({ type : 'varchar', length : 100})
	modelo : string;
	@Column({ type : 'int4'})
	nrPassageiros : number;
	@Column({ type : 'varchar', length : 10})
	placa : string;
	@Column({ type : 'varchar', length : 50})
	renavam : string;
	@Column({ type : 'int4'})
	idIss : number;
}