import './styles.scss';
import Link from 'next/link';
import SvgUser from '../../assets/users-solid.svg';
import SvgBagMoney from '../../assets/sack-dollar-solid.svg';
import SvgLogo from '../../assets/logo.svg';
import SvgLogoSymbol from '../../assets/logo-symbol.svg';

export default function Sidebar() {
  const location = window?.location.pathname.replace('/', '');

  const changeSelectedPageStyle = (pageSelected: string) => {
    if (pageSelected === location) return 'selected';
    else 'notSelected';
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <SvgLogo />
      </div>
      <Link href="/transactions" className="link" onClick={() => {}}>
        <button className={changeSelectedPageStyle('transactions')}>
          <SvgBagMoney className="sidebarSVG" /> Transações
        </button>
      </Link>
      <Link href="/users" className="link">
        <button className={changeSelectedPageStyle('users')}>
          <SvgUser className="sidebarSVG" /> Usuarios
        </button>
      </Link>
    </div>
  );
}
