/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {Directive} from '@angular/core';

import {StickyElementDirective} from '../../../../src/app/sticky.element.directive';

@Directive({selector: '[sticky-td-left]'})
export class StickyTdLeftDirective extends StickyElementDirective {
  handleHorizontalScrollEvent(event: UIEvent): void {
    console.log("got horizontal scroll event");
    const leftOffset = (event.target as HTMLElement).scrollLeft;
    this.elements.forEach((el: HTMLElement) => {
      el.style.left = leftOffset + 'px';
    });
  }
}
