import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import imovel from './imovel'
import issqn from './issqn'
import pessoa from './pessoa'

@Entity()
export class issqn_socio {
 
	@PrimaryGeneratedColumn()
	idSocio : number;
	@Column({ type : 'bool'})
	isResponsavel : boolean;
	@Column({ type : 'int4'})
	idImovel : number;
	@Column({ type : 'int4'})
	idIss : number;
	@Column({ type : 'int4'})
	idPessoa : number;
}