import React from 'react'

function Counter({counter, onIncrement, onDecrement, onCounterChange}) {
  const handleCounterChange = (e) => {
    onCounterChange(e.target.value)
  }

  return (
    <main>
      <section>
        <div className="Counter" style={{height: '100px', fontSize: '48px'}}>
          {counter}
        </div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <input type='number' onChange={handleCounterChange} />
      </section>
    </main>
  )
}

export default Counter
