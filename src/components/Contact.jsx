const MAP_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8fZakc3AihZ3PI0-m9bB4tZMUefC9oxVs_KfEgCSPn_orw8DeinOYdKV49rENSp7NBJxPmWAPX5WMf8c9VencyVffVvRVDcmNPR1MWQsSSMAl8ilB003KpJNQJ9veSAJ4o8Z-DHubMqC1CoKOzDQoqKc1BmtnByECrZv36er78SslJ3gDG3xs3Re78uurm31KN5keUALkhUKBuAxgivBAKx5AS6T8v0DfDzahAHZt6Yt71550VkFN3Vvzxz4LqHfQ2yaUSgXJH7ZS'

const contactInfo = [
  {
    icon: 'location_on',
    title: 'Nuestra Ubicación',
    content: <>123 Sacred Way, Faith District<br />Divine City, ST 56789</>,
  },
  {
    icon: 'mail',
    title: 'Escríbenos',
    content: 'connect@ehop.church',
  },
  {
    icon: 'phone',
    title: 'Llámanos',
    content: '+1 (555) 123-4567',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-headline text-5xl text-primary mb-12">Únete Esta Semana</h2>
          <div className="space-y-10">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-6">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  {item.icon}
                </span>
                <div>
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-surface-container-highest">
            <img
              alt="Map location"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src={MAP_IMAGE}
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-on-secondary">location_on</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
