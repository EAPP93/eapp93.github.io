
import { Language } from '../../components/pure/types/lang.interface'
// **************************** sections ********************************

const home = {
  id: 'home',
  textId: 'Inicio',
  data: {
    textSection: ['Yo soy', 'Edwing Picado', 'Desarrollador Frontend'],
    textBtn: {
      downloadCV: 'Curriculum',
      hireMe: 'Contrátame'
    }
  }
}

// ----------------------------------------------------------------

const about = {
  id: 'about',
  textId: 'Acerca de mi',
  data: {
    text: [
      {
        title: 'Desarrollador Frontend ReactJS Junior',
        paragraph: [
          'Soy un autodidacta apasionado por el mundo de la informática y la electrónica. Actualmente soy un desarrollador frontend junior, pero me sigo formando para llegar a ser un desarrollador T-shaped. He realizado algunos estudios tanto en centros oficiales(universitario no finalizado) como en bootcamps y otras webs que proporcionan certificaciones.La mayor parte de mi conocimiento lo he adquirido en múltiples webs(especialmente YouTube y Stack Overflow).',
          'Mi lenguaje favorito es javascript aunque actualmente estoy utilizando typescript, también he usado c/c++ para arduino y he tocado lenguajes como java y c#. Entre mis pasatiempos está el buscar algunos proyectos que representen un reto, juegos o incluso cacharrear con Raspberry Pi y Arduino, también tengo conocimientos en hardware y de ves en cuando ayudo a alguien en sus builds.'
        ]
      }
    ],
    textBtn: {
      hireMe: 'Contrátame'
    },
    textImg: {
      face: ' Es una imagen caricaturizada del rostro Edwing Picado'
    }
  }
}

// ----------------------------------------------------------------

const education = {
  id: 'education',
  textId: 'Educación',
  data: {
    textSection: ['Tipo de centro y nombre de centro'],
    study: [
      {
        type: 'Bootcamp',
        name: 'Open BootCamp',
        certificate: 'Desarrollador Frontend ReactJS',
        courses: [
          {
            id: 'introduccion-Programacion',
            name: 'Introducción a la programación',
            date: new Date(2022, 9),
            altImg: 'Imagen de una certificación - curso de Introducción a la programación'
          },
          {
            id: 'html-css',
            name: 'HTML y CSS Basico',
            date: new Date(2022, 9),
            altImg: 'Imagen de una certificación - curso de HTML y CSS basico'
          },
          {
            id: 'git',
            name: 'Git',
            date: new Date(2022, 9),
            altImg: 'Imagen de una certificación - curso de Git'
          },
          {
            id: 'java-basico',
            name: 'Java Basico',
            date: new Date(2022, 9),
            altImg: 'Imagen de una certificación - curso de Java basico'
          },
          {
            id: 'javascript-basico',
            name: 'Javascript Basico',
            date: new Date(2022, 9),
            altImg: 'Imagen de una certificación - curso de Javascript basico'
          },
          {
            id: 'typescript-basico',
            name: 'Typescript Basico',
            date: new Date(2022, 9),
            altImg: 'Imagen de una certificación - curso de Typescript basico'
          },
          {
            id: 'react-basico',
            name: 'React Basico',
            date: new Date(2022, 9),
            altImg: 'Imagen de una certificación - curso de React basico'
          },
          {
            id: 'react-intermedio',
            name: 'React Intermedio',
            date: new Date(2022, 9),
            altImg: 'Imagen de una certificación - curso de React intermedio'
          }
        ]
      }
    ]
  }
}

// ----------------------------------------------------------------

const portfolio = {
  id: 'portfolio',
  textId: 'Portafolio',
  data: {
    project: [
      {
        img: 'portfolio.png',
        repoURL: 'https://github.com/',
        repoURLImg: 'repoURLImg.png',
        appURL: 'https://github.com/',
        appURLImg: 'appURLImg.png',
        name: 'TODO App',
        altImg: 'Esa una imagen de interfaz de una aplicacion de lista de tareas',
        about: 'Esta es una app tipica de lista de tareas para demostrar conocimientos crud'
      },
      {
        img: 'todoapp.png',
        repoURL: 'https://github.com/',
        repoURLImg: 'repoURLImg.png',
        appURL: 'https://github.com/',
        appURLImg: 'appURLImg.png',
        name: 'otra App',
        altImg: 'Esa una imagen de interfaz de una aplicacion de lista de tareas',
        about: 'Esta es una app tipica de lista de tareas para demostrar conocimientos crud'
      }

    ]
  }
}

// ----------------------------------------------------------------

const contact = {
  id: 'contact',
  textId: 'Contacto',
  data: {
    textSection: [
      'Te interesaria contratarme?',
      'Rellena el formulario y ponte en contacto',
      'No te gustan los formularios?, pues envia un ',
      'correo electrónico',
      'empireeapp@gmail.com'
    ]
  }
}

// ******************* spanish ****************************

export const es: Language = {
  navbarText: 'eapp.dev',
  section: [
    home,
    about,
    education,
    portfolio,
    contact
  ]
  /*
  soy un apasionado por el mundo de la informatica.
  Actualmente soy un junior frontend pero sigo estudiando para ser un desarrollador
  T-shaped'
 */
}

// ******************* english ****************************

export const en: Language = {
  navbarText: 'EAPP',
  section: [
    {
      id: 'home',
      textId: 'inicio',
      data: {

      }
    },
    {
      id: 'about',
      textId: 'Acerca de mi',
      data: {

      }
    },
    {
      id: 'education',
      textId: 'Educación',
      data: {

      }
    },
    {
      id: 'portfolio',
      textId: 'Portafolio',
      data: {

      }
    },
    {
      id: 'contact',
      textId: 'Contacto',
      data: {

      }
    }
  ]
}
