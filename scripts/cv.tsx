import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import type { FC, ReactNode } from 'react'
import { Document, Font, Link, Page, StyleSheet, Text, View, renderToFile } from '@react-pdf/renderer'

import data from '../content/data.json'

const OUTPUT = 'public/cv.pdf'

const fontFile = (family: string, file: string) =>
  fileURLToPath(new URL(`files/${family}-latin-${file}.woff`, import.meta.resolve(`@fontsource/${family}`)))

Font.register({
  family: 'IBM Plex Sans',
  fonts: [
    { src: fontFile('ibm-plex-sans', '400-normal') },
    { src: fontFile('ibm-plex-sans', '400-italic'), fontStyle: 'italic' },
    { src: fontFile('ibm-plex-sans', '700-normal'), fontWeight: 700 },
    { src: fontFile('ibm-plex-sans', '700-italic'), fontWeight: 700, fontStyle: 'italic' },
  ],
})
Font.register({
  family: 'IBM Plex Serif',
  fonts: [
    { src: fontFile('ibm-plex-serif', '400-normal') },
    { src: fontFile('ibm-plex-serif', '700-normal'), fontWeight: 700 },
  ],
})
Font.registerHyphenationCallback((word) => [word])

const accent = '#1c4587'

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 20,
    paddingLeft: 28,
    paddingRight: 34.4,
    fontFamily: 'IBM Plex Serif',
    fontSize: 11,
    lineHeight: 1.36,
  },
  bar: { position: 'absolute', top: 0, left: 0, right: 0, height: 8, backgroundColor: '#0b2196' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -13,
    marginLeft: -3,
    marginRight: -2.2,
    marginBottom: 10,
  },
  name: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 1.2,
    color: accent,
    textTransform: 'uppercase',
  },
  jobTitle: { marginTop: 4, fontFamily: 'IBM Plex Sans', fontStyle: 'italic', textTransform: 'uppercase' },
  contact: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: 9,
    lineHeight: 1.42,
    color: accent,
    alignItems: 'flex-end',
  },
  link: { color: accent, textDecoration: 'none' },
  summary: { marginBottom: 10 },
  paragraph: { marginBottom: 5 },
  section: { marginTop: 25 },
  sectionBody: { paddingLeft: 3 },
  sectionTitle: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 700,
    fontSize: 16,
    color: accent,
    textTransform: 'uppercase',
    marginBottom: 11,
  },
  columns: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 4 },
  skillSet: { width: '51.5%', paddingRight: 12, marginBottom: 6 },
  skillSetEnd: { width: '48.5%', paddingRight: 0 },
  hobby: { width: '25%', marginBottom: 10.5 },
  bold: { fontWeight: 700 },
  entry: { marginBottom: 6 },
  entryHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  entryTitle: { fontFamily: 'IBM Plex Sans', fontWeight: 700, fontSize: 15, lineHeight: 1.47, color: accent },
  entrySubtitle: { fontFamily: 'IBM Plex Sans', fontWeight: 700, color: accent },
  entryMeta: {
    marginTop: 2.5,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: 10,
    lineHeight: 1.35,
    color: accent,
    alignItems: 'flex-end',
  },
})

const Section: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle} minPresenceAhead={60}>
      {title}
    </Text>
    <View style={styles.sectionBody}>{children}</View>
  </View>
)

const Entry: FC<{ title: string; subtitle: string; meta: string[]; children: ReactNode }> = ({
  title,
  subtitle,
  meta,
  children,
}) => (
  <View style={styles.entry}>
    <View style={styles.entryHeader} wrap={false} minPresenceAhead={60}>
      <View>
        <Text style={styles.entryTitle}>{title}</Text>
        <Text style={styles.entrySubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.entryMeta}>
        {meta.map((line) => (
          <Text key={line}>{line}</Text>
        ))}
      </View>
    </View>
    {children}
  </View>
)

const Paragraphs: FC<{ text: string }> = ({ text }) =>
  text.split('\n').map((paragraph) => (
    <Text key={paragraph} style={styles.paragraph}>
      {paragraph}
    </Text>
  ))

const BulletList: FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <View style={styles.paragraph}>
    <Text style={styles.bold} minPresenceAhead={30}>
      {title}:
    </Text>
    {items.map((item) => (
      <Text key={item}>• {item}</Text>
    ))}
  </View>
)

const Cv: FC = () => (
  <Document title={`CV ${data.site.author}`} author={data.site.author} subject={data.author.jobTitle}>
    <Page size="A4" style={styles.page}>
      <View style={styles.bar} fixed />

      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{data.site.author}</Text>
          <Text style={styles.jobTitle}>{data.author.jobTitle}</Text>
        </View>
        <View style={styles.contact}>
          <Text>
            <Link style={styles.link} src={data.site.siteUrl}>
              {data.site.siteUrl}
            </Link>
          </Text>
          <Text>
            <Link style={styles.link} src={`mailto:${data.author.email}`}>
              {data.author.email}
            </Link>
          </Text>
          <Text>{data.author.city}</Text>
        </View>
      </View>

      {data.author.summary.map((paragraph) => (
        <Text key={paragraph} style={styles.summary}>
          {paragraph}
        </Text>
      ))}

      <Section title="Skills">
        <View style={styles.columns}>
          {data.skills.map(({ name, skills }, index) => (
            <View key={name} style={index % 2 ? [styles.skillSet, styles.skillSetEnd] : styles.skillSet} wrap={false}>
              <Text style={styles.bold}>{name}</Text>
              <Text>{skills}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section title="Experience">
        {data.experience.map(({ company, role, location, period, description, milestones, technologies }) => (
          <Entry key={company} title={company} subtitle={role} meta={[period, location]}>
            <Paragraphs text={description} />
            <BulletList title="Milestones" items={milestones} />
            <BulletList title="Technologies" items={technologies} />
          </Entry>
        ))}
      </Section>

      <Section title="Education">
        {data.education.map(({ institution, qualification, location, description }) => (
          <Entry key={institution} title={institution} subtitle={qualification} meta={[location]}>
            <Paragraphs text={description} />
          </Entry>
        ))}
      </Section>

      <Section title="Hobbies">
        <View style={styles.columns} wrap={false}>
          {data.hobbies.map((hobby) => (
            <Text key={hobby} style={styles.hobby}>
              {hobby}
            </Text>
          ))}
        </View>
      </Section>
    </Page>
  </Document>
)

mkdirSync('public', { recursive: true })
await renderToFile(<Cv />, OUTPUT)
console.log(`CV written to ${OUTPUT}`)
