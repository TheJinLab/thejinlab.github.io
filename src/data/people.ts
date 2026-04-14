export interface Person {
  name: string;
  role: string;
  affiliation?: string;
  bio?: string;
  email?: string;
  website?: string;
  photo?: string;
  pronouns?: string;
}

export const pi: Person = {
  name: 'Jian Jin',
  role: 'Principal Investigator',
  affiliation: 'New York Botanical Garden (NYBG)',
  bio: 'Dr. Jian Jin leads the Computational Floral Phenomics Lab at NYBG, developing cutting-edge 3D imaging and machine-learning pipelines to study floral morphology and plant evolution at scale.',
  email: 'jjin@nybg.org',
  website: 'https://www.nybg.org',
  photo: '',
  pronouns: 'he/him',
};

export const currentTeam: Person[] = [
  {
    name: 'Placeholder Postdoc',
    role: 'Postdoctoral Researcher',
    bio: 'Research interests in 3D reconstruction and deep learning applied to botanical morphology.',
    email: '',
  },
  {
    name: 'Placeholder PhD Student',
    role: 'PhD Student',
    bio: 'Working on neural radiance fields for floral structure analysis.',
    email: '',
  },
];

export const interns: Person[] = [
  {
    name: 'Placeholder Intern',
    role: 'Research Intern',
    bio: 'Undergraduate researcher assisting with dataset curation and annotation.',
    email: '',
  },
];

export const pastMembers: Person[] = [
  {
    name: 'Former Lab Member',
    role: 'Former Postdoc → Current Position',
    affiliation: '',
  },
];
