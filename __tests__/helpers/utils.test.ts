import { classNames } from '../../helpers/utils'

describe('utils', () => {
  it('classNames join', () => {
    const className1 = 'bg-black-1 min-h-screen'
    const className2 = 'mx-2.5 inline-block transition-all duration-300'
    const joinClassNames = classNames(className1, className2)

    expect(joinClassNames).toBe(`${className1} ${className2}`)
  })

  it('classNames trim', () => {
    const className1 = ' bg-black-1 min-h-screen '
    const className2 = ' mx-2.5 inline-block transition-all duration-300'
    const joinClassNames = classNames(className1, className2)

    expect(joinClassNames).toBe(`${className1.trim()} ${className2.trim()}`)
  })

  it('classNames trim result', () => {
    const className1 = 'bg-black-1 min-h-screen'
    const className2 = '  '
    const joinClassNames = classNames(className1, className2)

    expect(joinClassNames).toBe(className1)
  })
})
