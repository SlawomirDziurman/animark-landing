import { useState } from 'react'
import './App.css'

type IconName = 'arrow' | 'play' | 'spark' | 'flame' | 'user' | 'menu'

const Icon = ({ name }: { name: IconName }) => {
  if (name === 'arrow') return <svg aria-hidden="true" viewBox="0 0 18 18"><path d="M3 9h11M9.5 4.5 14 9l-4.5 4.5" /></svg>
  if (name === 'play') return <svg aria-hidden="true" viewBox="0 0 18 18"><path d="m7 4 6 5-6 5V4Z" fill="currentColor" stroke="none" /></svg>
  if (name === 'spark') return <svg aria-hidden="true" viewBox="0 0 18 18"><path d="m9 1 1.2 5.8L16 8l-5.8 1.2L9 15l-1.2-5.8L2 8l5.8-1.2L9 1Z" /></svg>
  if (name === 'flame') return <svg aria-hidden="true" viewBox="0 0 18 18"><path d="M11.8 8.2c.1-2.1-1.2-4.4-3.3-6.2.1 2.6-1.3 3.4-2.4 4.8-1 1.3-1.5 2.5-1.2 4 .4 2 2.1 3.2 4.3 3.2 2.5 0 4.3-1.7 4.3-4.2 0-1.1-.4-2.2-1.7-3.5Zm-2.5 4.3c-.8 0-1.4-.6-1.4-1.4 0-.6.4-1.2 1.2-2 .7.6 1.4 1.3 1.4 2 0 .8-.5 1.4-1.2 1.4Z" /></svg>
  if (name === 'user') return <svg aria-hidden="true" viewBox="0 0 18 18"><circle cx="9" cy="6" r="2.7" /><path d="M3.5 15c.8-2.3 2.6-3.4 5.5-3.4s4.7 1.1 5.5 3.4" /></svg>
  return <svg aria-hidden="true" viewBox="0 0 18 18"><path d="M3 5h12M3 9h12M3 13h12" /></svg>
}

const news = [
  { tag: 'Premiera', date: '12.06.2024', title: 'Najbardziej wyczekiwane anime tego lata', color: 'coral', mark: '01' },
  { tag: 'Ranking', date: '08.06.2024', title: '10 bohaterów, których nie da się zapomnieć', color: 'violet', mark: '02' },
  { tag: 'Ciekawostka', date: '02.06.2024', title: 'Jak powstaje opening, który nuci cały świat?', color: 'mint', mark: '03' },
]

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Animark, strona główna"><span className="brand-mark"><Icon name="spark" /></span><span>animark<span className="brand-dot">.</span></span></a>
        <nav className={`desktop-nav ${isMenuOpen ? 'menu-open' : ''}`} aria-label="Główna nawigacja"><a href="#o-nas">O nas</a><a href="#jaka-to-melodia">Jaka to melodia</a><a href="#ranking">Ranking</a><a href="#nowosci">Nowości</a></nav>
        <a className="header-cta" href="/sign-in">Załóż konto <Icon name="arrow" /></a>
        <button className="menu-button" type="button" aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}><Icon name="menu" /></button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> Społeczność fanów anime</p><h1>Twoje anime.<br /><em>Twoja historia.</em></h1><p className="hero-lead">Odkrywaj, słuchaj i dziel się tym, co w anime kochasz najbardziej. Animark to miejsce, w którym każdy fan znajdzie swój kawałek świata.</p><div className="hero-actions"><a className="primary-button" href="/sign-in">Dołącz do nas <Icon name="arrow" /></a><a className="text-link" href="#o-nas">Poznaj Animark <span>↓</span></a></div><div className="hero-note"><span className="avatars"><i>あ</i><i>ア</i><i>✦</i></span><span><strong>+2 400</strong> fanów już tu jest</span></div></div>
          <div className="hero-visual" aria-label="Podgląd profilu społeczności Animark"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-card main-profile"><div className="card-topline"><span className="mini-logo"><Icon name="spark" /></span><span>animark / profil</span><span className="card-menu">•••</span></div><div className="profile-art"><div className="sun" /><div className="mountain mountain-back" /><div className="mountain mountain-front" /><span className="art-kanji">夢</span></div><div className="profile-info"><div><strong>mika_waifu</strong><span>kolekcjonerka openingów</span></div><span className="profile-level">lvl. 24</span></div><div className="profile-stats"><span><b>128</b> anime</span><span><b>42</b> recenzje</span><span><b>16</b> znajomych</span></div></div><div className="floating-card now-playing"><span className="album-art"><span>夜</span></span><span><small>TERAZ GRA</small><strong>Night Parade</strong><i>fictional band</i></span><button className="play-mini" type="button" aria-label={isPlaying ? 'Pauza' : 'Odtwórz'} onClick={() => setIsPlaying(!isPlaying)}><Icon name={isPlaying ? 'flame' : 'play'} /></button></div><div className="floating-card badge-card"><span className="badge-icon"><Icon name="flame" /></span><span><small>NOWE ODZNAKI</small><strong>Anime znawca</strong></span></div><span className="visual-star star-one">✦</span><span className="visual-star star-two">✧</span></div>
        </section>

        <section className="section about-section" id="o-nas"><div className="section-heading"><p className="eyebrow">01 / O nas</p><h2>Więcej niż lista.<br /><em>To Twoja społeczność.</em></h2></div><div className="about-content"><p className="section-intro">Animark powstał z miłości do historii, które zostają z nami na długo po napisach końcowych. Zbieramy w jednym miejscu wszystko, co sprawia, że świat anime jest tak wyjątkowy.</p><div className="feature-grid"><article><span className="feature-number">01</span><span className="feature-icon"><Icon name="spark" /></span><h3>Odkrywaj</h3><p>Znajduj nowe tytuły i historie dopasowane do Twojego gustu.</p></article><article><span className="feature-number">02</span><span className="feature-icon"><Icon name="user" /></span><h3>Dziel się</h3><p>Twórz swoją kolekcję i poznawaj ludzi, którzy czują tak samo.</p></article><article><span className="feature-number">03</span><span className="feature-icon"><Icon name="flame" /></span><h3>Rywalizuj</h3><p>Zbieraj punkty, zdobywaj odznaki i pnąć się w rankingu.</p></article></div></div></section>

        <section className="section melody-section" id="jaka-to-melodia"><div className="melody-copy"><p className="eyebrow">02 / Jaka to melodia</p><h2>Rozpoznasz po<br /><em>pierwszych nutach?</em></h2><p>Sprawdź swoją wiedzę w naszej muzycznej zabawie. Zgadnij opening, zanim skończy się czas i pokaż, że jesteś prawdziwym otaku.</p><a className="outline-button" href="/sign-in">Zagraj teraz <Icon name="arrow" /></a></div><div className="melody-game"><div className="game-header"><span><span className="live-dot" /> TRWA GRA</span><span>Runda 04 / 10</span></div><div className={`record ${isPlaying ? 'record-playing' : ''}`}><div className="record-label">アニメ<br /><small>ANIMARK</small></div></div><div className="game-progress"><span className="progress-time">00:14</span><div><span style={{ width: isPlaying ? '68%' : '34%' }} /></div><span>00:30</span></div><div className="game-question">Jaki to opening?<strong>„Gurenge”</strong></div><button className="game-play" type="button" onClick={() => setIsPlaying(!isPlaying)}><Icon name={isPlaying ? 'flame' : 'play'} /> {isPlaying ? 'Odtwarzanie...' : 'Odtwórz fragment'}</button></div></section>

        <section className="section ranking-section" id="ranking"><div className="ranking-heading"><div><p className="eyebrow">03 / Ranking zasłużonych użytkowników</p><h2>Kto dziś jest<br /><em>na szczycie?</em></h2></div><a className="text-link" href="/sign-in">Zobacz pełny ranking <Icon name="arrow" /></a></div><div className="ranking-table"><div className="table-head"><span>#</span><span>UŻYTKOWNIK</span><span>PUNKTY</span><span>ODZNAKI</span><span>STATUS</span></div><div className="rank-row rank-first"><span className="rank-number">01</span><span className="user-cell"><span className="user-avatar avatar-pink">ゆ</span><span><strong>yuki_chan</strong><small>od 2023</small></span></span><span className="points">9 840 <small>pkt</small></span><span className="badge-list"><i>✦</i><i>♢</i><i>炎</i></span><span className="status status-up">↑ 2 miejsca</span></div><div className="rank-row"><span className="rank-number">02</span><span className="user-cell"><span className="user-avatar avatar-blue">カ</span><span><strong>kaito.exe</strong><small>od 2022</small></span></span><span className="points">9 210 <small>pkt</small></span><span className="badge-list"><i>✦</i><i>♢</i></span><span className="status status-same">— bez zmian</span></div><div className="rank-row"><span className="rank-number">03</span><span className="user-cell"><span className="user-avatar avatar-yellow">花</span><span><strong>hanako_san</strong><small>od 2024</small></span></span><span className="points">8 765 <small>pkt</small></span><span className="badge-list"><i>✦</i></span><span className="status status-up">↑ 5 miejsc</span></div></div></section>

        <section className="section news-section" id="nowosci"><div className="ranking-heading"><div><p className="eyebrow">04 / Nowości ze świata anime</p><h2>Co nowego<br /><em>w uniwersum?</em></h2></div><a className="text-link" href="/sign-in">Wszystkie artykuły <Icon name="arrow" /></a></div><div className="news-grid">{news.map((item) => <article className="news-card" key={item.mark}><div className={`news-art ${item.color}`}><span>{item.mark}</span><b>アニメ</b></div><div className="news-meta"><span>{item.tag}</span><time>{item.date}</time></div><h3>{item.title}</h3><a href="/sign-in" aria-label={`Czytaj: ${item.title}`}>Czytaj więcej <Icon name="arrow" /></a></article>)}</div></section>

        <section className="join-banner"><div><p className="eyebrow">Zaczynamy?</p><h2>Twoja następna<br /><em>historia czeka.</em></h2></div><a className="primary-button light-button" href="/sign-in">Załóż darmowe konto <Icon name="arrow" /></a><span className="banner-spark">✦</span></section>
      </main>
      <footer><a className="brand" href="#top"><span className="brand-mark"><Icon name="spark" /></span><span>animark<span className="brand-dot">.</span></span></a><span>miejsce dla Twojej historii</span><span>© 2024 Animark / placeholder</span></footer>
    </div>
  )
}

export default App
