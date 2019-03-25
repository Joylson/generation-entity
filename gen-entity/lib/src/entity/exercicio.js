import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import contabilOrgao from './contabilOrgao'

@Entity()
export class exercicio {
 
	@PrimaryGeneratedColumn()
	idExercicio : number;
	@Column({ type : 'varchar', length : 255})
	assinatura1 : string;
	@Column({ type : 'varchar', length : 255})
	assinatura2 : string;
	@Column({ type : 'varchar', length : 255})
	assinatura3 : string;
	@Column({ type : 'varchar', length : 255})
	autDespesa : string;
	@Column({ type : 'varchar', length : 255})
	autPagto : string;
	@Column({ type : 'varchar', length : 255})
	cargoAssina1 : string;
	@Column({ type : 'varchar', length : 255})
	cargoAssina2 : string;
	@Column({ type : 'varchar', length : 255})
	cargoAssina3 : string;
	@Column({ type : 'varchar', length : 255})
	cargoContador : string;
	@Column({ type : 'varchar', length : 255})
	cargoControle : string;
	@Column({ type : 'varchar', length : 255})
	cargoDespesa : string;
	@Column({ type : 'varchar', length : 255})
	cargoPagto : string;
	@Column({ type : 'varchar', length : 255})
	cargoPresEducacao : string;
	@Column({ type : 'varchar', length : 255})
	cargoRespProcess : string;
	@Column({ type : 'varchar', length : 255})
	cargoSecEducacao : string;
	@Column({ type : 'varchar', length : 255})
	cargoTecContabil : string;
	@Column({ type : 'varchar', length : 255})
	cargoTesoureiro : string;
	@Column({ type : 'varchar', length : 255})
	comprasContato1Email : string;
	@Column({ type : 'varchar', length : 255})
	comprasContato1Nome : string;
	@Column({ type : 'varchar', length : 255})
	comprasContato1Telefone : string;
	@Column({ type : 'varchar', length : 255})
	comprasContato2Email : string;
	@Column({ type : 'varchar', length : 255})
	comprasContato2Nome : string;
	@Column({ type : 'varchar', length : 255})
	comprasContato2Telefone : string;
	@Column({ type : 'varchar', length : 255})
	comunicadoNumero : string;
	@Column({ type : 'varchar', length : 255})
	contador : string;
	@Column({ type : 'varchar', length : 255})
	contatoFornecedor : string;
	@Column({ type : 'varchar', length : 255})
	controle : string;
	@Column({ type : 'date'})
	dtLdo : date;
	@Column({ type : 'date'})
	dtLei : date;
	@Column({ type : 'varchar', length : 255})
	leiAdiantamento : string;
	@Column({ type : 'varchar', length : 255})
	nuLdo : string;
	@Column({ type : 'varchar', length : 255})
	nuLei : string;
	@Column({ type : 'varchar', length : 255})
	presEducacao : string;
	@Column({ type : 'bytea'})
	projetoLei : number;
	@Column({ type : 'varchar', length : 255})
	publicaReo : string;
	@Column({ type : 'varchar', length : 255})
	respProcess : string;
	@Column({ type : 'varchar', length : 255})
	responsavelCompras : string;
	@Column({ type : 'varchar', length : 255})
	secEducacao : string;
	@Column({ type : 'varchar', length : 255})
	tecContabil : string;
	@Column({ type : 'varchar', length : 255})
	tesoureiro : string;
	@Column({ type : 'varchar', length : 255})
	idOrgao : string;
}