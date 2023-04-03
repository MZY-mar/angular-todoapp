import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TodoInterface } from "../types/Todointerface";

@Injectable()
export class TodosServices{
    addTodo(text: string): void{
      const newTodo: TodoInterface ={
        text,
        isCompleted: false,
        id: Math.random().toString(16),
      };
      
    }
    todos$ = new BehaviorSubject<TodoInterface[]>([]);
}