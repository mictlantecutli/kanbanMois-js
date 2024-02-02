//Here we are going to work with static functions
export default class Kanban{
  static getTasks(columnId){
    //const data = read()[columnId];
    //return data.tasks;
    //ANOTHER WAY TO DO:--->
    //we can access to a particula COLUMN
    const data = read().find(column =>{
      return column.columnId == columnId
    });

    if(!data){
      return [];
    }
    
    return data.tasks;



  }

  static insertTask(columnId, content){
    const data = read();
    const column = data.find(column => {
      return column.columnId == columnId;
    });
    const task= {
      taskId: Math.floor(Math.random() * 100000),
      content: content
    };

    //If the column does not exist. This goes after the finding
    //But we do not use it because this function will depend on the event listener
    /*if(!column){
      throw new Error("Column doesn't exist!")
    }*/

    column.tasks.push(task);
    console.log(data);
    save(data);
    return  task;
  }

  static updateTask(taskId, updatedInformation){

  }

  static deleteTask(taskId){
    const data = read();

    for(const column of data){
      const task = column.tasks.find(item =>{
        return item.taskId == taskId;
      });
      //this function accepts 2 parameters, the index to delete, and how many items to delete
      column.tasks.splice(column.tasks.indexOf(task), 1);
    }
    //THEN UPDATE ALL THINGS IN THE LOCAL STORAGE
    //This setItem is repeated again and again so we can holt it in one function
    //Tha function is called save()
    //localStorage.setItem("data", JSON.stringify(data));
    save(data);
  }

  static getAllTask(){
    const data = read();
    return [data[0].tasks, data[1].tasks, data[2].tasks];

  }
}

function read(){
  const data = localStorage.getItem("data");

  if(!data){
    return [{columnId: 0, tasks: []}, {columnId: 1, tasks: []}, {columnId: 2, tasks: []}];
  }
  return JSON.parse(data);

}

function save(data){
  localStorage.setItem("data", JSON.stringify(data));

}