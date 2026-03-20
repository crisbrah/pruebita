const PASTOR_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuArjrEGzXs1xBdYpBk67jr2j4qHjjyUe_OPnI9p4qTcx6zWgZTM9oZPIvI3m-_cRHNENykofSib0ud5qh2eJAticaAXMDFSWpJ1g7fKm05WZMpcmq9g0KEJaOFY5l7oFqz-h1bSj1p0q_Q2bnl72A2VVvO-jpBJV_n7n2hhHc-1512zUHG53Kq0gJvDYYkfW7RqvVdSitcK_Qf7LDyayWVVE2bL4ii-gmLxfN_nTRXEqTXYfHWrLMfzM9CVOJydD9OlvREiJnoEjyjA'

export default function Mission() {
  return (
    <section id="mission" className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
            <img
              alt="Pastor"
              className="w-full h-full object-cover"
              src={PASTOR_IMAGE}
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-fixed-dim/30 rounded-full blur-3xl -z-10" />
        </div>

        <div className="md:col-span-7 pl-0 md:pl-12">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
            Nuestro Fundamento
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8">
            Misión y Visión
          </h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
            Estamos dedicados a crear un entorno espiritual transformador donde cada alma pueda encontrarse con lo divino. Nuestra misión es difundir la luz del evangelio a través del amor radical, la fe inquebrantable y el servicio comunitario comprometido.
          </p>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            Visualizamos un mundo donde el poder de la oración supere toda brecha, sanando a los quebrantados de corazón y uniéndonos a todos en la búsqueda eterna de la gracia de Dios. Únete a nosotros mientras construimos un legado de fe para las generaciones venideras.
          </p>
        </div>
      </div>
    </section>
  )
}
