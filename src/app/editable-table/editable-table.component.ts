import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent implements OnInit {

  currentIndex:Number;
 
  editingRowsCache:Object  ={};
  @Input("table-headers") headers:Array<String>;
  @Input("table-data") tableContent:Array<Object>;
  isEditMode:boolean=false;
  constructor() { }

  ngOnInit() {

  }
  editRow(row,index){
     let editingRowsCacheKeys = Object.keys(this.editingRowsCache);
     if(editingRowsCacheKeys.length >0){
       for(var count =0 ; count<editingRowsCacheKeys.length;count++ ){
        this.tableContent[editingRowsCacheKeys[count]] = this.editingRowsCache[editingRowsCacheKeys[count]];
       }
      
     }
     this.editingRowsCache ={};
     this.editingRowsCache[index] = JSON.parse(JSON.stringify(this.tableContent[index]));
     this.currentIndex = index;
     this.isEditMode = true;    
 }
  saveRow(row,index){
    //Made Ajax Request For saving row in dataBase
    this.isEditMode = false;
    delete this.editingRowsCache[index];
  }
  deleteRow(row,index){
    //Make httpRequest for deleting row
    this.isEditMode = false
  }
  cancelRow(row,index){
  
    this.isEditMode = false;
    this.tableContent[index] =  this.editingRowsCache[index];
  }
}
