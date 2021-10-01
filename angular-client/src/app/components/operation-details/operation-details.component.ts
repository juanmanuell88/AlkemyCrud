import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/services/operation.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.css']
})
export class OperationDetailsComponent implements OnInit {
  currentOperation = null;
  message = '';
  dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  constructor(
    private operationService: OperationService,
    private route: ActivatedRoute,
    private router: Router) { }

    

  ngOnInit() {
    this.message = '';
    this.getOperation(this.route.snapshot.paramMap.get('id'));
     }

  getOperation(id) {
    this.operationService.get(id)
      .subscribe(
        data => {
          this.currentOperation = data;
          this.currentOperation.date = moment(this.currentOperation.date).format('L');
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateOperation() {
    this.operationService.update(this.currentOperation.id, this.currentOperation)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The operation was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteOperation() {
    this.operationService.delete(this.currentOperation.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/operations']);
        },
        error => {
          console.log(error);
        });
  }
}
