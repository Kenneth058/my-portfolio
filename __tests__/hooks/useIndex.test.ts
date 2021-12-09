import { useRouter } from 'next/router'

import useIndex from '../../hooks/useIndex'
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

describe('useIndex hook', () => {
  it('should render text in english', () => {
    useRouterFn.mockImplementation(() => ({
      locale: 'en',
    }))
    const { pageAttribute } = useIndex()
    const { title, subtitle, description } = pageAttribute
    expect(title).toBe(enTitle)
    expect(subtitle).toBe(enSubtitle)
    expect(description).toBe(enDescription)
  })

  it('should render text in spanish', () => {
    useRouterFn.mockImplementation(() => ({
      locale: 'es',
    }))
    const { pageAttribute } = useIndex()
    const { title, subtitle, description } = pageAttribute
    expect(title).toBe(esTitle)
    expect(subtitle).toBe(esSubtitle)
    expect(description).toBe(esDescription)
  })

  it('should render text in english when locale is null', () => {
    useRouterFn.mockImplementation(() => ({
      locale: null,
    }))
    const { pageAttribute } = useIndex()
    const { title, subtitle, description } = pageAttribute
    expect(title).toBe(enTitle)
    expect(subtitle).toBe('Cloud Developer')
    expect(description).toBe(enDescription)
  })
})
