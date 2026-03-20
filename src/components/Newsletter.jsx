import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Gracias por suscribirte con: ${email}`)
      setEmail('')
    }
  }

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto radiant-gradient rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10">
          <h2 className="font-headline text-4xl mb-6">Mantente Conectado</h2>
          <p className="font-body text-lg mb-10 max-w-xl mx-auto opacity-90">
            Únete a nuestra comunidad digital y recibe inspiraciones semanales, alertas de oración y novedades de la comunidad.
          </p>
          <form
            className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              className="flex-1 bg-white/10 border-b border-white/20 focus:border-secondary-fixed-dim outline-none px-6 py-4 rounded-lg placeholder:text-white/50 text-white transition-all"
              placeholder="Ingresa tu correo electrónico"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold hover:bg-secondary-fixed transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
