import { Component } from '@angular/core';

@Component({
  selector: 'app-word-list',
  template: `
      <div *ngFor="let word of arrWords">
          <a routerLink="/word">{{ word.en }}</a>
      </div>
  `
})

export class WordListComponent {
    arrWords = WORDS;
}

const WORDS = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];
