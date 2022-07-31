import { IProject } from './../../types/IProject';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Output() ProjectEvent = new EventEmitter<IProject>()

  project: IProject = {
    name: '',
    description: '',
    link: '',
    repository: '',
    technologies: [],
    date: ''
  }

  newTechnology: string = ''

  createProject() {
    this.ProjectEvent.emit(this.project)
  }

  addTechnology() {
    if (this.newTechnology.trim().length === 0) return

    this.project.technologies.push(this.newTechnology.trim())
    this.newTechnology = ''
  }

  removeTechnology(index: number) {
    this.project.technologies.splice(index, 1)
  }
}