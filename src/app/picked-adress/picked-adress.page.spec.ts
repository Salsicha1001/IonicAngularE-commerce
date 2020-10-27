import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickedAdressPage } from './picked-adress.page';

describe('PickedAdressPage', () => {
  let component: PickedAdressPage;
  let fixture: ComponentFixture<PickedAdressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickedAdressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickedAdressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
