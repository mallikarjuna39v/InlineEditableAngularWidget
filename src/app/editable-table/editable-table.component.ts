import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent implements OnInit {
  editRowObject:Object;
  editingRowsCache:Array<Object> =[];
  @Input("table-headers") headers:Array<String>;
  @Input("table-data") tableContent:Array<Object>;
  isEditMode:boolean=false;
  constructor() { }

  ngOnInit() {

  }
  editRow(row){
     if(this.isEditMode && this.editingRowsCache.length > 0){
       for(let count = 0 ; count < this.editingRowsCache.length;count++){
          for(let mainCount = 0 ; mainCount < this.tableContent.length ; mainCount++){
            if(this.tableContent[mainCount]["uniqueId"] === this.editingRowsCache[count]["uniqueId"] ){
                this.tableContent[mainCount] = this.editingRowsCache[count];
            }
          }

       }

     }
     this.editingRowsCache =[];
     this.editingRowsCache.push(JSON.parse(JSON.stringify(row)));
     this.editRowObject = row;
     this.isEditMode = true;
 }
  saveRow(row){
    //Made Ajax Request For saving row in dataBase
    this.isEditMode = false;
  }
  deleteRow(row){
    //Make httpRequest for deleting row
    this.isEditMode = false
  }
  cancelRow(row){
    if(this.editingRowsCache.length > 0){
      for(let count = 0 ; count < this.editingRowsCache.length;count++){
         for(let mainCount = 0 ; mainCount < this.tableContent.length ; mainCount++){
           if(this.tableContent[mainCount]["uniqueId"] === this.editingRowsCache[count]["uniqueId"] ){
               this.tableContent[mainCount] = this.editingRowsCache[count];
           }
         }

      }
    }
    this.isEditMode = false;
    this.editingRowsCache =[];
  }
}
