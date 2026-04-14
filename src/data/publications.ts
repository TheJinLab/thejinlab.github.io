export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  link?: string;
  tags?: string[];
}

export const publications: Publication[] = [
  {
    title: 'Three-Dimensional Floral Phenomics: Integrating Photogrammetry and Deep Learning for Botanical Morphology',
    authors: 'Jin J., et al.',
    journal: 'Plant Cell & Environment',
    year: 2024,
    doi: '10.1111/pce.00000',
    tags: ['3D reconstruction', 'phenomics'],
  },
  {
    title: 'Gaussian Splatting for High-Fidelity Floral Organ Reconstruction',
    authors: 'Jin J., Smith A., Doe B.',
    journal: 'bioRxiv (preprint)',
    year: 2024,
    tags: ['Gaussian splatting', '3D reconstruction'],
  },
  {
    title: 'NeRF-Based Volumetric Reconstruction of Floral Structures from Multi-View Images',
    authors: 'Jin J., et al.',
    journal: 'Frontiers in Plant Science',
    year: 2023,
    doi: '10.3389/fpls.2023.00000',
    tags: ['NeRF', 'imaging'],
  },
];
