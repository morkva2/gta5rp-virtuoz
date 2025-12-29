import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: '100K Игровых денег',
    price: 99,
    type: 'money',
    discount: null,
    popular: false,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP']
  },
  {
    id: 2,
    name: '500K Игровых денег',
    price: 449,
    type: 'money',
    discount: 10,
    popular: true,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP', 'Amazing RP']
  },
  {
    id: 3,
    name: '1M Игровых денег',
    price: 799,
    type: 'money',
    discount: 15,
    popular: false,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP', 'Amazing RP']
  },
  {
    id: 4,
    name: '50 Donate-валюты',
    price: 149,
    type: 'premium',
    discount: null,
    popular: false,
    servers: ['Arizona RP', 'Radmir RP']
  },
  {
    id: 5,
    name: '200 Donate-валюты',
    price: 549,
    type: 'premium',
    discount: 5,
    popular: true,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP']
  },
  {
    id: 6,
    name: '500 Donate-валюты',
    price: 1299,
    type: 'premium',
    discount: 20,
    popular: false,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP', 'Amazing RP']
  }
];

const servers = [
  { name: 'Arizona RP', players: '15000+', status: 'online' },
  { name: 'Radmir RP', players: '12000+', status: 'online' },
  { name: 'Advance RP', players: '8000+', status: 'online' },
  { name: 'Amazing RP', players: '6000+', status: 'online' }
];

const rules = [
  { title: 'Безопасная оплата', description: 'Все платежи защищены SSL-шифрованием' },
  { title: 'Моментальная доставка', description: 'Виртуальная валюта зачисляется в течение 5 минут' },
  { title: 'Гарантия качества', description: 'Возврат средств в случае технических проблем' },
  { title: 'Поддержка 24/7', description: 'Всегда готовы помочь с любыми вопросами' }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('catalog');
  const [selectedType, setSelectedType] = useState<'all' | 'money' | 'premium'>('all');

  const filteredProducts = selectedType === 'all' 
    ? products 
    : products.filter(p => p.type === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header className="border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-white/80">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Gamepad2" className="text-white" size={26} />
              </div>
              <h1 className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GTA5 VIRTS
              </h1>
            </div>
            <nav className="hidden md:flex gap-8">
              {['catalog', 'servers', 'rules', 'contacts'].map((tab) => (
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
                  {tab === 'rules' && 'Правила'}
                  {tab === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button className="gradient-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <Icon name="ShoppingCart" size={18} />
              <span className="ml-2">Корзина</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'catalog' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Виртуальная валюта GTA 5 RP
              </h2>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                Покупайте игровые деньги и донат-валюту для всех популярных серверов
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                variant={selectedType === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedType('all')}
                className={selectedType === 'all' ? 'gradient-primary text-white shadow-lg' : 'border-2'}
              >
                Все товары
              </Button>
              <Button
                size="lg"
                variant={selectedType === 'money' ? 'default' : 'outline'}
                onClick={() => setSelectedType('money')}
                className={selectedType === 'money' ? 'bg-primary text-white shadow-lg' : 'border-2'}
              >
                <Icon name="DollarSign" size={20} />
                <span className="ml-2">Игровые деньги</span>
              </Button>
              <Button
                size="lg"
                variant={selectedType === 'premium' ? 'default' : 'outline'}
                onClick={() => setSelectedType('premium')}
                className={selectedType === 'premium' ? 'bg-secondary text-white shadow-lg' : 'border-2'}
              >
                <Icon name="Gem" size={20} />
                <span className="ml-2">Донат-валюта</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="hover:shadow-2xl transition-all duration-300 relative overflow-hidden border-2 bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {product.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-secondary text-white shadow-lg text-sm px-3 py-1">
                        <Icon name="Star" size={14} />
                        <span className="ml-1">Хит продаж</span>
                      </Badge>
                    </div>
                  )}
                  {product.discount && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-destructive text-white shadow-lg text-sm px-3 py-1">
                        -{product.discount}%
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className={`w-20 h-20 mx-auto mb-6 ${product.type === 'money' ? 'gradient-primary' : 'gradient-accent'} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <Icon 
                        name={product.type === 'money' ? 'DollarSign' : 'Gem'} 
                        size={36} 
                        className="text-white"
                      />
                    </div>
                    <CardTitle className="text-center font-heading text-2xl mb-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-center text-base">
                      Доступно на {product.servers.length} серверах
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {product.price} ₽
                      </div>
                      {product.discount && (
                        <div className="text-sm text-muted-foreground line-through mt-1">
                          {Math.round(product.price / (1 - product.discount / 100))} ₽
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {product.servers.slice(0, 2).map((server) => (
                        <Badge key={server} variant="outline" className="text-xs border-2">
                          {server}
                        </Badge>
                      ))}
                      {product.servers.length > 2 && (
                        <Badge variant="outline" className="text-xs border-2">
                          +{product.servers.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <Button className="w-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all h-12">
                      <Icon name="ShoppingCart" size={18} />
                      <span className="ml-2">Купить</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'servers' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Поддерживаемые серверы
              </h2>
              <p className="text-muted-foreground text-xl">
                Мы работаем с самыми популярными GTA 5 RP проектами
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {servers.map((server, index) => (
                <Card 
                  key={server.name} 
                  className="hover:shadow-2xl transition-all border-2 bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon name="Server" size={28} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="font-heading text-xl">{server.name}</CardTitle>
                          <CardDescription className="text-base">{server.players} игроков</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 font-semibold">Online</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
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
                  className="hover:shadow-2xl transition-all border-2 bg-white"
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

            <div className="max-w-2xl mx-auto">
              <Card className="border-2 shadow-2xl bg-white">
                <CardContent className="pt-8 space-y-6 p-8">
                  <div className="flex items-center gap-5 p-5 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name="MessageCircle" size={28} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Telegram</div>
                      <div className="text-muted-foreground">@gta5virts_support</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-colors">
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Icon name="Mail" size={28} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Email</div>
                      <div className="text-muted-foreground">support@gta5virts.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon name="Phone" size={28} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <p className="text-muted-foreground mb-6 text-lg">Режим работы: 24/7</p>
                    <Button className="gradient-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all h-12 px-8 text-base">
                      <Icon name="Send" size={20} />
                      <span className="ml-2">Написать в поддержку</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-20 py-10 bg-white/80">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-base">&copy; 2024 GTA5 VIRTS. Все права защищены.</p>
          <p className="text-sm mt-2">Мы не связаны с Rockstar Games или Take-Two Interactive</p>
        </div>
      </footer>
    </div>
  );
}
