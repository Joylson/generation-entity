import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class divida_tipo {
 
	@PrimaryGeneratedColumn()
	idTipo : number;
	@Column({ type : 'int2'})
	cobrarGuia : number;
	@Column({ type : 'int4'})
	codTipo : number;
	@Column({ type : 'varchar', length : 80})
	descricao : string;
	@Column({ type : 'int2'})
	eTributario : number;
	@Column({ type : 'int4'})
	fixo : number;
	@Column({ type : 'int4'})
	idTipoBasico : number;
	@Column({ type : 'varchar', length : 70})
	receitaOrcamentaria : string;
	@Column({ type : 'varchar', length : 70})
	receitaOrcamentariaCorrecao : string;
	@Column({ type : 'varchar', length : 70})
	receitaOrcamentariaJuros : string;
	@Column({ type : 'varchar', length : 70})
	receitaOrcamentariaMulta : string;
	@Column({ type : 'int4'})
	tipoCobranca : number;
	@Column({ type : 'float8'})
	valor : float;
	@Column({ type : 'float8'})
	vlJuros : float;
	@Column({ type : 'float8'})
	vlMulta : float;
}