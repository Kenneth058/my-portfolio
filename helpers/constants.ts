interface PageAttributesProps {
  title: string
  subtitle: string
  description: string
}

const EN_INDEX_CONTENT: PageAttributesProps = {
  title: "I'm Kenneth Chévez.",
  subtitle: 'Cloud Developer',
  description:
    "I'm a 🇨🇷 Costa Rican result oriented and committed developer. With experience in fields like Finance & Sports. Working in variety of areas like back-end, front-end and cloud computing development.",
}

const ES_INDEX_CONTENT: PageAttributesProps = {
  title: 'Soy Kenneth Chévez.',
  subtitle: 'Desarrollador Cloud',
  description:
    'Soy un desarrollador 🇨🇷 costarricense orientado a resultados y comprometido. Con experiencia en campos como Finanzas y Deportes. Trabajando en una variedad de áreas como back-end, front-end y desarrollo de computación en la nube.',
}

export { EN_INDEX_CONTENT, ES_INDEX_CONTENT }
export type { PageAttributesProps }
