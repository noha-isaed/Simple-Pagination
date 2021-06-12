import { Component , OnInit, ɵNO_CHANGE } from '@angular/core';
import { stub } from 'cypress/types/sinon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 

  // array conatain all objects 
  public People:Array<any> = [
    { firstname: 'Noha', lastname:"Thaher" , age:"20" , email:"noha.thaher@stu.najah.edu"},
    { firstname: 'Abdallah', lastname:"Saleh" , age:"22" , email:"abdallah.saleh@stu.najah.edu"},
    { firstname: 'Mohammad', lastname:"Khamlan" , age:"22" , email:"mohammad.khamlan@stu.najah.edu"},
    { firstname: 'Sami', lastname:"Imran" , age:"22" , email:"sami.imran@stu.najah.edu"},
    { firstname: 'Rama', lastname:"Salahat" , age:"23" , email:"rama.salahat@stu.najah.edu"},
    { firstname: 'Malak', lastname:"Nidal" , age:"20" , email:"malak.nidal@stu.najah.edu"},
    { firstname: 'Jo', lastname:"Aqra" , age:"25" , email:"jo@fullsession.io"},
    { firstname: 'Qamar', lastname:"Quqa" , age:"24" , email:"qamar.quqa@stu.najah.edu"},
    { firstname: 'Diana', lastname:"Salameh" , age:"21" , email:"diana.salameh@stu.najah.edu"},
    { firstname: 'Emad', lastname:"Armiti" , age:"23" , email:"emad.armiti@stu.najah.edu"},

];

//array to contain the object that i want that I want to show
public userInformation:Array<any>  = [{firstname: 'Noha', lastname:"Thaher" , age:"20" , email:"noha.thaher@stu.najah.edu"}] ;

public Numbers:Array<number> = [] ;

ngOnInit(): void {
  for(let i = 1 ; i<=this.People.length ; i++){
    this.userInformation.push(i);
  }
}
//Case1
DisplayData(id: number) : void{

    if(0 < id && id <= this.People.length) {
      this.userInformation = [];
      this.userInformation.push(this.People[id-1]);
    }
  
}

//Case2

 public counter :number = 0;

 DisplayDataOnClickPrevious():void {
   
  if(this.counter > 0){
    this.counter = this.counter - 1;
  }
    this.userInformation = [];
    this.userInformation.push(this.People[this.counter]);


 }
 DisplayDataOnclickNext():void {

  if(this.counter < this.People.length-1){
    this.counter = this.counter + 1;
  }
    this.userInformation = [];
    this.userInformation.push(this.People[this.counter]);

  
 
  }
}
