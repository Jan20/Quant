// Custom Components
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MaterialModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';

// Routing
import { ROUTES } from './../config/routing.config';
import { RouterModule, Routes } from '@angular/router';

// Services

// Custom Components
import { MenuComponent } from './menu.component';
import { LoginComponent } from './../login/login.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        LoginComponent,
      ],
      imports: [
        MaterialModule,
        FormsModule,
        RouterModule.forRoot(
          ROUTES,
          { enableTracing: true }
        ),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
