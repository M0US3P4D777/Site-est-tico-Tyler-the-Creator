import { Component } from '@angular/core';

import { AlbumSectionComponent } from './components/album-section/album-section.component';
import { BeeComponent } from './components/bee/bee.component';
import type { AlbumData } from './models/album-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlbumSectionComponent, BeeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly flowerBoyAlbum: AlbumData = {
    title: 'Flower Boy',
    backgroundImage: '/img_flowerboy/fundo.jpg',
    vinylImage: '/img_flowerboy/disco_flowerboy-removebg-preview.png',
    artistImage: '/img_flowerboy/Tyler__The_Creator-removebg-preview.png',
    theme: 'flower-boy',
    heroCaption: 'Um jardim em plena floração',
    detailsEyebrow: 'Uma nova estação',
    detailsContext: 'Introspecção · identidade · amadurecimento',
    detailsTitle: 'Flower Boy — A beleza de florescer',
    youtubeUrl: 'https://youtu.be/MvEtKc8-n3s?si=jjSBw-fLuTFny_Cb',
    description: [
      [
        { text: 'Lançado em 2017, ' },
        { text: 'Flower Boy', italic: true },
        {
          text: ' representa uma transformação artística e pessoal na trajetória de Tyler, The Creator. Com melodias suaves, instrumentais detalhados e uma estética ensolarada, o álbum combina beleza visual com sentimentos profundos, revelando um lado mais íntimo e vulnerável do artista.',
        },
      ],
      [
        {
          text: 'Ao longo das faixas, Tyler explora a solidão, a identidade, o amadurecimento e o desejo de conexão. Por trás das cores vibrantes e dos campos floridos, existe uma reflexão sincera sobre encontrar o próprio lugar no mundo e aprender a compreender os próprios sentimentos.',
        },
      ],
      [
        {
          text: 'Musicalmente, o projeto mistura hip-hop, soul, jazz e R&B, construindo uma sonoridade envolvente, delicada e marcante. Os arranjos e as harmonias criam uma atmosfera que contrasta com as questões emocionais abordadas nas letras.',
        },
      ],
      [
        { text: 'Flower Boy', italic: true },
        {
          text: ' representa o processo de crescer, mudar e aceitar as próprias vulnerabilidades. É uma obra sobre autodescoberta, solidão e liberdade para ser quem realmente somos, mostrando que florescer também significa aprender com os momentos difíceis.',
        },
      ],
    ],
    year: '2017',
    tracks: [
      {
        title: 'See You Again (feat. Kali Uchis)',
        audioPath:
          '/audio/flower-boy/Tyler, The Creator - See You Again (Audio) ft. Kali Uchis.mp3',
      },
    ],
  };

  readonly igorAlbum: AlbumData = {
    title: 'IGOR',
    backgroundImage: '/img_igor/background_igor.jpg',
    vinylImage: '/img_igor/Tyler__The_Creator_-__Igor__CD-removebg-preview.png',
    artistImage: '/img_igor/tyelercapa.png',
    theme: 'igor',
    heroCaption: 'Uma história de amor em tons de rosa',
    detailsEyebrow: 'O amor em todas as suas formas',
    detailsContext: 'Desejo · apego · insegurança · transformação',
    detailsTitle: 'IGOR — O amor em todas as suas formas',
    youtubeUrl: 'https://youtu.be/6S20mJvr4vs?si=_uddoWWy3L4CwnON',
    description: [
      [
        { text: 'Lançado em 2019, ' },
        { text: 'IGOR', italic: true },
        {
          text: ' é uma jornada musical e emocional construída em torno das contradições do amor. Com uma identidade visual marcante, o álbum explora desejo, apego, ciúme, insegurança e transformação pessoal.',
        },
      ],
      [
        {
          text: 'Suas músicas se conectam como capítulos de uma história, acompanhando a euforia de se apaixonar, a frustração de expectativas e a dificuldade de aceitar que uma relação nem sempre acontece como imaginamos.',
        },
      ],
      [
        {
          text: 'Musicalmente, Tyler mistura hip-hop, R&B, soul, funk e elementos eletrônicos. Os vocais processados, sintetizadores e graves marcantes criam uma atmosfera quase cinematográfica, tornando o álbum uma experiência que funciona tanto musical quanto emocionalmente.',
        },
      ],
      [
        {
          text: 'O contraste entre a estética rosa e a intensidade dos sentimentos reforça a personalidade única do projeto. Ao longo da história, a paixão revela inseguranças, expectativas e conflitos, até que se torna necessário encarar a realidade.',
        },
      ],
      [
        { text: 'IGOR', italic: true },
        {
          text: ' fala sobre querer alguém, enfrentar sentimentos difíceis e compreender que nem sempre podemos controlar aquilo que sentimos. É uma obra sobre amor, transformação e a possibilidade de seguir em frente, mesmo quando deixar alguém para trás é doloroso.',
        },
      ],
    ],
    year: '2019',
    tracks: [
      {
        title: 'RUNNING OUT OF TIME',
        audioPath: '/audio/igor/RUNNING OUT OF TIME.mp3',
      },
    ],
  };
}