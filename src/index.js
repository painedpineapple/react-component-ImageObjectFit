import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
//
import ImageObjectFit from './ImageObjectFit'

const styles = {
  margin: 60,
}

const App = () => (
  <div style={styles}>
    <ImageObjectFit
      alt={faker.lorem.word()}
      src={faker.image.imageUrl()}
      options={{
        styles: {
          maxHeight: 100,
          width: '100%',
        },
      }}
    />
  </div>
)

render(<App />, document.getElementById('root'))
