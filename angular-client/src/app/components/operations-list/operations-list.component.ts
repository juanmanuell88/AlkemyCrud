import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.css']
})
export class OperationsListComponent implements OnInit {

  operations: any;
  currentOperations = null;
  currentIndex = -1;
 
  constructor(private operationService: OperationService) { }

  ngOnInit() {
    this.retrieveOperations();
  }


  retrieveOperations() {
    this.operationService.getAll()
      .subscribe(
        data => {
          var countEntry = 0;
          var countEgress = 0;
          this.operations = data;
          this.operations.forEach((element) => {        
            if (element.type == "Ingreso" ){
              countEntry = countEntry + element.amount;
            } else {
              countEgress = countEgress + element.amount;
            }
        });
        this.operations.countEntry = countEntry;
        this.operations.countEgress = countEgress;
        this.operations.balance = countEntry - countEgress;
        
        console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveOperations();
    this.currentOperations = null;
    this.currentIndex = -1;
  }

  setActiveOperation(operation, index) {
    this.currentOperations = operation;
    this.currentIndex = index;
  }


}
