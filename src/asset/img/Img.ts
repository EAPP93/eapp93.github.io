// enteros
// import introduccionProgramacion from './original/Certificado_Ope_BootCamp-Introduccion-Programacion.png'
import javaBasico from './original/Certificado_Ope_BootCamp-Java_Basico.png'
import git from './original/Certificado_Ope_BootCamp-Git.png'
import htmlcss from './original/Certificado_Ope_BootCamp-HTML-CSS-Basico.png'
import javascript from './original/Certificado_Ope_BootCamp-Javascript-Basico.png'

export const Certificados: object[] = [
  {
    name: 'Introducción a la Programación',
    url: 'Certificado_Ope_BootCam-Introduccion-Programacion.png',
    alt: 'Certificado de Curso - Introducción a la programación'
  },
  {
    name: 'Java',
    url: { javaBasico },
    alt: 'Certificado de Curso - Java'
  },
  {
    name: 'Git',
    url: { git },
    alt: 'Certificado de Curso - Git'
  },
  {
    name: 'HTML y CSS',
    url: { htmlcss },
    alt: 'Certificado de Curso - HTML y CSS'
  },
  {
    name: 'Javascript',
    url: { javascript },
    alt: 'Certificado de Curso - Javascript'
  }
]

export const pruebaCert = ['Certificado_Ope_BootCamp-Git.png']

export const projectImg : object = {
  todoapp: './../img/original/todoapp.png'
}
