import { useRouter } from 'next/router'

import { EN_INDEX_CONTENT, ES_INDEX_CONTENT } from '../helpers/constants'
import type { PageAttributesProps } from '../helpers/constants'

interface Languages {
  [k: string]: PageAttributesProps
  en: PageAttributesProps
  es: PageAttributesProps
}

const intPageAttributes: Languages = {
  en: EN_INDEX_CONTENT,
  es: ES_INDEX_CONTENT,
}

const DEFAULT_LOCALE = 'en'

const useIndex = () => {
  const { locale } = useRouter()

  return {
    pageAttribute: intPageAttributes[locale || DEFAULT_LOCALE],
  }
}

export default useIndex
