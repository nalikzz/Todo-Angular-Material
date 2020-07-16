export class ToDo{
    constructor(
        public id: number,
        public title: string, 
        public description: string, 
        public dueDate: Date, 
        public status: string, 
        public priority: string 
        ){}
}