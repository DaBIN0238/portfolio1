import { useEffect, useState } from 'react'
import './App.css'

const skills = [
  { name: 'HTML', description: '웹페이지의 기본 구조를 만들며 기초를 익히고 있습니다.', status: 'Practicing' },
  { name: 'CSS', description: '레이아웃과 반응형 화면을 구성하는 방법을 연습하고 있습니다.', status: 'Practicing' },
  { name: 'JavaScript', description: '웹페이지에 동작과 기능을 더하는 방법을 배우고 있습니다.', status: 'Learning' },
  { name: 'React', description: '컴포넌트 단위로 화면을 만드는 방법을 공부하고 있습니다.', status: 'Practicing' },
  { name: 'Vite', description: '프로젝트를 실행하고 개발하는 도구로 활용해보고 있습니다.', status: 'Familiar' },
  { name: 'Figma', description: '웹페이지의 화면 구성과 흐름을 직접 그려보고 있습니다.', status: 'Familiar' },
  { name: 'Git', description: '작업 내용을 기록하고 관리하는 방법을 익히고 있습니다.', status: 'Learning' },
  { name: 'GitHub', description: '프로젝트를 저장하고 공유하는 용도로 사용해보고 있습니다.', status: 'Familiar' },
]

const projects = [
  {
    title: '투게더로그',
    skills: 'React · CSS · Vite',
    description: '함께 정하고, 함께 기록하는 우리만의 모임 공간',
    image: '/projects/react-portfolio.svg',
    demo: {
      desktop: `${import.meta.env.BASE_URL}togetherlog(PC).pdf`,
      tablet: `${import.meta.env.BASE_URL}togetherlog(태블릿).pdf`,
      mobile: `${import.meta.env.BASE_URL}togetherlog(모바일).pdf`,
    },
    github: null,
  },
{
    title: 'Media Market Gallery',
    description: '상품을 탐색하고 장바구니를 관리할 수 있는 쇼핑 웹 애플리케이션입니다.',
    skills: 'JavaScript · React · API',
    image: '/projects/shopping-web-app.svg',
    demo: 'https://dabin0238.github.io/media-market-gallery/',
    github: null,
},
  {
    title: 'Movie Search App',
    description: '영화 정보를 검색하고 원하는 작품을 찾아볼 수 있는 웹 서비스입니다.',
    skills: 'React · API · CSS',
    image: '/projects/movie-search-app.svg',
    demo: null,
    github: null,
  },
]

const experiences = [
  {
    year: '2026',
    title: 'Learning Web Design & Frontend',
    description: 'HTML과 CSS 기초부터 JavaScript, React까지 웹 개발을 공부하고 있습니다. UI/UX와 Figma를 함께 익히며 개인 프로젝트를 직접 만들어보고, Git과 GitHub를 활용한 프로젝트 관리 및 배포 방법도 알아가고 있습니다.',
  },
]

function getResponsiveDemoUrl(demo, viewportWidth) {
  if (!demo || typeof demo === 'string') {
    return demo
  }

  if (viewportWidth <= 767) {
    return demo.mobile
  }

  if (viewportWidth <= 1024) {
    return demo.tablet
  }

  return demo.desktop
}

function PortfolioApp() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    function updateViewportWidth() {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateViewportWidth)
    return () => window.removeEventListener('resize', updateViewportWidth)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark)
  }

  function handleContactChange(event) {
    const { name, value } = event.target

    setContactForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleContactSubmit(event) {
    event.preventDefault()
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="portfolio">
      <header id="header" className="site-header">
        <div className="page-container site-header__content">
          <a className="site-header__brand" href="#hero" onClick={closeMobileMenu}>DaBin PORTFOLIO</a>
          <div className="site-header__actions">
            <button
              className="theme-toggle"
              type="button"
              aria-pressed={isDarkMode}
              aria-label={isDarkMode ? '라이트 모드로 전환' : '야간 모드로 전환'}
              onClick={toggleDarkMode}
            >
              <span aria-hidden="true">{isDarkMode ? '🌙' : '☀️'}</span>
            </button>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="primary-navigation"
              aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            >
              <span className="menu-toggle__line" aria-hidden="true" />
              <span className="menu-toggle__line" aria-hidden="true" />
              <span className="menu-toggle__line" aria-hidden="true" />
            </button>
          </div>
          <nav id="primary-navigation" className={`site-navigation ${isMobileMenuOpen ? 'site-navigation--open' : ''}`} aria-label="Main navigation">
            <ul className="site-navigation__list">
              <li><a href="#hero" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
              <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
              <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
              <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="page-section hero" aria-labelledby="hero-title">
          <div className="page-container hero__content">
            <div className="hero__text">
              <p className="hero__greeting">안녕하세요.</p>
              <h1 id="hero-title" className="section-title hero__title">
                사용자 경험을 생각하며 하나씩 구현해가는 <span>Frontend Developer</span> 이다빈입니다.
              </h1>
              <p className="hero__description">
                웹디자인과 프론트엔드 개발을 배우며 HTML, CSS, JavaScript, React로 배운 내용을 직접 웹으로 만들어보고 있습니다. 사용하기 편리한 화면을 고민하며 꾸준히 성장하고 있습니다.
              </p>
              <div className="hero__actions">
                <a className="hero__button hero__button--primary" href="#projects">프로젝트 보기</a>
                <a className="hero__button hero__button--secondary" href="#contact">연락하기</a>
              </div>
            </div>

            <div className="hero__profile">
              <img
                className="hero__profile-image"
                src="/profile-placeholder.svg"
                alt="이다빈 프로필 이미지"
              />
            </div>
          </div>
        </section>
        <section id="about" className="page-section" aria-labelledby="about-title">
          <div className="page-container about">
            <div className="about__intro">
              <h2 id="about-title" className="section-title">ABOUT ME</h2>
              <p className="about__description">
                새로운 것을 배우고, 배운 내용을 직접 웹페이지로 만들어보는 과정을 좋아합니다.
                현재 웹디자인과 웹개발을 함께 공부하며 HTML, CSS, JavaScript, React 등을 익히고 있습니다.
                작은 프로젝트를 하나씩 직접 만들어보며 경험을 쌓고, 앞으로 더 좋은 사용자 경험을 만드는 방향으로 성장하고 싶습니다.
              </p>
            </div>

            <dl className="about__profile-card">
              <div className="about__profile-item">
                <dt>Name</dt>
                <dd>이다빈</dd>
              </div>
              <div className="about__profile-item">
                <dt>Position</dt>
                <dd>Frontend Developer</dd>
              </div>
              <div className="about__profile-item">
                <dt>Focus</dt>
                <dd>React / UI·UX / Web</dd>
              </div>
              <div className="about__profile-item">
                <dt>Location</dt>
                <dd>Seoul, Korea</dd>
              </div>
            </dl>
          </div>
        </section>
        <section id="skills" className="page-section" aria-labelledby="skills-title">
          <div className="page-container">
            <h2 id="skills-title" className="section-title">SKILLS</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <h3 className="skill-card__title">{skill.name}</h3>
                  <p className="skill-card__description">{skill.description}</p>
                  <div className="skill-card__level">
                    <span>Current stage</span>
                    <strong>{skill.status}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="page-section" aria-labelledby="projects-title">
          <div className="page-container">
            <h2 id="projects-title" className="section-title">PROJECTS</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <img className="project-card__image" src={project.image} alt={`${project.title} 미리보기`} />
                  <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>
                    <p className="project-card__tech">{project.skills}</p>
                    <div className="project-card__actions">
                      {project.demo ? (
                      <a
                        className="project-card__button project-card__button--primary"
                        href={typeof project.demo === 'string' ? project.demo : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        프로젝트 보기
                      </a>
                    ) : (
                      <span
                        className="project-card__button project-card__button--disabled"
                        aria-disabled="true"
                      >
                        프로젝트 보기 준비 중
                      </span>
                      )}
                    </div>
                    {project.demo && typeof project.demo === 'object' && (
                      <div className="project-card__versions" aria-label={`${project.title} 화면별 PDF`}>
                        <a className="project-card__button project-card__button--secondary" href={project.demo.desktop} target="_blank" rel="noopener noreferrer">PC PDF</a>
                        <a className="project-card__button project-card__button--secondary" href={project.demo.tablet} target="_blank" rel="noopener noreferrer">태블릿 PDF</a>
                        <a className="project-card__button project-card__button--secondary" href={project.demo.mobile} target="_blank" rel="noopener noreferrer">모바일 PDF</a>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="page-section" aria-labelledby="experience-title">
          <div className="page-container">
            <h2 id="experience-title" className="section-title">LEARNING JOURNEY</h2>
            <ol className="timeline">
              {experiences.map((experience) => (
                <li className="timeline__item" key={`${experience.year}-${experience.title}`}>
                  <span className="timeline__marker" aria-hidden="true" />
                  <p className="timeline__year">{experience.year}</p>
                  <div className="timeline__content">
                    <h3 className="timeline__title">{experience.title}</h3>
                    <p className="timeline__description">{experience.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="contact" className="page-section" aria-labelledby="contact-title">
          <div className="page-container contact">
            <div className="contact__intro">
              <h2 id="contact-title" className="section-title">LET&apos;S WORK TOGETHER</h2>
              <p className="contact__description">
                아직 배우는 과정에 있지만, 새로운 것을 배우고 직접 만들어보며 경험을 쌓아가고 있습니다.<br />
                포트폴리오를 보시고 궁금한 점이 있다면 편하게 연락해주세요.
              </p>
              <dl className="contact__details">
                <div className="contact__detail">
                  <dt>Email</dt>
                  <dd>이메일 주소를 추가해주세요.</dd>
                </div>
                <div className="contact__detail">
                  <dt>GitHub</dt>
                  <dd>GitHub 주소를 추가해주세요.</dd>
                </div>
              </dl>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form__field">
                <label htmlFor="name">이름</label>
                <input id="name" name="name" type="text" value={contactForm.name} onChange={handleContactChange} placeholder="이름을 입력해주세요" />
              </div>
              <div className="contact-form__field">
                <label htmlFor="email">이메일</label>
                <input id="email" name="email" type="email" value={contactForm.email} onChange={handleContactChange} placeholder="example@email.com" />
              </div>
              <div className="contact-form__field">
                <label htmlFor="message">메시지</label>
                <textarea id="message" name="message" rows="5" value={contactForm.message} onChange={handleContactChange} placeholder="메시지를 입력해주세요" />
              </div>
              <button className="contact-form__submit" type="submit">메시지 보내기</button>
            </form>
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="page-container site-footer__content">
          <p>© 2026 DaBin Portfolio</p>
          <nav className="site-footer__links" aria-label="Footer links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:your-email@example.com">Email</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioApp
