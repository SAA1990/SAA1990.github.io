function createMenu() {
 // объявляем глобальные переменные
 selection= 0;
 // Создаем объект, указывающий на выделенный пункт
 menuSelector= createRect(vec2df(50, 50), vec2df(30, 30), '#CD8181');
 // СОздаем два прямоугольника, отвечающие за выбор того или иного пункта
 menuItem1= createRect(vec2df(190, 100), vec2df(300, 50), '#AAA189');
 menuItem2= createRect(vec2df(190, 220), vec2df(300, 50), '#AAA189');
}

// Описываем игровое состояние Menu
function Menu() {
 // Обновляем позицию курсора
 input.upd();
 // Если пользователь кликнул
 if (input.lClick) {
  // Если клик по первому пункту меню
  if (input.onNode(menuItem1))
  {
   // Если он уже был выбран, сменяем игровое состояние, иначе выделяем его
   if (selection == 0)
   { setActivEngine(Game); }
   else { selection= 0; }
  }
  // Аналогично для второго пункта меню
  else if (input.onNode(menuItem2))
  {
   if (selection == 1)
   { setActivEngine(Records); }
   else { selection= 1; }   
  }
  // Отменяем ввод, чтобы срабатывало только на однократные нажатия
  input.cancel();
 }

 // Если выбран первый пункт, то двигаем выделение к нему
 if (selection == 0) 
  menuSelector.moveTo(menuItem1, vec2df(-40, 0));
 // Если второй, то ко второму
 if (selection == 1) 
  menuSelector.moveTo(menuItem2, vec2df(-40, 0));

 // Отрисовываем пункты меню
 menuItem1.draw(scene);
 menuItem2.draw(scene);
 
 // вращаем указатель 
 menuSelector.turn(5);
 // отрисовываем
 menuSelector.draw(scene);

 // теперь выводим текст 
 scene.drawTextOpt( 
                   vec2df(200, 115), // Позиция
                  'Сыграть!', // Текст
                  'bold 20px sans-serif', // Шрифт (аналогично CSS)
                  'white', // Цвет текста
                  'black', // Цвед обводки
                  2 // Толщина обводки
                  ); 

 scene.drawTextOpt( 
                   vec2df(200, 235), // Позиция
                  'Рекорды!', // Текст
                  'bold 20px sans-serif', // Шрифт (аналогично CSS)
                  'white', // Цвет текста
                  'black', // Цвед обводки
                  2 // Толщина обводки
                  ); 
                  
 scene.drawTextOpt( 
                   vec2df(150, 20), // Позиция
                  'Две шкатулки!', // Текст
                  'bold 30px sans-serif', // Шрифт (аналогично CSS)
                  '#478EA4', // Цвет текста
                  'white', // Цвед обводки
                  2 // Толщина обводки
                  ); 
                  
 // добавляем плавности при движении и вращениях
 post.motionBlur(5);
}



// Игровое состояние Records, если пользователь выберет пункт меню "Рекорды"
// Пока это меню нефункционально
function Records() {
 // Если пользователь кликнул в любое место, отправляем его
 // обратно в меню и отменяем ввод
 if (input.lClick)
 {
  setActivEngine(Menu);
  input.cancel();
 } 
 // выводим текст
 scene.drawTextOpt( 
                   vec2df(150, 20), // Позиция
                  'Рекорды', // Текст
                  'bold 30px sans-serif', // Шрифт (аналогично CSS)
                  '#478EA4', // Цвет текста
                  'white', // Цвед обводки
                  2 // Толщина обводки
                  ); 
}