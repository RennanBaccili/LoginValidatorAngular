import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

//service
import { AuthService } from 'src/app/core/service/auth.service';

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

  public msgError!:string;

  constructor(private formBuilder:FormBuilder,private authService:AuthService){}

  public submitForm(){
    if (this.formAuth.valid){
      this.authService
      .sign({
        email:this.formAuth.value.email,
        password:this.formAuth.value.password
      }).subscribe({
        next: (res) =>res,
        error: (e) =>this.msgError = e
      });
    }
  }
}
