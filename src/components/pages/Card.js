import Task from './Task';
import './Card.css';

const Card = () => {
	return(
		<div>
		<div className='card'>
			<span className='title'>Todo list</span>
			<Task />
		</div>
		</div>
	);
};
export default Card;