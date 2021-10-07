import React, {useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

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
  //reference in the input
  const taskInput = useRef<HTMLInputElement>(null);

  //function for create new task
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask)
    setnewTask('');
    taskInput.current?.focus();
  }

  //function for add a new task in the list
  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, {name : name, done: false}]
    setTasks(newTasks)
  }

  const toggleDoneTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }

  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i,1);
    setTasks(newTasks);
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={e => setnewTask(e.target.value)}
                  value={newTask}
                  className="form-control"
                  ref={taskInput}
                  autoFocus />
                <div className="d-grid gap-2">
                <button className="btn btn-success btn-block mt-2">Task</button>
                </div>
              </form>
            </div>
          </div>
          {
            tasks.map((t: ITask, i: number) => (
              <div className="card card-body mt-2" key={i}>
                <h2 style={{textDecoration: t.done ? 'line-through' : ''}}>{t.name}</h2>
                <div>
                  <button className='btn btn-secondary' onClick={() => toggleDoneTask(i)}>
                    {t.done ? <FontAwesomeIcon icon={faCut} /> : <FontAwesomeIcon icon={faCheck} />}
                  </button>
                  <button className='btn btn-danger' onClick={() => removeTask(i)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
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
