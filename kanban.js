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
    localStorage.setItem("data", JSON.stringify(data));
    return  task;
  }

  static updateTask(taskId, updatedInformation){

  }

  static deleteTask(taskId){

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

function save(){

}