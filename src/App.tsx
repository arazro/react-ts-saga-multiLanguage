import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { ApplicationState } from './redux';
import { I18nProvider } from '@lingui/react';
import { colors, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import GlobalStyles from './assets/style/GlobalStyles';
import Routes from './routes';
import catalogEn from './assets/locales/en/messages';
import catalogFa from './assets/locales/fa/messages';
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import typography from './assets/style/typography';
import typographyfa from './assets/style/typographyfa';
import { ToastContainer } from 'react-toastify';



interface AppProps {
  history: History
}

const App: React.FC<AppProps> = ({  history }) => {

  const language = useSelector((state: ApplicationState) => state.config.language);
  const darkMode = useSelector((state: ApplicationState) => state.config.darkMode);
  const catalogs = { en: catalogEn, fa: catalogFa };
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


 
  let theme = createMuiTheme({
    palette: {
      type: darkMode==="dark"? 'dark' : 'light',
      primary: {
        main: darkMode==="dark"? colors.blue[500] :'#2962ff'
      },
      secondary: {
        main: darkMode==="dark"? '#76ff03' :'#ff3d00'
      },
    },
    typography:language==="en"? typography:typographyfa,
    direction:language==="en"? "ltr":"rtl"
  });

  useEffect(() => {
    theme = createMuiTheme({
      palette: {
        type: darkMode==="dark"? 'dark' : 'light',
        primary: {
          main: darkMode==="dark"? colors.blue[500] :'#01579b'
        },
        secondary: {
          main: darkMode==="dark"? '#76ff03' :'#ff3d00'
        },
      },
      typography:language==="en"? typography:typographyfa,
      direction:language==="en"? "ltr":"rtl"
    });
   
  }, [language])

  useEffect(() => {
    theme = createMuiTheme({
      palette: {
        type: darkMode==="dark"? 'dark' : 'light',
        primary: {
          main: darkMode==="dark"? colors.blue[500] :'#01579b'
        },
        secondary: {
          main: darkMode==="dark"? '#76ff03' :'#ff3d00'
        },
      },
      typography:language==="en"? typography:typographyfa,
      direction:language==="en"? "ltr":"rtl"
    });
   
  }, [darkMode])
 
  



  return (
      <ConnectedRouter history={history}>
        <I18nProvider language={language} catalogs={catalogs}>
        <StylesProvider jss={jss}>
          <MuiThemeProvider theme={theme}>
            <GlobalStyles />
            <ToastContainer />
            <Routes />
          </MuiThemeProvider>
          </StylesProvider>
        </I18nProvider>
      </ConnectedRouter>
  )
}


export default App
