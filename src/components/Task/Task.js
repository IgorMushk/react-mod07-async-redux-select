import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
// Импортируем хук
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';
// Импортируем генератор экшена
//=============== Before ========================
//import { deleteTask, toggleCompleted } from 'redux/actions';
//=============== After ========================
//-import { deleteTask, toggleCompleted } from "redux/tasksSlice";

export const Task = ({ task }) => {
  //console.log('Task >>', task);
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен удаления задачи
  const handleDelete = () => dispatch(deleteTask(task.id));

  
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен переключения статуса задачи
  const handleToggle = () => {
    console.log('handleToggle >>', task.id);
    dispatch(toggleCompleted(task))
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
