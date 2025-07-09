// Create your interfaces and enum below:
interface Task{
    id: number;
    title: string;
    description: string;
    dueDate: Date;
}

enum Priority{
    Low,
    Medium,
    High
}

interface TaskPriority extends Task{
    priority: Priority;
}
// Create your task below:
let assignment: TaskPriority = {
    id : 100,
    title: "CMSC132 homework",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dueDate: new Date(),
    priority: Priority.Medium
}


// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
console.log(assignment);