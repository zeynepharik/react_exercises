// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BorrowingComponent } from './components/borrowing/borrowing.component';
import { ReadingProgressComponent } from './components/reading-progress/reading-progress.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BorrowingsComponent } from './pages/borrowings/borrowings.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { bookReducer } from './store/book.reducer';
import { borrowingReducer } from './store/borrowing.reducer';
import { readingProgressReducer } from './store/reading-progress.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BorrowingComponent,
    ReadingProgressComponent,
    HomeComponent,
    BooksComponent,
    BorrowingsComponent,
    StatisticsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, // Rota modülü ekleniyor
    StoreModule.forRoot({
      books: bookReducer,
      borrowings: borrowingReducer,
      readingProgress: readingProgressReducer,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
