import * as React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import MainLayout from '../../layouts/MainLayout'

describe('MainLayout', () => {
  it('renders child', () => {
    render(<MainLayout>Main Child</MainLayout>)

    const text = screen.getByText(/main child/i)
    expect(text).toBeInTheDocument()
  })

  it('renders child', () => {
    render(
      <MainLayout>
        <p>Other text</p>
      </MainLayout>
    )

    const text = screen.getByText(/other text/i)
    expect(text).toBeInTheDocument()
  })

  it('renders MainLayout unchanged', () => {
    const tree = renderer.create(<MainLayout>Main Child</MainLayout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
