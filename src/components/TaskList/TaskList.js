// Импортируем хук
import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import css from './TaskList.module.css'
// Импортируем объект значений фильтра
//import { statusFilters } from 'redux/constants';
//import { selectStatusFilter, selectTasks } from 'redux/selectors';
import { selectVisibleTasks } from 'redux/selectors';


// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
//  // Получаем массив задач из состояния Redux
//  //const tasks = useSelector(state => state.tasks);
//  const tasks = useSelector(selectTasks);
//  // Получаем значение фильтра из состояния Redux
//  //const statusFilter = useSelector(state => state.filters.status);
//  const statusFilter = useSelector(selectStatusFilter);
//  // Вычисляем массив задач которые необходимо отображать в интерфейсе
//  const visibleTasks = getVisibleTasks(tasks, statusFilter);

const tasks = useSelector(selectVisibleTasks);
// console.log('TaskList', tasks)

    return (
      <ul className={css.list}>
        {/* {visibleTasks.map(task => ( */}
        {tasks.map(task => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    );
  };
  
  