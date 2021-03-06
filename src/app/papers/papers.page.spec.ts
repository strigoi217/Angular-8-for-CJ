import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PapersPage } from './papers.page';

describe('PapersPage', () => {
  let component: PapersPage;
  let fixture: ComponentFixture<PapersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PapersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
