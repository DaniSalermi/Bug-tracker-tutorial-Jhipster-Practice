import { Component, OnInit } from '@angular/core';
import { ITicket } from 'app/shared/model/ticket.model';
import { Account } from 'app/core/user/account.model';
import { Subscription } from 'rxjs';
import { TicketService } from 'app/entities/ticket/ticket.service';
import { JhiAlertService, JhiEventManager, JhiParseLinks } from 'ng-jhipster';
import { AccountService } from 'app/core/auth/account.service';
import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.scss']
})
export class MyticketsComponent implements OnInit {
  tickets?: ITicket[];
  account?: Account | null;
  eventSubscriber?: Subscription;
  predicate: any;
  reverse: any;
  links: any;
  totalItems: any;

  constructor(
    private accountService: AccountService,
    private ticketService: TicketService,
    private jhiAlertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private parseLinks: JhiParseLinks
  ) {}

  ngOnInit(): void {
    this.loadSelf();
    this.accountService.identity().subscribe(account => {
      this.account = account;
    });
    this.registerChangeInTickets();
  }

  loadSelf(): void {
    this.ticketService.queryMyTickets().subscribe(
      (res: HttpResponse<ITicket[]>) => this.paginateTickets(res.body ? res.body : [], res.headers),
      (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected paginateTickets(data: ITicket[], headers: HttpHeaders): void {
    //alert(headers.get('link'));
    this.links = this.parseLinks.parse(headers.get('link') || '');
    //alert('coucou');
    this.totalItems = parseInt(headers.get('X-Total-Count') ? this.totalItems : '', 10);
    this.tickets = data;
  }

  protected onError(errorMessage: string): void {
    this.jhiAlertService.error(errorMessage, null, '');
  }

  registerChangeInTickets(): void {
    this.eventSubscriber = this.eventManager.subscribe('ticketListModification', (response: any) => this.loadSelf());
  }
}
