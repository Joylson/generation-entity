import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class iptu {
 
	@PrimaryGeneratedColumn()
	idIptu : string;
	@Column({ type : 'varchar', length : 255})
	nome : string;
	@Column({ type : 'varchar', length : 30})
	cidade : string;
	@Column({ type : 'varchar', length : 50})
	bairro : string;
	@Column({ type : 'varchar', length : 50})
	logradouro : string;
	@Column({ type : 'varchar', length : 10})
	numero : string;
	@Column({ type : 'varchar', length : 10})
	cep : string;
	@Column({ type : 'varchar', length : 20})
	complemento : string;
	@Column({ type : 'varchar', length : 10})
	quadra : string;
	@Column({ type : 'varchar', length : 40})
	lote : string;
	@Column({ type : 'numeric'})
	areaTerreno : number;
	@Column({ type : 'numeric'})
	areaConstruida : number;
	@Column({ type : 'varchar', length : 20})
	numCertidao : string;
	@Column({ type : 'numeric'})
	vlVenalTotal : number;
	@Column({ type : 'varchar', length : 2})
	uf : string;
	@Column({ type : 'int4'})
	debitoDa : number;
}