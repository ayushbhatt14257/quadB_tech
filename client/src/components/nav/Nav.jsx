import React,{useState, } from 'react'
import './nav.css'
import IMG from '../../assests/logo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TelegramIcon from '@mui/icons-material/Telegram';
import Switch, { switchClasses } from '@mui/joy/Switch';


const Nav = () => {
  const [checked, setChecked] = useState(false);

  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const className = darkMode ? 'dark' : 'light';
  //   document.documentElement.className = className;
  // }, [darkMode]);

  return (
    <>
      <header className='nav_header'>
        <div className="container nav_container">

          <div className="nav_left">
            <div className="nav_img">
              <img src={IMG} alt="img" />
            </div>
          </div>

          <div className="nav_middle">
            <div className="nav_cart">
              <p>INR</p>
              <ArrowDropDownIcon />
            </div>
            <div className="nav_cart">
              <p>BTC</p>
              <ArrowDropDownIcon />
            </div>
            <div className="nav_cart">
              <p>BUY BTC</p>
              
            </div>
          </div>

          <div className="nav_right">
            <div className="nav_telegram">
              <TelegramIcon />
              <p>Connect Telegram</p>
            </div>
            <div className="switch">
              <Switch 
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                sx={(theme) => ({
                  '--Switch-thumbShadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
                  '--Switch-thumbSize': '27px',
                  '--Switch-thumbBackground': "var(--color-primary)",
                  '--Switch-trackWidth': '51px',
                  '--Switch-trackHeight': '31px',
                  '--Switch-trackBackground': theme.vars.palette.background.level3,
                  [`& .${switchClasses.thumb}`]: {
                    transition: 'width 0.2s, left 0.2s',
                  },
                  '&:hover': {
                    '--Switch-trackBackground': theme.vars.palette.background.level3,
                    '--Switch-thumbBackground': "var(--color-primary)",
                  },
                  '&:active': {
                    '--Switch-thumbWidth': '32px',
                  },
                  [`&.${switchClasses.checked}`]: {
                    '--Switch-trackBackground': 'var(--color-bg1)',
                    '&:hover': {
                      '--Switch-trackBackground': 'var(--color-bg1)',
                    },
                  },
                })}
              />
            </div>
          </div>

        </div>
      </header>
    </>
  )
}

export default Nav