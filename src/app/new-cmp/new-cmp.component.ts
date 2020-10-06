import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  newcomponent = "New Component";

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  showAge = true;

  todayDate: Date;

  jsonData = { name: 'Vinh', age: '18', address: { huyen: 'Me Linh', tp: 'Ha Noi' } };

  property: string;

  public persondata = [];

  public formdata;

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.todayDate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = "Change property in AppComponent."
    this.property = this.myservice.serviceproperty;

    this.myservice.getData().subscribe((data) => {
      Object.keys(data).forEach((key) => {
        this.persondata.push(data[key]);
      });
    });

    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }

  myClickFunction(event) {
    this.showAge = !this.showAge;
  }

  changeMonths(event) {
    alert(event.target.value);
  }

  onClickSubmit(data) {
    alert(data.emailid);
  }

}
