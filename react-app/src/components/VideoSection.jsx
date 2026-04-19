import { Play } from 'lucide-react'

export default function VideoSection({ src }) {
  return (
    <section className="mt-8">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-surface/80 shadow-xl">
        <div className="relative aspect-video w-full">
          {src ? (
            <video
              className="h-full w-full object-cover"
              controls
              src={src}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1f1f1f] via-[#0d0d0d] to-[#050505]">
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-brand-muted">
                <Play className="h-4 w-4 text-brand-primary" />
                Video placeholder (add your link later)
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}