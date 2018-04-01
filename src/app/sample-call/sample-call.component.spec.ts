import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCallComponent } from './sample-call.component';

describe('SampleCallComponent', () => {
  let component: SampleCallComponent;
  let fixture: ComponentFixture<SampleCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
