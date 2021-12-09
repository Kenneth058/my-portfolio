import * as React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Language from '../../../components/Language/Language'

describe('Language Component', () => {
  it('renders', () => {
    render(
      <Language href="/" locale="es">
        🇨🇷
      </Language>
    )

    const text = screen.getByText(/🇨🇷/i)
    expect(text).toBeInTheDocument()
  })

  it('snapshot', () => {
    const tree = renderer
      .create(
        <Language href="/" locale="es">
          🇨🇷
        </Language>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
