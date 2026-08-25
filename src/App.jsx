import { useState } from 'react'
import './App.css'

const skills = [
  { name: 'HTML', description: '시맨틱한 구조를 바탕으로 웹 페이지를 구성합니다.', level: 90 },
  { name: 'CSS', description: '반응형 레이아웃과 깔끔한 화면을 구현합니다.', level: 85 },
  { name: 'JavaScript', description: '사용자와 상호작용하는 기능을 개발합니다.', level: 80 },
  { name: 'React', description: '컴포넌트 기반의 웹 애플리케이션을 만듭니다.', level: 80 },
  { name: 'Vite', description: '빠른 개발 환경을 구성하고 활용합니다.', level: 75 },
  { name: 'Figma', description: '사용자 흐름을 고려한 화면을 설계합니다.', level: 75 },
  { name: 'Git', description: '버전 관리로 작업 내용을 체계적으로 관리합니다.', level: 70 },
  { name: 'GitHub', description: '협업과 프로젝트 공유를 위해 활용합니다.', level: 70 },
]

const projects = [
  {
    title: 'React Portfolio',
    description: 'React 컴포넌트 구조를 활용해 만든 개인 포트폴리오 웹사이트입니다.',
    skills: 'React · CSS · Vite',
    image: '/projects/react-portfolio.svg',
    demo: null,
    github: null,
  },
  {
    title: 'Shopping Web App',
    description: '상품을 탐색하고 장바구니를 관리할 수 있는 쇼핑 웹 애플리케이션입니다.',
    skills: 'JavaScript · React · API',
    image: '/projects/shopping-web-app.svg',
    demo: null,
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
    title: 'React Frontend Project',
    description: 'React와 Vite를 활용한 웹 애플리케이션 제작',
  },
  {
    year: '2025',
    title: 'UI/UX Design Project',
    description: 'Figma를 활용한 웹앱 UI/UX 기획 및 디자인',
  },
  {
    year: '2024',
    title: 'Web Publishing',
    description: 'HTML, CSS, JavaScript 기반 반응형 웹 제작',
  },
]

function PortfolioApp() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                사용자 경험을 생각하며 구현하는 <span>Frontend Developer</span> 이다빈입니다.
              </h1>
              <p className="hero__description">
                React와 JavaScript를 활용하여 사용하기 편리하고 직관적인 웹 서비스를 만드는 것을 좋아합니다.
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
                새로운 기술을 배우고 실제 결과물로 구현하는 것을 좋아하는 프론트엔드 개발자입니다.
                UI/UX 디자인부터 React 기반 웹 개발까지 사용자 관점에서 고민하며 작업합니다.
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
                <dd>React / UI·UX / AI</dd>
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
                    <span>Proficiency</span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <progress
                    className="skill-card__progress"
                    value={skill.level}
                    max="100"
                    aria-label={`${skill.name} 숙련도 ${skill.level}%`}
                  >
                    {skill.level}%
                  </progress>
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
                        <a className="project-card__button project-card__button--primary" href={project.demo} target="_blank" rel="noopener noreferrer">프로젝트 보기</a>
                      ) : (
                        <span className="project-card__button project-card__button--disabled" aria-disabled="true">프로젝트 보기 준비 중</span>
                      )}
                      {project.github ? (
                        <a className="project-card__button project-card__button--secondary" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                      ) : (
                        <span className="project-card__button project-card__button--disabled" aria-disabled="true">GitHub 준비 중</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="page-section" aria-labelledby="experience-title">
          <div className="page-container">
            <h2 id="experience-title" className="section-title">EXPERIENCE</h2>
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
                프로젝트와 협업에 관심이 있으시면 언제든지 연락해주세요.
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
          <p>© 2026 DaBin Portfolio. All Rights Reserved.</p>
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
