import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-word',
  template: '<h3>{{ word.en }}</h3><p>{{ word.vn }}</p>'
})

export class WordComponent {
  word: { id: number, en: string, vn: string, memorized: boolean };
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      const index = WORDS.findIndex(e => e.id === id);
      this.word = WORDS[index];
    });
  }
}

const WORDS = [
  { id: 1, en: 'action', vn: 'hành động', memorized: true },
  { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
  { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
  { id: 4, en: 'active', vn: 'chủ động', memorized: true },
  { id: 5, en: 'bath', vn: 'tắm', memorized: false },
  { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];
