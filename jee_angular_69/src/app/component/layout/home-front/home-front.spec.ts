import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFront } from './home-front';

describe('HomeFront', () => {
  let component: HomeFront;
  let fixture: ComponentFixture<HomeFront>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFront],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFront);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
