import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import type { AlbumTrack } from '../../models/album-data';

@Component({
  selector: 'app-vinyl-record',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vinyl-record.component.html',
  styleUrls: ['./vinyl-record.component.css'],
})
export class VinylRecordComponent {
  @Input() albumTitle = '';
  @Input() imagePath?: string;
  @Input() tracks: AlbumTrack[] = [];

  @ViewChild('audioPlayer') audioPlayer?: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  selectedTrackIndex = 0;
  playbackError = '';

  get selectedTrack(): AlbumTrack | undefined {
    return this.tracks[this.selectedTrackIndex];
  }

  selectTrack(index: number): void {
    const track = this.tracks[index];
    const audio = this.audioPlayer?.nativeElement;

    if (!track || !audio) {
      return;
    }

    this.selectedTrackIndex = index;
    this.playbackError = '';
    audio.src = track.audioPath;
    audio.load();
    void audio.play().catch((error: unknown) => this.reportPlaybackError(error));
  }

  private reportPlaybackError(error: unknown): void {
    this.isPlaying = false;

    if (error instanceof DOMException && error.name === 'NotAllowedError') {
      this.playbackError = 'Use o controle de áudio para iniciar a reprodução.';
      return;
    }

    this.playbackError = 'Não foi possível reproduzir esta faixa.';
    console.error('Falha ao reproduzir faixa do álbum.', error);
  }
}
