import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of, pipe, filter } from 'rxjs';

@Component({
  selector: 'app-creating-observables',
  templateUrl: './creating-observables.component.html'
})
export class CreatingObservablesComponent implements OnInit {

  // method using Observable constructor
  // myObservable = new Observable((observer) => {
  //   console.log('Obserable starts ! ')
  //   setTimeout(() => { observer.next("1") }, 1000)
  //   setTimeout(() => { observer.next("2") }, 2000)
  //   setTimeout(() => { observer.next("3") }, 3000)
  //   // setTimeout(()=>{observer.error(new Error("Something went wrong ! Please, try again later"))}, 3000)
  //   setTimeout(() => { observer.next("4") }, 4000)
  //   setTimeout(() => { observer.next("5") }, 5000)
  //   // setTimeout(()=>{observer.complete()},3000)
  //   // observer.next("1")
  //   // observer.next("2")
  //   // observer.next("3")
  // })

  // Method using the Create Method from Observable Class
  // myObservable = Observable.create((observer:any) => {
  //   console.log('Obserable starts ! ')
  //   setTimeout(() => { observer.next("A") }, 1000)
  //   setTimeout(() => { observer.next("B") }, 2000)
  //   setTimeout(() => { observer.next("C") }, 3000)
  //   setTimeout(() => { observer.next("D") }, 4000)
  //   setTimeout(() => { observer.next("E") }, 5000)
  //   // setTimeout(()=>{observer.complete()},3000)
  //   // observer.next("1")
  //   // observer.next("2")
  //   // observer.next("3")
  // })

  // Method using the of operator
  array1 = [1, 5, 7, 13, 20]
  array2 = ["A", "B", "C", "D", "E"]
  // We can notice that one of the advantage is that we do not need to emit a complete signal. The of operator will emit a complet signal after emitting the complete data ++ it accepts UNLIMITTED NUMBER of arguments
  // But for that case, it will emil, the first, following by the second array. Not suitable here...

  // Method using the from operator that will take only a SINGLE argument iterable. With the advantage of emitting one by one items from an array
  myObservable = from(this.array1)

  // OK :  transformedObs = this.myObservable.pipe(map((val) => val * 2))
  // OK :  filteredObs = this.transformedObs.pipe(filter((val) => val > 12))

  // same as combining map and operators using a single map method :
  transformedObs = this.myObservable.pipe(map((val) => val * 2), filter((val) => val > 12))

  ngOnInit(): void {
    this.transformedObs.subscribe((val: any) => {
      console.log(val)
    }, (error: any) => {
      alert(error.message)
    }, () => {
      alert('Observable has complet emitting all values')

    })

  }
}
