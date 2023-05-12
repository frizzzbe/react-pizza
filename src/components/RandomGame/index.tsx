import React, { useEffect } from 'react'

function RandomGame() {
  const [randomCount, setRandomCount] = React.useState(4); // количество кнопок и возможных чисел
  const [randomAnswer, setRandomAnswer] = React.useState(0); // правильный ответ
  const [answer, setAnswer] = React.useState<number>();  // ответ пользователя

  function restartGame() {
    setRandomAnswer(Math.floor(Math.random() * randomCount))
  }

  function checkResult() {
    if (randomAnswer === answer) {
      console.log("успех!!!!!: ", `Правильный ответ: ${randomAnswer} \n Ваш ответ: ${answer}`)
    } else {
      console.log("Провал: ", `Правильный ответ: ${randomAnswer} \n Ваш ответ: ${answer}`)
    }
  }

  React.useEffect(()=>{
    console.log("randomAnswer:", randomAnswer)
  }, [randomAnswer])

  React.useEffect(()=>{
    checkResult();
  }, [answer])

  React.useEffect(()=>{
    restartGame();
  }, [])


  return (
    <div>
      <h1>RandomGame</h1>
      <button onClick={restartGame}>Again</button><br/>
      {
        Array(randomCount).fill(null).map((el, i) => (
        <button 
        onClick={()=>{
          setAnswer(i);
        }}
        >{i+1}</button>))
      }
    </div>
  )
}

export default RandomGame