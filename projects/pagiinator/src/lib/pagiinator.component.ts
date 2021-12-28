import { Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges, } from '@angular/core';

@Component({
  selector: 'lib-pagiinator',
  template: `
    <div [class]="getPosition(position)">
    <ul
      *ngIf="pager.pages && pager.pages.length"
      class="pagination"
      [ngStyle]="{ color: getColor(textColor) }"
    >
      <li class="page-item first-item">
        <a
          (click)="setPage(1)"
          class="page-link arrow"
          [class.disabled]="pager.currentPage === 1"
          title="First Page"
          ><<</a
        >
      </li>
      <li class="page-item previous-item">
        <a
          (click)="setPage(pager.currentPage - 1)"
          class="page-link arrow"
          [class.disabled]="pager.currentPage === 1"
          title="Previous Page"
          ><</a
        >
      </li>
      <li *ngFor="let page of pager.pages" class="page-item number-item">
        <a
          (click)="setPage(page)"
          class="page-link"
          [class.active]="pager.currentPage === page"
          [ngStyle]="{'background':(pager.currentPage === page) ? getColor(bgColor) : '' }"
          >{{ page }}</a
        >
      </li>
      <li class="page-item next-item">
        <a
          (click)="setPage(pager.currentPage + 1)"
          class="page-link arrow"
          [class.disabled]="pager.currentPage === pager.totalPages"
          title="Next Page"
          >></a
        >
      </li>
      <li class="page-item last-item">
        <a
          (click)="setPage(pager.totalPages)"
          class="page-link arrow"
          [class.disabled]="pager.currentPage === pager.totalPages"
          title="Last Page"
          >>></a
        >
      </li>
    </ul>
    </div>
  `,
  styleUrls: ['./pagiinator.component.scss'],
})
export class PagiinatorComponent implements OnInit, OnChanges {
  @Input() items: Array<any> = [];
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;
  @Input() textColor = 'white';
  @Input() bgColor = 'black';
  @Input() position = 'center';

  pager: any = {};

  constructor() {}

  ngOnInit() {
    // set page if items array isn't empty
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes['items'].currentValue !== changes['items'].previousValue) {
      this.setPage(this.initialPage);
    }
  }
  getColor(color: string) {
    switch (color) {
      case 'green':
        return 'green';
      case 'blue':
        return 'blue';
      case 'red':
        return 'red';
      case 'white':
        return 'white';
      case 'black':
        return 'black';
      case 'gray':
        return 'gray';
      default:
        return color;
    }
  }
  getPosition(position : string) {
    switch (position) {
      case 'right':
        return 'right';
      case 'left':
        return 'left';
      default:
        return 'center';
    }
  }

  setPage(page: number) {
    // get new pager object for specified page
    this.pager = this.paginate(
      this.items.length,
      page,
      this.pageSize,
      this.maxPages
    );

    // get new page of items from items array
    var pageOfItems = this.items.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );

    // call change page function in parent component
    this.changePage.emit(pageOfItems);
  }

  paginate(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 10,
    maxPages: number = 10
  ) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        // current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}
