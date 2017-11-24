import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'angular4-carousel';

import { HomePageComponent } from './home-page.component';
import { OverviewComponent } from './overview/overview.component';
import { ProjectIntroComponent } from './project-overview/project-intro/project-intro.component';
import { ProjectLeadersComponent } from './project-overview/project-leaders/project-leaders.component';
import { ProjectMapsComponent } from './project-overview/project-maps/project-maps.component';
import { ProjectRelatedComponent } from './project-overview/project-related/project-related.component';
import { TeamGansuComponent } from './teams/team-gansu/team-gansu.component';
import { TeamNingxiaComponent } from './teams/team-ningxia/team-ningxia.component';
import { TeamQinghaiComponent } from './teams/team-qinghai/team-qinghai.component';
import { TeamShanxiComponent } from './teams/team-shanxi/team-shanxi.component';
import { TeamXinjiangComponent } from './teams/team-xinjiang/team-xinjiang.component';
import { StudyPurposeComponent } from './schema/study-purpose/study-purpose.component';
import { StudyDistributeComponent } from './schema/study-distribute/study-distribute.component';
import { StudyHandbookComponent } from './schema/study-handbook/study-handbook.component';
import { StudySurveyComponent } from './schema/study-survey/study-survey.component';
import { BaseEquipmentComponent } from './introduction/base-equipment/base-equipment.component';
import { BaseMemberComponent } from './introduction/base-member/base-member.component';
import { BaseQualityComponent } from './introduction/base-quality/base-quality.component';
import { BaseSampleComponent } from './introduction/base-sample/base-sample.component';
import { BaseSurveyComponent } from './introduction/base-survey/base-survey.component';
import { BaseTrackComponent } from './introduction/base-track/base-track.component';
import { AchievementDataComponent } from './achievement/achievement-data/achievement-data.component';
import { AchievementPatentComponent } from './achievement/achievement-patent/achievement-patent.component';
import { AchievementProjectComponent } from './achievement/achievement-project/achievement-project.component';
import { AchievementResearchComponent } from './achievement/achievement-research/achievement-research.component';
import { ContactComponent } from './contact-us/contact/contact.component';
import { QaComponent } from './contact-us/qa/qa.component';

import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
    { path: '',
        component: HomePageComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: OverviewComponent },
            { path: 'project-intro', component: ProjectIntroComponent },
            { path: 'project-leaders', component: ProjectLeadersComponent },
            { path: 'project-maps', component: ProjectMapsComponent },
            { path: 'project-related', component: ProjectRelatedComponent },
            { path: 'team-gansu', component: TeamGansuComponent },
            { path: 'team-ningxia', component: TeamNingxiaComponent },
            { path: 'team-qinghai', component: TeamQinghaiComponent },
            { path: 'team-shanxi', component: TeamShanxiComponent },
            { path: 'team-xinjiang', component: TeamXinjiangComponent },
            { path: 'study-purpose', component: StudyPurposeComponent },
            { path: 'study-distribute', component: StudyDistributeComponent },
            { path: 'study-handbook', component: StudyHandbookComponent },
            { path: 'study-survey', component: StudySurveyComponent },
            { path: 'base-equipment', component: BaseEquipmentComponent },
            { path: 'base-member', component: BaseMemberComponent },
            { path: 'base-quality', component: BaseQualityComponent },
            { path: 'base-sample', component: BaseSampleComponent },
            { path: 'base-survey', component: BaseSurveyComponent },
            { path: 'base-track', component: BaseTrackComponent },
            { path: 'achieve-data', component: AchievementDataComponent },
            { path: 'achieve-patent', component: AchievementPatentComponent },
            { path: 'achieve-project', component: AchievementProjectComponent },
            { path: 'achieve-research', component: AchievementResearchComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'qa', component: QaComponent }
        ]
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        CarouselModule,
    ],
    declarations: [
        HomePageComponent,
        OverviewComponent,
        ProjectIntroComponent,
        ProjectMapsComponent,
        ProjectLeadersComponent,
        ProjectRelatedComponent,
        StudyPurposeComponent,
        StudyDistributeComponent,
        StudyHandbookComponent,
        StudySurveyComponent,
        TeamGansuComponent,
        TeamNingxiaComponent,
        TeamQinghaiComponent,
        TeamShanxiComponent,
        TeamXinjiangComponent,
        BaseEquipmentComponent,
        BaseMemberComponent,
        BaseQualityComponent,
        BaseSampleComponent,
        BaseSurveyComponent,
        BaseTrackComponent,
        AchievementDataComponent,
        AchievementPatentComponent,
        AchievementProjectComponent,
        AchievementResearchComponent,
        ContactComponent,
        QaComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [

    ]
})
export class HomePageModule { }
