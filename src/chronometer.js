class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
     
  }

  start(printTimeCallback) {
     

    setInterval(() => {
      this.currentTime += 1
      
      console.log(this)
      if (typeof printTimeCallback == "function") {
      printTimeCallback()}
    },1000)
     
  }


  getMinutes() {
    

    console.log(this)
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  
  computeTwoDigitNumber(value) {

    String(this.currentTime).slice(0,2)
    
    
      return "0" + this.currentTime

      if (this.currentTime >= 9) {
    return this.currentTime
    
      }
    
    

  
  }

  

  stop() {
    clearInterval(this.currentTime);
    
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}
