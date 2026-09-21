function Header() {
  return (
    <header className='bg-(--blue-text)'>
      <picture>
        <source
          media='(min-width: 640px)'
          srcSet='/images/bg-header-desktop.svg'
        />
        <img
          className='block w-full h-35 object-cover pointer-events-none'
          src='/images/bg-header-mobile.svg'
          alt=''
        />
      </picture>
    </header>
  );
}

export default Header;
