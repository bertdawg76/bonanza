import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
      title.setTitle('my home page');

      meta.addTags([
          {
              name: 'author', content: 'Coursetra.com'
          },
          {
              name: 'keywords', content: 'Angular 4, Angular seo'
          },
          {
              name: 'description', content: 'here is description'
          },
      ])
  }

  ngOnInit() {
  }

}
