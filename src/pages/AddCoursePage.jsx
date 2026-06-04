import { useNavigate } from 'react-router-dom'
import CourseForm from '@/components/courses/CourseForm'
import { STORAGE_KEY } from '@/constants'

function AddCoursePage() {
  const navigate = useNavigate()

  const agregarCurso = (nuevoCurso) => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const cursos = saved ? JSON.parse(saved) : []
    const updated = [...cursos, { ...nuevoCurso, id: Date.now(), activo: true }]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    navigate('/')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brand-700 mb-8">Nuevo Curso</h1>
      <CourseForm onAgregar={agregarCurso} />
    </div>
  )
}

export default AddCoursePage
