import { Component } from '@angular/core';
// import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  constructor() {
    // pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
  // pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  public pdfSrc = '../../../assets/pdf/pdf-test.pdf'


}
