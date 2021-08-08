import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(timeValue: number): string {
    let seconds = timeValue;
    let minutes = seconds / 60;
    if (minutes >= 1) {
      seconds -= minutes * 60;
    }
    
    const hours = minutes / 60;
    if (hours >= 1) {
      minutes -= hours * 60;
    }

    if ((hours < 1) && (minutes >= 1)) {
      return `${minutes}:${(seconds % 60).toString().padStart(2, "0")}`;
    }

    if ((hours < 1) && (minutes < 1)) {
      return `0:${seconds.toString().padStart(2, "0")}`;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  }

}
