import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class issqn_simples_nacional {
 
	@PrimaryGeneratedColumn()
	idSimplesNacional : number;
	@Column({ type : 'int4'})
	agencia : number;
	@Column({ type : 'int4'})
	ano : number;
	@Column({ type : 'varchar', length : 20})
	cnpj : string;
	@Column({ type : 'varchar', length : 20})
	codSimplesNacional : string;
	@Column({ type : 'date'})
	dtMovimento : date;
	@Column({ type : 'date'})
	dtPagamento : date;
	@Column({ type : 'date'})
	dtVencimento : date;
	@Column({ type : 'int4'})
	idBanco : number;
	@Column({ type : 'int4'})
	lote : number;
	@Column({ type : 'int4'})
	mes : number;
	@Column({ type : 'varchar', length : 50})
	nomeArquivo : string;
	@Column({ type : 'float8'})
	vlJuros : float;
	@Column({ type : 'float8'})
	vlMulta : float;
	@Column({ type : 'float8'})
	vlParcela : float;
	@Column({ type : 'float8'})
	vlTotal : float;
}