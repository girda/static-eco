import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class NavigationService {
  menu = [
    {title: 'Головна', route: 'main', children: false},
    {
      title: 'Голосарій', route: 'glossary', children: [
        {title: 'Викиди небезпечних речовин в атмосферне повітря', route: '', children: false},
        {title: 'Утворення відходів та поводження з ними', route: '', children: false},
        {title: 'Витрати на охорону навколишнього природного середовища', route: '', children: false},
        {title: 'Охорона та використання водних ресурсів', route: '', children: false},
        {title: 'Природно-заповідний фонд', route: '', children: false},
        {title: 'Внесення добрив та застосування пестицидів', route: '', children: false},
        {title: 'Внесення добрив та застосування пестицидів', route: '', children: false},
        {title: 'Охорона та використання земельних ресурсів', route: '', children: false},
        {title: 'Мисливське господарство', route: '', children: false}
      ]
    },
    {title: 'Профіль', route: '', children: false},
    {title: 'Cтатистична база данних', route: '', children: false},
    {
      title: 'База знань з екології', route: '', children: [
        {
          title: 'Рубрикатор бази знань', route: '', children: [
            {title: 'Природно-заповідний фонд', route: '', children: false},
            {title: 'Атмосферне повітря', route: '', children: false},
            {title: 'Охорона та використання водних ресурсів', route: '', children: false},
            {title: 'Внесення добрив і застосування пестицидів', route: '', children: false},
            {title: 'Утворення відходів та поводження з ними', route: '', children: false},
            {title: 'Охорона та використання лісових ресурсів', route: '', children: false},
            {title: 'Мисливське господарство', route: '', children: false},
            {title: 'Витрати на охорону навколишнього природного середовища', route: '', children: false},
            {title: 'Основні екологічні показники України', route: '', children: false},
            {title: 'Показники зеленого росту для України', route: '', children: false}
          ]
        },
        {
          title: 'Національне законодавство', route: '', children: [
            {title: 'Викиди небезпечних речовин в атмосферне повітря', route: '', children: false},
            {title: 'Утворення відходів та поводження з ними', route: '', children: false},
            {title: 'Витрати на охорону навколишнього природного середовища', route: '', children: false},
            {title: 'Охорона та використання водних ресурсів', route: '', children: false},
            {title: 'Природно-заповідний фонд', route: '', children: false},
            {title: 'Внесення добрив та застосування пестицидів', route: '', children: false},
            {title: 'Охорона та використання лісових ресурсів', route: '', children: false},
            {title: 'Охорона та використання земельних ресурсів', route: '', children: false},
            {title: 'Мисливське господарство', route: '', children: false}
          ]
        },
        {
          title: 'Міжнародне законодавство', route: '', children: [
            {title: 'Викиди небезпечних речовин в атмосферне повітря', route: '', children: false},
            {title: 'Утворення відходів та поводження з ними', route: '', children: false},
            {title: 'Витрати на охорону навколишнього природного середовища', route: '', children: false},
            {title: 'Охорона та використання водних ресурсів', route: '', children: false},
            {title: 'Природно-заповідний фонд', route: '', children: false},
            {title: 'Внесення добрив та застосування пестицидів', route: '', children: false},
            {title: 'Охорона та використання лісових ресурсів', route: '', children: false},
            {title: 'Охорона та використання земельних ресурсів', route: '', children: false},
            {title: 'Мисливське господарство', route: '', children: false}
          ]
        },
        {
          title: 'Міжнародні конвенції', route: '', children: [
            {title: 'Викиди', route: '', children: false},
            {title: 'Відходи', route: '', children: false}
          ]
        }
      ]
    },
    {
      title: 'Наукові дослідження', route: '', children: [
        {title: 'Книги, наукові праці', route: '', children: false},
        {title: 'Конференції', route: '', children: false},
        {title: 'Вибіркові статистичні спостереження', route: '', children: false},
        {title: 'Аналітика', route: '', children: false},
      ]
    },
    {title: 'Сервіси', route: '', children: false},
    {
      title: 'Ринок супутньої продукції', route: '', children: [
        {
          title: 'Виробництво екологічних товарів', route: '', children: [
            {title: 'Промисловість', route: '', children: false},
            {title: 'Будівництво', route: '', children: false}
          ]
        },
        {
          title: 'Виробництво "зеленої" енергії', route: '', children: [
            {title: 'Виробництво сонячної енергії', route: '', children: false},
            {title: 'Виробництво сонячної енергії', route: '', children: false}
          ]
        },
        {
          title: 'Виробництво органічної продукції', route: '', children: [
            {title: 'Виробництво продукції рослинного походження', route: '', children: false},
            {title: 'Виробництво продукції тваринного походження', route: '', children: false}
          ]
        },
      ]
    },
  ];
}
