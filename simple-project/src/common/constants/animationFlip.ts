import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

export const flipVertivally = trigger('flip', [
    state('front', style({
      transform: 'rotateY(0deg)'
    })),
    state('back', style({
      transform: 'rotateY(180deg)'
    })),
    transition('front => back', [
      animate('1s 0s ease-out',
        keyframes([
          style({
            transform: 'perspective(400px) rotateY(0deg)',
            offset: 0
          }),
          style({
            transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)',
            offset: 0.4
          }),
          style({
            transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)',
            offset: 0.5
          }),
          style({
            transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(180deg)',
            offset: 0.8
          }),
          style({
            transform: 'perspective(400px) scale3d(1, 1, 1) rotateY(180deg)',
            offset: 1
          })
        ]))
    ]),
    transition('back => front', [
      animate('1s 0s ease-in',
        keyframes([
          style({
            transform: 'perspective(400px) rotateY(0deg)',
            offset: 0
          }),
          style({
            transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(-80deg)',
            offset: 0.4
          }),
          style({
            transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(-100deg)',
            offset: 0.5
          }),
          style({
            transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(-180deg)',
            offset: 0.8
          }),
          style({
            transform: 'perspective(400px) scale3d(1, 1, 1) rotateY(-180deg)',
            offset: 1
          })
        ]))
    ])
  ])