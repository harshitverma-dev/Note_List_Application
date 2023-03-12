import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/todos/todo';
import Details from './components/details/details';

function App() {
	return (
		<div className='main-conatainer'>
			<Details />
			<Todo />
		</div>
	);
}

export default App;
