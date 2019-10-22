/*useState是react自带的一个hook函数，它的作用就是用来声明状态变量。
useState这个函数接收的参数是我们的状态初始值（initial state），
它返回了一个数组，这个数组的第[0]项是当前当前的状态值，
第[1]项是可以改变状态值的方法函数
*/

import React, { useState } from 'react'
function UserStateTest() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default UserStateTest
