import { Injectable } from '@angular/core';

@Injectable()
export class FilterService{


  ////////////////////
  // Filter Methods //
  ////////////////////
  removeDuplicates(stringArray : String[]) : String[]{

    var reducedArray : String[] = [];
    var flag : boolean = false;

    for(var i = 0 ; i < stringArray.length; i++){

      for(var j = 0 ; j < reducedArray.length; j++){

        if(stringArray[i] == reducedArray[j]){
          flag = true;
        }

      }
      
      if(flag == false){
        reducedArray.push(stringArray[i]); 
      }else{
        flag = false;
      }

    }

    return reducedArray;

  }

}