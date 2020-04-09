export interface Student {
  id: number
  nome: string
  idCurso: number
}

export interface Teacher {
  id: number
  nome: string
  grau: string
  idDepartamento: number
}

export interface Course {
  id: number
  nome: string
  local: string | null
  tipo: string
  coordenador: string
  idCentro: number
}

export interface Class {
  id: string
  nome: string
  turma: string
  professor: string  | null
  horario: string  | null
  idCurso: number
}

export interface Center {
  id: number
  nome: string
}

export interface Department {
  id: number
  nome: string
}
