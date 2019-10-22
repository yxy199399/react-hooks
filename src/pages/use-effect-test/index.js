import React, { useState, useEffect } from 'react'
function useEffectTest() {
  const [count, setCount] = useState(0)
  // 类似于componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 更新文档的标题
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
export default useEffectTest

// useContext
// useReducer
// useCallback
// useMemo
// useRef
// useImperativeMethods
// useMutationEffect
// useLayoutEffect
