import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_codigo_fiscal {
 
	@PrimaryGeneratedColumn()
	idCodigo : number;
	@Column({ type : 'varchar', length : 20})
	codigoFiscal : string;
	@Column({ type : 'float8'})
	porcentagem : float;
	@Column({ type : 'float8'})
	qtdUfm : float;
}