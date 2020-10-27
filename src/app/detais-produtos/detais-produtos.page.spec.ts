import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaisProdutosPage } from './detais-produtos.page';

describe('DetaisProdutosPage', () => {
  let component: DetaisProdutosPage;
  let fixture: ComponentFixture<DetaisProdutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaisProdutosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaisProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
