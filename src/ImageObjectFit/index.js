import React from 'react'
import objectFitImages from 'object-fit-images'

export default class ImageObjectFit extends React.Component<{
  alt: string,
  src: string,
  options?: {
    fontFamily?: string,
    styles?: {},
  },
}> {
  static defaultProps = {
    options: {
      fontFamily: '"object-fit: cover;"',
      styles: {},
    },
  }
  imgRef = React.createRef()
  componentDidMount() {
    objectFitImages(this.imgRef.current)
  }
  render() {
    const { options, ...props } = this.props
    return (
      <img
        ref={this.imgRef}
        {...props}
        style={{
          objectFit: 'cover',
          ...options.styles,
          fontFamily: options.fontFamily,
        }}
      />
    )
  }
}
