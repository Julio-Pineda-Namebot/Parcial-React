import { useState } from 'react'
import CourseList from '@/components/courses/CourseList'
import { STORAGE_KEY } from '@/constants'

function loadFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : []
}

function saveToStorage(cursos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cursos))
}

function HomePage() {
  const [cursos, setCursos] = useState(loadFromStorage)

  const eliminarCurso = (id) => {
    const updated = cursos.filter((c) => c.id !== id)
    setCursos(updated)
    saveToStorage(updated)
  }

  const toggleActivo = (id) => {
    const updated = cursos.map((c) =>
      c.id === id ? { ...c, activo: !c.activo } : c
    )
    setCursos(updated)
    saveToStorage(updated)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-brand-700">Cursos Disponibles</h1>
      </div>

      <CourseList
        cursos={cursos}
        onEliminar={eliminarCurso}
        onToggleActivo={toggleActivo}
      />
    </div>
  )
}

export default HomePage
