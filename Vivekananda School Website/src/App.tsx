import { FormEvent, useEffect, useState } from 'react'

type IconName =
  | 'arrow'
  | 'book'
  | 'bus'
  | 'check'
  | 'chevron'
  | 'computer'
  | 'droplet'
  | 'flask'
  | 'mail'
  | 'map'
  | 'menu'
  | 'phone'
  | 'play'
  | 'quote'
  | 'shield'
  | 'sport'
  | 'star'
  | 'x'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z" /></>,
    bus: <><rect x="4" y="3" width="16" height="15" rx="3" /><path d="M4 11h16M8 7h.01M16 7h.01M7 18v3M17 18v3M8 15h.01M16 15h.01" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    computer: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
    droplet: <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z" />,
    flask: <><path d="M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" /><path d="M7 15h10" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />,
    play: <path d="m8 5 11 7-11 7Z" />,
    quote: <><path d="M10 11H5a4 4 0 0 0 4 4V9a5 5 0 0 0-5 5" /><path d="M21 11h-5a4 4 0 0 0 4 4V9a5 5 0 0 0-5 5" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    sport: <><circle cx="12" cy="12" r="9" /><path d="m8 4 2 4h4l2-4M3 11l4 2 1 4-3 3M21 11l-4 2-1 4 3 3M9 21l3-3 3 3" /></>,
    star: <path d="m12 2 3 6 6.5 1-4.7 4.6 1.1 6.4-5.9-3.1L6.1 20l1.1-6.4L2.5 9 9 8z" />,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  }
  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

const navItems = [
  ['Home', 'home'], ['About Us', 'about'], ['Academics', 'academics'],
  ['Admissions', 'admissions'], ['Facilities', 'facilities'], ['Activities', 'activities'],
  ['Gallery', 'gallery'], ['Achievements', 'achievements'], ['Contact Us', 'contact'],
]

const heroSlides = [
  {
    image: '/images/vivekananda-hero.png',
    eyebrow: 'Rooted in values. Ready for tomorrow.',
    title: 'Welcome to Vivekananda School',
  },
  {
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85',
    eyebrow: 'A campus alive with curiosity',
    title: 'Learning Beyond the Classroom',
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85',
    eyebrow: 'Every child seen. Every dream supported.',
    title: 'Where Young Minds Flourish',
  },
]

const programmes = [
  { n: '01', title: 'Pre-Primary', range: 'Foundational years', text: 'Joyful, play-led discovery that nurtures language, expression and confidence.' },
  { n: '02', title: 'Primary School', range: 'Classes I – V', text: 'Strong foundations through inquiry, creativity and meaningful real-world learning.' },
  { n: '03', title: 'Middle School', range: 'Classes VI – VIII', text: 'Deeper exploration, collaborative projects and growing academic independence.' },
  { n: '04', title: 'Secondary School', range: 'Classes IX – X', text: 'Focused mentorship and rigorous preparation for confident future pathways.' },
]

const facilities = [
  { title: 'Smart Classrooms', icon: 'book' as IconName, image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80' },
  { title: 'Science Laboratories', icon: 'flask' as IconName, image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80' },
  { title: 'Computer Laboratory', icon: 'computer' as IconName, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80' },
  { title: 'Library', icon: 'book' as IconName, image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80' },
  { title: 'Sports Ground', icon: 'sport' as IconName, image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80' },
  { title: 'Transportation', icon: 'bus' as IconName, image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80' },
  { title: 'Clean Drinking Water', icon: 'droplet' as IconName, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80' },
  { title: 'Safe Campus', icon: 'shield' as IconName, image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=900&q=80' },
]

const activities = [
  ['Annual Day', 'A celebration of talent, confidence and community.', 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=80'],
  ['Sports Day', 'Team spirit, resilience and the joy of movement.', 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80'],
  ['Science Exhibitions', 'Young innovators turn questions into working ideas.', 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=900&q=80'],
  ['Yoga & Meditation', 'Mindful practices that bring focus and wellbeing.', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80'],
  ['Dance & Music', 'Discovering rhythm, expression and cultural heritage.', 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=80'],
  ['Educational Tours', 'Experiences that make the world the classroom.', 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80'],
]

const galleryItems = [
  ['School Events', 'Annual Day', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80'],
  ['Classrooms', 'Learning Together', 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80'],
  ['Sports', 'The Spirit of Sport', 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80'],
  ['Cultural Activities', 'Creative Expression', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80'],
  ['Celebrations', 'Independence Day', 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1000&q=80'],
  ['Student Achievements', 'Proud Moments', 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?auto=format&fit=crop&w=1000&q=80'],
]

const extraActivities = ['Independence Day', 'Republic Day', 'Cultural Programmes', 'Drawing & Painting Competitions']

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'light' : ''}`}>
    <span className="eyebrow"><i />{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const [galleryFilter, setGalleryFilter] = useState('All')
  const [formStatus, setFormStatus] = useState('')
  const [contactStatus, setContactStatus] = useState('')

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % heroSlides.length), 6500)
    return () => window.clearInterval(timer)
  }, [])

  const submitForm = (event: FormEvent<HTMLFormElement>, setter: (value: string) => void) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) return form.reportValidity()
    setter('Thank you. Your enquiry is ready to be sent once the school contact system is connected.')
    form.reset()
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Vivekananda School home">
          <span className="brand-mark">V</span>
          <span><strong>Vivekananda</strong><small>School</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-apply" href="#admissions" onClick={() => setMenuOpen(false)}>Apply for Admission <Icon name="arrow" size={17} /></a>
        </nav>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'x' : 'menu'} size={26} />
        </button>
      </header>

      <section className="hero" id="home">
        {heroSlides.map((item, index) => <div key={item.title} className={`hero-bg ${index === slide ? 'active' : ''}`} style={{ backgroundImage: `url("${item.image}")` }} />)}
        <div className="hero-shade" />
        <div className="hero-content container">
          <p className="hero-eyebrow">{heroSlides[slide].eyebrow}</p>
          <h1>{heroSlides[slide].title}</h1>
          <p className="hero-tagline">Education for Excellence, <em>Values for Life.</em></p>
          <p className="hero-copy">A nurturing learning community where knowledge, character and courage come together to shape purposeful young lives.</p>
          <div className="hero-actions">
            <a className="button primary" href="#about">Explore Our School <Icon name="arrow" /></a>
            <a className="button ghost" href="#admissions">Admissions Open</a>
          </div>
        </div>
        <div className="hero-bottom container">
          <div className="slide-count"><strong>0{slide + 1}</strong><span /><small>0{heroSlides.length}</small></div>
          <div className="hero-dots" aria-label="Choose hero slide">
            {heroSlides.map((_, index) => <button key={index} aria-label={`Slide ${index + 1}`} className={index === slide ? 'active' : ''} onClick={() => setSlide(index)} />)}
          </div>
          <a className="scroll-cue" href="#about"><span>Discover more</span><i /></a>
        </div>
      </section>

      <section className="intro-strip" aria-label="School highlights">
        <div><strong>Holistic</strong><span>Education</span></div>
        <div><strong>Future-ready</strong><span>Learning</span></div>
        <div><strong>Values-led</strong><span>Community</span></div>
        <div><strong>Every child</strong><span>Matters</span></div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-images reveal">
            <img className="about-main" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=85" alt="Students together on a school campus" />
            <img className="about-small" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=85" alt="Student learning in class" />
            <div className="experience-seal"><span>Inspired by</span><strong>Swami<br />Vivekananda</strong><small>Arise • Awake</small></div>
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="About our school" title="Building minds. Shaping character." />
            <p className="lead">Vivekananda School is envisioned as a place where academic excellence and timeless values grow side by side.</p>
            <p>Our learning environment encourages children to question with confidence, act with compassion and pursue excellence with integrity. School history and founding details can be added here once verified.</p>
            <div className="values-list">
              <div><span>01</span><p><strong>Our Vision</strong>To raise confident, compassionate and responsible lifelong learners.</p></div>
              <div><span>02</span><p><strong>Our Mission</strong>To make learning purposeful through strong foundations, inquiry and values.</p></div>
              <div><span>03</span><p><strong>Our Philosophy</strong>Education that develops the head, heart and hands in equal measure.</p></div>
            </div>
            <a className="text-link" href="#academics">Discover our approach <Icon name="arrow" size={18} /></a>
          </div>
        </div>
        <div className="container message-grid">
          <article className="message-card gold-card">
            <Icon name="quote" size={34} />
            <p>“Education is the manifestation of the perfection already in man.”</p>
            <span>— Swami Vivekananda</span>
          </article>
          <article className="message-card">
            <div className="portrait placeholder-portrait"><span>Founder<br />Photo</span></div>
            <div><small>Founder’s message</small><h3>A legacy with purpose</h3><p>Add the verified founder’s message and name here to share the story behind the school’s journey.</p><strong>[Founder Name]</strong></div>
          </article>
          <article className="message-card">
            <div className="portrait placeholder-portrait"><span>Principal<br />Photo</span></div>
            <div><small>Principal’s message</small><h3>Every learner can thrive</h3><p>Add the principal’s authentic welcome note here, introducing the school’s educational vision.</p><strong>[Principal Name]</strong></div>
          </article>
        </div>
      </section>

      <section className="section academics-section" id="academics">
        <div className="container">
          <SectionHeading eyebrow="Academic journey" title="Learning designed for every stage" text="A coherent journey that grows with each child—from early wonder to confident, independent thinking." />
          <div className="programme-grid">
            {programmes.map((item) => <article className="programme-card" key={item.title}>
              <span className="number">{item.n}</span><small>{item.range}</small><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`Learn about ${item.title}`}><Icon name="arrow" /></a>
            </article>)}
          </div>
          <div className="method-panel">
            <div className="method-image"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85" alt="Teacher helping students in a classroom" /><span><Icon name="play" size={22} /></span></div>
            <div className="method-copy">
              <span className="eyebrow"><i />How we teach</span>
              <h2>Curiosity becomes capability.</h2>
              <p>Our methodology brings together conceptual understanding, hands-on experiences, collaborative projects and personal mentorship.</p>
              <ul>
                {['Experiential and project-based learning', 'Strong language, mathematics and science foundations', 'Art, technology and life skills across the curriculum', 'Continuous feedback and individual support'].map(item => <li key={item}><span><Icon name="check" size={15} /></span>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section facilities-section" id="facilities">
        <div className="container">
          <SectionHeading eyebrow="Campus & facilities" title="A place made for discovery" text="Thoughtfully planned spaces support focused learning, energetic play and the everyday wellbeing of our students." />
          <div className="facility-grid">
            {facilities.map((item) => <article className="facility-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="facility-overlay"><span><Icon name={item.icon} /></span><h3>{item.title}</h3></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section activities-section" id="activities">
        <div className="container">
          <div className="heading-row">
            <SectionHeading eyebrow="Beyond academics" title="Growing through every experience" text="A vibrant programme of sports, arts, culture and community helps every student discover a voice and a passion." />
            <div className="activity-tags">{extraActivities.map(item => <span key={item}>{item}</span>)}</div>
          </div>
          <div className="activity-grid">
            {activities.map(([title, text, image], index) => <article className={`activity-card activity-${index + 1}`} key={title}>
              <img src={image} alt={title} loading="lazy" />
              <div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#gallery" aria-label={`View ${title} gallery`}><Icon name="arrow" /></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="container">
          <SectionHeading eyebrow="Life at Vivekananda" title="Stories in every frame" text="A glimpse into the learning, laughter and memorable moments that make our school community special." light />
          <div className="gallery-filters">
            {['All', ...galleryItems.map(item => item[0])].map(filter => <button className={galleryFilter === filter ? 'active' : ''} onClick={() => setGalleryFilter(filter)} key={filter}>{filter}</button>)}
          </div>
          <div className="gallery-grid">
            {galleryItems.filter(item => galleryFilter === 'All' || item[0] === galleryFilter).map(([category, title, image], index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={title}>
              <img src={image} alt={title} loading="lazy" />
              <figcaption><span>{category}</span><h3>{title}</h3></figcaption>
            </figure>)}
          </div>
        </div>
      </section>

      <section className="section achievements-section" id="achievements">
        <div className="container">
          <SectionHeading eyebrow="Achievements & news" title="Proud moments. New possibilities." text="Celebrating effort, progress and the many ways our students make the school proud." />
          <div className="achievement-layout">
            <article className="achievement-feature">
              <div className="achievement-image"><img src="https://images.unsplash.com/photo-1560523159-4a9692d222ef?auto=format&fit=crop&w=1200&q=85" alt="Student celebrating an achievement" /><span><Icon name="star" /> Featured achievement</span></div>
              <div><small>Student achievement • [Date]</small><h3>Add your latest student success story here</h3><p>Share verified academic results, competition wins and awards to celebrate students and keep families informed.</p><a className="text-link" href="#contact">Share an achievement <Icon name="arrow" size={18} /></a></div>
            </article>
            <div className="news-list">
              {[
                ['Academic Results', 'Publish verified board examination results and academic milestones.', 'Results'],
                ['Awards & Recognition', 'Add official awards received by students, teachers or the school.', 'Honours'],
                ['Latest Announcement', 'Post the next important notice for parents and students here.', 'Notice'],
                ['Upcoming Event', 'Add the confirmed date and details of the next school activity.', 'Calendar'],
              ].map(([title, text, type], i) => <article key={title}><span className="news-date"><strong>{String(i + 1).padStart(2, '0')}</strong><small>Update</small></span><div><small>{type}</small><h3>{title}</h3><p>{text}</p></div><Icon name="chevron" /></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section admissions-section" id="admissions">
        <div className="container admissions-grid">
          <div className="admission-copy">
            <SectionHeading eyebrow="Admissions" title="Begin a joyful learning journey" text="We welcome families who believe education should nurture knowledge, character and confidence." light />
            <div className="steps">
              {[
                ['01', 'Submit an enquiry', 'Tell us about your child and the class you are considering.'],
                ['02', 'School interaction', 'Our admissions team will share availability and next steps.'],
                ['03', 'Application & documents', 'Complete the formal application with verified documents.'],
                ['04', 'Admission confirmation', 'Receive confirmation after the school’s admission process.'],
              ].map(([num, title, text]) => <div key={num}><span>{num}</span><p><strong>{title}</strong>{text}</p></div>)}
            </div>
            <div className="eligibility"><h3>Eligibility & documents</h3><p>Age criteria and document requirements must be updated with the school’s official admission policy.</p><div><span><Icon name="check" size={15} /> Birth certificate</span><span><Icon name="check" size={15} /> Previous school records</span><span><Icon name="check" size={15} /> Photographs & ID proof</span></div></div>
          </div>
          <form className="enquiry-form" onSubmit={(e) => submitForm(e, setFormStatus)}>
            <div className="form-head"><span>Admissions enquiry</span><h3>Let’s get to know your child.</h3><p>Complete the form and the school team can contact you.</p></div>
            <label>Student’s full name<input name="studentName" required placeholder="Enter student name" /></label>
            <label>Parent / guardian name<input name="parentName" required placeholder="Enter parent name" /></label>
            <div className="form-row">
              <label>Class applying for<select name="class" required defaultValue=""><option value="" disabled>Select class</option><option>Pre-Primary</option><option>Class I</option><option>Class II</option><option>Class III</option><option>Class IV</option><option>Class V</option><option>Class VI</option><option>Class VII</option><option>Class VIII</option><option>Class IX</option><option>Class X</option></select></label>
              <label>Phone number<input name="phone" required type="tel" pattern="[0-9+\-\s]{8,15}" placeholder="+91 XXXXX XXXXX" /></label>
            </div>
            <label>Email address<input name="email" required type="email" placeholder="you@example.com" /></label>
            <button className="button primary form-button" type="submit">Send admission enquiry <Icon name="arrow" /></button>
            {formStatus && <p className="form-status" role="status">{formStatus}</p>}
            <small className="privacy-note"><Icon name="shield" size={14} /> Your details will only be used for admission communication.</small>
          </form>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <SectionHeading eyebrow="Contact us" title="We would love to hear from you" text="Plan a visit, ask a question or speak with our school team." />
          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-item"><span><Icon name="map" /></span><div><small>Visit us</small><strong>[School Address]</strong><p>[City, District, State, PIN]</p></div></div>
              <div className="contact-item"><span><Icon name="phone" /></span><div><small>Call us</small><strong>[School Phone Number]</strong><p>Monday – Saturday, [Office Hours]</p></div></div>
              <div className="contact-item"><span><Icon name="mail" /></span><div><small>Email us</small><strong>[School Email Address]</strong><p>We aim to respond within 2 working days.</p></div></div>
              <div className="social-row"><span>Follow school life</span><div><a href="#contact" aria-label="Facebook">f</a><a href="#contact" aria-label="Instagram">ig</a><a href="#contact" aria-label="YouTube">yt</a></div></div>
            </div>
            <div className="map-placeholder"><Icon name="map" size={38} /><h3>School location map</h3><p>Add the verified school address to enable the Google Maps location.</p><span>[Google Maps embed placeholder]</span></div>
            <form className="contact-form" onSubmit={(e) => submitForm(e, setContactStatus)}>
              <h3>Send us a message</h3>
              <label>Your name<input required name="name" placeholder="Full name" /></label>
              <label>Email address<input required name="email" type="email" placeholder="you@example.com" /></label>
              <label>Your message<textarea required name="message" rows={4} placeholder="How can we help?" /></label>
              <button className="button dark" type="submit">Send message <Icon name="arrow" /></button>
              {contactStatus && <p className="form-status dark-status" role="status">{contactStatus}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand light-brand" href="#home"><span className="brand-mark">V</span><span><strong>Vivekananda</strong><small>School</small></span></a>
            <p>Education for Excellence,<br />Values for Life.</p>
          </div>
          <div><h4>Explore</h4>{navItems.slice(0, 5).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
          <div><h4>School life</h4>{navItems.slice(5).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
          <div className="footer-contact"><h4>Contact</h4><p>[School Address]<br />[City, State, PIN]</p><a href="tel:">[Phone Number]</a><a href="mailto:">[Email Address]</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Vivekananda School. All rights reserved.</span><span><a href="#contact">Privacy</a><a href="#contact">Terms</a><a href="#contact">Accessibility</a></span></div>
      </footer>
    </main>
  )
}

export default App
