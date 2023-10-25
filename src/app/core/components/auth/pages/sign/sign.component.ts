import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {

public formAuth:FormGroup = this.formBuilder.group({
  email:['',[]],
  password:['',[]]
});

  constructor(private formBuilder:FormBuilder){}

  public submitForm(){
    if (this.formAuth.valid){
      console.log(this.formAuth.value);
    }
  }
}
