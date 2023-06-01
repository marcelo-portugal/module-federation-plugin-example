// import { HttpClient } from '@angular/common/http';
// import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
// import { AuthLibService } from 'auth-lib';
import {Component} from '@angular/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  assetsUrl = __webpack_public_path__ || '../../../';
  user = 'John Doe';
  // user = this.service.user;

  // constructor(private service: AuthLibService) {}
}
