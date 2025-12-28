
import { ExperienceItem, CourseItem, SkillItem } from './types';

export const PERSONAL_INFO = {
  name: "PAULO HENRIQUE GOMES DE LIMA",
  role: "Designer Gráfico & Editor de Vídeo",
  email: "phaulodesigner@gmail.com",
  phone: "(84) 98850-0403",
  address: "Rua Couto Magalhães, Nossa Senhora da Apresentação, Natal, RN",
  behance: "https://www.behance.net/phaulodesign",
  instagram: "https://instagram.com/phaulodesign",
  whatsapp: "https://wa.me/5584988500403",
  objective: "Tenho paixão pela excelência e estou pronto para assumir novos desafios em busca do crescimento pessoal e profissional. Como alguém que valoriza a inovação e a adaptabilidade, estou preparado para abraçar a transformação positiva em qualquer contexto profissional."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: "2023 - 2024",
    role: "Editor de Imagem",
    company: "SunDesign - para fotógrafos",
    description: "Tratamento de imagem especializado para o mercado fotográfico."
  },
  {
    year: "2023 - 2024",
    role: "Designer Gráfico",
    company: "Wininbox - bebidas de vinhos",
    description: "Criação de layouts e identidade visual para o setor de varejo de vinhos."
  },
  {
    year: "2022 - 2023",
    role: "Designer Gráfico",
    company: "ShowUp Marketing e Vendas",
    description: "Desenvolvimento de peças publicitárias e criativos para performance."
  },
  {
    year: "2021 - 2022",
    role: "Designer Gráfico",
    company: "Chianello Agência Digital",
    description: "Criação de layouts para campanhas digitais e social media."
  },
  {
    year: "2020 - 2021",
    role: "Editor de imagem e Diagramador",
    company: "Wellinton Barbosa Formaturas",
    description: "Edição de fotos e diagramação de álbuns de formatura."
  },
  {
    year: "2017 - 2019",
    role: "Editor de Imagem",
    company: "Imagem Studio - Aquiraz",
    description: "Processamento e edição profissional de imagens."
  },
  {
    year: "2015 - 2016",
    role: "Designer Gráfico e Editor",
    company: "Geovane Produção - Fortaleza",
    description: "Suporte em criação visual e edição de conteúdo multimídia."
  }
];

export const SKILLS: SkillItem[] = [
  { name: "Photoshop", icon: "fa-brands fa-adobe" },
  { name: "Lightroom", icon: "fa-solid fa-camera-retro" },
  { name: "Illustrator", icon: "fa-solid fa-pen-nib" },
  { name: "Figma", icon: "fa-brands fa-figma" },
  { name: "Premiere Pro", icon: "fa-solid fa-video" },
  { name: "After Effects", icon: "fa-solid fa-bolt" },
  { name: "Motion Graphics", icon: "fa-solid fa-clapperboard" },
  { name: "Fotografia", icon: "fa-solid fa-camera" }
];

export const COURSES: CourseItem[] = [
  { provider: "Adrian Sacomani", title: "Adobe Photoshop, Premiere & After Effects (Avançado)" },
  { provider: "Udemy", title: "Design Gráfico Completo - Do zero ao avançado" },
  { provider: "BEPRO - Rafael Ferreira", title: "Edição de Imagem e Fotografia Completa" },
  { provider: "WinPhoto", title: "Fotografia Básico" }
];
