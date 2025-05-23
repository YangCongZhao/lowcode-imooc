import React from 'react'
import type { MouseEvent } from 'react'
import 'antd/dist/reset.css'
function App() {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    console.log(event)
  }
  type qlistType = {
    id: string
    label: string
    isPublish: boolean
  }

  const [qlist] = React.useState<qlistType[]>([
    {
      id: 'q1',
      label: '问卷1',
      isPublish: true,
    },
    {
      id: 'q2',
      label: '问卷2',
      isPublish: false,
    },
    {
      id: 'q3',
      label: '问卷3',
      isPublish: false,
    },
    {
      id: 'q4',
      label: '问卷4',
      isPublish: false,
    },
  ])

  return (
    <>
      <h1>问卷列表页</h1>
      {qlist.map(item => (
        <div key={item.id}>
          <span>{item.label}</span>
          <span>
            {item.isPublish ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
          </span>
          <button onClick={handleClick}>编辑</button>
        </div>
      ))}
    </>
  )
}

export default App
