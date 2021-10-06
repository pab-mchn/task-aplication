import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBell } from '@fortawesome/free-solid-svg-icons'

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  //create new task
  const [newTask, setnewTask] = useState<string>('')
  //add a new task in the list
  const [tasks, setTasks] = useState<ITask[]>([])

  //function for create new task
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask)
    setnewTask('');
  }

  //function for add a new task in the list
  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, {name : name, done: false}]
    setTasks(newTasks)
  }


  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setnewTask(e.target.value)} value={newTask} className="form-control" autoFocus />
                <button className="btn btn-success btn-block mt-2">Save</button>
              </form>
            </div>
          </div>
          {
            tasks.map((t: ITask, i: number) => (
              <div className="card card-body mt-2" key={i}>
                <h2 style={{textDecoration: t.done ? 'line-through' : ''}}>{t.name}</h2>
                <div>
                  <button className='btn btn-secondary'>
                    {t.done ? <FontAwesomeIcon icon={faBell} /> : <FontAwesomeIcon icon={faCoffee} />}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
