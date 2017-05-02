import { Component, OnInit } from '@angular/core';

declare function require(filename: string): any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  content = require('!!raw-loader!./_data/example.md');

  constructor() {
  }

  ngOnInit(): void {
  }

}
