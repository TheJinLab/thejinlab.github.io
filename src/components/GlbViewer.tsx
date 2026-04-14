/* GlbViewer — wraps the <model-viewer> web component */
import './GlbViewer.css'

// Tell TypeScript about the model-viewer custom element
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
          'auto-rotate'?: boolean | ''
          'camera-controls'?: boolean | ''
          'shadow-intensity'?: string
          ar?: boolean | ''
          style?: React.CSSProperties
        },
        HTMLElement
      >
    }
  }
}

interface GlbViewerProps {
  src: string
  alt?: string
  height?: string
}

export default function GlbViewer({ src, alt = '3D model', height = '420px' }: GlbViewerProps) {
  if (!src) {
    return (
      <div className="glb-placeholder">
        <div className="glb-placeholder-icon">🌸</div>
        <p className="glb-placeholder-text">Interactive 3D model coming soon</p>
        <span className="glb-placeholder-note">
          Place a <code>.glb</code> file in <code>public/models/</code> and set{' '}
          <code>modelSrc</code> in <code>src/data/research.ts</code>
        </span>
      </div>
    )
  }

  return (
    <div className="glb-viewer-wrapper" style={{ height }}>
      <model-viewer
        src={src}
        alt={alt}
        auto-rotate=""
        camera-controls=""
        shadow-intensity="1"
        style={{ width: '100%', height: '100%', background: 'var(--color-bg-alt)' }}
      />
    </div>
  )
}
