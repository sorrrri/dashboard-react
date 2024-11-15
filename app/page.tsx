import '/styles/main.scss';

export default function Home() {
  return (
    <div className="container">
        <header>
            <ul>
                <li className="language">
                    <small className="lang lang-en" data-lang-type="en">EN</small>
                    <small className="lang lang-kr" data-lang-type="ko">KR</small>
                </li>
            </ul>
        </header>
        <div className="content">
            <div className="arrow arrow--top">
                <svg xmlns="http://www.w3.org/2000/svg" width="270.11" height="649.9" overflow="visible">
                    <g className="item-to bounce-1">
                        <path className="geo-arrow draw-in" d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"/>
                    </g>
                    <circle className="geo-arrow item-to bounce-2" cx="194.65" cy="69.54" r="7.96"/>
                    <circle className="geo-arrow draw-in" cx="194.65" cy="39.5" r="7.96"/>
                    <circle className="geo-arrow item-to bounce-3" cx="194.65" cy="9.46" r="7.96"/>
                    <g className="geo-arrow item-to bounce-2">
                        <path className="st0 draw-in" d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552"/>
                    </g>
                </svg>
            </div>
            <div className="arrow arrow--bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="31.35" height="649.9" overflow="visible">
                    <g className="item-to bounce-1">
                        <circle className="geo-arrow item-to bounce-3" cx="15.5" cy="580.36" r="7.96"/>
                        <circle className="geo-arrow draw-in" cx="15.5" cy="610.4" r="7.96"/>
                        <circle className="geo-arrow item-to bounce-2" cx="15.5" cy="640.44" r="7.96"/>
                        <g className="item-to bounce-2">
                            <path className="geo-arrow draw-in" d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552"/>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="main">
                <div className="main__text-wrapper">
                    <h1 className="main__title">Drug-induced QT prolongation Surveillance system</h1>
                    <p>
                        Ajou Drug Report is a system enables us to find out which drug can induces QT prolongation. Using clinical Big-Data from Ajou university hospital, this can show harmfulness of drug to heart objectively, so that the medical diagnosis can be made more precisely.
                    </p>
                    <p>
                        In this system, some drug’s effect to heart ion-channel was calculated using latest machine learning algorithm and measurements in laboratory. And it can connect single ion-channel research to medical result.
                    </p>
                    <a className="button-main" href="/dashboard">get started</a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="dotted-circle" width="352" height="352"
                        overflow="visible">
                        <circle cx="176" cy="176" r="174" fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10"
                                strokeDasharray="12.921,11.9271"/>
                    </svg>
                </div>

                <ul className="partners">
                    <li className="logo-mfds"></li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                        </svg>
                    </li>
                    <li className="logo-kit"></li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                        </svg>
                    </li>
                    <li className="logo-cmi"></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
