import { Component, Output, Pipe, PipeTransform } from '@angular/core';
import { EventEmitter } from 'events';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
@Pipe({
  name: 'LockFilter'
})
export class SearchComponent implements PipeTransform{

  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (item) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
