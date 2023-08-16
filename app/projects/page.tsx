import { genPageMetadata } from 'app/seo'
import Works from '@/components/projects/Works'
import './styles.css'
export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <section className="">
      <h1 className="text-5xl text-center font-bold mb-2">Portfolio </h1>
      <span className="section__subtitle">Most recent works</span>
      <Works />
    </section>
  )
}
