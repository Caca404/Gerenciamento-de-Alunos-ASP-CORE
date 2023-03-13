import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './styles.css';
import api from "../../services/api";


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigator = useNavigate();

    async function login(event){
        event.preventDefault();

        const data = {
            email, password
        };

        try{
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            };
            await api.post('api/account/loginuser', data, axiosConfig);

            navigator('/administrador');
        }
        catch(error){
            console.error(error);
        }
    }

    return(
        <div id="AllBody" className="w-100">
            <div className="container h-100">
                <div className="bg-light rounded p-3 w-50">
                    <h2 id="Logo" className="mb-4 text-center">Escola React</h2>
                    <form onSubmit={login}>
                        <div className='form-group mb-3'>
                            <label htmlFor="email"><strong>Email </strong></label>
                            <input type="email" id='email' className='form-control' name='email' autoComplete="off"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="senha"><strong>Senha </strong></label>
                            <input type="password" id='senha' className='form-control' name='senha'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className="btn btn-primary w-100">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}