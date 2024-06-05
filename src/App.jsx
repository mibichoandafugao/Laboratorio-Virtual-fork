//? React Imports
import { Routes, Route } from 'react-router-dom'
//? Components Imports
import { Dielectric } from './labs/dielectric/Dielectric'
import { Login } from './pages/General/login/Login'
import { PageNotFound } from './pages/General/pagenotfound/PageNotFound'
import { IndexPage } from './pages/General/overview/IndexPage'
import { AuthProvider } from './pages/General/login/AuthProvider'
import PrivateRoute from './pages/General/login/PrivateRoute'
import { Catalogo } from './pages/General/catalogo/Catalogo'
import { Subjects } from './pages/Estudiantes/materias/Subjects'
import { Activities } from './pages/Estudiantes/actividades/Activities'
import { Ingreso } from './pages/Administradores/IngresoUsuarios/Ingreso'
import { PruebaImagen } from './pages/General/PruebaImagen'
import { ActivitiesOverview } from './pages/Estudiantes/activitiesOverview/ActivitiesOverview'
import { MateriasOverview } from './pages/Estudiantes/materiasoverview/MateriasOverview'
//? CSS Imports
import './App.css'
//? Store Imports
import { useInfoTasksStore } from './store/infoTasksStore'
import { useInfoSubjectsStore } from './store/infoSubjectsStore'
import { CreateTask } from './pages/Docentes/addActivities/CreateTask'
import { UpdateUser } from './pages/General/updateUser/UpdateUser'
import { HealtCheck } from './pages/General/healtcheck/HealtCheck'

function App() {
  const useStructure = useInfoTasksStore(state => state.structure)
  const structureSubjects = useInfoSubjectsStore(state => state.structureSubjects)

  return (
    <AuthProvider>
      <Routes>
        {/* Rutas Generales de la Aplicación */}
        <Route path='/' element={<IndexPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/imagen' element={<PruebaImagen />} />
        <Route path='/healtcheck' element={<HealtCheck />} />
        <Route element={<PrivateRoute />}>
          {/* Rutas Estudiantes */}
          <Route path='/materias/' element={<Subjects />} />
          <Route path='/actividades' element={<Activities />} />
          <Route path='/Activitiesoverview/:index' element={<ActivitiesOverview data={useStructure} />} />
          <Route path='/Materiasoverview/:id' element={<MateriasOverview datos={structureSubjects} />} />
          {/* Rutas Docentes */}
          <Route path='/newTask' element={<CreateTask />} />
          {/* Rutas Administradores */}

          {/* Rutas UsuariosExternos */}

          {/* Rutas Generales */}
          <Route path='/updateUser' element={<UpdateUser />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/dielectric' element={<Dielectric />} />
          <Route path='/ingreso' element={<Ingreso />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  )
}
export default App
