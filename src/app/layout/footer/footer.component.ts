import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright!: string;
  legalNoteLink!: string;
  webInfo!: string;

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.getFooterData();
  }

  getFooterData(): void {
    this.footerService.footerData$.subscribe(data => {
      if (data) {
        const {
          copyright,
          nota_legal,
          web
        } = data;

        this.copyright = copyright;
        this.legalNoteLink = nota_legal;
        this.webInfo = web;
      }
    });
  }
}
