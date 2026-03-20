const gatherings = [
  {
    icon: 'church',
    title: 'Culto Dominical',
    description: 'Experimenta una alabanza poderosa y un mensaje inspirador de esperanza.',
    schedule: 'Cada domingo a las 10:00 AM',
  },
  {
    icon: 'menu_book',
    title: 'Estudio Bíblico',
    description: 'Profundiza tu comprensión de la Palabra en un entorno colaborativo.',
    schedule: 'Miércoles a las 7:00 PM',
  },
  {
    icon: 'volunteer_activism',
    title: 'Noche de Oración',
    description: 'Una hora sagrada de intercesión y conexión espiritual.',
    schedule: 'Viernes a las 6:30 PM',
  },
]

export default function Gatherings() {
  return (
    <section id="gatherings" className="py-32 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="font-headline text-4xl text-primary mb-4">Reuniones Semanales</h2>
          <div className="h-1 w-20 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {gatherings.map((item) => (
            <div
              key={item.title}
              className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline text-2xl text-primary mb-3">{item.title}</h3>
              <p className="text-on-surface-variant mb-6">{item.description}</p>
              <span className="font-bold text-secondary">{item.schedule}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
