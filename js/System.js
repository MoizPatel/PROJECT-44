class System{

    constructor(){
        this.actualCode = [accessCode1,accessCode2,accessCode3]
      //  this.enteredCode = []
    }

    // Add code to authenticate the given code and the access codes.
   authenticate(actualCode,enteredCode){
       if (actualCode === enteredCode) {
           return true;
            }else{
                return false;
            }
   }

  
    

}