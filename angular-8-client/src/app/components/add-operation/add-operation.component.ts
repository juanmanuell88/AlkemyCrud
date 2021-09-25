import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css']
})
export class AddOperationComponent implements OnInit {
  operation = {
    concept: '',
    amount: '',
    date: '',
    type: '',
  };

  submitted = false;

  

  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }

  saveOperation() {
    const data = {
      concept: this.operation.concept,
      amount: this.operation.amount,
      date: this.operation.date,
      type: this.operation.type
    };

    this.operationService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newOperation() {
    this.submitted = false;
    this.operation = {
      concept: '',
      amount: '',
      date: '',
      type: '',
    };
  }


}
