import TaskCard from "./task-card/TaskCard";


function TaskViewer({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          id={task.id}
          status={task.status}
          name={task.name}
          dueDate={task.dueDate}
        />
      ))}
    </>
  );
}

export default TaskViewer;
