"use client"

import QuestionFormField from "../QuestionFormField"

const MatchingFormField = () => {
  return (
    <QuestionFormField label="Nhóm câu hỏi" renderItem={(index) =>
      <div className="flex flex-wrap -mx-2">
        <div className="w-1/2 px-2 mb-4">
          <p className="text-xs font-semibold mb-1.5 capitalize">
            suggestion <span className="text-red-600">*</span>
          </p>
          <div className="border rounded focus-within:ring-2 ring-blue-600 bg-white">
            <input type="text" className="w-full px-4 py-2" placeholder="suggestion" />
          </div>
        </div>

        <div className="w-1/2 px-2 mb-4">
          <p className="text-xs font-semibold mb-1.5 capitalize">
            answer <span className="text-red-600">*</span>
          </p>
          <div className="border rounded focus-within:ring-2 ring-blue-600 bg-white">
            <input type="text" className="w-full px-4 py-2" placeholder="canal" />
          </div>
        </div>
      </div>
    } />
  )
}

export default MatchingFormField