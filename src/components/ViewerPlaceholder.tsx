import './ViewerPlaceholder.css'

interface Props {
  type: 'gaussian' | 'nerf'
  title?: string
}

const config = {
  gaussian: {
    icon: '✦',
    label: '3D Gaussian Splatting Viewer',
    note: 'Real-time splat rendering requires a WebGL2 / WebGPU-capable browser. Export your trained model with SplatFlora and place the <code>.splat</code> file in <code>public/splats/</code> to enable live preview.',
    color: 'rgba(46, 92, 66, 0.08)',
  },
  nerf: {
    icon: '◈',
    label: 'NeRF Volume Renderer',
    note: 'Browser-based NeRF rendering (e.g., via Luma AI embed or Instant-NGP WebGL export) can be configured here. Replace this placeholder with an <code>&lt;iframe&gt;</code> or a WebGL canvas once your NeRF model is exported.',
    color: 'rgba(90, 107, 111, 0.08)',
  },
}

export default function ViewerPlaceholder({ type, title }: Props) {
  const { icon, label, note, color } = config[type]
  return (
    <div className="viewer-placeholder" style={{ background: color }}>
      <div className="viewer-placeholder-icon">{icon}</div>
      <p className="viewer-placeholder-label">{title ?? label}</p>
      <p
        className="viewer-placeholder-note"
        dangerouslySetInnerHTML={{ __html: note }}
      />
    </div>
  )
}
