import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerRouterTemplateComponent } from './messager-router-template.component';

describe('MessagerRouterTemplateComponent', () => {
  let component: MessagerRouterTemplateComponent;
  let fixture: ComponentFixture<MessagerRouterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagerRouterTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagerRouterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
