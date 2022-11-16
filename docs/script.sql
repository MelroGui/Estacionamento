DROP DATABASE IF EXISTS Estacionamento;
CREATE DATABASE Estacionamento charset=UTF8 collate utf8_general_ci;

USE Estacionamento;

CREATE TABLE Clientes (
    id_Cli INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
	telefone VARCHAR(15) NOT NULL
);

CREATE TABLE Veiculos (
	placa varchar(15) NOT NULL PRIMARY KEY,
	id_Cli integer not null,
	cor varchar(15) not null,
	modelo varchar(15) not null,
	descricao varchar(50) not null,
	FOREIGN KEY (id_Cli) REFERENCES Clientes(id_Cli) on delete cascade
);

CREATE TABLE Vagas (
    id_vaga INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	preco_hora decimal(5,2) not null,
	disponibilidade BIT not null
);

insert into Clientes values
(default,"Jose Pedro","(19) 97109-1267"),
(default,"Ana Pereira","(19) 97109-1267"),
(default,"Maria da Silva","(19) 97109-1267"),
(default,"Joao Antonio","(19) 97109-1267");
insert into Veiculos values
("QYR-5413", 1, "preto","fox","what a foxey"),
("QSJ-2475", 2, "vermelho","bravo","perigoso"),
("DUF-7219", 3, "azul","fiesta","curtição q so"),
("JMO-8492", 4, "verde","siena","de ação");
insert into Vagas values
(default,5.00,1),
(default,5.00,0),
(default,5.00,0),
(default,5.00,0),
(default,5.00,0),
(default,5.00,1),
(default,5.00,0),
(default,5.00,1),
(default,5.00,0),
(default,5.00,1);

describe Clientes;
describe Veiculos;
describe Vagas;
show tables;

select * from Clientes;
select * from Veiculos;
select * from Vagas;