DROP DATABASE IF EXISTS Estacionamento;
CREATE DATABASE Estacionamento charset=UTF8 collate utf8_general_ci;

USE Estacionamento;

CREATE TABLE Clientes (
    cpf varchar(15) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Telefones (
    cpf varchar(15) not null,
	telefone varchar(15) not null,
	foreign key (cpf) references Clientes(cpf) on delete cascade
);

CREATE TABLE Veiculos (
    placa INTEGER NOT NULL PRIMARY KEY,
    cpf varchar(15) not null,
	cor varchar(15) not null,
	modelo varchar(15) not null,
	foreign key (cpf) references Clientes(cpf) on delete cascade
);

CREATE TABLE Vagas (
    id_vaga INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	preco_hora decimal(5,2) not null,
	disponibilidade varchar(1) not null
);

describe Clientes;
describe Telefones;
describe Veiculos;
describe Vagas;
show tables;

select * from Clientes;
select * from Telefones;
select * from Veiculos;
select * from Vagas;