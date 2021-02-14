import React, { useState } from 'react';
import { Container, Result } from './styles';

function Forms() {
  //const initialFormState = [{
  //  firstname: '',
  //  lastname: '',
  //  password: '',
  //}] testing

  const [data, setData] = useState([])

  const onChange = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const onSubmit = e => {
    e.preventDefault()

    console.log(data)
  }

  return (
    <>
      <Container onSubmit={e => onSubmit(e)}>
        <form>
          <label htmlFor="firstname">name</label>
          <input onChange={e => onChange(e)} id="firstname" name="firstname" type="text"/>
          <label htmlFor="lastname">last name</label>
          <input onChange={e => onChange(e)} id="lastname" name="lastname" type="text"/>
          <label htmlFor="password">password</label>
          <input onChange={e => onChange(e)} id="password" name="password" type="password"/>
          <button>login</button>
        </form>
      </Container>
      <Result>
          <pre>
            {JSON.stringify(data)}
          </pre>
      </Result>
    </>
  );
}

export default Forms;