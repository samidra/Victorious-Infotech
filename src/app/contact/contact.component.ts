import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: any;
  public ContactUS: any = FormGroup;
  submitted = false;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ContactUS = this.FormBuilder.group({
      name: ["", [Validators.required]],
      remark: ["", [Validators.required]],
      mail: ["", [Validators.email, Validators.required]],
      phone: ["", [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]],
      
    });
  }

   get formControl() {
    return this.ContactUS.controls;
  }

   
  get name () 
  {
    return this.ContactUS.get('name');
  }
  get phone () 
  {
    return this.ContactUS.get('phone');
  }
  get mail () 
  {
    return this.ContactUS.get('mail');
  }
  get remark () 
  {
    return this.ContactUS.get('remark');
  }

     onSubmit(data: any) {
      this.submitted = true;
      if (this.ContactUS.valid) {
       alert("Submitted Sucessfully")
      }
    }
}
