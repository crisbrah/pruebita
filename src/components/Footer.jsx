export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-16 py-20 mt-24 max-w-screen-2xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-xl font-headline text-primary-container mb-6">
            Casa Evangélica de Oración
          </div>
          <p className="font-body text-sm tracking-wide text-on-surface/70">
            Una vibrante comunidad de creyentes dedicada a la adoración, el estudio y el servicio en el corazón de la ciudad.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-primary-container mb-6 font-body text-sm uppercase tracking-widest">
            Conectar
          </h5>
          <ul className="space-y-4 font-body text-sm tracking-wide">
            <li>
              <a className="text-on-surface/70 hover:text-secondary transition-colors" href="#">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a className="text-on-surface/70 hover:text-secondary transition-colors" href="#">
                Términos de Servicio
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-primary-container mb-6 font-body text-sm uppercase tracking-widest">
            Participación
          </h5>
          <ul className="space-y-4 font-body text-sm tracking-wide">
            <li>
              <a className="text-on-surface/70 hover:text-secondary transition-colors" href="#">
                Portal de Voluntarios
              </a>
            </li>
            <li>
              <a className="text-on-surface/70 hover:text-secondary transition-colors" href="#">
                Peticiones de Oración
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-primary-container mb-6 font-body text-sm uppercase tracking-widest">
            Redes Sociales
          </h5>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-lg">public</span>
            </button>
            <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-lg">play_circle</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 pb-12 max-w-screen-2xl mx-auto border-t border-outline-variant/10 pt-8">
        <p className="font-body text-sm tracking-wide text-on-surface/70">
          &copy; 2024 Casa Evangélica de Oración. Diseño Sacred Sanctuary.
        </p>
      </div>
    </footer>
  )
}
