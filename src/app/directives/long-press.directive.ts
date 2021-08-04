import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { fromEvent, merge, of, Subscription, timer } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Directive({
  selector: '[appLongPress]'
})
export class LongPressDirective implements OnDestroy {
  private eventSubscription: Subscription;
  threshold = 500;

  @Output() onLongPress = new EventEmitter();

  constructor(private elementRef: ElementRef) { 
    const touchstart = fromEvent(this.elementRef.nativeElement, 'touchstart').pipe(map(() => true));
    const touchEnd = fromEvent(this.elementRef.nativeElement, 'touchend').pipe(map(() => false));
    const mouseup = fromEvent<MouseEvent>(this.elementRef.nativeElement, 'mouseup').pipe(
      filter(event => event.button == 0),
      map(() => false)
    );
    const mousedown = fromEvent<MouseEvent>(this.elementRef.nativeElement, 'mousedown').pipe(
      filter(event => event.button == 0),
      map(() => true)
    );

    this.eventSubscription = merge(mousedown, mouseup, touchstart, touchEnd)
      .pipe(
        switchMap(state => state ? timer(this.threshold, 200) : of(null)),
        filter(value => value)
      )
      .subscribe(() => this.onLongPress.emit());
  }

  ngOnDestroy(): void {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

}
