import "/styles/main.scss";

const Header = () => {
  return (
    <header>
      <ul>
        <li className="language">
          <small className="lang lang-en" data-lang-type="en">
            EN
          </small>
          <small className="lang lang-kr" data-lang-type="ko">
            KR
          </small>
        </li>
      </ul>
    </header>
  );
};

export default Header;
