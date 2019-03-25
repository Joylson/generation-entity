import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class util {
 
	@Column({ type : 'numeric'})
	vlAliquotaFinanc : number;
	@Column({ type : 'numeric'})
	vlAliquotaTransacao : number;
	@Column({ type : 'numeric'})
	vlExpediente : number;
	@Column({ type : 'numeric'})
	vlMonetario : number;
	@Column({ type : 'numeric'})
	vlMulta : number;
	@Column({ type : 'numeric'})
	vlJuros : number;
	@Column({ type : 'varchar', length : 15})
	boletoCodcliente : string;
	@Column({ type : 'varchar', length : 10})
	boletoAgencia : string;
	@Column({ type : 'varchar', length : 10})
	boletoDvagencia : string;
	@Column({ type : 'varchar', length : 10})
	boletoConta : string;
	@Column({ type : 'varchar', length : 10})
	boletoDvconta : string;
	@Column({ type : 'varchar', length : 50})
	boletoCedente : string;
	@PrimaryGeneratedColumn()
	idUtil : number;
	@Column({ type : 'varchar', length : 45})
	boletoBanco : string;
	@Column({ type : 'bytea'})
	brasao : number;
	@Column({ type : 'varchar', length : 50})
	cidade : string;
	@Column({ type : 'int4'})
	dividasPendentes : number;
	@Column({ type : 'varchar', length : 200})
	boletoInstrucao : string;
}