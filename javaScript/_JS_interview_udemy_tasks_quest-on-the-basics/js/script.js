/**
|--------------------------------------------------
  ======= <<<--- Topic #1 - function palmTree(n) --->>>  =======
Реализуйте функцию palmTree(n), которая будет принимать целое положительное n и возвращать строку, состоящую из символов “p”. Например, вызов palmTree(3) приведет к тому, что функция вернет “ppp”. Примечание: при нечисловом аргументе функция должна вернуть false, а при вызове без аргумента - один символ “p”.
|--------------------------------------------------
*/

const palmTree = (n = 1) => typeof n == "number" && n>0 ? "p".repeat(n) : false;
console.log(palmTree(3)); // ppp
console.log(palmTree(7)); // ppppppp
console.log(palmTree(1)); // p
console.log(palmTree(28)); // pppppppppppppppppppppppppppp
// console.log(palmTree(a32)); // ReferenceError: a32 is not defined
console.log(palmTree(0)); // false

/**
|--------------------------------------------------
  ======= <<<--- Topic #2 - function autoReplace(needles,change,haystack) --->>>  =======
  Реализуйте функцию autoReplace(needles,change,haystack), которая будет принимать целое массив строк, которые нужно поменять на строку change внутри строки haystack. Например, вызов функции

autoReplace([‘салат’, ‘помидоры’], ‘еда’, ‘свежие помидоры пошли в салат’)

должна вернуть строку “свежие еда пошли в еда”.
Примечание: если хотите, тут можно использовать регулярные выражения, но это не обязательное требование, при этом регистр не должен учитываться. При отсутствии параметров должен вернуться false.

Данная задача, может пригодиться в тех случаях, когда есть массив стоп слов, и нужно очистить один, или несколько наборов текста, так, чтобы эти слова не попадались. Например, зарисовать их звездочками, или какими-то шаблонами, включающими гиперссылку.
|--------------------------------------------------
*/

// Используем декларативный стиль описания функции
function autoReplace(needles,change,haystack){
  // осуществляем проверку, если что-то не задано из величин, то работа функции прекращается
  if( !needles || !change || !haystack ) return false;
  return haystack.replace( new RegExp(needles.join('|'),'gi'), change);
  }
  
  let arr1 = ['салат', 'помидоры'], str1 = 'свежие помидоры пошли в салат';
  console.log(autoReplace(arr1, 'еда', str1)); // свежие еда пошли в еда
  
  let arr2 = ['лошади', 'ведра'], str2 = 'Лошади способны из ведра пить воду';
  console.log(autoReplace(arr2, 'что-нибуь', str2)); // что-нибуь способны из что-нибуь пить воду

/**
|--------------------------------------------------
  ======= <<<--- Topic #3 - function autoTags(str, tags, url) --->>>  =======  
  Создайте функцию autoTags(str, tags, url), которая принимает входную строку str, массив слов для замены на теги и базовый URL (по умолчанию должен иметь значение “https://mysite.local/tag/”), которые нужно сделать тегами в строке str. Напримерб вызов функции.

autoTags(‘интересно изучать js’, [‘html, ‘js])
должна вернуть строку должен вернуть строку ‘интересно изучать <a href=“https://mysite.local/tag/js”>@js</a>’.

Примечание: если вы увидите как замыкание может упростить работу над задачей, испльзуйте его.
|--------------------------------------------------
*/

const getAutoTags = (base = 'https://mysity.local/tag/') => {
return (str, tags, url = base ) => {
tags = '(' + tags.join("|") + ')';
return str.replace( new RegExp(tags,"gi"), `<a href=“${url}$1”>@$1</a>`);
}
}

const autoTags = getAutoTags();
console.log( autoTags("интересно изучать js", ['html','js']) ); // интересно изучать <a href=“https://mysity.local/tag/js”>@js</a>



/**
|--------------------------------------------------
  ======= <<<--- Topic #4 -  --->>>  =======

|--------------------------------------------------
*/






/**
|--------------------------------------------------
  ======= <<<--- Topic #5 -  --->>>  =======
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<--- Topic #6 -  --->>>  =======

  
|--------------------------------------------------
*/





/**
|--------------------------------------------------
  ======= <<<--- Topic #7 -   --->>>  =======

  
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<--- Topic #8 -  --->>>  =======

  
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  ======= <<<--- Topic #9 -  --->>>  =======

  
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<--- Topic #10 -  --->>>  =======

  
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<--- Topic #11 -  --->>>  =======

  
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<--- Topic #12 -  --->>>  =======

  
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  ======= <<<--- Topic #13 -  --->>>  =======

  
|--------------------------------------------------
*/





/**
|--------------------------------------------------
  ======= <<<--- Topic #14 -  --->>>  =======

  
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  ======= <<<--- Topic #15 -  --->>>  =======

  
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<--- Topic #16 -  --->>>  =======

  
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<--- Topic #17 -  --->>>  =======

  
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  ======= <<<--- Topic #18 -  --->>>  =======

  
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<--- Topic #19 -  --->>>  =======

  
|--------------------------------------------------
*/




/**
|--------------------------------------------------
  ======= <<<--- Topic #20 -  --->>>  =======

  
|--------------------------------------------------
*/