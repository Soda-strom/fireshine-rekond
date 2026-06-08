export type Service = {
  slug: string
  num: string
  title: string
  sub: string
  description: string
  pricing: string
}

export const services: Service[] = [
  {
    slug: 'polering',
    num: '01',
    title: 'Polering',
    sub: 'Maskinpolering · repor · lack',
    description:
      'Maskinpolering som tar bort repor, virvelmarken och oxidation ur lacken. Behandlingen anpassas efter lackens skick och ger en djup, jämn glans. Varje uppdrag börjar med en noggrann bedömning av lackytan.',
    pricing:
      'Priset beror på fordonets storlek, lackskick och önskat resultat. Du väljer vilket fordon du har när du bokar, och priset sätts utifrån det.',
  },
  {
    slug: 'lackskydd',
    num: '02',
    title: 'Lackskydd',
    sub: 'Keramisk coating · UV-skydd · hydrofob',
    description:
      'Keramisk coating ger ett hårt, hydrofobiskt skyddslager på lacken som repellerar vatten och smuts. Skyddar mot UV-strålning, kemikalier och ytliga repor. Rätt applicerad håller coatingen i flera år.',
    pricing:
      'Priset varierar beroende på fordonets storlek och vilket paket du väljer. Du anger vilket fordon du har när du bokar.',
  },
  {
    slug: 'invandig-rekond',
    num: '03',
    title: 'Invändig Rekond',
    sub: 'Djuprengöring · klädsel · mattor',
    description:
      'Djuprengöring av hela interiören — klädsel, mattor, dörrar, tak och instrumentbräda. Fläckar och lukter behandlas effektivt. Fordonet lämnar med en frisk, ren kabin.',
    pricing:
      'Priset beror på fordonets storlek och interiörens skick. Du väljer fordon vid bokning.',
  },
  {
    slug: 'utvandig-rekond',
    num: '04',
    title: 'Utvändig Rekond',
    sub: 'Tvätt · avfettning · finish',
    description:
      'Grundlig tvätt, avfettning och finishbehandling av exteriören. Hjulen rengörs separat och lister behandlas noggrant. Fordonet lämnar med en ren, fräsch yta.',
    pricing:
      'Priset varierar beroende på fordonets storlek och skick. Du väljer fordon vid bokning.',
  },
  {
    slug: 'helrekond',
    num: '05',
    title: 'Helrekond',
    sub: 'In & ut · showroom-skick · garanti',
    description:
      'Det kompletta paketet — invändig och utvändig rekond i ett. Fordonet genomgår en fullständig behandling och lämnar i showroom-skick. Passar dig som vill ha bästa möjliga resultat eller inför försäljning.',
    pricing:
      'Priset beror på fordonets storlek, skick och eventuella tillägg. Du väljer fordon vid bokning.',
  },
]
