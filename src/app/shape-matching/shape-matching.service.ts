import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ShapeMatchingService {
  currentShape = "";
  shapesToChooseFrom = [];
  numOptions = 3;
  private shapes = ['circle', 'square', 'oval', 'triangle', 'rectangle', 'star']
  constructor(private router: Router) { }

  getNewShapes() {
    this.shapesToChooseFrom = []
    this.currentShape = this.getRandomItem(this.shapes);
    this.shapesToChooseFrom.push(this.currentShape);

    while (this.shapesToChooseFrom.length < this.numOptions) {
      let potentialShape = this.getRandomItem(this.shapes)
      if (this.shapesToChooseFrom.indexOf(potentialShape) === -1) {
        this.shapesToChooseFrom.push(potentialShape);
      }
    }

    this.shapesToChooseFrom = this.shuffle(this.shapesToChooseFrom);
  }

  checkForMatch(shape) {
    if (shape === this.currentShape) {
      this.router.navigate(['success', 'matching'])
    }
  }

  private shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  private getRandomItem(array) {
    return array[this.getRandomInt(0, array.length)]
  }
}