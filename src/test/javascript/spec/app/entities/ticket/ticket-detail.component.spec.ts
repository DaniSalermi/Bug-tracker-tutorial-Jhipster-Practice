import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BugTrackerJHipsterTestModule } from '../../../test.module';
import { TicketDetailComponent } from 'app/entities/ticket/ticket-detail.component';
import { Ticket } from 'app/shared/model/ticket.model';

describe('Component Tests', () => {
  describe('Ticket Management Detail Component', () => {
    let comp: TicketDetailComponent;
    let fixture: ComponentFixture<TicketDetailComponent>;
    const route = ({ data: of({ ticket: new Ticket(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BugTrackerJHipsterTestModule],
        declarations: [TicketDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(TicketDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TicketDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load ticket on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.ticket).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
