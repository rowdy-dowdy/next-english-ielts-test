"use client"

import { QuizState } from "@/app/(web)/practice/[slug]/page";
import { File, GroupQuestion, Question } from "@prisma/client";
import Image from "next/image";
import { groupQuestionState } from "../content/PagePractice";

const Diagram = ({
  groupQuestion, answer
}: {
  groupQuestion: groupQuestionState,
  answer: {
    questionId: string;
    answer: string;
  }[]
}) => {

  return (
    <div className="flex -mx-2 rounded-xl px-4 py-3 bg-white">
      <div className="flex-none w-96 px-2 mb-4">
        { groupQuestion.image?.url
          ? <Image src={groupQuestion.image.url} 
            alt="group question image" 
            width={groupQuestion.image.naturalWidth || 500} 
            height={groupQuestion.image.naturalHeight || 500} 
            className="w-full" 
            />
          : null
        }
      </div>

      <div className="flex-grow min-w-0 px-2 mb-4">
        <div className="flex flex-col space-y-10">
          { groupQuestion.questions.map(v => {
            const firstText = v.questionName?.split("__")[0]
            const lastText = v.questionName?.split("__")[1]

            return <div className="flex flex-wrap items-center space-x-3">
              { firstText ? <span>{firstText}</span> : null }

              <div className="question">
                <span>{v.number}</span>
                <span className="icon w-4 h-4 !text-lg">arrow_right_alt</span>
                <div className="input" contentEditable dangerouslySetInnerHTML={{__html : answer.find(v2 => v2.questionId == v.id)?.answer || ''}}></div>
              </div>

              {lastText ? <span>{lastText}</span> : null }
            </div>
          }) }
        </div>
      </div>
    </div>
  )
}

export default Diagram