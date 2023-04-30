export type Profile = {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  formations: Formation[];
  experience_proffessionel: ExperienceProffessionel[];
  diplome: Diplome[];
  projets: Projet[];
  image_url?: string;
};

export interface Formation {
  nom_formation: string;
  domaine: string;
}

export interface ExperienceProffessionel {
  position: string;
  année: number;
  société: string;
}

export interface Diplome {
  nom_diplome: string;
  ecole: string;
  date_de_début: string;
  date_de_fin: string;
  période: number;
}

export interface Projet {
  nom_projet: string;
  technologies_utilisé: string[];
  periode_semaine: number;
  team: string;
}
