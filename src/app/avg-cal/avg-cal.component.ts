import { Component } from '@angular/core';

@Component({
  selector: 'app-avg-cal',
  templateUrl: './avg-cal.component.html',
  styleUrls: ['./avg-cal.component.css']
})
export class AvgCalComponent {

   AutoAvgDiv:boolean = false;
   showCal:boolean =false;
   AutoAvgButton : boolean =true;
   AutoAvgDivTotal :boolean = false;

   Unit1 : string = "";
   SharePrize1 : string= "";

   Unit2 : string = "";
   SharePrize2 : string= "";   

   Unit3 : string = "";
   SharePrize3 : string= "";  

   Amount1Invested : string="";
   Amount2Invested : string ="";
   Amount3Invested : string ="";

   TotalUnit : string ="";
   AveragePrize : string ="";
   TotalAmount :string ="";

   AutoAverageTotalUnit : string ="";
   AutoAveragePrize : string ="";
   AutoAverageTotalAmount :string ="";
   
   getData(Unit1:string,SharePrize1:string,Unit2:string,SharePrize2:string){
    this.AutoAvgDiv = false;
    this.AutoAvgDivTotal = false;
    var U1 = Number(Unit1);
    var S1 = Number(SharePrize1);
    var U2 = Number(Unit2);
    var S2 = Number(SharePrize2);
    if(U1 > 0 && S1 > 0 && U2 > 0 && S2 >0)
    {
      this.Amount1Invested = (U1 * S1).toString();
      this.Amount2Invested = (U2 * S2).toString();
      this.TotalUnit = (U1 + U2).toString();
      this.AveragePrize = (((U1 * S1) + (U2 * S2)) / (U1 + U2)).toFixed(2).toString();
      this.TotalAmount = ((U1 * S1) + (U2 * S2)).toFixed(2).toString();       
      this.showCal = true;
      this.AutoAvgButton = (S1 > S2) ? false : true;         
     // this.AutoAvgButton = false;
    }
    else{
        this.showCal =false;
        this.AutoAvgButton = true;
    } 
  }


  getAutoAverageData(Unit1:string,SharePrize1:string,Unit3:string,SharePrize3:string){    
    var U1 = Number(Unit1);
    var S1 = Number(SharePrize1);
    var U3 = Number(Unit3);
    var S3 = Number(SharePrize3);
    this.getAutoAverageDataservice(U1,S1,U3,S3);
  }

  getAutoAverageDataservice(U1:number,S1:number,U3:number,S3:number){
    if(U1 > 0 && S1 > 0 && U3 > 0 && S3 >0)
      {
        this.Amount1Invested = (U1 * S1).toString();
        this.Amount3Invested = (U3 * S3).toString();
        this.AutoAverageTotalUnit = (U1 + U3).toString();
        this.AutoAveragePrize = (((U1 * S1) + (U3 * S3)) / (U1 + U3)).toFixed(2).toString();
        this.AutoAverageTotalAmount = ((U1 * S1) + (U3 * S3)).toFixed(2).toString();       
        this.showCal = true;     
      }  
    }


  clearField()  {
    this.Unit1 = "";this.SharePrize1 = "";this.Unit2 ="",this.SharePrize2 ="";
    this.AutoAvgDiv =false; this.AutoAvgButton =true;this.AutoAvgDivTotal = false;
    this.TotalUnit = "";  this.showCal = false; this.AveragePrize = "",this.TotalAmount = "";
    this.AutoAverageTotalUnit = "";this.AutoAveragePrize = "";this.AutoAverageTotalAmount = ""
  }

  AutoAverageService(Unit1:string,SharePrize1:string,Unit2:string,SharePrize2:string){
    this.AutoAvgDiv = false;
    this.AutoAvgDivTotal = false;
    var U1 = Number(Unit1);
    var S1 = Number(SharePrize1);
    var U2 = Number(Unit2);
    var S2 = Number(SharePrize2);
    
    if(U1 > 0 && S1 > 0 && U2 > 0 && S2 >0)
    {      
      let Value : number = 1;
      let AveragePrize =  (((U1 * S1) + (Value * S2)) / (U1 + Value));     
      let ExpectedPrice = S2;       

      if(AveragePrize > ExpectedPrice)
      {
        while(AveragePrize > ExpectedPrice)
        {
          AveragePrize = Math.round(  (((U1 * S1) + (Value * S2)) / (U1 + Value)));
          console.log(AveragePrize);
          Value++;
        }
        this.Unit3 = Value.toString();
        this.SharePrize3 = AveragePrize.toString();
        this.Amount3Invested = (Value * AveragePrize).toString();
        this.AutoAvgDiv = true;
        this.AutoAvgDivTotal = true;

        this.getAutoAverageDataservice(U1,S1,Number(this.Unit3),Number(this.SharePrize3));
      }
    }
  }

}
