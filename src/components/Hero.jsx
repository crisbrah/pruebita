const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFCkiMutRsEkVS_OiLB6puyk4YMOnKMaf_3EO6-ErQpwQWJv1JvO2M-NVlIV1OKC16DwJ_FdI7AKk-ce4FDuRbr28SfBGFwVgQLWI7jcNr9QqljTCFIA9uKJ0xA7MF3utrGlUKyOVMNTXLJarfws5Scng4RxxxZ_B9Su6zQk1UyMB5SgmjvkJU629c29kdi9EZP4zcwrEgXnf0ut9P1IctBQVT1N_dGBnG7Wj75fpLo2_5G2V-b170d6eohUW4PjkEeaos7TlHJzuV'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Modern Sanctuary"
          className="w-full h-full object-cover"
          src={HERO_IMAGE}
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75" />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-md">
          Bienvenidos a Nuestra Casa de Oración
        </h1>
        <p className="font-body text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Un santuario donde la fe se nutre y la comunidad se construye. Descubre la paz en la presencia de Dios.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="radiant-gradient text-on-primary px-10 py-4 rounded-lg text-lg font-semibold shadow-xl transition-transform hover:scale-105 active:scale-95">
            Visita Nuestros Servicios
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-white/20">
            Ver en Vivo
          </button>
        </div>
      </div>
    </section>
  )
}
