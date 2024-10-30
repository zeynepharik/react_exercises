import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TestBed } from '@angular/core/testing';
import { initTestEnvironment } from '@angular/core/testing/browser';

initTestEnvironment();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
