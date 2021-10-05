import React, {useState} from 'react';

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
                <input type="text" onChange={e => setnewTask(e.target.value)} value={newTask} className="form-control" />
                <button className="btn btn-danger btn-block mt-2">Save</button>
              </form>
            </div>
          </div>
          {
            tasks.map((t: ITask, i: number) => {
              return <h1 key={i}>{t.name}</h1>
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
