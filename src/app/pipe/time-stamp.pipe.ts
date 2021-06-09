import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStamp'
})
export class TimeStampPipe implements PipeTransform {

  transform(value) {
    let time = new Date();
    time.setTime(value);
    return time;
  }

}
