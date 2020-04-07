import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';

class quiz {
  public question: string;
  public Answer: string;
  public op1:string;
  public op2:string;
  public op3:string;
  public op4:string;
  public hide: boolean;

  constructor(question: string, Answer: string,op1:string,op2:string,op3:string,op4:string) {
    this.question = question;
    this.Answer = Answer;
    this.op1=op1;
    this.op2=op2;
    this.op3=op3;
    this.op4=op4;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'joke-list',
  template: `
  <form>
  <h1 style="color: blueviolet;text-align: center;text-transform: uppercase;">Web Technology Quiz</h1>
  <ol style="width: 1000px;margin-left: 250px; align-items: center;">  
  <div class="card card-block"
     *ngFor="let paper of exam">
     
       
  <li style="font-size:30px;  margin-left: 15px;"><h4 class="card-title">{{paper.question}}</h4></li>
  <ol>
  
  <li><input name="ans" type="radio">{{paper.op1}}</li>
  <li><input name="ans" type="radio">{{paper.op2}}</li>
  <li><input name="ans" type="radio">{{paper.op3}}</li>
  <li><input name="ans" type="radio">{{paper.op4}}</li>
  </ol>
  <br>
  <p style="font-size:25px;font-weight: bold; color:Blue" class="card-text"
     [hidden]="paper.hide">{{paper.Answer}}</p>
     
    <button  class="btn btn-success" style="color:white;font-weight: bold;" >Submit Answer</button>
    <a class="btn btn-primary" style="color:white; font-weight: bold;  margin-left: 10px; " (click)="paper.toggle()">Show Answer</a>
    <button class="btn btn-danger" style="color:white;font-weight: bold; margin-left: 10px;" type="reset">Reset Answer</button >
  
  </div>
  </ol>
  </form>
  `
})
class quizListComponent {
  exam: quiz[];

  constructor() {
    this.exam = [
      
     
      new quiz("Extention of HTML file ?",".html",".html",".css",".ts",".js"),
      
      new quiz("Extention of CSS file ?",".css",".html",".css",".ts",".js"),
      new quiz("Which file Use for Styles ?","CSS File","HTML File","CSS File","TS File","JS File"),
      new quiz("Extention of Java Script file ?",".js",".html",".css",".ts",".js"),
      new quiz("Extention of Type Script file ?",".ts",".html",".css",".ts",".js"),
     ];
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [quizListComponent],
  bootstrap: [quizListComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);