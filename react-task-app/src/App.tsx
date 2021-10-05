import React, {useState} from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {

  const [newTask, setnewTask] = useState('')

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    console.log(newTask)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setnewTask(e.target.value)} />
        <button>Save</button>
      </form>
    </>
  );
}

export default App;
