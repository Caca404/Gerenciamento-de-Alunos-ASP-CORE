import React from "react";
import './styles.css';

export default function Login(){

    return(
        <div id="AllBody" className="w-100">
            <div className="container h-100">
                <div className="bg-light rounded p-3 w-50">
                    <h2 id="Logo" className="mb-4 text-center">Escola React</h2>
                    <form>
                        <div className='form-group mb-3'>
                            <label for="email"><strong>Email </strong></label>
                            <input type="email" id='email' className='form-control' name='email' autoComplete="off"/>
                        </div>
                        <div className='form-group mb-3'>
                            <label for="senha"><strong>Senha </strong></label>
                            <input type="password" id='senha' className='form-control' name='senha'/>
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