import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  
  constructor(
    private viewCOntainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }
    @Input('appTimes') set render(times: number){
      this.viewCOntainer.clear();

      for (let i = 0; i < times;i++){
        this.viewCOntainer.createEmbeddedView(this.templateRef,{})
      }
    }
}
