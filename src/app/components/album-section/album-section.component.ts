import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinylRecordComponent } from '../vinyl-record/vinyl-record.component';
import type { AlbumData } from '../../models/album-data';

@Component({
  selector: 'app-album-section',
  standalone: true,
  imports: [CommonModule, VinylRecordComponent],
  templateUrl: './album-section.component.html',
  styleUrls: ['./album-section.component.css'],
})
export class AlbumSectionComponent {
  @Input() album!: AlbumData;
}
