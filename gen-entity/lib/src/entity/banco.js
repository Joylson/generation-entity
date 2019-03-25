import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class banco {
 
	@PrimaryGeneratedColumn()
	idBanco : number;
	@Column({ type : 'varchar', length : 15})
	agencia : string;
	@Column({ type : 'varchar', length : 5})
	boletoCarteira : string;
	@Column({ type : 'varchar', length : 5})
	boletoEspecieDocumento : string;
	@Column({ type : 'varchar', length : 60})
	boletoLocalPagto1 : string;
	@Column({ type : 'varchar', length : 60})
	boletoLocalPagto2 : string;
	@Column({ type : 'int4'})
	codBanco : number;
	@Column({ type : 'varchar', length : 25})
	conta : string;
	@Column({ type : 'varchar', length : 25})
	contaOrcamentaria : string;
	@Column({ type : 'varchar', length : 5000})
	corpoBoleto : string;
	@Column({ type : 'varchar', length : 1})
	dvAgencia : string;
	@Column({ type : 'varchar', length : 1})
	dvConta : string;
	@Column({ type : 'varchar', length : 13})
	fax : string;
	@Column({ type : 'varchar', length : 300})
	gerente : string;
	@Column({ type : 'bytea'})
	logotipo : number;
	@Column({ type : 'varchar', length : 100})
	nome : string;
	@Column({ type : 'varchar', length : 20})
	numero : string;
	@Column({ type : 'varchar', length : 10})
	numeroConvenio : string;
	@Column({ type : 'int4'})
	remessa : number;
	@Column({ type : 'varchar', length : 13})
	telefone : string;
	@Column({ type : 'int4'})
	cnab : number;
}