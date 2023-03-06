import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useEffect, useState } from 'react';
import Moment from 'moment/moment';


function App() {

	const baseUrl = "https://localhost:7151/api/alunos";
	const [data, setData] = useState([]);
	const [updateData, setUpdateData] = useState(true);
	const [alunoSelecionado, setAlunoSelecionado] = useState({
		id: '',
		nome: '',
		email: '',
		dataNasc: ''
	});
	const [modalIncluir, setModalIncluir] = useState(false);
	const [modalEditar, setModalEditar] = useState(false);
	const [modalExcluir, setModalExcluir] = useState(false);

	const pedidoGet = async () => {
		await axios.get(baseUrl)
			.then(response => setData(response.data))
			.catch(error => console.log(error));
	}

	const pedidoPost = async () => {
		delete alunoSelecionado.id;

		await axios.post(baseUrl, alunoSelecionado)
			.then(response => {
				setData(data.concat(response.data));
				setUpdateData(true);
				abrirFecharModalIncluir();
			}).catch(error => console.log(error));
	}

	const pedidoPut = async () => {
		alunoSelecionado.id = parseInt(alunoSelecionado.id);
		await axios.put(baseUrl+"/"+alunoSelecionado.id, alunoSelecionado)
			.then(response => {
				var resposta = response.data;
				var dataAuxiliar = data;
				dataAuxiliar.map(aluno => {
					if(aluno.id === alunoSelecionado.id){
						aluno.nome = resposta.nome;
						aluno.email = resposta.email;
						aluno.dataNasc = resposta.dataNasc;
					}
				});
				setUpdateData(true);
				abrirFecharModalEditar();
			}).catch(error => console.log(error));
	}

	const pedidoDelete = async () => {
		await axios.post(baseUrl+"/"+alunoSelecionado.id)
			.then(response => {
				setData(data.filter(aluno => aluno.id !== response.data));
				setUpdateData(true);
				abrirFecharModalExcluir();
			}).catch(error => console.log(error));
	}

	const handleChangeAluno = e => {
		const {name,value} = e.target;
		setAlunoSelecionado({
			...alunoSelecionado, [name]:value
		});
		console.log(alunoSelecionado);
	}

	const selecionarAluno = (aluno, opcao) => {
		setAlunoSelecionado(aluno);
		(opcao == "Editar") ? abrirFecharModalEditar() : abrirFecharModalExcluir();
	}

	const abrirFecharModalIncluir = () => {
		setModalIncluir(!modalIncluir);
	}
	const abrirFecharModalEditar = () => {
		setModalEditar(!modalEditar);
	}
	const abrirFecharModalExcluir = () => {
		setModalExcluir(!modalExcluir);
	}

	useEffect(() => {
		if(updateData){
			pedidoGet();
			setUpdateData(false);
		}
	}, [updateData]);

	Moment.locale('America/Recife');

	return (
		<div className="container">
			<br />
			<h3>Cadastro de Alunos</h3>
			<header>
				<img src="" alt='CadastroLogo' />
				<button className='btn btn-success' onClick={() => abrirFecharModalIncluir()}>Incluir novo Aluno</button>
			</header>
			<div className='table-responsive mt-4'>
				<table className='table table-bordered'>
					<thead>
						<th>Id</th>
						<th>Nome</th>
						<th>Email</th>
						<th>Data Nascimento</th>
						<th>Operações</th>
					</thead>
					<tbody>
						{data.map(aluno => (
							<tr key={aluno.id}>
								<td>{aluno.id}</td>
								<td>{aluno.nome}</td>
								<td>{aluno.email}</td>
								<td>{Moment(aluno.dataNasc).format('L')}</td>
								<td>
									<button className='btn btn-warning' onClick={() => selecionarAluno(aluno, "Editar")}>Editar</button> {"   "}
									<button className='btn btn-danger' onClick={() => selecionarAluno(aluno, "Excluir")}>Excluir</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Modal isOpen={modalIncluir}>
				<ModalHeader>Incluir Aluno</ModalHeader>
				<ModalBody>
					<div className='form-group mb-3'>
						<label for="nome">Nome: </label>
						<input type="text" id='nome' className='form-control' name='nome' onChange={handleChangeAluno} />
					</div>
					<div className='form-group mb-3'>
						<label for="email">Email: </label>
						<input type="email" id='email' className='form-control' name='email' onChange={handleChangeAluno} />
					</div>
					<div className='form-group'>
						<label for="dataNasc">Data de Nascimento: </label>
						<input type="date" id='dataNasc' className='form-control' name='dataNasc' onChange={handleChangeAluno} />
					</div>
				</ModalBody>
				<ModalFooter>
					<button className='btn btn-info' onClick={() => pedidoPost()}>Incluir</button>{"   "}
					<button className='btn btn-secondary' onClick={() => abrirFecharModalIncluir()}>Cancelar</button>
				</ModalFooter>
			</Modal>
			<Modal isOpen={modalEditar}>
				<ModalHeader>Editar Aluno</ModalHeader>
				<ModalBody>
					<div className='form-group mb-3'>
						<label for="id">ID: </label>
						<input type="text" id='id' className='form-control' readOnly value={alunoSelecionado && alunoSelecionado.id} />
					</div>
					<div className='form-group mb-3'>
						<label for="nome">Nome: </label>
						<input type="text" id='nome' className='form-control' name='nome' value={alunoSelecionado && alunoSelecionado.nome} 
							onChange={handleChangeAluno} />
					</div>
					<div className='form-group mb-3'>
						<label for="email">Email: </label>
						<input type="email" id='email' className='form-control' name='email' value={alunoSelecionado && alunoSelecionado.email} 
							onChange={handleChangeAluno} />
					</div>
					<div className='form-group'>
						<label for="dataNasc">Data de Nascimento: </label>
						<input type="date" id='dataNasc' className='form-control' name='dataNasc' 
							value={alunoSelecionado && Moment(alunoSelecionado.dataNasc).format('YYYY-MM-DD')} onChange={handleChangeAluno} />
					</div>
				</ModalBody>
				<ModalFooter>
					<button className='btn btn-info' onClick={() => pedidoPut()}>Editar</button>{"   "}
					<button className='btn btn-secondary' onClick={() => abrirFecharModalEditar()}>Cancelar</button>
				</ModalFooter>
			</Modal>
			<Modal isOpen={modalExcluir}>
				<ModalHeader>Confirma a exclusão do(a) {alunoSelecionado && alunoSelecionado.nome}?</ModalHeader>
				<ModalFooter>
					<button className='btn btn-danger' onClick={() => pedidoDelete()}>Sim</button>{"   "}
					<button className='btn btn-secondary' onClick={() => abrirFecharModalExcluir()}>Não</button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default App;
