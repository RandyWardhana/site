const Greetings = () => {
  let d = new Date()
  let time = d.getHours()

  let id = '', en = '', jp = ''

  switch (true) {
    case time >= 4 && time <= 10:
      id = 'Selamat Pagi!'
      en = 'Good Morning!'
      jp = 'おはよう！'
      return { id, en, jp }
    case time > 10 && time <= 14:
      id = 'Selamat Siang!'
      en = 'Good Afternoon!'
      jp = 'こんにちは！'
      return { id, en, jp }
    case time > 14 && time <= 17:
      id = 'Selamat Sore!'
      en = 'Good Evening!'
      jp = 'こんばんは！'
      return { id, en, jp }
    default:
      id = 'Selamat Malam!'
      en = 'Good Night!'
      jp = 'おやすみ！'
      return { id, en, jp }
  }
}

export default Greetings