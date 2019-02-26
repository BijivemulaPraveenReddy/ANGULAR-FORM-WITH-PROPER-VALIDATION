import { Component, OnInit } from '@angular/core';
import { User} from '../shared/user.model';
import  {NgForm} from '@angular/forms';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


		user:User;
  constructor() { }

  ngOnInit() {
  	this.ResetForm();
  }

  ResetForm(form?:NgForm){
  		if(form != null)
  		form.reset();
  		this.user={
  			username:'',
  			password:'',
  			email:'',
  			Firstname:'',
  			Lastname:'',
			}

  }

}
