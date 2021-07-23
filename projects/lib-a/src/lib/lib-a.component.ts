import { Component, Inject, OnDestroy } from '@angular/core';
import { LibASpiPort } from 'port-lib-a';
import { Subscription } from 'rxjs';
import { TOKEN_ADAPTER_SPI_CLASS_LIB_A } from './token';

@Component({
  selector: 'lib-lib-a',
  template: `
      <p>
          lib-a works!
      </p>
      <button (click)="test()">Call lib B API without routing to lib B</button>
  `,
  styles: []
})
export class LibAComponent implements OnDestroy {

  private readonly subscription: Subscription = new Subscription();

  constructor(@Inject(TOKEN_ADAPTER_SPI_CLASS_LIB_A) private readonly libASpiImplAdapter: LibASpiPort) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  test(): void {
    this.subscription.add(this.libASpiImplAdapter.spiFromLibA().subscribe(console.log));
  }


}
