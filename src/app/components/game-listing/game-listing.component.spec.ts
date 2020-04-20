import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListingComponent } from './game-listing.component';

describe('GameListingComponent', () => {
  let component: GameListingComponent;
  let fixture: ComponentFixture<GameListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
