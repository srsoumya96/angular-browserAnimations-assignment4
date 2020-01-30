import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
  } from '@angular/animations';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  animations: [
    trigger ('inOut', [
      state('in1', style({
      })),
      state('in2', style({
      })),
      state('in3', style({
      })),
      state('out1', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('out2', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('out3', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('in1 => out1', [
        animate('2s', style({
        transform: 'translateX(100%)',
        opacity: 0
      }))
      ]),
      transition('in2 => out2', [
        animate('2s', style({
        transform: 'translateX(100%)',
        opacity: 0
      }))
      ]),
      transition('in3 => out3', [
        animate('2s', style({
        transform: 'translateX(100%)',
        opacity: 0
      }))
      ]),
      transition('out3 => in3', [
        animate('2s', style({
      }))
      ]),
      transition('out2 => in2', [
        animate('2s', style({
      }))
      ]),
      transition('out1 => in1', [
        animate('2s', style({
      }))
      ])
    ])
  ],
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {

  constructor() { }
  isIn1 = false;
  isIn2 = false;
  isIn3 = false;
  showAnime = true;

  myfun1() {
    this.isIn1 = !this.isIn1;
    setTimeout(() => {
    this.myfun2();
    }, 2000);
    }
    myfun2() {
      this.isIn2 = !this.isIn2;
    setTimeout(() => {
    this.myfun3();
    }, 2000);
    }
    myfun3() {
      this.isIn3 = !this.isIn3;
      setTimeout(() => {
    this.myfun1();
    }, 2000);
    }

  showAnimation() {
    this.showAnime = false;
    setTimeout(() => {
    this.myfun1();
    }, 2000);
  }
  
  ngOnInit() {
    // setInterval(() => {
    // this.isIn1 = !this.isIn1;
    // }, 6000);
    // setInterval(() => {
    //   this.isIn2 = !this.isIn2;
    // }, 6000);
    // setInterval(() => {
    //   this.isIn3 = !this.isIn3;
    // }, 6000);
  }

}