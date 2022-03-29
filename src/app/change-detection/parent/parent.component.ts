import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {

  }

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }
  
}
