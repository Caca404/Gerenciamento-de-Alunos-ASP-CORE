import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useEffect, useState } from 'react';
import Moment from 'moment/moment';


function App() {

	const baseUrl = "https://localhost:7151/api/alunos";
	const [data, setData] = useState([]);
	const [alunoSelecionado, setAlunoSelecionado] = useState({
		id: '',
		nome: '',
		email: '',
		dataNasc: ''
	});
	const [modalIncluir, setModalIncluir] = useState(false);

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
				abrirFecharModalIncluir();
			}).catch(error => console.log(error));
	}

	const handleChangeAluno = e => {
		const {name,value} = e.target;
		setAlunoSelecionado({
			...alunoSelecionado, [name]:value
		});
		console.log(alunoSelecionado);
	}

	const abrirFecharModalIncluir = () => {
		setModalIncluir(!modalIncluir);
	}

	useEffect(() => {pedidoGet()});

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
									<button className='btn btn-warning'>Editar</button> {"   "}
									<button className='btn btn-danger'>Excluir</button>
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
		</div>
	);
}

export default App;
