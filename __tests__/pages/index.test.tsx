import * as React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { useRouter } from 'next/router'

import Home from '../../pages/index'
import { ES_INDEX_CONTENT, EN_INDEX_CONTENT } from '../../helpers/constants'

const { title: enTitle, subtitle: enSubtitle, description: enDescription } = EN_INDEX_CONTENT
const { title: esTitle, subtitle: esSubtitle, description: esDescription } = ES_INDEX_CONTENT

const useRouterFn = useRouter as jest.Mock

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

beforeEach(() => {
  useRouterFn.mockReset()
})

describe('Home', () => {
  it('renders page in english', () => {
    useRouterFn.mockImplementation(() => ({
      locale: 'en',
    }))
    render(<Home />)

    const title = screen.getByText(enTitle)
    const subtitle = screen.getByText(enSubtitle)
    const description = screen.getByText(enDescription)
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders page in spanish', () => {
    useRouterFn.mockImplementation(() => ({
      locale: 'es',
    }))
    render(<Home />)

    const title = screen.getByText(esTitle)
    const subtitle = screen.getByText(esSubtitle)
    const description = screen.getByText(esDescription)
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders page with locale null', () => {
    useRouterFn.mockImplementation(() => ({
      locale: undefined,
    }))
    render(<Home />)

    const title = screen.getByText(enTitle)
    const subtitle = screen.getByText(enSubtitle)
    const description = screen.getByText(enDescription)
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders home page in english unchanged', () => {
    useRouterFn.mockImplementation(() => ({
      locale: 'en',
    }))
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders home page in spanish unchanged', () => {
    useRouterFn.mockImplementation(() => ({
      locale: 'es',
    }))
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders home page with locale null unchanged', () => {
    useRouterFn.mockImplementation(() => ({
      locale: null,
    }))
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
