import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import bairroLogradouro from './bairroLogradouro'
import issqn from './issqn'

@Entity()
export class issqn_termo_fiscalizacao {
 
	@PrimaryGeneratedColumn()
	idTermoFiscalizacao : number;
	@Column({ type : 'varchar', length : 1000})
	apuracao : string;
	@Column({ type : 'varchar', length : 500})
	atividade : string;
	@Column({ type : 'varchar', length : 21})
	cnpjCpf : string;
	@Column({ type : 'varchar', length : 50})
	complemento : string;
	@Column({ type : 'date'})
	data : date;
	@Column({ type : 'varchar', length : 300})
	estabelecimento : string;
	@Column({ type : 'varchar', length : 100})
	fiscal : string;
	@Column({ type : 'varchar', length : 20})
	fone : string;
	@Column({ type : 'varchar', length : 20})
	foneEscritorio : string;
	@Column({ type : 'varchar', length : 30})
	nomeEscritorio : string;
	@Column({ type : 'int4'})
	nrImovel : number;
	@Column({ type : 'varchar', length : 20})
	numAlvara : string;
	@Column({ type : 'varchar', length : 1000})
	observacao : string;
	@Column({ type : 'varchar', length : 300})
	proprietario : string;
	@Column({ type : 'varchar', length : 45})
	proprietarioCpf : string;
	@Column({ type : 'varchar', length : 150})
	proprietarioProfissao : string;
	@Column({ type : 'int4'})
	idBairrologradouro : number;
	@Column({ type : 'int4'})
	idIss : number;
}