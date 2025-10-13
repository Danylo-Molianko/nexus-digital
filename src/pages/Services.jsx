const Services = () => {
  const services = [
    {
      title: "Веб-розробка",
      description: "Створюємо сучасні веб-сайти та веб-додатки з використанням найновіших технологій",
      features: ["React & Vue.js", "Node.js & Express", "Responsive дизайн", "SEO оптимізація"],
      icon: "🌐"
    },
    {
      title: "Мобільні додатки",
      description: "Розробка нативних та крос-платформних мобільних додатків для iOS та Android",
      features: ["React Native", "Flutter", "iOS & Android", "App Store публікація"],
      icon: "📱"
    },
    {
      title: "UI/UX дизайн",
      description: "Створюємо інтуїтивні та привабливі інтерфейси, що забезпечують відмінний користувацький досвід",
      features: ["Дизайн-системи", "Прототипування", "Тестування користувачів", "Брендинг"],
      icon: "🎨"
    },
    {
      title: "E-commerce рішення",
      description: "Повний спектр послуг з розробки інтернет-магазинів та платформ електронної комерції",
      features: ["Shopify & WooCommerce", "Платіжні системи", "Інвентарізація", "Аналітика продажів"],
      icon: "🛒"
    },
    {
      title: "Консалтинг",
      description: "Стратегічне планування цифрової трансформації та технічний аудит існуючих систем",
      features: ["Технічний аудит", "Архітектура рішень", "Performance оптимізація", "Безпека"],
      icon: "💡"
    },
    {
      title: "Підтримка",
      description: "Постійна технічна підтримка та розвиток ваших цифрових продуктів",
      features: ["24/7 моніторинг", "Регулярні оновлення", "Backup & Recovery", "Технічна підтримка"],
      icon: "🔧"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Наші послуги
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Повний спектр цифрових рішень для вашого бізнесу - від ідеї до втілення та подальшої підтримки
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Як ми працюємо
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наш перевірений процес забезпечує успішну реалізацію проектів
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Дослідження",
                description: "Аналізуємо ваші потреби та цілі"
              },
              {
                step: "02", 
                title: "Планування",
                description: "Створюємо детальний план проекту"
              },
              {
                step: "03",
                title: "Розробка",
                description: "Втілюємо ідеї в функціональний продукт"
              },
              {
                step: "04",
                title: "Запуск",
                description: "Тестуємо, налаштовуємо та запускаємо"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готові обговорити ваш проект?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Зв'яжіться з нами для безкоштовної консультації та оцінки вашого проекту
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Безкоштовна консультація
            </a>
            <a
              href="tel:+380123456789"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-block"
            >
              Подзвонити зараз
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services