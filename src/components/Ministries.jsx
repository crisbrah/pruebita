const ministries = [
  {
    icon: 'child_care',
    title: 'Ministerio Juvenil',
    description: 'Empoderando a la próxima generación para Cristo.',
  },
  {
    icon: 'groups',
    title: 'Ministerio de Hombres',
    description: 'Formando hermanos en fe y liderazgo.',
  },
  {
    icon: 'diversity_2',
    title: 'Ministerio de Mujeres',
    description: 'Una hermandad arraigada en la gracia y la sabiduría.',
  },
  {
    icon: 'school',
    title: 'Escuela Dominical',
    description: 'Fundamentos bíblicos para jóvenes exploradores.',
  },
]

export default function Ministries() {
  return (
    <section id="ministries" className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-20">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Participa
            </span>
            <h2 className="font-headline text-5xl text-primary">Nuestros Ministerios</h2>
          </div>
          <div className="hidden md:block">
            <button className="text-primary font-bold flex items-center gap-2 group">
              Ver Todos los Departamentos
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry) => (
            <div
              key={ministry.title}
              className="group relative overflow-hidden rounded-xl bg-surface-container-high aspect-square flex flex-col items-center justify-center p-8 text-center transition-all hover:bg-primary duration-500"
            >
              <span className="material-symbols-outlined text-primary text-5xl mb-4 group-hover:text-white transition-colors">
                {ministry.icon}
              </span>
              <h4 className="font-headline text-xl text-primary group-hover:text-white transition-colors">
                {ministry.title}
              </h4>
              <p className="text-on-surface-variant text-sm mt-3 opacity-0 group-hover:opacity-100 group-hover:text-white/80 transition-all">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
