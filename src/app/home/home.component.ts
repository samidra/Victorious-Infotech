import { Component, OnInit } from '@angular/core';

import { ServiceModel } from '../MODEL/service.model';
import { TestimonalModel } from '../MODEL/testimonal.model';
import { FaqModel } from '../MODEL/faq.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'imageslider';

  slides: ServiceModel[] = [
    {
      img: 'assets/image/DM.png',
      title: 'Digital Marketing',
      description: 'We at Victorious Infotech help you obtain new business adaption with increase conversion, generate more leads,traffic and build strategic brand and loyalty',
      link: 'assets/image/2362.png',
    },
    {
      img: 'assets/image/mobile.png',
      title: 'Mobile App Development',
      description: 'Here, We built top notch android and iOS mobile applications that can perform across verious devices resolutions and screen sizes...',
      link: 'assets/image/2362.png'
    },
    {
      img: 'assets/image/web.png',
      title: 'Websites and CMS Development',
      description: 'We specialize in developing websites and CMS to make it more convinentto perform thing such as edit exixting page, add on online store...',
      link: 'assets/image/2362.png'
    },
    {
      img: 'assets/image/cloud.png',
      title: 'Cloud Solutions',
      description: 'Data of your organization is surrounding all over the globe but secure and centralized data gives your organization more effective and efficient. Our dedicated team is specialized to maintain the integrity of any cloud solutions as well as your data, cloud migrations or etc.',
      link: 'assets/image/2362.png'
    },
    {
      img: 'assets/image/ui.png',
      title: 'UX/UI Designs',
      description: 'Our human centric design principle and Ux/Ui approach helps in building products which are user friendly and effecient in desgins.',
      link: 'assets/image/2362.png'
    },
    {
      img: 'assets/image/DC.png',
      title: 'Digital Consulting',
      description: 'We develop a strategy and solution which endores both you business goals and customers needs.',
      link: 'assets/image/2362.png'
    },
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,

    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1000,
    'responsive': [
      {
        'breakpoint': 807,
        'settings': {
          'slidesToShow': 1
        }
      }
    ]
  };

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {

  }

  breakpoint(e: any) {

  }

  afterChange(e: any) {

  }

  beforeChange(e: any) {

  }


  testimonals: TestimonalModel[] = [

    {
      imgs: 'assets/image/Ellipse 7.png',
      titles: 'Anna brank',
      sbtls: 'CEO & Founder',
      descriptions: 'We would like to put a “Seal of Trust” on how the team did a professional job in developing TireJect. Credit to their management for maintaining so much, yet never letting anyone feel unheard.',
    },
    {
      imgs: 'assets/image/Ellipse 7.png',
      titles: 'Anna brank',
      sbtls: 'CEO & Founder',
      descriptions: 'We would like to put a “Seal of Trust” on how the team did a professional job in developing TireJect. Credit to their management for maintaining so much, yet never letting anyone feel unheard.',
    },
    {
      imgs: 'assets/image/Ellipse 7.png',
      titles: 'Anna brank',
      sbtls: 'CEO & Founder',
      descriptions: 'We would like to put a “Seal of Trust” on how the team did a professional job in developing TireJect. Credit to their management for maintaining so much, yet never letting anyone feel unheard.',
    },
    {
      imgs: 'assets/image/Ellipse 7.png',
      titles: 'Anna brank',
      sbtls: 'CEO & Founder',
      descriptions: 'We would like to put a “Seal of Trust” on how the team did a professional job in developing TireJect. Credit to their management for maintaining so much, yet never letting anyone feel unheard.',
    },
  ];

  expendedFaq: any;
  items: FaqModel[] = [
    {
      title: 'Will my idea be kept confidential ?',
      description: ' Sameer'
    },
    {
      title: 'How can i push an app on plal store or app store ?',
      description: 'Akhter'
    },
    {
      title: 'Do I get the code along my project ?',
      description: 'Class'
    },
    {
      title: 'What are the models of engagements that you have ?',
      description: 'code'
    },
    {
      title: 'How is a coded website is better then wordpress',
      description: 'bETTER'
    },
    {
      title: 'How can I get the proposal of my design project or engagement ? ',
      description: 'engagement'
    },];
  expandedIndex = 0;

  onclickAccordionItem(item: any) {
    this.expendedFaq = item;
    return item.toggle();
  }
  getToggleIcon(item: any) {
    return this.expendedFaq?.id === item.id && item.expanded === true ? 'Group 2716.png' : 'Group 2571.png';
  }
  // FORMS            
  ContactUS = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    remark: new FormControl('', [Validators.required]),
  })

  get name() {
    return this.ContactUS.get('name');
  }
  get phone() {
    return this.ContactUS.get('phone');
  }
  get mail() {
    return this.ContactUS.get('mail');
  }
  get remark() {
    return this.ContactUS.get('remark');
  }

  exit() {
    window.scrollTo(0, 0);
  }
}
