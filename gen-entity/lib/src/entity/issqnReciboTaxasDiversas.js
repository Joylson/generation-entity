import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import issqn from './issqn'
import issqnTaxaDiversa from './issqnTaxaDiversa'

@Entity()
export class issqn_recibo_taxas_diversas {
 
	@PrimaryGeneratedColumn()
	idRecibo : number;
	@Column({ type : 'int4'})
	idIss : number;
	@Column({ type : 'int4'})
	idTaxaDiversa : number;
}