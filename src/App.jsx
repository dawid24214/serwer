
import './App.css'
import logo from "./assets/1sesia.png";
import roboty from "./assets/roboty_komputer.png";
import funkcje from "./assets/funkcje.png";
import {useState} from "react";
import  defaultavatar from './assets/profilowy.png';
import opinia1 from './assets/opinia1.png'
import opinia2 from './assets/opinia2.png'
import opinia3 from './assets/opinia3.png'
import twórca from './assets/twórca.png'
import { FaFacebook, FaInstagram ,FaEnvelope, FaPhone} from "react-icons/fa";

const App = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const [opinie, setOpinie] = useState([
        {
            name: "Paweł",
            avatar: defaultavatar,
            text: "Świetna obsługa i profesjonalne podejście!",
            photos:[opinia1]
        },
        {
            name: "Ukasz",
            avatar: defaultavatar,
            text: "Polecam z całego serca!",
            photos:[opinia2]
        },
        {
            name: "K.W",
            avatar: defaultavatar,
            text: "Polecam z całego serca!",
            photos:[opinia3]
        }
    ]);

    const [newReview, setNewReview] = useState({
        name: "",
        text: "",
        photos: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpinie([...opinie, { ...newReview, avatar: defaultavatar }]);
        setNewReview({ name: "", text: "", photos: [] });
    };

    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
        );
        setNewReview({ ...newReview, photos: files });
    };







    return (
        <div className="app">
            <section className="wrapper">
                <div className="left-section">
                    <div className="logo"><strong>Dawid</strong>
                        Grochowski<br/> Web<strong>Developer</strong></div>
                    <h1>Dlaczego warto mi zaufać przy projektowaniu strony wizytówki?</h1>
                </div>
                <div className="right-section">
                    <img src={logo} alt="Podgląd aplikacji finansowej"/>
                </div>
            </section>

            <section className="section-two">
                <div className="text-box">
                    <h2></h2>
                    <p>
                        Projektowanie stron to dziś nie tylko techniczna umiejętność – to sztuka łączenia estetyki,
                        funkcjonalności i strategii marki w jednym miejscu. Jako programista i twórca stron
                        internetowych, wiem, jak ważne jest, by Twoja strona nie tylko wyglądała świetnie, ale też
                        działała szybko, intuicyjnie i skutecznie budowała zaufanie do Twojej marki.
                    </p>
                </div>
                <div>
                    <img className='ai'
                         src={roboty}
                         alt=""
                    />
                </div>
            </section>







            <section className="section-three">
                <div className='funkcje'>
                    <img className='ai' src={funkcje} alt=''/>
                    <h1>FUNKCJE, I TUTAJ ZACZYNA SIĘ WSZYSTKO !</h1>
                </div>
                <div className="features-box">
                    <div className="features-list">
                        <div className="feature-item">
                            <i>👤</i>
                            <div>
                                <h3>Przyjazny dla użytkownika</h3>
                                <p>Intuicyjna nawigacja i przemyślana struktura
                                    Twoja strona będzie zaprojektowana z myślą o odbiorcy
                                    tak, aby każdy użytkownik szybko i łatwo znalazł to, czego szuka. Przejrzysty układ,
                                    czytelne przyciski i prosty dostęp do informacji sprawią, że Twoi klienci poczują
                                    się na niej jak w domu.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <i>⚙️</i>
                            <div>
                                <h3>Płynna integracja</h3>
                                <p>Strona gotowa na Twoje potrzeby
                                    Niezależnie od tego, czy chcesz dodać formularz kontaktowy,
                                    połączyć stronę z mediami społecznościowymi czy podpiąć system rezerwacji
                                    zapewnię Ci płynne i bezproblemowe integracje.
                                    Twoja strona będzie współpracować ze wszystkim, czego potrzebujesz, bez zbędnych
                                    problemów i opóźnień.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <i>🛡️</i>
                            <div>
                                <h3>Bezpieczne i niezawodne</h3>
                                <p>Nowoczesne technologie = Twoje bezpieczeństwo
                                    Tworzę strony oparte na najnowszych technologiach (HTML5, SCSS,
                                    JavaScript, React), które są szybkie, stabilne i odporne na błędy. Dbam o
                                    solidne podstawy, zabezpieczenia i regularne aktualizacje,
                                    aby Twoja witryna działała bez przerw i zapewniała bezpieczeństwo Twoim
                                    klientom.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-four">

                {selectedPhoto && (
                    <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
                        <img src={selectedPhoto} alt="Powiększone zdjęcie" className="modal-photo" />
                    </div>
                )}

                <h2>Opinie</h2>

                <div className="testimonials">
                    {opinie.map(({name, avatar, text, photos}, index) => (
                        <div className="testimonial" key={index}>
                            <img src={avatar} alt={name} className="avatar"/>
                            <strong>{name}</strong>
                            <p>{text}</p>
                            <div className="client-photos">
                                {photos.map((photo, idx) => (
                                    <a href={photo} target="_blank" rel="noopener noreferrer" key={idx}>
                                        <img
                                            src={photo}
                                            alt={`Zdjęcie klienta ${idx + 1}`}
                                            className="client-photo"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="add-review">
                    <h3>Dodaj swoją opinię</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Twoje imię"
                            value={newReview.name}
                            onChange={(e) =>
                                setNewReview({...newReview, name: e.target.value})
                            }
                            required
                        />
                        <textarea
                            placeholder="Twoja opinia"
                            value={newReview.text}
                            onChange={(e) =>
                                setNewReview({...newReview, text: e.target.value})
                            }
                            required
                        ></textarea>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handlePhotoUpload}
                        />
                        <button type="submit">Dodaj opinię</button>
                    </form>
                </div>
            </section>






            <section className="section-five">
                <div style={{maxWidth: "50%"}}>
                    <h2>🤝 Poznaj twórce</h2>
                    <p>
                        Za każdą dobrze zaprojektowaną stroną stoi ktoś, kto nie tylko zna technologię, ale też rozumie ludzi.
                        Nazywam się Dawid Grochowski i tworzę strony internetowe, które są proste w obsłudze, nowoczesne i skrojone na miarę Twoich potrzeb.

                        Moja praca łączy techniczną precyzję z kreatywnym podejściem. Projektuję witryny, które nie tylko wyglądają świetnie, ale także działają szybko, płynnie integrują się z innymi narzędziami i zapewniają bezpieczeństwo Twoim użytkownikom.

                        Każdy projekt to dla mnie osobna historia – dlatego podchodzę do tworzenia stron z pasją, zaangażowaniem i szacunkiem dla Twojej wizji.
                        Wierzę, że dobra współpraca zaczyna się od rozmowy – poznajmy się i stwórzmy razem coś wyjątkowego!
                    </p>
                </div>
                <div>
                    <img
                        src={twórca}
                        alt="Zespół przedstawiony na ekranie laptopa"
                        style={{borderRadius: "20px", maxWidth: "300px"}}
                    />
                </div>
            </section>

            <section className="section-six" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "radial-gradient(circle at bottom left, #ff9900, #000), radial-gradient(circle at top right, #1e90ff, #000)",
                borderRadius: "30px",
                padding: "40px",
                color: "white"
            }}>
                <div className="social-contact">
                    <div className="social">
                        <strong>Social</strong>
                        <br/>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <FaFacebook/>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <FaInstagram/>
                        </a>
                    </div>

                    <div className="contact">
                        <strong>Kontakt</strong>
                        <br/>
                        <p>
                            <FaEnvelope className="contact-icon"/>
                            <a
                                href="dgrochowsk@gmail.com"
                                className="contact-link"
                            >
                                dgrochowsk@gmail.com
                            </a>
                        </p>
                        <p>
                            <FaPhone className="contact-icon"/>
                            <a
                                href="tel:+48516459508"
                                className="contact-link"
                            >
                                +48 516 459 508
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
);
};
export default App
