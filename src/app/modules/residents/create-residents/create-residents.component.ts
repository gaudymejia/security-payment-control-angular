import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../residents.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-residents',
  templateUrl: './create-residents.component.html',
  styleUrls: ['./create-residents.component.css']
})
export class CreateResidentsComponent implements OnInit {
  lastName:String;
  
  constructor( public dialogRef: MatDialogRef<CreateResidentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
