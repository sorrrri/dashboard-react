"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "/styles/base.scss";
import "/styles/style.scss";

const SubHeader = () => {
  const pathname = usePathname();
  const getLinkClass = (path: string) => {
    return pathname === path ? "active" : "";
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link href="/">DQTS</Link>
        </div>
        <ul>
          <li className="language">
            <small className="lang lang-en" data-lang-type="en">
              EN
            </small>
            <small className="lang lang-kr" data-lang-type="ko">
              KR
            </small>
          </li>
          <li className="dark-light">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </li>
        </ul>
      </header>
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className={getLinkClass("/dashboard/")}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className={getLinkClass("/standardECG/")}>
          <Link href="/standardECG">Standard 12-lead ECG</Link>
        </li>
        <li className={getLinkClass("/icuECG/")}>
          <Link href="/icuECG">ICU continuous ECG</Link>
        </li>
        <li className={getLinkClass("/patientSpecific/")}>
          <Link href="/patientSpecific">Patient Specific</Link>
        </li>
        <li className={getLinkClass("/preclinical/")}>
          <Link href="/preclinical">Preclinical risk evaluation</Link>
        </li>
      </ul>
    </>
  );
};

export default SubHeader;
