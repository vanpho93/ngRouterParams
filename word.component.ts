import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  template: '<h3>Word component</h3>'
})

export class WordComponent {}

const WORDS = [
  { id: 1, en: 'action', vn: 'hành động', memorized: true },
  { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
  { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
  { id: 4, en: 'active', vn: 'chủ động', memorized: true },
  { id: 5, en: 'bath', vn: 'tắm', memorized: false },
  { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];
