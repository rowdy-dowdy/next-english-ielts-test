import PagePractice from "@/components/web/content/PagePractice"
import db from "@/lib/admin/prismadb"
import { File, GroupQuestion, Passage, Question, Quiz } from "@prisma/client"
import { redirect } from "next/navigation"

export type QuizState = Quiz & {
  passages: (Passage & {
    groupQuestions: (GroupQuestion & {
      image: File | null,
      questions: Question[]
    })[]
  })[]
}

const getData = async (slug: string) => {
  const data: QuizState | null = await db.quiz.findFirst({
    where: {
      slug
    },
    include: {
      passages: {
        include: {
          groupQuestions: {
            include: {
              image: true,
              questions: true
            }
          }
        }
      }
    }
  })

  return data
}

const page = async ({
  params: { slug }
}: {
  params: { slug: string } 
}) => {

  const quiz = await getData(slug)

  if (!quiz) {
    redirect('/')
  }

  return (
    <PagePractice quiz={quiz} />
  )
}

export default page