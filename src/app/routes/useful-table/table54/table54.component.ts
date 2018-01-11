/**
 * Created by th3ee on 1/10/18.
 */
/**
 * Created by th3ee on 1/10/18.
 */
/**
 * Created by th3ee on 1/10/18.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-table54',
    templateUrl: './table54.component.html'
})
export class Table54Component implements OnInit {

    changedAnswer = [];
    answerArray = ['', '', '', '', '', '', '', '', '', '',
        '', '',
        '',
        '', '', '',
        '', '', '', '',
        '',
        '',
        '',
        '', '',
        '', '',
        '', ''
    ];

    idArray = ['eda1', 'eda2', 'eda3', 'eda4', 'eda5', 'eda6', 'eda7', 'eda8', 'eda9', 'eda10',
        'ed1a', 'ed1b',
        'ed2',
        'ed3a', 'ed3b', 'ed3c',
        'ed4a', 'ed4b', 'ed4c', 'ed4d',
        'ed5',
        'ed6',
        'ed7',
        'ed8', 'ed8a',
        'ed10a', 'ed10b',
        'ed11a', 'ed11b'
    ];

    constructor() { }

    ngOnInit() {
    }




    getAnswer() {
        this.changedAnswer = [];
        this.setAnswer();
        console.log(this.changedAnswer);
    }

    setAnswer() {
      for (let i = 0; i < this.answerArray.length; i++) {
          if (this.answerArray[i] !== '') {
              this.changedAnswer.push({
                  id: this.idArray[i],
                  value: this.answerArray[i]
              });
          }
      }
    }
}
