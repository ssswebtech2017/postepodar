import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { StudentGoalsComponent } from './student-goals/student-goals.component';
import { ChairmansDeskComponent } from './chairmans-desk/chairmans-desk.component';
import { PrincipalsDeskComponent } from './principals-desk/principals-desk.component';
import { ClassesComponent } from './classes/classes.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { AcademicSessionComponent } from './academic-session/academic-session.component';
import { AdmissionProcedureComponent } from './admission-procedure/admission-procedure.component';
import { BetweenUsPortalComponent } from './between-us-portal/between-us-portal.component';
import { TeachersComponent } from './teachers/teachers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ourMission', component: OurMissionComponent },
  { path: 'ourvision', component: OurVisionComponent },
  { path: 'studentGoals', component: StudentGoalsComponent },
  { path: 'chairmansDesk', component: ChairmansDeskComponent },
  { path: 'principalsDesk', component: PrincipalsDeskComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'whyUs', component: WhyUsComponent },
  { path: 'academicSession', component: AcademicSessionComponent },
  { path: 'academicProcedure', component: AdmissionProcedureComponent },
  { path: 'betweenUsPortal', component: BetweenUsPortalComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contactUs', component: ContactusComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    OurMissionComponent,
    OurVisionComponent,
    StudentGoalsComponent,
    ChairmansDeskComponent,
    PrincipalsDeskComponent,
    ClassesComponent,
    WhyUsComponent,
    AcademicSessionComponent,
    AdmissionProcedureComponent,
    BetweenUsPortalComponent,
    TeachersComponent,
    GalleryComponent,
    CareerComponent,
    ContactusComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
