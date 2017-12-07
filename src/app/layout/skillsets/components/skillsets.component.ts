import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { SkillsetsService } from '../services/skillsets.service';
import { SkillsetsModel } from '../models/skillsets.model';

@Component({
    selector: 'app-skillsets',
    templateUrl: '../templates/skillsets.component.html',
    styleUrls: ['../styles/skillsets.component.scss'],
    animations: [routerTransition()],
    providers: [SkillsetsService]
})
export class SkillsetsComponent implements OnInit {
    public skillsets: Array<SkillsetsModel>;
    public programming_langauges: Array<any>;
    public markup_languages: Array<any>;
    public operating_system: Array<any>;
    public known_databases: Array<any>;
    public frameworks: Array<any>;
    public cms: Array<any>;
    
    constructor(private _skillsetsService: SkillsetsService) {
        this.skillsets = new Array<SkillsetsModel>();
     }

    ngOnInit() {
        this.getPersonalDetails();
     }

     getPersonalDetails(): void {
         this._skillsetsService.getSkillsets().subscribe( result => {
            if(result){
                console.log(result);
                this.skillsets = result.data;
                //save programming languages in class variable
                if(this.skillsets[0].Programming_languages){
                    this.programming_langauges = this.skillsets[0].Programming_languages.split(',');
                }
                for(var i = 0; i < this.programming_langauges.length; i++) {
                    // Trim the excess whitespace.
                    this.programming_langauges[i] = this.programming_langauges[i].replace(/^\s*/, "").replace(/\s*$/, "");
                }
                //save markup languages in class variable
                if(this.skillsets[0].Markup_languages){
                    this.markup_languages = this.skillsets[0].Markup_languages.split(',');
                }
                for(var i = 0; i < this.markup_languages.length; i++) {
                    // Trim the excess whitespace.
                    this.markup_languages[i] = this.markup_languages[i].replace(/^\s*/, "").replace(/\s*$/, "");
                }
                //save operating systems in class variable
                if(this.skillsets[0].Operating_system){
                    this.operating_system = this.skillsets[0].Operating_system.split(',');
                }
                for(var i = 0; i < this.operating_system.length; i++) {
                    // Trim the excess whitespace.
                    this.operating_system[i] = this.operating_system[i].replace(/^\s*/, "").replace(/\s*$/, "");
                }
                //save known databases in class variable
                if(this.skillsets[0].Database){
                    this.known_databases = this.skillsets[0].Database.split(',');
                }
                for(var i = 0; i < this.known_databases.length; i++) {
                    // Trim the excess whitespace.
                    this.known_databases[i] = this.known_databases[i].replace(/^\s*/, "").replace(/\s*$/, "");
                }
                //save Frameworks in class variable
                if(this.skillsets[0].Frameworks){
                    this.frameworks = this.skillsets[0].Frameworks.split(',');
                }
                for(var i = 0; i < this.frameworks.length; i++) {
                    // Trim the excess whitespace.
                    this.frameworks[i] = this.frameworks[i].replace(/^\s*/, "").replace(/\s*$/, "");
                }
                //save CMS in class variable
                if(this.skillsets[0].CMS){
                    this.cms = this.skillsets[0].CMS.split(',');
                }
                for(var i = 0; i < this.cms.length; i++) {
                    // Trim the excess whitespace.
                    this.cms[i] = this.cms[i].replace(/^\s*/, "").replace(/\s*$/, "");
                }
            }
         });
     }
}
