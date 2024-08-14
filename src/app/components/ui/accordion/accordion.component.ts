import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'Accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterViewInit {
  @Input('items') elements!: {
    header: string;
    content: string;
  }[];

  detailsElements!: HTMLDetailsElement[];
  animation!: Animation | null;
  isClosing!: boolean;
  isExpanding!: boolean;


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.detailsElements = this.el.nativeElement.querySelectorAll('details');
    this.detailsElements.forEach((el: HTMLDetailsElement) => {
      const summary = el.querySelector('summary')!;
      const content = el.querySelector('.content')!;

      let animation: Animation | null = null;
      let isClosing = false;
      let isExpanding = false;

      summary.addEventListener('click', (e) => {
        e.preventDefault();
        el.style.overflow = 'hidden';

        if (isClosing || !el.open) {
          this.detailsElements.forEach((element: HTMLDetailsElement) => {
            if (element !== el) {
              if (element.open === true) {
                // element.open = false;
                element.toggleAttribute('open')
              }
            }
          });
          this.open(el, summary, content as HTMLElement);


        } else if (isExpanding || el.open) {
          this.shrink(el, summary);
        }
      });


    });
  }

  shrink(el: HTMLDetailsElement, summary: HTMLElement) {
    this.isClosing = true;
    const startHeight = `${el.offsetHeight}px`;
    const endHeight = `${summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => this.onAnimationFinish(false, el);
    this.animation.oncancel = () => this.isClosing = false;
  }

  open(el: HTMLDetailsElement, summary: HTMLElement, content: HTMLElement) {
    el.style.height = `${el.offsetHeight}px`;
    el.open = true;
    window.requestAnimationFrame(() => this.expand(el, summary, content));
  }

  expand(el: HTMLDetailsElement, summary: HTMLElement, content: HTMLElement) {
    this.isExpanding = true;
    const startHeight = `${el.offsetHeight}px`;
    const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => this.onAnimationFinish(true, el);
    this.animation.oncancel = () => this.isExpanding = false;
  }

  onAnimationFinish(open: boolean, el: HTMLDetailsElement) {
    el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    el.style.height = el.style.overflow = '';
  }

  toggleAccordion(targetElement: HTMLDetailsElement) {
    if (targetElement.hasAttribute('open')) {
      const detailsElements = this.el.nativeElement.querySelectorAll('details');
      detailsElements.forEach((element: HTMLDetailsElement) => {
        if (element !== targetElement) {
          element.removeAttribute('open');
        }
      });
    }
  }
}
