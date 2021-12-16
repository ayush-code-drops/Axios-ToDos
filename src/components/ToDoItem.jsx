function toDoItem({ title, status, id, handleDelete, handleToggle }) {
  return (
    <div>
      <span>{`${title}-${status}  id:${id}`}</span>
      <button onClick={() => handleDelete(id)}>X</button>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  );
}

export default toDoItem;
