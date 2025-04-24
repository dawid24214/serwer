// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    return (
        <div className="app">
            <section className="wrapper">
                <div className="left-section">
                    <div className="logo">GroszekDeveloperWeb</div>
                    <h1>Śledź, planuj i osiągaj swoje cele finansowe</h1>
                </div>
                <div className="right-section">
                    <img src="Zrzut ekranu 2025-04-23 173119.png" alt="Podgląd aplikacji finansowej" />
                </div>
            </section>

            <section className="section-two">
                <div className="text-box">
                    <h2>Czym jest GroszekDeveloperWeb?</h2>
                    <p>
                        Wyróżnij się na tle konkurencji — opisz swoje unikalne cechy,
                        filozofię działania, otrzymane nagrody lub inne atuty. Potraktuj to jak swoją wizytówkę,
                        która przyciągnie uwagę odbiorcy.
                    </p>
                </div>
                <div>
                    <img
                        src="Zrzut ekranu 2025-04-23 174337.png"
                        alt="Makieta telefonu na laptopie"
                    />
                </div>
            </section>

            <section className="section-three">
                <div>
                    <h2>Funkcje</h2>
                </div>
                <div className="features-box">
                    <div className="features-list">
                        <div className="feature-item">
                            <i>👤</i>
                            <div>
                                <strong>Przyjazny dla użytkownika</strong>
                                <p>Opisz tutaj kluczową cechę aplikacji lub oprogramowania.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <i>⚙️</i>
                            <div>
                                <strong>Płynna integracja</strong>
                                <p>Opisz tutaj kluczową cechę aplikacji lub oprogramowania.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <i>🛡️</i>
                            <div>
                                <strong>Bezpieczne i niezawodne</strong>
                                <p>Opisz tutaj kluczową cechę aplikacji lub oprogramowania.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-four">
                <h2>Opinie</h2>
                <div className="testimonials">
                    {[
                        { name: "Isla", img: "avatar1.png" },
                        { name: "Mason", img: "avatar2.png" },
                        { name: "Jonah", img: "avatar3.png" }
                    ].map(({ name, img }, index) => (
                        <div className="testimonial" key={index}>
                            <img src={img} alt={name} />
                            <strong>{name}</strong>
                            <p>
                                Opinie to krótkie cytaty od osób, które kochają Twoją markę.
                                Świetny sposób na przekonanie innych do Twoich usług.
                            </p>
                            <input type="file" accept="image/*" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-five">
                <div style={{ maxWidth: "50%" }}>
                    <h2>Poznaj twórców</h2>
                    <p>
                        Poznaj historię firmy, jej misję, wizję i filozofię działania. Przedstaw tożsamość marki swoim partnerom i klientom, pokazując ludzi stojących za projektem.
                    </p>
                </div>
                <div>
                    <img
                        src="Zrzut ekranu 2025-04-23 174945.png"
                        alt="Zespół przedstawiony na ekranie laptopa"
                        style={{ borderRadius: "20px", maxWidth: "300px" }}
                    />
                </div>
            </section>

            <section className="section-six" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "radial-gradient(circle at bottom left, #ff9900, #000), radial-gradient(circle at top right, #1e90ff, #000)", borderRadius: "30px", padding: "40px", color: "white" }}>
                <div style={{ flex: 1 }}>
                    <h2>Kontakt</h2>
                </div>
                <div style={{ flex: 1 }}>
                    <p>
                        <strong>Telefon</strong>
                        <br />
                        (123) 456 7890
                    </p>
                    <p>
                        <strong>Email</strong>
                        <br />
                        <a href="mailto:hello@reallygreatsite.com" style={{ color: "#fff", textDecoration: "underline" }}>
                            hello@reallygreatsite.com
                        </a>
                    </p>
                    <p>
                        <strong>Social</strong>
                        <br />
                        <a href="#" style={{ color: "white", marginRight: "10px", fontSize: "1.5em" }}>📘</a>
                        <a href="#" style={{ color: "white", fontSize: "1.5em" }}>📸</a>
                    </p>
                </div>
            </section>
        </div>
    );
};
export default App
