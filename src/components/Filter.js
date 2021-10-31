import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  max-width: 500px;
`;

const Filter = ({filter, setFilter }) => {
  return (
    <Form onSubmit={e => {
      e.preventDefault();
      setFilter(e.target.value);
      console.log(e.target.value);
    }}>
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
      />
      <button>🔍</button>
    </Form>
  )
}

export default Filter
