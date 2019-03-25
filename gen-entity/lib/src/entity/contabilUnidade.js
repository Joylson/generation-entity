import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import contabilUnidade from './contabilUnidade'
import contabilUnidade from './contabilUnidade'
import exercicio from './exercicio'
import contabilUnidade from './contabilUnidade'
import contabilUnidade from './contabilUnidade'
import contabilOrgao from './contabilOrgao'

@Entity()
export class contabil_unidade {
 
	@Column({ type : 'varchar', length : 255})
	ato : string;
	@Column({ type : 'varchar', length : 255})
	atuacao : string;
	@Column({ type : 'varchar', length : 255})
	cargo : string;
	@Column({ type : 'varchar', length : 255})
	cpf : string;
	@Column({ type : 'varchar', length : 255})
	idParente : string;
	@Column({ type : 'int4'})
	idTribunal : number;
	@Column({ type : 'int4'})
	idUnidadeFrota : number;
	@Column({ type : 'varchar', length : 255})
	legislacao : string;
	@Column({ type : 'varchar', length : 255})
	nome : string;
	@Column({ type : 'varchar', length : 255})
	secretario : string;
	@Column({ type : 'varchar', length : 255})
	tipoUnidade : string;
	@PrimaryGeneratedColumn()
	idUnidade : string;
	@PrimaryGeneratedColumn()
	idExercicio : number;
	@Column({ type : 'varchar', length : 255})
	idOrgao : string;
}