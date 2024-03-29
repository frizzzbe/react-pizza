import React from 'react'

const RandomGame: React.FC = () => {
  const [randomCount, setRandomCount] = React.useState<number>(4); // количество кнопок и возможных чисел
  const [randomAnswer, setRandomAnswer] = React.useState<number>(0); // правильный ответ
  const [answer, setAnswer] = React.useState<number>(-1);  // ответ пользователя
  const [isRight, setIsRight] = React.useState<boolean>(false); // Результат

  function restartGame() {
    setRandomCount(Math.floor(Math.random() * 6) + 4)
    setRandomAnswer(Math.floor(Math.random() * randomCount))
    setIsRight(false)
  }

  function checkResult(check: number) {
    if (randomAnswer === check) {
      setIsRight(true)
      console.log("успех!!!!!: ", `\n Правильный ответ: ${randomAnswer + 1} \n Ваш ответ: ${check + 1}`)
    } else {
      setIsRight(false)
      console.log("Провал: ", `\n Правильный ответ: ${randomAnswer + 1} \n Ваш ответ: ${check + 1}`)
    }
  }

  React.useEffect(()=>{
    let obj = {
      "randomAnswer:": randomAnswer,
      "answer:": answer
    }
    console.log(obj)
  }, [randomAnswer, answer])

  React.useEffect(()=>{
    setRandomCount(Math.floor(Math.random() * 6) + 4)
    restartGame();
  }, [])


  return (
    <div>
      <h2 style={{marginTop: '20px'}}>RandomGame</h2>
      <button onClick={restartGame}>Again</button>
      <span style={{
        color: isRight ? 'green' : 'red', 
        marginLeft: '15px'
      }}>●</span>
      <br/>
      {
        Array(randomCount).fill(null).map((el, i) => (
        <button key={el + i}
        onClick={()=>{
          setAnswer(i);
          checkResult(i)
        }}
        >{i+1}</button>))
      }
    </div>
  )
}

export default RandomGame