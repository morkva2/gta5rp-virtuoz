import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const gameProjects = [
  {
    id: 'gta5rp',
    name: 'GTA 5 RP',
    icon: 'Gamepad2',
    buyback: '400₽-1200₽ за 1КК',
    servers: [
      { name: 'Downtown', price: 1099 },
      { name: 'Strawberry', price: 1099 },
      { name: 'Vinewood', price: 1099 },
      { name: 'Blackberry', price: 1099 },
      { name: 'Insquad', price: 1099 },
      { name: 'Sunrise', price: 1099 },
      { name: 'Rainbow', price: 1099 },
      { name: 'Richman', price: 1099 },
      { name: 'Eclipse', price: 1099 },
      { name: 'Lamesa', price: 1099 },
      { name: 'Burton', price: 1099 },
      { name: 'Rockford', price: 1099 },
      { name: 'Alta', price: 1099 },
      { name: 'Del Perro', price: 1099 },
      { name: 'Davis', price: 1099 },
      { name: 'Harmony', price: 1099 },
      { name: 'Redwood', price: 1099 },
      { name: 'Hawick', price: 1099 },
      { name: 'Grapeseed', price: 1099 },
      { name: 'Murrieta', price: 1099 },
      { name: 'Vespucci', price: 1099 },
      { name: 'Milton', price: 1099 },
      { name: 'LAPUERTA', price: 1700 }
    ]
  },
  {
    id: 'majestic',
    name: 'MAJESTIC',
    icon: 'Crown',
    buyback: '200₽-550₽ за 1КК',
    servers: [
      { name: 'New York', price: 550 },
      { name: 'Detroit', price: 550 },
      { name: 'Chicago', price: 550 },
      { name: 'San Francisco', price: 550 },
      { name: 'Atlanta', price: 550 },
      { name: 'San Diego', price: 550 },
      { name: 'Los Angeles', price: 550 },
      { name: 'Miami', price: 550 },
      { name: 'Las Vegas', price: 580 },
      { name: 'Washington', price: 580 },
      { name: 'Dallas', price: 580 },
      { name: 'Boston', price: 580 },
      { name: 'Houston', price: 600 },
      { name: 'Seattle', price: 600 },
      { name: 'Phoenix', price: 550 },
      { name: 'Denver', price: 650 },
      { name: 'Portland', price: 900 }
    ]
  },
  {
    id: 'radmir',
    name: 'RADMIR',
    icon: 'Radio',
    buyback: '70₽-100₽ за 1КК',
    servers: [
      { name: 'Сервер 1', price: 150 },
      { name: 'Сервер 2', price: 150 },
      { name: 'Сервер 3', price: 150 }
    ]
  },
  {
    id: 'blackrussia',
    name: 'BLACK RUSSIA',
    icon: 'Shield',
    buyback: '25₽-50₽ за 1КК',
    description: 'Продажа по 50₽-75₽ (уточняйте в лс)',
    servers: []
  },
  {
    id: 'rmrp',
    name: 'RMRP',
    icon: 'Building2',
    buyback: '70₽-120₽ за 1КК',
    servers: [
      { name: 'Рублевка', price: 165 },
      { name: 'Арбат', price: 135 },
      { name: 'Патрики', price: 150 },
      { name: 'Тверской', price: 180 }
    ]
  }
];

const rules = [
  { title: 'Безопасная оплата', description: 'Работаем напрямую через Telegram' },
  { title: 'Моментальная доставка', description: 'Виртуальная валюта зачисляется быстро' },
  { title: 'Скупка валюты', description: 'Выкупаем игровую валюту по выгодным ценам' },
  { title: 'Поддержка 24/7', description: 'Всегда на связи в Telegram' }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('catalog');
  const [selectedProject, setSelectedProject] = useState(gameProjects[0]);
  const [news, setNews] = useState<any[]>([]);
  const [loadingNews, setLoadingNews] = useState(false);

  return (
    <div className="min-h-screen bg-background animated-bg grid-pattern relative overflow-hidden">
      <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Gamepad2" className="text-white" size={26} />
              </div>
              <h1 className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FERUCHIO SHOP
              </h1>
            </div>
            <nav className="flex gap-8">
              {['catalog', 'servers', 'news', 'rules', 'contacts'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-semibold transition-all text-base ${
                    activeTab === tab 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab === 'catalog' && 'Каталог'}
                  {tab === 'servers' && 'Серверы'}
                  {tab === 'news' && 'Новости'}
                  {tab === 'rules' && 'Правила'}
                  {tab === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'catalog' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Виртуальная валюта для RP серверов
              </h2>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                Выберите игровой проект и сервер для покупки
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {gameProjects.map((project) => (
                <Button
                  key={project.id}
                  size="lg"
                  variant={selectedProject.id === project.id ? 'default' : 'outline'}
                  onClick={() => setSelectedProject(project)}
                  className={selectedProject.id === project.id ? 'gradient-primary text-white shadow-lg' : 'border-2'}
                >
                  <Icon name={project.icon as any} size={20} />
                  <span className="ml-2">{project.name}</span>
                </Button>
              ))}
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <Card className="border-2 border-primary/30 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={selectedProject.icon as any} size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-2">{selectedProject.name}</h3>
                      {selectedProject.description && (
                        <p className="text-muted-foreground mb-3">{selectedProject.description}</p>
                      )}
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant="outline" className="border-green-500 text-green-500">
                          <Icon name="TrendingUp" size={14} />
                          <span className="ml-1">Скупка: {selectedProject.buyback}</span>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {selectedProject.servers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedProject.servers.map((server, index) => (
                  <Card 
                    key={server.name} 
                    className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 border-border bg-card"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-center font-heading text-xl">
                        {server.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {server.price} ₽
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">за 1КК</div>
                      </div>
                      
                      <Button 
                        onClick={() => window.open('https://t.me/Ferh_777', '_blank')}
                        className="w-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                      >
                        <Icon name="ShoppingBag" size={18} />
                        <span className="ml-2">Купить</span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Card className="border-2 border-border bg-card/50 max-w-2xl mx-auto">
                  <CardContent className="pt-8 pb-8">
                    <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold mb-2">Уточняйте цены в Telegram</h3>
                    <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                    <Button 
                      onClick={() => window.open('https://t.me/Ferh_777', '_blank')}
                      size="lg"
                      className="gradient-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                      <Icon name="Send" size={20} />
                      <span className="ml-2">Связаться в Telegram</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}

        {activeTab === 'servers' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Игровые проекты
              </h2>
              <p className="text-muted-foreground text-xl">
                Все поддерживаемые RP проекты
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {gameProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="hover:shadow-2xl hover:shadow-primary/20 transition-all border-2 border-border bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                        <Icon name={project.icon as any} size={28} className="text-white" />
                      </div>
                      <CardTitle className="font-heading text-xl">{project.name}</CardTitle>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Server" size={16} />
                        <span>{project.servers.length > 0 ? `${project.servers.length} серверов` : 'Уточняйте в Telegram'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-500">
                        <Icon name="TrendingUp" size={16} />
                        <span>Скупка: {project.buyback}</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Новости магазина
              </h2>
              <p className="text-muted-foreground text-xl">
                Последние обновления из нашего Telegram-канала
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {loadingNews ? (
                <div className="text-center py-12">
                  <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Загрузка новостей...</p>
                </div>
              ) : news.length === 0 ? (
                <Card className="border-2 border-border bg-card/50">
                  <CardContent className="pt-8 pb-8 text-center">
                    <Icon name="Newspaper" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold mb-2">Подписывайтесь на наш канал</h3>
                    <p className="text-muted-foreground mb-6">
                      Все актуальные новости и акции публикуются в нашем Telegram-канале
                    </p>
                    <Button 
                      onClick={() => window.open('https://t.me/Feruchio_Shop', '_blank')}
                      size="lg"
                      className="gradient-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                      <Icon name="Send" size={20} />
                      <span className="ml-2">Открыть канал</span>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {news.map((post: any, index: number) => (
                    <Card 
                      key={post.message_id} 
                      className="hover:shadow-2xl hover:shadow-primary/20 transition-all border-2 border-border bg-card"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="font-heading text-xl mb-2">
                              {post.text?.split('\n')[0] || 'Новость'}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {new Date(post.date * 1000).toLocaleDateString('ru-RU', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </CardDescription>
                          </div>
                          <Icon name="MessageCircle" size={24} className="text-primary flex-shrink-0" />
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 pb-6">
                        <p className="text-foreground whitespace-pre-wrap">
                          {post.text?.split('\n').slice(1).join('\n') || post.text}
                        </p>
                        {post.photo && (
                          <img 
                            src={post.photo} 
                            alt="Post image" 
                            className="mt-4 rounded-lg w-full object-cover max-h-96"
                          />
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Правила и гарантии
              </h2>
              <p className="text-muted-foreground text-xl">
                Мы заботимся о вашей безопасности и комфорте
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {rules.map((rule, index) => (
                <Card 
                  key={rule.title} 
                  className="hover:shadow-2xl hover:shadow-primary/20 transition-all border-2 border-border bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-6">
                    <div className="flex gap-4">
                      <div className={`w-14 h-14 ${
                        index === 0 ? 'bg-primary/10' :
                        index === 1 ? 'bg-accent/10' :
                        index === 2 ? 'bg-green-100' :
                        'bg-secondary/10'
                      } rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon 
                          name={
                            index === 0 ? 'Shield' : 
                            index === 1 ? 'Zap' : 
                            index === 2 ? 'CheckCircle' : 
                            'Headphones'
                          } 
                          size={28} 
                          className={
                            index === 0 ? 'text-primary' :
                            index === 1 ? 'text-accent' :
                            index === 2 ? 'text-green-600' :
                            'text-secondary'
                          }
                        />
                      </div>
                      <div>
                        <CardTitle className="font-heading mb-3 text-xl">{rule.title}</CardTitle>
                        <CardDescription className="text-base">{rule.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Связаться с нами
              </h2>
              <p className="text-muted-foreground text-xl">
                Мы всегда на связи и готовы помочь
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-border shadow-2xl shadow-primary/10 bg-card">
                <CardContent className="pt-8 space-y-5 p-8">
                  <a 
                    href="https://t.me/Feruchio_Shop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 bg-primary/5 rounded-xl hover:bg-primary/10 transition-all hover:scale-[1.02]"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name="MessageCircle" size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">TELEGRAM</div>
                      <div className="text-muted-foreground">@Feruchio_Shop или @Ferh_777</div>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground" />
                  </a>

                  <a 
                    href="https://funpay.com/users/8184778/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-all hover:scale-[1.02]"
                  >
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Icon name="ShoppingCart" size={28} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">FUNPAY</div>
                      <div className="text-muted-foreground">funpay.com/users/8184778/</div>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground" />
                  </a>

                  <a 
                    href="https://discord.gg/FNZ4uPrT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 bg-accent/5 rounded-xl hover:bg-accent/10 transition-all hover:scale-[1.02]"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon name="Gamepad2" size={28} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">DISCORD</div>
                      <div className="text-muted-foreground">discord.gg/FNZ4uPrT</div>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground" />
                  </a>

                  <a 
                    href="https://t.me/+5jdQ8CnzlEk1MjVi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 bg-green-500/5 rounded-xl hover:bg-green-500/10 transition-all hover:scale-[1.02]"
                  >
                    <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <Icon name="Star" size={28} className="text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">ОТЗЫВЫ</div>
                      <div className="text-muted-foreground">Telegram канал с отзывами</div>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground" />
                  </a>

                  <div className="text-center pt-6 border-t border-border">
                    <p className="text-muted-foreground text-lg">Режим работы: 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-20 py-16 bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-12 opacity-30 grayscale hover:opacity-50 hover:grayscale-0 transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/eff92dda-0b08-477c-b46f-8d56412d7550/files/fa957f96-8c1a-43d1-a588-54a34f607fe2.jpg" 
                alt="GTA 5 Logo" 
                className="h-20 object-contain"
              />
              <img 
                src="https://cdn.poehali.dev/projects/eff92dda-0b08-477c-b46f-8d56412d7550/files/772e7477-e159-40b8-a489-b92a6f6339e6.jpg" 
                alt="Rockstar Games Logo" 
                className="h-16 object-contain"
              />
            </div>
            <div className="text-center text-muted-foreground">
              <p className="text-base">&copy; 2024 FERUCHIO SHOP. Все права защищены.</p>
              <p className="text-sm mt-2">Мы не связаны с Rockstar Games или Take-Two Interactive</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}