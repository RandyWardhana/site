const Greetings = (lang) => {
  let d = new Date()
  let time = d.getHours()

  let id = '', en = '', jp = ''
  let greet

  switch (true) {
    case time >= 4 && time <= 10:
      if (lang == 'jp') greet = 'おはよう!'
      else if (lang == 'en') greet = 'Good Morning!'
      else greet = 'Selamat Pagi!'
      return { greet }

    case time > 10 && time <= 14:
      if (lang == 'jp') greet = 'こんにちは!'
      else if (lang == 'en') greet = 'Good Afternoon!'
      else greet = 'Selamat Siang!'
      return { greet }

    case time > 14 && time <= 17:
      if (lang == 'jp') greet = 'こんばんは！'
      else if (lang == 'en') greet = 'Good Evening!'
      else greet = 'Selamat Sore!'
      return { greet }
      
    default:
      if (lang == 'jp') greet = 'おやすみ！'
      else if (lang == 'en') greet = 'Good Night!'
      else greet = 'Selamat Malam!'
      return { greet }
  }

  // switch (true) {
  //   case time >= 4 && time <= 10:
  //     id = 'Selamat Pagi!'
  //     en = 'Good Morning!'
  //     jp = 'おはよう！'
  //     return { id, en, jp }
  //   case time > 10 && time <= 14:
  //     id = 'Selamat Siang!'
  //     en = 'Good Afternoon!'
  //     jp = 'こんにちは！'
  //     return { id, en, jp }
  //   case time > 14 && time <= 17:
  //     id = 'Selamat Sore!'
  //     en = 'Good Evening!'
  //     jp = 'こんばんは！'
  //     return { id, en, jp }
  //   default:
  //     id = 'Selamat Malam!'
  //     en = 'Good Night!'
  //     jp = 'おやすみ！'
  //     return { id, en, jp }
  // }
}

export default Greetings