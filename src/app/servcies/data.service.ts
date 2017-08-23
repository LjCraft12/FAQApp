import {Injectable} from '@angular/core';
import {Question} from '../models/question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    /*
    this.questions = [
    {
      text: 'What is your name?',
      answer: 'Perry Craft',
      hide: true
    },
    {
      text: 'What is your favorite color?',
      answer: 'Red, Black, Blue',
      hide: true
    },
    {
      text: 'Do like to program?',
      answer: 'Yes I do',
      hide: true
    }
  ];
  */
  }

  // Get questions from LS
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

// Add question to LS
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // Init local variable
    let questions;
    if (localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // ADd new question
      questions.unshift(question);
      // Reset LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

// Remove question from LS
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
