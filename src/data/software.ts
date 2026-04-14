export interface SoftwareTool {
  name: string;
  description: string;
  language?: string;
  repo?: string;
  docs?: string;
  status: 'active' | 'beta' | 'archived';
  tags?: string[];
}

export const softwareTools: SoftwareTool[] = [
  {
    name: 'FloraRecon',
    description:
      'An end-to-end pipeline for 3D floral reconstruction from multi-view images, wrapping Agisoft MetaShape and custom post-processing routines for landmark detection and mesh cleaning.',
    language: 'Python',
    repo: 'https://github.com/TheJinLab/FloraRecon',
    status: 'active',
    tags: ['photogrammetry', '3D reconstruction', 'phenomics'],
  },
  {
    name: 'SplatFlora',
    description:
      'A Gaussian Splatting toolkit tailored for botanical specimens, providing training scripts, web export utilities, and comparison metrics against ground-truth meshes.',
    language: 'Python / CUDA',
    repo: 'https://github.com/TheJinLab/SplatFlora',
    status: 'beta',
    tags: ['Gaussian splatting', 'neural rendering'],
  },
  {
    name: 'PhenomicsDB',
    description:
      'A lightweight database schema and REST API for storing, querying, and visualizing 3D floral phenotype records across large specimen collections.',
    language: 'Python / FastAPI',
    repo: 'https://github.com/TheJinLab/PhenomicsDB',
    status: 'beta',
    tags: ['database', 'API', 'phenomics'],
  },
];
