import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
      title.setTitle('my about page');

      meta.addTags([
          {
              name: 'author', content: 'Bertcoleman.com'
          },
          {
              name: 'keywords', content: 'Angular 2, Angular seo'
          },
          {
              name: 'description', content: 'here is about description, I love donuts'
          },
      ])
  }

  ngOnInit() {
  }

}
