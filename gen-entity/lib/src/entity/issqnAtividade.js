import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqnCategoria from './issqnCategoria'
import issqnCodigoFiscal from './issqnCodigoFiscal'
import issqnOrgaoFiscalizacao from './issqnOrgaoFiscalizacao'

@Entity()
export class issqn_atividade {
 
	@PrimaryGeneratedColumn()
	idAtividade : number;
	@Column({ type : 'float8'})
	aliquota : float;
	@Column({ type : 'varchar', length : 255})
	codAtividade : string;
	@Column({ type : 'varchar', length : 255})
	codAtv : string;
	@Column({ type : 'int4'})
	inativo : number;
	@Column({ type : 'varchar', length : 500})
	nome : string;
	@Column({ type : 'varchar', length : 150})
	observacao : string;
	@Column({ type : 'varchar', length : 5000})
	risco : string;
	@Column({ type : 'varchar', length : 2})
	tipoPessoa : string;
	@Column({ type : 'float8'})
	valor : float;
	@Column({ type : 'int4'})
	idCategoria : number;
	@Column({ type : 'int4'})
	idCodigo : number;
	@Column({ type : 'int4'})
	id : number;
	@Column({ type : 'int4'})
	tpAtividade : number;
}