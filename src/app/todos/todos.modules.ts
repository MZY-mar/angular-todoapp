import { NgModule } from "@angular/core";
import { TodoComponent } from "src/app/todos/components/todos/todos.components";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/todos/header/header.component";

const routes : Routes = [{
    path :'',
    component : TodoComponent,
}]
@NgModule({
    declarations:[TodoComponent,HeaderComponent],
    imports:[RouterModule.forChild(routes)],
})
export class TodosModule{

}