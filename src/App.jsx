import Hero from './Sections/Hero'
import Footer from './Sections/Footer'
import CustomerReviews from './Sections/CustomerReviews'
import PopularProducts from './Sections/PopularProducts'
import Services from './Sections/Services'
import SpecialOffer from './Sections/SpecialOffer'
import Subscribe from './Sections/Subscribe'
import SuperQuality from './Sections/SuperQuality'
import Nav from './components/Nav'
export default function App() {
  return (
    <main className="relative dark:bg-slate-900">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="bg-pale-blue padding dark:bg-slate-950">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}