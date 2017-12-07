import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(private translate: TranslateService, public router: Router) {
        // this.router.events.subscribe((val) => {
        //     if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        //         this.toggleSidebar();
        //     }
        // });
    }

    ngOnInit() {}

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
