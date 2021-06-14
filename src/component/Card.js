import TodoApp from './TodoApp';
import '../App.css';
import './Card.css';

const Card = () => {
	return(
		<div className='card'>
			<div className="app">
				<span className='title'>Todo list</span>
				<TodoApp />
			</div>
		</div>
	);
};
export default Card;
