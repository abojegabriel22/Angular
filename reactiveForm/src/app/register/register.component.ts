import { Component } from "@angular/core";
import {IRegister} from "./register.model";
import {NgForm, Validators} from "@angular/forms";
import { RegisterService } from "./register.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})

export class RegisterComponent{

    constructor(
        private registerService:RegisterService,
        private router:Router
        ){}

    myEmployee = new IRegister("","","","")

    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.registerService.registerEmp(Form.value)
        .subscribe((res:any[])=>{console.log(`data posted`)})
        this.router.navigate(["/login"])

    }
}
