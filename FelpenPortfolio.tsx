// ─────────────────────────────────────────────
//  Felpen Friends Portfolio — Framer Code Component
//  Framer 코드 에디터에 전체 붙여넣기 하세요
// ─────────────────────────────────────────────
import { addPropertyControls, ControlType } from "framer"

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;700&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #fbf9f8; }
a { color: inherit; text-decoration: none; }
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  animation: marquee 28s linear infinite;
  white-space: nowrap;
}
.marquee-track:hover { animation-play-state: paused; }
.btn-offset {
  position: relative;
  transition: transform 0.15s ease-out;
  display: inline-block;
}
.btn-offset::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #363636;
  transform: translate(4px, 4px);
  z-index: -1;
}
.btn-offset:hover { transform: translate(-3px, -3px); }
.card-border { border: 3px solid #363636; }
.card-tilt { transition: transform 0.25s ease; }
.card-tilt:hover { transform: rotate(1deg) scale(1.02); }
`

// ── Tokens ──
const C = {
    charcoal: "#363636",
    white: "#ffffff",
    bg: "#fbf9f8",
    primary: "#143de7",
    secondary: "#ab3525",
    yellow: "#ffe173",
    muted: "rgba(54,54,54,0.4)",
    surfaceLow: "#f0eded",
}

const F = {
    sora: "'Sora', sans-serif",
    inter: "'Inter', sans-serif",
}

export default function FelpenPortfolio(props: {
    heroTitle: string
    heroDesc: string
    heroLocation: string
    email: string
    ctaLabel: string
    accentColor: string
    profileImage: string
}) {
    const {
        heroTitle = "Brand\nDesigner\n& AI Vibe\nCoder.",
        heroDesc = "AI 기술과 디자인의 시너지를 통해, 가장 효율적이고 임팩트 있는 비즈니스 솔루션을 제시합니다.",
        heroLocation = "Seoul, Korea",
        email = "felpen@naver.com",
        ctaLabel = "Hire Me",
        accentColor = C.primary,
        profileImage = "",
    } = props

    const marqueeItems = ["Illustration","Photoshop","Branding","Packaging","Character","AI","Web / App"]
    const clients = [
        { label: "ILLUSTRATION", bg: "#39FF14", color: C.charcoal },
        { label: "PHOTOSHOP",    bg: C.white,   color: C.charcoal },
        { label: "BRANDING",     bg: "#FF00FF",  color: C.charcoal },
        { label: "PACKAGING",    bg: C.white,   color: C.charcoal },
        { label: "CHARACTER",    bg: "#1A6FFF",  color: C.white },
        { label: "AI",           bg: C.white,   color: C.charcoal },
        { label: "WEB / APP",    bg: "#7B1A1A",  color: C.white },
        { label: "LOGO",         bg: C.white,   color: C.charcoal },
    ]
    const featured = [
        { title: "Illustration",    cat: "Illustration, 2025",   bg: "#D4CFC8" },
        { title: "AI Dashboard",    cat: "AI Vibe Coding, 2025", bg: "#BFB8AF" },
        { title: "Character",       cat: "Brand Design, 2024",   bg: "#C8C0B8" },
        { title: "Logo System",     cat: "Brand Design, 2024",   bg: "#E2DDD6" },
    ]
    const moreWork = [
        { label: "Packaging",  bg: "#D0CABC" },
        { label: "Landing",    bg: "#C4BEB6" },
        { label: "AI Brand",   bg: "#DAD4CA" },
        { label: "Editorial",  bg: "#B8B0A8" },
        { label: "Type",       bg: "#CEC8C0" },
        { label: "Motion",     bg: "#D8D2C8" },
        { label: "Vibe UI",    bg: "#C0BCAF" },
        { label: "Web Design", bg: "#E2DDD6" },
    ]

    return (
        <div style={{ fontFamily: F.inter, background: C.bg, color: C.charcoal, overflowX: "hidden", width: "100%" }}>
            <style>{FONTS}</style>

            {/* ── Nav ── */}
            <nav style={{
                position: "sticky", top: 0, zIndex: 100,
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "16px 64px",
                background: "rgba(251,249,248,0.95)", backdropFilter: "blur(10px)",
                borderBottom: `2px solid ${C.charcoal}`,
            }}>
                <span style={{ fontFamily: F.sora, fontWeight: 900, fontSize: 32, letterSpacing: "-0.02em" }}>
                    FELPEN FRIENDS
                </span>
                <div style={{ display: "flex", gap: 4 }}>
                    {["Work","More","About","Contact"].map(n => (
                        <a key={n} href={`#${n.toLowerCase()}`} style={{
                            padding: "8px 16px", fontFamily: F.inter, fontWeight: 700,
                            fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase",
                        }}>{n}</a>
                    ))}
                </div>
                <a href={`mailto:${email}`} className="btn-offset" style={{
                    background: accentColor, color: C.white,
                    padding: "8px 24px", fontFamily: F.inter, fontWeight: 700,
                    fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase",
                    border: `2px solid ${C.charcoal}`,
                }}>
                    {ctaLabel}
                </a>
            </nav>

            {/* ── Hero ── */}
            <section style={{
                minHeight: "85vh", display: "grid", gridTemplateColumns: "7fr 5fr",
                alignItems: "center", gap: 32, padding: "64px 64px",
            }}>
                <div>
                    <span style={{
                        display: "inline-block", background: C.yellow, color: C.charcoal,
                        padding: "4px 12px", border: `2px solid ${C.charcoal}`,
                        fontFamily: F.inter, fontWeight: 700, fontSize: 11,
                        letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24,
                    }}>{heroLocation}</span>

                    <h1 style={{
                        fontFamily: F.sora, fontWeight: 800, fontSize: 88,
                        lineHeight: 0.92, letterSpacing: "-0.04em", marginBottom: 32,
                        whiteSpace: "pre-line",
                    }}>{heroTitle}</h1>

                    <p style={{
                        fontFamily: F.inter, fontSize: 16, color: "rgba(54,54,54,0.6)",
                        maxWidth: 420, marginBottom: 40, lineHeight: 1.7,
                    }}>{heroDesc}</p>

                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                        {[
                            { label: "View Work", bg: C.secondary, color: C.white },
                            { label: "Start a Project", bg: C.bg, color: C.charcoal },
                        ].map(b => (
                            <a key={b.label} className="btn-offset" style={{
                                background: b.bg, color: b.color,
                                padding: "14px 32px", fontFamily: F.inter, fontWeight: 700,
                                fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase",
                                border: `2px solid ${C.charcoal}`,
                            }}>{b.label}</a>
                        ))}
                    </div>
                </div>

                <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                    <div className="card-border" style={{
                        width: "100%", maxWidth: 360, aspectRatio: "1",
                        background: C.white, transform: "rotate(2deg)", overflow: "hidden",
                        position: "relative",
                    }}>
                        {profileImage ? (
                            <img src={profileImage} alt="Felpen Friends"
                                style={{ width: "100%", height: "auto", transform: "scale(2.2) translateY(15%)", transformOrigin: "center top", display: "block" }} />
                        ) : (
                            <div style={{
                                width: "100%", height: "100%", background: C.yellow,
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <span style={{ fontFamily: F.sora, fontWeight: 900, fontSize: 12, opacity: 0.4, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                    Your<br/>Photo<br/>Here
                                </span>
                            </div>
                        )}
                    </div>
                    <div style={{
                        position: "absolute", top: -16, right: 8,
                        width: 72, height: 72, borderRadius: "50%",
                        background: accentColor, color: C.white,
                        border: `2px solid ${C.charcoal}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: F.sora, fontWeight: 900, fontSize: 10,
                        textAlign: "center", textTransform: "uppercase", lineHeight: 1.3,
                    }}>I am<br/>Felpen</div>
                </div>
            </section>

            {/* ── Marquee ── */}
            <div style={{ background: C.charcoal, padding: "20px 0", borderTop: `2px solid ${C.charcoal}`, borderBottom: `2px solid ${C.charcoal}`, overflow: "hidden" }}>
                <div className="marquee-track" style={{ gap: 0 }}>
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span key={i} style={{ fontFamily: F.sora, fontWeight: 700, fontSize: 22, color: C.white, textTransform: "uppercase", margin: "0 24px" }}>
                            {item}
                            <span style={{ color: "rgba(255,255,255,0.2)", marginLeft: 24 }}>/</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Selected Clients ── */}
            <section style={{ padding: "48px 64px 0" }}>
                <p style={{ fontFamily: F.sora, fontWeight: 900, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, marginBottom: 16 }}>Selected Clients</p>
                <div style={{
                    display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                    borderLeft: `4px solid ${C.charcoal}`, borderTop: `4px solid ${C.charcoal}`,
                }}>
                    {clients.map((c, i) => (
                        <div key={i} style={{
                            background: c.bg, color: c.color,
                            borderRight: `4px solid ${C.charcoal}`, borderBottom: `4px solid ${C.charcoal}`,
                            padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "center",
                            fontFamily: F.sora, fontWeight: 800, fontSize: 16, letterSpacing: "0.02em",
                        }}>{c.label}</div>
                    ))}
                </div>
            </section>

            {/* ── Featured Work ── */}
            <section id="work" style={{ padding: "80px 64px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
                    <div>
                        <p style={{ fontFamily: F.inter, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.secondary, marginBottom: 8 }}>Selected Projects</p>
                        <h2 style={{ fontFamily: F.sora, fontWeight: 800, fontSize: 48, letterSpacing: "-0.03em", lineHeight: 1 }}>Featured Work</h2>
                    </div>
                    <p style={{ fontFamily: F.inter, fontSize: 14, color: C.muted, maxWidth: 240 }}>Brand identity, AI interfaces, and digital experiences.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                    {featured.map((p, i) => (
                        <div key={i} className="card-tilt" style={{ cursor: "pointer" }}>
                            <div className="card-border" style={{ marginBottom: 16, overflow: "hidden", height: 400, background: p.bg }} />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                <h3 style={{ fontFamily: F.sora, fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em" }}>{p.title}</h3>
                                <span style={{ fontFamily: F.inter, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: `2px solid ${C.charcoal}` }}>View →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── More Work ── */}
            <section id="more" style={{ padding: "80px 64px", background: C.surfaceLow, borderTop: `2px solid ${C.charcoal}`, borderBottom: `2px solid ${C.charcoal}` }}>
                <div style={{ textAlign: "center", marginBottom: 48 }}>
                    <h2 style={{ fontFamily: F.sora, fontWeight: 800, fontSize: 48, letterSpacing: "-0.03em" }}>More Work</h2>
                    <p style={{ fontFamily: F.inter, fontSize: 14, color: C.muted, marginTop: 8 }}>A deeper look into the studio's projects.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
                    {moreWork.map((w, i) => (
                        <div key={i} className="card-border" style={{ background: C.white, overflow: "hidden", cursor: "pointer" }}>
                            <div style={{ aspectRatio: "1", background: w.bg }} />
                            <p style={{ fontFamily: F.inter, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px", borderTop: `2px solid ${C.charcoal}` }}>{w.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Footer ── */}
            <footer id="contact" style={{ background: C.charcoal, color: C.white, padding: "80px 64px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
                    <h2 style={{ fontFamily: F.sora, fontWeight: 800, fontSize: 72, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
                        FELPEN<br/>FRIENDS
                    </h2>
                    <div style={{ textAlign: "right" }}>
                        <a href={`mailto:${email}`} className="btn-offset" style={{
                            background: C.secondary, color: C.white, display: "inline-block",
                            padding: "14px 32px", fontFamily: F.inter, fontWeight: 700,
                            fontSize: 13, border: "2px solid rgba(255,255,255,0.3)",
                            marginBottom: 20,
                        }}>{email}</a>
                        <div style={{ display: "flex", gap: 20, justifyContent: "flex-end" }}>
                            {["Instagram","Behance","LinkedIn"].map(s => (
                                <a key={s} style={{ fontFamily: F.inter, fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{s}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
                    <span style={{ fontFamily: F.sora, fontWeight: 900, fontSize: 16 }}>FELPEN FRIENDS</span>
                    <p style={{ fontFamily: F.inter, fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em" }}>© 2025 Felpen Friends. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

FelpenPortfolio.defaultProps = {
    heroTitle: "Brand\nDesigner\n& AI Vibe\nCoder.",
    heroDesc: "AI 기술과 디자인의 시너지를 통해, 가장 효율적이고 임팩트 있는 비즈니스 솔루션을 제시합니다.",
    heroLocation: "Seoul, Korea",
    email: "felpen@naver.com",
    ctaLabel: "Hire Me",
    accentColor: "#143de7",
    profileImage: "",
}

addPropertyControls(FelpenPortfolio, {
    heroTitle: {
        type: ControlType.String,
        title: "Hero 제목",
        displayTextArea: true,
    },
    heroDesc: {
        type: ControlType.String,
        title: "Hero 설명",
        displayTextArea: true,
    },
    heroLocation: {
        type: ControlType.String,
        title: "위치",
    },
    email: {
        type: ControlType.String,
        title: "이메일",
    },
    ctaLabel: {
        type: ControlType.String,
        title: "버튼 텍스트",
    },
    accentColor: {
        type: ControlType.Color,
        title: "포인트 색상",
    },
    profileImage: {
        type: ControlType.Image,
        title: "프로필 이미지",
    },
})
