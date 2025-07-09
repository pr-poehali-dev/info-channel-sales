import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    "Список ролей",
    "Анкета",
    "Правила",
    "Дни рождения участников",
    "Патент",
    "Администрация",
    "Буст",
    "Тик-ток",
    "Лайк",
    "Другая соцсеть",
    "Темы для ролевых",
    "Ресты",
  ];

  const categories = [
    { name: "Флуд каналы", count: "50+", color: "bg-retro-orange" },
    { name: "Ролки", count: "30+", color: "bg-retro-amber" },
    { name: "КФ каналы", count: "25+", color: "bg-retro-navy" },
  ];

  const plans = [
    {
      name: "Базовый",
      price: "1000₽",
      features: ["1-5 пунктов", "Стандартный цвет", "Базовая поддержка"],
    },
    {
      name: "Стандарт",
      price: "2500₽",
      features: ["6-10 пунктов", "Выбор цвета", "Приоритетная поддержка"],
    },
    {
      name: "Премиум",
      price: "5000₽",
      features: ["Безлимит пунктов", "Любой цвет", "VIP поддержка"],
    },
  ];

  return (
    <div className="min-h-screen bg-retro-cream">
      {/* Header */}
      <header className="bg-retro-navy text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-mono font-bold">INFO CHANNELS</h1>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="hover:text-retro-orange transition-colors"
            >
              Главная
            </a>
            <a
              href="#prices"
              className="hover:text-retro-orange transition-colors"
            >
              Цены
            </a>
            <a
              href="#services"
              className="hover:text-retro-orange transition-colors"
            >
              Услуги
            </a>
            <a
              href="#categories"
              className="hover:text-retro-orange transition-colors"
            >
              Категории
            </a>
            <a
              href="#contact"
              className="hover:text-retro-orange transition-colors"
            >
              Связь
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 text-center bg-gradient-to-b from-retro-navy to-retro-dark text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-mono font-bold mb-6 animate-slide-up">
            TELEGRAM КАНАЛЫ
          </h2>
          <p className="text-xl mb-8 text-retro-light max-w-2xl mx-auto">
            Профессиональные информационные каналы для флудов, ролок и КФ.
            Настройте под свои потребности и начните использовать уже сегодня.
          </p>
          <Button className="bg-retro-orange hover:bg-retro-amber text-white px-8 py-3 text-lg font-semibold animate-glow">
            <Icon name="Zap" className="mr-2" />
            Сделать заказ
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-mono font-bold text-center mb-12 text-retro-navy">
            КАТЕГОРИИ КАНАЛОВ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-2 border-retro-light"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${cat.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Icon
                      name="MessageSquare"
                      className="text-white"
                      size={24}
                    />
                  </div>
                  <CardTitle className="text-retro-navy font-mono">
                    {cat.name}
                  </CardTitle>
                  <CardDescription>
                    Доступно {cat.count} каналов
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-retro-cream">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-mono font-bold text-center mb-12 text-retro-navy">
            ДОСТУПНЫЕ УСЛУГИ
          </h3>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-center p-3 border-retro-navy text-retro-navy hover:bg-retro-navy hover:text-white transition-colors cursor-pointer"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="prices" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-mono font-bold text-center mb-12 text-retro-navy">
            ТАРИФЫ
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-xl transition-shadow border-2 ${index === 1 ? "border-retro-orange scale-105" : "border-retro-light"}`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-mono text-retro-navy">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-retro-orange mb-2 mx-0 bg-rose-300">
                    {plan.price}
                  </div>
                  <CardDescription>за канал</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-retro-dark"
                      >
                        <Icon
                          name="Check"
                          className="text-retro-orange mr-2"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${index === 1 ? "bg-retro-orange hover:bg-retro-amber" : "bg-retro-navy hover:bg-retro-dark"} text-white`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-retro-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-mono font-bold mb-8">СВЯЗЬ С НАМИ</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Icon
                name="MessageCircle"
                className="text-retro-orange mb-4"
                size={32}
              />
              <h4 className="font-mono text-lg mb-2">Telegram</h4>
              <p className="text-retro-light">@infochannels_bot</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" className="text-retro-orange mb-4" size={32} />
              <h4 className="font-mono text-lg mb-2">Email</h4>
              <p className="text-retro-light">order@infochannels.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Clock" className="text-retro-orange mb-4" size={32} />
              <h4 className="font-mono text-lg mb-2">Время работы</h4>
              <p className="text-retro-light">24/7</p>
            </div>
          </div>
          <div className="mt-12">
            <Button className="bg-retro-orange hover:bg-retro-amber text-white px-8 py-3 text-lg font-semibold">
              <Icon name="ShoppingCart" className="mr-2" />
              Сделать заказ сейчас
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-retro-dark text-retro-light py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="font-mono">
            &copy; 2024 INFO CHANNELS. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
