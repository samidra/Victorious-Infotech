import { Component, OnInit } from '@angular/core';
import { ConsultingFaqModel } from '../MODEL/consultingfaq.module';

@Component({
  selector: 'app-digitalconsulting',
  templateUrl: './digitalconsulting.component.html',
  styleUrls: ['./digitalconsulting.component.css']
})
export class DigitalconsultingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
                                    // FAQ
                                    expendedFaq:any;
    items: ConsultingFaqModel[] = [
      {
        title: 'What does an IT consultant do ?',
        description: 'Sameer'
      },
      {
        title: 'How to find a professional IT consulting company ?',
        description: 'Akhter'
      },
      {
        title: 'What does an IT consultant do ?',
        description: 'Class'
      },
      {
        title: 'What is the cost of IT consulting services ?',
        description: 'codedcdsgfegfdscvdsfergdfvzdsfg fgdfbvscasfderhadvsd sssssssss'
      },
      ];
    expandedIndex = 0;

onclickAccordionItem(item: any) {
      this.expendedFaq = item;
      return item.toggle();
    }
getToggleIcon(item: any) {
     return this.expendedFaq?.id === item.id  && item.expanded===true? 'Group 2716.png' : 'Group 2571.png';
    }
}
