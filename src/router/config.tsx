import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import BlogPage from '../pages/blog/page';
import ContactoPage from '../pages/contacto/page';
import AuxilioJudicialPage from '../pages/oposiciones/auxilio-judicial/page';
import TramitacionProcesalPage from '../pages/oposiciones/tramitacion-procesal/page';
import GestionProcesalPage from '../pages/oposiciones/gestion-procesal/page';
import NotFound from '../pages/NotFound';
import ArticlePage from '../pages/blog/article/page';
import TemarioGestionProcesalPage from '../pages/oposiciones/gestion-procesal/temario/page';
import GestionProcesal2024Page from '../pages/blog/gestion-procesal-2024/page';
import DigitalizacionJusticia2024Page from '../pages/blog/digitalizacion-justicia-2024/page';
import TemarioTramitacionProcesalPage from '../pages/oposiciones/tramitacion-procesal/temario/page';
import TramitacionProcesal2024Page from '../pages/blog/tramitacion-procesal-2024/page';
import NuevasTecnologiasTramitacion2024Page from '../pages/blog/nuevas-tecnologias-tramitacion-2024/page';
import TemarioAuxilioJudicialPage from '../pages/oposiciones/auxilio-judicial/temario/page';
import AuxilioJudicial2024Page from '../pages/blog/auxilio-judicial-2024/page';
import PreparacionAuxilioJudicial2024Page from '../pages/blog/preparacion-auxilio-judicial-2024/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/contacto',
    element: <ContactoPage />,
  },
  {
    path: '/oposiciones/auxilio-judicial',
    element: <AuxilioJudicialPage />,
  },
  {
    path: '/oposiciones/auxilio-judicial/temario',
    element: <TemarioAuxilioJudicialPage />,
  },
  {
    path: '/oposiciones/tramitacion-procesal',
    element: <TramitacionProcesalPage />,
  },
  {
    path: '/oposiciones/tramitacion-procesal/temario',
    element: <TemarioTramitacionProcesalPage />,
  },
  {
    path: '/oposiciones/gestion-procesal',
    element: <GestionProcesalPage />,
  },
  {
    path: '/oposiciones/gestion-procesal/temario',
    element: <TemarioGestionProcesalPage />
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/blog/article/:id',
    element: <ArticlePage />
  },
  {
    path: '/blog/gestion-procesal-2024',
    element: <GestionProcesal2024Page />
  },
  {
    path: '/blog/digitalizacion-justicia-2024',
    element: <DigitalizacionJusticia2024Page />
  },
  {
    path: '/blog/tramitacion-procesal-2024',
    element: <TramitacionProcesal2024Page />
  },
  {
    path: '/blog/nuevas-tecnologias-tramitacion-2024',
    element: <NuevasTecnologiasTramitacion2024Page />
  },
  {
    path: '/blog/auxilio-judicial-2024',
    element: <AuxilioJudicial2024Page />
  },
  {
    path: '/blog/preparacion-auxilio-judicial-2024',
    element: <PreparacionAuxilioJudicial2024Page />
  },
];

export default routes;