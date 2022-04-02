const { loadModule } = require('cld3-asm')

const findLanguage = {
  language: 'ko',
  text:
    ' 개별적으로 리포트 액세스 권한을 부여할 수 있습니다 액세스 권한 부여사용자에게 프로필 리포트에 액세스할 수 있는 권한을 부여하시려면 가용 프로필 상자에서 프로필 이름을 선택한 다음'
}

const frequentLanguage = 'This piece of text is in English. Този текст е на Български.'

async function start() {
  const cldFactory = await loadModule()

  const identifier = cldFactory.create(0, 1000)

  const findResult = identifier.findLanguage(findLanguage.text)
  console.log(`detect languages for text "${findLanguage.text.substring(0, 25)}..."`)
  console.log(JSON.stringify(findResult))
  console.log(findResult.language === findLanguage.language)

  const frequentResult = identifier.findMostFrequentLanguages(frequentLanguage, 3)
  console.log(`find most frequent languages for text "${frequentLanguage}..."`)
  console.log(JSON.stringify(frequentResult))

  identifier.dispose()
}
start()
