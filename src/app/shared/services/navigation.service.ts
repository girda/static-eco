import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class NavigationService {
  menu = [
    {title: 'Головна', route: 'main', children: false},
    {
      title: 'ЕКОЛОГІЧНИЙ Голосарій', route: 'glossary', children: [
        {title: 'Викиди небезпечних речовин в атмосферне повітря', route: 'glossary-vnrap', children: false},
        {title: 'Утворення відходів та поводження з ними', route: 'glossary-uvpn', children: false},
        {title: 'Витрати на охорону навколишнього природного середовища', route: 'glossary-vonps', children: false},
        {title: 'Охорона та використання водних ресурсів', route: '', children: false},
        {title: 'Природно-заповідний фонд', route: '', children: false},
        {title: 'Внесення добрив та застосування пестицидів', route: '', children: false},
        {title: 'Внесення добрив та застосування пестицидів', route: '', children: false},
        {title: 'Охорона та використання земельних ресурсів', route: '', children: false},
        {title: 'Мисливське господарство', route: 'glossary-mg', children: false}
      ]
    },
    // {title: 'Профіль', route: '', children: false},
    // {
    //   title: 'Cтатистична база данних', route: '', children: [
    //     {
    //       title: 'Національна база даних', route: '', children: [
    //         {
    //           title: 'Первинна база даних', route: '', children: [
    //             {title: 'Викиди', route: 'national-emissions', children: false},
    //             {title: 'Відходи', route: 'national-waste', children: false},
    //             {title: 'Витрати', route: 'national-costs', children: false}
    //           ]
    //         },
    //         {
    //           title: 'Регіони', route: '', children: [
    //             {title: 'Викиди', route: '', children: false},
    //             {title: 'Відходи', route: '', children: false},
    //             {title: 'Витрати', route: '', children: false}
    //           ]
    //         }
    //       ]
    //     },
    //     {title: 'Міжнародна база даних', route: '', children: false}
    //   ]
    // },
    {
      title: 'База даних', route: 'data-base', component: 'data-base', children: [
        // {
        //   title: 'Рубрикатор бази знань', route: '', children: [
        //     {title: 'Природно-заповідний фонд', route: '', children: false},
        //     {title: 'Атмосферне повітря', route: '', children: false},
        //     {title: 'Охорона та використання водних ресурсів', route: '', children: false},
        //     {title: 'Внесення добрив і застосування пестицидів', route: '', children: false},
        //     {title: 'Утворення відходів та поводження з ними', route: '', children: false},
        //     {title: 'Охорона та використання лісових ресурсів', route: '', children: false},
        //     {title: 'Мисливське господарство', route: '', children: false},
        //     {title: 'Витрати на охорону навколишнього природного середовища', route: '', children: false},
        //     {title: 'Основні екологічні показники України', route: '', children: false},
        //     {title: 'Показники зеленого росту для України', route: '', children: false}
        //   ]
        // },
        // {
        //   title: 'Національне законодавство', route: '', children: [
        //     {title: 'Викиди небезпечних речовин в атмосферне повітря', route: '', children: false},
        //     {title: 'Утворення відходів та поводження з ними', route: '', children: false},
        //     {title: 'Витрати на охорону навколишнього природного середовища', route: '', children: false},
        //     {title: 'Охорона та використання водних ресурсів', route: '', children: false},
        //     {title: 'Природно-заповідний фонд', route: '', children: false},
        //     {title: 'Внесення добрив та застосування пестицидів', route: '', children: false},
        //     {title: 'Охорона та використання лісових ресурсів', route: '', children: false},
        //     {title: 'Охорона та використання земельних ресурсів', route: '', children: false},
        //     {title: 'Мисливське господарство', route: '', children: false}
        //   ]
        // },
        // {
        //   title: 'Міжнародне законодавство', route: '', children: [
        //     {title: 'Викиди небезпечних речовин в атмосферне повітря', route: '', children: false},
        //     {title: 'Утворення відходів та поводження з ними', route: '', children: false},
        //     {title: 'Витрати на охорону навколишнього природного середовища', route: '', children: false},
        //     {title: 'Охорона та використання водних ресурсів', route: '', children: false},
        //     {title: 'Природно-заповідний фонд', route: '', children: false},
        //     {title: 'Внесення добрив та застосування пестицидів', route: '', children: false},
        //     {title: 'Охорона та використання лісових ресурсів', route: '', children: false},
        //     {title: 'Охорона та використання земельних ресурсів', route: '', children: false},
        //     {title: 'Мисливське господарство', route: '', children: false}
        //   ]
        // },
        // {
        //   title: 'Міжнародні конвенції', route: '', children: [
        //     {title: 'Викиди', route: '', children: false},
        //     {title: 'Відходи', route: '', children: false}
        //   ]
        // }
      ]
    },
    {
      title: 'АНАЛІТИКА ТА ДОСЛІДЖЕННЯ В ЕКОЛОГІЇ', route: 'scientific-research', children: [
        {title: 'Моніторинг та оцінка довкілля', route: '', children: false},
        {title: 'Зелена економіка', route: '', children: false},
        {title: 'Екологічна оцінка', route: '', children: false},
        {title: 'Безпечна промисловість', route: '', children: false},
      ]
    },
    {title: 'Сервіси', route: 'services', children: false},
    {
      title: 'Ринок супутньої продукції', route: '', children: [
        // {
        //   title: 'Виробництво екологічних товарів', route: '', children: [
        //     {title: 'Промисловість', route: '', children: false},
        //     {title: 'Будівництво', route: '', children: false}
        //   ]
        // },
        // {
        //   title: 'Виробництво "зеленої" енергії', route: '', children: [
        //     {title: 'Виробництво сонячної енергії', route: '', children: false},
        //     {title: 'Виробництво сонячної енергії', route: '', children: false}
        //   ]
        // },
        // {
        //   title: 'Виробництво органічної продукції', route: '', children: [
        //     {title: 'Виробництво продукції рослинного походження', route: '', children: false},
        //     {title: 'Виробництво продукції тваринного походження', route: '', children: false}
        //   ]
        // },
      ]
    },
  ];

  createMenu() {
    const createHtml = (data) => `
      <ul >${data.map((item, i) => `
        <li>
          <a routerLink="/${item.route}">${item.title}</a>
          ${item.children ? createHtml(item.children) : ''}
        </li>`).join('')}
      </ul>`;

    return createHtml(this.menu);
  }
}
