import { useEffect, useState } from 'react'
import './App.css'

const skills = [
  {
    name: 'HTML',
    description: '시맨틱 마크업을 기반으로 웹페이지 구조를 구성합니다.',
    status: 'Frontend'
  },

  {
    name: 'CSS',
    description: '레이아웃과 미디어 쿼리를 활용해 반응형 화면을 구현합니다.',
    status: 'Frontend'
  },

  {
    name: 'JavaScript',
    description: '기본 문법과 이벤트 처리를 활용해 웹페이지의 동작을 구현합니다.',
    status: 'Frontend'
  },

  {
    name: 'React',
    description: '컴포넌트 기반으로 UI를 구성하고 상태를 활용한 기능을 구현합니다.',
    status: 'Frontend'
  },

  {
    name: 'Vite',
    description: 'Vite 기반 React 프로젝트를 구성하고 개발 환경을 실행합니다.',
    status: 'Development'
  },

  {
    name: 'Figma',
    description: 'UI 디자인, 컴포넌트, 오토 레이아웃과 프로토타입을 활용해 반응형 화면을 설계합니다.',
    status: 'UI/UX'
  },

  {
    name: 'Git',
    description: 'Git을 활용해 프로젝트의 변경 사항과 버전을 관리합니다.',
    status: 'Version Control'
  },

  {
    name: 'GitHub',
    description: '프로젝트 저장소를 관리하고 작업물을 배포·공유합니다.',
    status: 'Version Control'
  },
];

const projects = [
  {
    title: '투게더로그',
    skills: 'React · CSS · Vite',
    description: '함께 정하고, 함께 기록하는 우리만의 모임 공간',
    image: `${import.meta.env.BASE_URL}projects/togetherlog-preview.png`,

   
    // Figma Prototype
    figma: {
      desktop: 'https://www.figma.com/proto/WF4huZJGtQ54CMhePhpUI1/%ED%88%AC%EA%B2%8C%EB%8D%94-%EB%A1%9C%EA%B7%B8?node-id=135-3&viewport=1075%2C-35%2C0.1&t=xIso545nccYsiDyw-1&scaling=min-zoom&content-scaling=fixed&page-id=135%3A2',

      tablet: 'https://www.figma.com/proto/WF4huZJGtQ54CMhePhpUI1/%ED%88%AC%EA%B2%8C%EB%8D%94-%EB%A1%9C%EA%B7%B8?node-id=178-494&viewport=1075%2C-35%2C0.1&t=xIso545nccYsiDyw-1&scaling=min-zoom&content-scaling=fixed&page-id=135%3A2',

      mobile: 'https://www.figma.com/proto/WF4huZJGtQ54CMhePhpUI1/%ED%88%AC%EA%B2%8C%EB%8D%94-%EB%A1%9C%EA%B7%B8?node-id=184-482&viewport=1075%2C-35%2C0.1&t=xIso545nccYsiDyw-1&scaling=min-zoom&content-scaling=fixed&page-id=135%3A2',
    },

    github: null,
  },
  {
  title: '토끼와 강아지의 하루 | AI 브이로그',
  description: 'AI 영상 도구로 장면을 제작하고, 만남부터 귀가까지 이어지는 숏폼 브이로그를 30초·60초 버전으로 편집했습니다.',
  skills: 'AI 영상 제작 · 스토리보드 · 영상 편집',
  image: `${import.meta.env.BASE_URL}projects/rabbit-dog-vlog.png`,
  videos: {
  short: `${import.meta.env.BASE_URL}videos/rabbit-dog-30s.mp4`,
  full: `${import.meta.env.BASE_URL}videos/rabbit-dog-60s.mp4`,
  },
  plan: `${import.meta.env.BASE_URL}projects/rabbit-dog-plan.pdf`,
  demo: null,
  github: null,
},
{
  title: '온결 | 스킨케어 웹사이트',
  description: '자연과 과학을 결합한 스킨케어 브랜드 온결의 반응형 웹사이트를 기획하고 디자인했습니다.',
  skills: 'Figma · UI/UX 디자인 · 반응형 웹',
  image: `${import.meta.env.BASE_URL}projects/public-projects-ongyeol.png`,
  demo: null,
  github: null,
  figma: {
  desktop:'https://www.figma.com/design/ncqjhrdNkxC2v7TtFXLKzA/%EC%98%A8%EA%B2%B0---%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=1-5&t=IL2TOyiiBYj3iOax-1',
  tablet: 'https://www.figma.com/design/ncqjhrdNkxC2v7TtFXLKzA/%EC%98%A8%EA%B2%B0---%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=1-11259&t=IL2TOyiiBYj3iOax-1',
  mobile: 'https://www.figma.com/design/ncqjhrdNkxC2v7TtFXLKzA/%EC%98%A8%EA%B2%B0---%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=1-13878&t=IL2TOyiiBYj3iOax-1',
  detail: 'https://www.figma.com/design/ncqjhrdNkxC2v7TtFXLKzA/%EC%98%A8%EA%B2%B0---%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=1-11258&t=IL2TOyiiBYj3iOax-1',
},
},
]

const experiences = [
  {
    year: '2026.07',
    title: 'Figma · UI/UX Design',
    description:
      '프레임과 레이아웃 기초부터 Auto Layout, Component, Variable, Grid, Prototype 등을 학습하며 반응형 웹 UI 설계를 이어가고 있습니다.',
  },
  {
    year: '2026.07',
    title: 'HTML · CSS / Web Publishing',
    description:
      'HTML 시맨틱 구조와 CSS, Flexbox, Grid, 미디어 쿼리를 학습하며 다양한 반응형 웹페이지를 직접 구현했습니다.',
  },
  {
    year: '2026.08',
    title: 'JavaScript',
    description:
      '데이터 타입, 조건문, 반복문, 배열, 함수, 객체와 DOM 등을 학습하며 웹 인터랙션 구현의 기초를 익혔습니다.',
  },
  {
    year: '2026.08',
    title: 'React',
    description:
      'Component, Props, State, Router, CRUD와 로그인·회원가입 기능 등을 학습하며 React 기반 웹 기능을 구현하고 있습니다.',
  },
  {
    year: '2026.09',
    title: 'Team Project',
    description:
      'Figma를 활용한 UI 설계와 웹 개발을 연결해 팀 프로젝트를 진행하며 화면 설계, 기능 구현, 협업 경험을 쌓고 있습니다.',
  },
];

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
                src={`${import.meta.env.BASE_URL}frontend-illustration.png`}
                alt="프론트엔드 개발자 일러스트"
              />
            </div>
          </div>
        </section>
        <section id="about" className="page-section" aria-labelledby="about-title">
          <div className="page-container about">
            <div className="about__intro">
              <h2 id="about-title" className="section-title">ABOUT ME</h2>
              <p className="about__description">
              사용자 경험을 고려한 UI를 설계하고 웹 화면으로 구현합니다.<br />
              Figma를 활용한 UI/UX 디자인과 React 기반의 프론트엔드 개발을 경험하고 있습니다.<br />
              직접 기획하고 구현하며 디자인과 개발을 연결하는 프로젝트를 만들어가고 있습니다.
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
                {typeof project.demo === 'string' && (
                  <a
                    className="project-card__button project-card__button--primary"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    프로젝트 보기
                  </a>
                )}
                {project.videos && (
                <>
                  <a
                    className="project-card__button project-card__button--secondary"
                    href={project.videos.short}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    30초 영상
                  </a>
                  <a
                    className="project-card__button project-card__button--secondary"
                    href={project.videos.full}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    60초 영상
                  </a>
                     {project.plan && (
                  <a
                    className="project-card__button project-card__button--secondary"
                    href={project.plan}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    영상 기획서
                  </a>
                )}

              </>
              )}
              </div>
             
              {project.figma && (
            <div
              className="project-card__versions"
              aria-label={`${project.title} 화면별 Figma`}
            >
              <a
                className="project-card__button project-card__button--secondary"
                href={project.figma.desktop}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.figma.detail ? '마이페이지 PC' : 'PC Figma'}
              </a>

              <a
                className="project-card__button project-card__button--secondary"
                href={project.figma.tablet}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.figma.detail ? '마이페이지 태블릿' : '태블릿 Figma'}
              </a>

              <a
                className="project-card__button project-card__button--secondary"
                href={project.figma.mobile}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.figma.detail ? '마이페이지 모바일' : '모바일 Figma'}
              </a>

              {project.figma.detail && (
                <a
                  className="project-card__button project-card__button--secondary"
                  href={project.figma.detail}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  비타민 C 상세페이지 PC
                </a>
              )}
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
                  <dd>dl.dabin02@gmail.com</dd>
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
            <a href="mailto:dl.dabin02@gmail.com">Email</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioApp