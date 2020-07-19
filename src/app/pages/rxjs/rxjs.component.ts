import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  public obs$: Observable<number>;
  public intervalSubs: Subscription;

  constructor() {
    /*this.retornaObservable().pipe(
      retry()
    ).subscribe(
      valor => console.log('Subs ', valor),
      err => console.log('Error: ', err),
      () => console.log('Obs terminado.')
    );*/
    this.intervalSubs = this.retornaIntervalo().subscribe((valor) => console.log(valor));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
	  this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      map(valor => valor + 1),
	  filter(valor => (valor % 2) === 0)
    );
  }

  retornaObservable(): Observable<number> {
    let i = 0;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llegó al valor 2.');
        }
      }, 1000);
    });
  }
}
