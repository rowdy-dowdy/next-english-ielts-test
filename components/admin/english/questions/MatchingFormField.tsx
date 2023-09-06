"use client"

import { v4 } from "uuid"
import { QuestionState } from "../PassageFormField"
import QuestionFormField from "../QuestionFormField"

const MatchingFormField = ({
  data, updateData
}: {
  data: QuestionState[]
  updateData: (data: QuestionState[]) => void
}) => {

  const handelUpdate = (value: string, id: string, type: 'questionName' | 'answer') => {
    const newData: QuestionState[] = data.map(v => {
      if (v.id == id) {
        if (type == 'questionName') {
          return {...v, questionName: value}
        }
        
        return {
          ...v, 
          answer: v.answer ? {
            ...v.answer,
            answerName: value
          } : { id: v4(), answerName: value }
        }
      }
      return v
    })

    updateData(newData)
  }
  
  return (
    <QuestionFormField data={data} updateData={updateData} renderItem={(question) =>
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2 mb-4">
          <p className="text-xs font-semibold mb-1.5 capitalize">
            suggestion <span className="text-red-600">*</span>
          </p>
          <div className="border rounded focus-within:ring-2 ring-blue-500 bg-white">
            <input type="text" value={question.questionName || ''} onChange={(e) => handelUpdate(e.target.value, question.id, "questionName")} className="w-full px-4 py-2" placeholder="suggestion" required={true} />
          </div>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <p className="text-xs font-semibold mb-1.5 capitalize">
            answer <span className="text-red-600">*</span>
          </p>
          <div className="border rounded focus-within:ring-2 ring-blue-500 bg-white">
            <input type="text" value={question.answer?.answerName} onChange={(e) => handelUpdate(e.target.value, question.id, "answer")} className="w-full px-4 py-2" placeholder="canal" required={true} />
          </div>
        </div>
      </div>
    } />
  )
}

export default MatchingFormField