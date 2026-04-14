export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface Dataset {
  name: string;
  description: string;
  size?: string;
  link?: string;
}

export interface ReconstructionMethod {
  id: string;
  name: string;
  shortName: string;
  description: string;
  type: 'photogrammetry' | 'gaussian' | 'nerf';
  modelSrc?: string;   // for GLB viewer
  datasets?: Dataset[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'floral-phenomics',
    title: '3D Floral Phenomics',
    description:
      'We build high-throughput 3D imaging and reconstruction pipelines to capture floral morphology with millimeter-level precision, enabling large-scale comparative phenomics across angiosperm diversity.',
  },
  {
    id: 'computational-morphology',
    title: 'Computational Morphology & Evolution',
    description:
      'Integrating 3D phenotypic data with phylogenomics to trace the evolution of floral form, pollinator adaptation, and reproductive isolation in flowering plants.',
  },
  {
    id: 'ml-plant-biology',
    title: 'Machine Learning for Plant Biology',
    description:
      'Developing deep learning models for automated segmentation, classification, and landmark detection from 3D botanical specimens.',
  },
];

export const reconstructionDatasets: Dataset[] = [
  {
    name: 'NYBG Orchid Collection',
    description: 'Multi-view image set of 120 orchid species captured under controlled lighting conditions.',
    size: '~18 GB',
  },
  {
    name: 'Wild Rose Morphotype Panel',
    description: 'Field-collected specimens from 8 Rosa species, processed with portable photogrammetry rigs.',
    size: '~9 GB',
  },
  {
    name: 'Aquilegia Diversity Set',
    description: 'Studio-photographed Aquilegia specimens representing major spur length morphotypes.',
    size: '~12 GB',
  },
];

export const reconstructionMethods: ReconstructionMethod[] = [
  {
    id: 'photogrammetry',
    name: 'Traditional Photogrammetry',
    shortName: 'Agisoft MetaShape',
    description:
      'Structure-from-Motion (SfM) photogrammetry using Agisoft MetaShape to generate dense, textured 3D meshes from multi-view image datasets. Ideal for archival-quality models suitable for morphometric analysis.',
    type: 'photogrammetry',
    modelSrc: '',  // Set to a .glb URL to enable live preview
  },
  {
    id: 'gaussian',
    name: '3D Gaussian Splatting',
    shortName: '3DGS',
    description:
      'Real-time neural rendering using 3D Gaussian primitives to achieve photo-realistic novel-view synthesis. Enables interactive web-based visualization of botanical specimens at high frame rates.',
    type: 'gaussian',
  },
  {
    id: 'nerf',
    name: 'Neural Radiance Fields',
    shortName: 'NeRF',
    description:
      'Volume-based implicit neural scene representation using NeRF variants (Instant-NGP, Zip-NeRF). Produces continuous volumetric reconstructions suited for fine structural detail.',
    type: 'nerf',
  },
];
