/**
 * Countdown Timer Component
 * Displays a working countdown timer for sales/promotions
 */

export class CountdownTimer {
  constructor(options = {}) {
    // Set countdown end time (default: 5 days, 8 hours, 20 minutes, 45 seconds from now)
    const now = new Date();
    this.endTime = options.endTime || new Date(
      now.getTime() + 
      (5 * 24 * 60 * 60 * 1000) +  // 5 days
      (8 * 60 * 60 * 1000) +        // 8 hours
      (20 * 60 * 1000) +            // 20 minutes
      (45 * 1000)                   // 45 seconds
    );
    
    this.daysEl = document.getElementById('countdown-days');
    this.hoursEl = document.getElementById('countdown-hours');
    this.minutesEl = document.getElementById('countdown-minutes');
    this.secondsEl = document.getElementById('countdown-seconds');
    
    this.interval = null;
    
    if (this.daysEl && this.hoursEl && this.minutesEl && this.secondsEl) {
      this.start();
    }
  }
  
  start() {
    // Update immediately
    this.update();
    
    // Update every second
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  }
  
  update() {
    const now = new Date().getTime();
    const distance = this.endTime - now;
    
    // If countdown is finished
    if (distance < 0) {
      this.stop();
      this.displayZero();
      return;
    }
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update DOM
    this.daysEl.textContent = String(days).padStart(2, '0');
    this.hoursEl.textContent = String(hours).padStart(2, '0');
    this.minutesEl.textContent = String(minutes).padStart(2, '0');
    this.secondsEl.textContent = String(seconds).padStart(2, '0');
  }
  
  displayZero() {
    this.daysEl.textContent = '00';
    this.hoursEl.textContent = '00';
    this.minutesEl.textContent = '00';
    this.secondsEl.textContent = '00';
  }
  
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
  
  destroy() {
    this.stop();
  }
  
  // Set a specific end time
  setEndTime(endTime) {
    this.endTime = endTime;
    this.update();
  }
  
  // Add time to countdown
  addTime(milliseconds) {
    this.endTime = new Date(this.endTime.getTime() + milliseconds);
    this.update();
  }
}
